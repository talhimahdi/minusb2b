import React, { useEffect } from "react";
import Cover from "../components/Cover";
import RegisterForm from "../components/RegisterForm";
import Infos from "../components/Infos";
import localStorageX from "../configs/localStorage";
import { useRouter } from "next/router";
import { useAuth } from "../RestHelper/useAuth";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    if (localStorageX.isConnected()) {
      router.push("/products");
    } else {
      router.push("/connexion");
    }
  }, []);

  return (
    <>
      {/* <Cover />
      <Infos />
      <RegisterForm /> */}
    </>
  );
}
