// Hook (use-auth.js)
import React, { useState, useContext, createContext, useEffect } from "react";
import { Urls, salt } from "../configs/configs";
import localStorageX from "../configs/localStorage";
import { useRouter } from "next/router";

const AuthContext = createContext();
// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export function AuthProvider({ children }) {
  const auth = useAuthProvider();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}
// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
  return useContext(AuthContext);
};
// Provider hook that creates auth object and handles state
function useAuthProvider() {
  const router = useRouter();
  const [user, setUser] = useState({});
  const [cart, setCart] = useState({});
  const [offers, setOffers] = useState([]);
  const [frontContent, setFrontContent] = useState([]);
  const [loginPopup, setLoginPopup] = useState([]);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [loginPopupShownThisSession, setLoginPopupShownThisSession] = useState(false);

  const [openCart, setOpenCart] = useState(false);

  useEffect(() => {
    // get static content
    getFrontContent();
    getLoginPopup();

    if (localStorageX.isConnected()) {
      setUser(localStorageX.get("local_data").customer);
    } else {
      const withoutConnexion = [
        "/404",
        "/connexion",
        "/register",
        "/page-attente",
        "/forget-password",
        "/recovery-password",
        "/conditions-generales",
        "/catalogue",
      ];
      if (!withoutConnexion.includes(router?.pathname))
        router.push("/connexion");
    }
  }, []);

  // Debug effect to monitor showLoginPopup state changes
  useEffect(() => {
    console.log("showLoginPopup state changed to:", showLoginPopup);
  }, [showLoginPopup]);

  // Debug effect to monitor loginPopupShownThisSession state changes
  useEffect(() => {
    console.log("loginPopupShownThisSession state changed to:", loginPopupShownThisSession);
  }, [loginPopupShownThisSession]);

  // Debug effect to monitor user state changes
  useEffect(() => {
    console.log("user state changed to:", user);
  }, [user]);

  // Effect to check if popup should be shown when popup data is loaded OR user changes
  useEffect(() => {
    const shouldShowPopup = localStorage.getItem('shouldShowLoginPopup');
    console.log("Checking popup conditions...");
    console.log("user:", user);
    console.log("loginPopup:", loginPopup);
    console.log("shouldShowPopup from localStorage:", shouldShowPopup);
    console.log("loginPopupShownThisSession:", loginPopupShownThisSession);
    
    if (shouldShowPopup === 'true' && !loginPopupShownThisSession && loginPopup && loginPopup.popup_enabled === '1' && user?.id) {
      console.log("All conditions met, showing popup");
      setShowLoginPopup(true);
      localStorage.removeItem('shouldShowLoginPopup');
    }
  }, [loginPopup, loginPopupShownThisSession, user]);

  const getFrontContent = async () => {
    var requestOptions = {
      method: "GET",
    };

    return await fetch("/api/frontContent", requestOptions)
      .then((response) => response?.json())
      .then((response) => {
        if (response?.results?.succes && response?.results?.code === 200) {
          setFrontContent(response?.results?.content);
        }
      })
      .catch((error) => console.log("error", error));
  };

  const getLoginPopup = async () => {
    var requestOptions = {
      method: "GET",
    };

    return await fetch("/api/loginPopup", requestOptions)
      .then((response) => response?.json())
      .then((response) => {
        if (response?.results?.succes && response?.results?.code === 200) {
          setLoginPopup(response?.results?.content);
          console.log("loginPopup data loaded:", response?.results?.content);
        }
      })
      .catch((error) => console.log("error", error));
  };

  const login = async ({ email, password }) => {
    if (email != "" && password != "") {
      var requestOptions = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      };

      return await fetch("/api/login", requestOptions)
        .then((response) => response?.json())
        .then((response) => {
          if (response?.results?.succes && response?.results?.code === 200) {
            setUser(response?.results?.data?.customer);

            localStorageX.add("local_data", response?.results?.data);
            
            // Mark that we should show popup after successful login
            if (!loginPopupShownThisSession) {
              localStorage.setItem('shouldShowLoginPopup', 'true');
              
              // If popup data is already loaded, show it immediately
              if (loginPopup && loginPopup.popup_enabled === '1') {
                console.log("Popup data already available, showing immediately");
                setShowLoginPopup(true);
                localStorage.removeItem('shouldShowLoginPopup');
              }
            }
            
            // Small delay to ensure state updates are processed before redirect
            setTimeout(() => {
              router.push("/products");
            }, 100);
          } else if (response?.results?.newactive) {
            router.push("/page-attente");
          } else {
            console.log("Error: " + response?.results?.message);
          }
          return response?.results;
        })
        .catch((error) => console.log("error", error));
    }
  };

  const getCart = async (cartId) => {
    var requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cartId: cartId }),
    };

    const result = await fetch("/api/cart/get", requestOptions)
      .then((response) => response?.json())
      .then((data) => {
        return data;
      })
      .catch((error) => console.log("error", error));

    if (result?.code == 200 && result?.success && result?.cart) {
      setCart(result?.cart);
      setOffers(result?.offers);
      return true;
    }
    return false;
  };

  const removeProduct = async (idProduct) => {
    var requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cartId: user?.id_cart,
        productId: idProduct,
      }),
    };

    return await fetch("/api/cart/delete", requestOptions)
      .then((response) => response?.json())
      .then((result) => {
        if (result?.code == 200 && result?.succes && result?.cart) {
          setCart(result?.cart);
          return true;
        }
        return false;
      })
      .catch((error) => console.log("error", error));
  };

  const register = ({ email, password }) => {
    return {};
  };

  const logout = () => {
    localStorageX.clear();
    localStorage.removeItem('shouldShowLoginPopup');
    setLoginPopupShownThisSession(false);
    setShowLoginPopup(false);
    router.push("/connexion");
  };

  const editLocalStorage = (data) => {
    localStorageX.edit("local_data", data);
  };

  const markLoginPopupAsShown = () => {
    setShowLoginPopup(false);
    setLoginPopupShownThisSession(true);
  };

  return {
    user,
    setUser,
    getCart,
    setCart,
    removeProduct,
    login,
    register,
    logout,
    cart,
    offers,
    openCart,
    setOpenCart,
    editLocalStorage,
    frontContent,
    loginPopup,
    showLoginPopup,
    markLoginPopupAsShown,
  };
}
