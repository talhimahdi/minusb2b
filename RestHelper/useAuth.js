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

  useEffect(() => {
    if (localStorageX.isConnected()) {
      setUser(localStorageX.get("local_data").customer);
    } else {
      router.push("/connexion");
    }
  }, []);

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

      // const baseUrl = location.protocol + "//" + location.host;

      return await fetch("/api/login", requestOptions)
        .then((response) => response?.json())
        .then((response) => {
          if (response?.results?.succes && response?.results?.code === 200) {
            setUser(response?.results?.data?.customer);

            localStorageX.add("local_data", response?.results?.data);
            router.push("/products");
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

    const result = await fetch("/api/cart", requestOptions)
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
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        cart_id: user?.id_cart,
        product_id: idProduct,
      }),
    };

    return await fetch(Urls.deleteFromCart, requestOptions)
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
    return {};
  };

  return {
    user,
    getCart,
    setCart,
    removeProduct,
    login,
    register,
    logout,
    cart,
    offers,
  };
}
