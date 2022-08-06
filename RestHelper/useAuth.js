// Hook (use-auth.js)
import React, { useState, useContext, createContext } from "react";
import { Urls } from "../configs/configs";

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
  const [user, setUser] = useState(null);

  const login = async ({ email, password }) => {
    if (email != "" && password != "") {
      var requestOptions = {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: JSON.stringify({ email, password }),
      };

      await fetch(Urls.login, requestOptions)
        .then((response) => response?.json())
        .then((result) => {
          if (result?.success && result?.code == 200) {
            setUser(result?.psdata);
            if (typeof window !== "undefined") {
              localStorage.setItem("user", JSON.stringify(result?.psdata));
              sessionStorage.setItem(
                "item_key",
                JSON.stringify(result?.psdata)
              );
            }
            console.log(result);
          } else {
            console.log("Error: " + result.psdata);
          }
        })
        .catch((error) => console.log("error", error));
    }

    return { ...user };
  };

  const register = ({ email, password }) => {
    return {};
  };
  const logout = () => {
    return {};
  };
  // Return the user object and auth methods
  return {
    user,
    login,
    register,
    logout,
  };
}
