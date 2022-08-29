import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ActionCard from "../components/ActionCard";
import Cover from "../components/Cover";
import Infos from "../components/Infos";
import { useAuth } from "../RestHelper/useAuth";
import RegisterForm from "../components/RegisterForm";

export default function Connexion() {
  const router = useRouter();
  const auth = useAuth();
  const [renderUi, setRenderUi] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (auth?.getUserLocal()) {
      router.push("/products");
    } else setRenderUi(true);
  }, []);

  const onLogin = async ({ email, password }) => {
    const result = await auth?.login({ email, password });

    setErrorMessage(result?.message);
    console.log(result);
  };

  return (
    <div>
      {renderUi ? (
        <div className="max-w-7xl mx-auto mt-10 py-5 px-4 sm:px-6 lg:px-8">
            <Cover />
            <Infos />
            <RegisterForm />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
