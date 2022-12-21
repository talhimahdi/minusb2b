import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ActionCard from "../components/ActionCard";
import Cover from "../components/Cover";
import Infos from "../components/Infos";
import { useAuth } from "../RestHelper/useAuth";
import localStorageX from "../configs/localStorage";
import Link from "next/link";
import SendEmailForgetPassPopup from "../components/SendEmailForgetPassPopup";

export default function RecoveryPassword() {
  const auth = useAuth();
  const router = useRouter();
  const token = router?.query?.token;
  const id_customer = router?.query?.id_customer;
  const reset_token = router?.query?.reset_token;

  const [passwordInput, setPasswordInput] = useState({
    password: "",
    confirmation: "",
  });
  const [isPasswordNotValid, setIsPasswordNotValide] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [popupOpen, setPopupOpen] = useState(false);

  useEffect(() => {
    if (typeof token != "undefined") {
      console.log(token);
      console.log(id_customer);
      console.log(reset_token);
    }
  }, [token]);

  const changePass = async () => {
    setErrorMessage("");
    if (passwordInput.password != passwordInput.confirmation) {
      setIsPasswordNotValide(true);
      return;
    }

    setIsPasswordNotValide(false);
    var requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password: passwordInput.password,
        token: token,
        id_customer: id_customer,
        reset_token: reset_token,
      }),
    };

    const result = await fetch("/api/changeForgetPass", requestOptions)
      .then((response) => response?.json())
      .then((data) => {
        return data;
      })
      .catch((error) => console.log("error", error));

    if (result?.code == 200 && result?.succes) {
      setPopupOpen(true);
    } else {
      setErrorMessage(result?.message);
    }
  };

  return (
    <>
      <SendEmailForgetPassPopup
        open={popupOpen}
        setOpen={setPopupOpen}
        title={"Mot de passe modifié !"}
        message={"Votre mot de passe a été modifié avec succès."}
      />
      <div className="max-w-xl mx-auto mt-10 py-5 px-4 sm:px-6 lg:px-8">
        <div className="pt-6 order-1 md:order-2">
          <div className="flow-root bg-primary px-6 pb-8">
            <div className=" flex flex-col items-center justify-center">
              <h3 className="uppercase mt-8 text-xl text-gray-900 font-londrina text-center">
                Réinitialiser votre mot de passe
              </h3>

              <div className="flex justify-center md:justify-end mt-8 w-full">
                <div className="mt-1 w-full">
                  <label className="block text-sm font-medium text-gray-700">
                    Nouveau mot de passe
                  </label>
                  <input
                    type="password"
                    onChange={(e) =>
                      setPasswordInput({
                        ...passwordInput,
                        password: e.target.value,
                      })
                    }
                    value={passwordInput.password}
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 placeholder-gray-400 focus:outline-none ring-secondary focus:border-secondary sm:text-sm"
                  />
                </div>
              </div>
              <div className="flex justify-center md:justify-end w-full">
                <div className="mt-1 w-full">
                  <label className="block text-sm font-medium text-gray-700">
                    Confirmation
                  </label>
                  <input
                    type="password"
                    onChange={(e) =>
                      setPasswordInput({
                        ...passwordInput,
                        confirmation: e.target.value,
                      })
                    }
                    value={passwordInput.confirmation}
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 placeholder-gray-400 focus:outline-none ring-secondary focus:border-secondary sm:text-sm"
                  />
                </div>
              </div>
              <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md space-y-5 ">
                <div className=" flex flex-col items-center justify-center md:justify-end">
                  <button
                    onClick={() => {
                      changePass();
                    }}
                    type="button"
                    className="uppercase justify-center items-center  h-10 px-10 shadow-sm text-md font-medium text-white bg-black focus:outline-none"
                  >
                    Changer le mot de passe
                  </button>
                </div>
              </div>
              {isPasswordNotValid && (
                <label className="block text-xs font-medium text-red-500 mt-3">
                  Le mot de passe et sa confirmation ne correspondent pas.!
                </label>
              )}
              <label className="block text-xs font-medium text-red-500 mt-3">
                {errorMessage}
              </label>
              <div className="mt-8">
                <Link href={"/connexion"}>
                  <a className="underline font-semibold">
                    Retour à la page de connexion
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
