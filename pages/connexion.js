import React from "react";
import ActionCard from "../components/ActionCard";
import Cover from "../components/Cover";
import Infos from "../components/Infos";
import { useAuth } from "../RestHelper/useAuth";

export default function Connexion() {
  const auth = useAuth();

  const onLogin = ({ email, password }) => {
    auth.login({ email, password });
  };

  if (typeof window !== "undefined") {
    if (sessionStorage.length > 0) {
      // const text = localStorage.getItem("user");
      // console.log(JSON.parse(text.toString()));

      var item_value = JSON.parse(sessionStorage.getItem("item_key"));
      console.log(item_value);
    } else {
      console.log("User not loggedIn!");
    }
  }
  // if (auth?.user) {
  //   console.log(auth.user);
  // } else {
  //   console.log("User not loggedIn!");
  // }

  return (
    <div className="max-w-7xl mx-auto mt-10 py-5 px-4 sm:px-6 lg:px-8">
      <Cover />
      <Infos />
      <div className="mt-5">
        <ActionCard onLogin={onLogin} />
      </div>
    </div>
  );
}
