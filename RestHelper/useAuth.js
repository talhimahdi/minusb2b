// Hook (use-auth.js)
import React, { useState, useContext, createContext, useEffect } from "react";
import { Urls, salt } from "../configs/configs";
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
  const [isLoaded, setIsLoaded] = useState(false);

  const login = async ({ email, password }) => {
    if (email != "" && password != "") {
      var requestOptions = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          email: email,
          password: password,
        }),
      };

      return await fetch(Urls.login, requestOptions)
        .then((response) => response?.json())
        .then((response) => {
          if (response?.results?.succes && response?.results?.code === 200) {
            setUser(response?.results?.data?.customer);
            // setCart(response?.results?.data?.cart);
            if (typeof window !== "undefined") {
              localStorage.setItem(
                "local_data",
                encrypt(response?.results?.data, salt)
              );
            }
            router.push("/products");
          } else {
            console.log("Error: " + response?.results?.message);
          }
          return response?.results;
        })
        .catch((error) => console.log("error", error));
    }

    // return { ...user, ...cart };
  };

  const getCart = async (cartId) => {
    var requestOptions = {
      method: "GET",
    };

    const result = await fetch(Urls.getCart(cartId), requestOptions)
      .then((response) => response?.json())
      .then((data) => {
        return data;
      })
      .catch((error) => console.log("error", error));

    if (result?.code == 200 && result?.success && result?.cart) {
      setCart(result?.cart);
      return true;
    }
    return false;
  };

  const register = ({ email, password }) => {
    return {};
  };
  const logout = () => {
    return {};
  };

  const getUserLocal = () => {
    if (typeof window !== "undefined" && localStorage.length > 0) {
      const localData = decrypt(localStorage.getItem("local_data"), salt);
      setUser(localData?.customer);
      return localData;
    }
    return false;
  };

  // Return the user object and auth methods
  return {
    user,
    getUserLocal,
    getCart,
    login,
    register,
    logout,
    cart,
    setCart,
    setUser,
    isLoaded,
  };
}

function encrypt(o, salt) {
  o = JSON.stringify(o).split("");
  for (var i = 0, l = o.length; i < l; i++)
    if (o[i] == "{") o[i] = "}";
    else if (o[i] == "}") o[i] = "{";
  return encodeURI(salt + o.join(""));
}

function decrypt(o, salt) {
  o = decodeURI(o);
  if (salt && o.indexOf(salt) != 0) return false;
  o = o.substring(salt.length).split("");
  for (var i = 0, l = o.length; i < l; i++)
    if (o[i] == "{") o[i] = "}";
    else if (o[i] == "}") o[i] = "{";
  return JSON.parse(o.join(""));
}
