import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ActionCard from "../components/ActionCard";
import Cover from "../components/Cover";
import Infos from "../components/Infos";
import { useAuth } from "../RestHelper/useAuth";
import RegisterForm from "../components/RegisterForm";
import { Urls } from "../configs/configs";
import Loader from "../components/Loader";

export default function Register() {
  const router = useRouter();
  const auth = useAuth();
  const [renderUi, setRenderUi] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (auth?.getUserLocal()) {
      router.push("/connexion");
    } else setRenderUi(true);
  }, []);

  const onRegister = async (form) => {
    setLoading(true);
    var requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    };

    const result = await fetch(Urls.register, requestOptions)
      .then((response) => response?.json())
      .then((data) => {
        return data?.results;
      })
      .catch((error) => console.log("error", error));

    if (result?.code == 200 && result?.succes) {
      router.push("/connexion");
    } else {
      setErrorMessage(result?.message);
    }
    setLoading(false);
  };

  // const onLogin = async ({ email, password }) => {
  //   const result = await auth?.login({ email, password });

  //   setErrorMessage(result?.message);
  //   console.log(result);
  // };

  return (
    <div>
      <Loader isVisible={isLoading} />
      {renderUi ? (
        <div className="max-w-7xl mx-auto mt-10 py-5 px-4 sm:px-6 lg:px-8">
          <Cover />
          <Infos />
          <RegisterForm onRegister={onRegister} errorMessage={errorMessage} />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
