import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ActionCard from "../components/ActionCard";
import Cover from "../components/Cover";
import Infos from "../components/Infos";
import { useAuth } from "../RestHelper/useAuth";
import localStorageX from "../configs/localStorage";
import Link from "next/link";
import SendEmailForgetPassPopup from "../components/SendEmailForgetPassPopup";

export default function ForgetPassword() {
  const router = useRouter();
  const auth = useAuth();
  const [renderUi, setRenderUi] = useState(false);
  const [isNotValidEmail, setIsNotValidEmail] = useState(false);
  const [emailInput, setEmailInput] = useState("");

  const [popupOpen, setPopupOpen] = useState(false);
  const [popupTitle, setPopupTitle] = useState("");
  const [popupMessage, setPopupMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isEmailSent, setIsEmailSent] = useState(false);

  const resetPass = async () => {
    if (!emailValidation(emailInput)) {
      setIsNotValidEmail(true);
      return;
    }

    setIsNotValidEmail(false);
    var requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: emailInput,
      }),
    };

    const result = await fetch("/api/forgetPass", requestOptions)
      .then((response) => response?.json())
      .then((data) => {
        return data;
      })
      .catch((error) => console.log("error", error));

    if (result?.results?.code == 200 && result?.results?.succes) {
      setIsEmailSent(true);
      setPopupTitle("Email envoyé avec succès.");
      setPopupMessage(
        "Si votre adresse email est reliée à un compte Minus, alors vous avez dû recevoir un email de réinitialisation. Merci de vérifier votre boîte spam."
      );
      setPopupOpen(true);
    } else {
      if (result?.results?.message === "not exist") {
        setIsEmailSent(false);
        setPopupTitle("Cet email n'est relié à aucun compte.");
        setPopupMessage(
          "Nous vous prions de créer votre compte " +
            "<a href='/register' class='underline font-semibold'> via le formulaire d'enregistrement</a>" +
            "."
        );
        setPopupOpen(true);
      } else {
        setErrorMessage(result?.results?.message);
      }
    }
  };

  const emailValidation = (email) => {
    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!email || regex.test(email) === false) {
      return false;
    }
    return true;
  };

  return (
    <>
      <SendEmailForgetPassPopup
        open={popupOpen}
        setOpen={setPopupOpen}
        // title={"Email envoyé avec succes"}
        title={popupTitle}
        message={popupMessage}
        isSent={isEmailSent}
      />

      <div className="max-w-xl mx-auto mt-10 py-5 px-4 sm:px-6 lg:px-8">
        <div className="pt-6 order-1 md:order-2">
          <div className="flow-root bg-primary px-6 pb-8">
            <div className=" flex flex-col items-center justify-center">
              <h3 className="uppercase mt-8 text-xl text-gray-900 font-londrina text-center">
                Réinitialisez votre mot de passe
              </h3>

              <div className="flex justify-center md:justify-end mt-8 w-full">
                <div className="mt-1 w-full">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Adresse e-mail
                  </label>
                  <input
                    onChange={(e) => setEmailInput(e.target.value)}
                    type="email"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 placeholder-gray-400 focus:outline-none ring-secondary focus:border-secondary sm:text-sm"
                  />
                  {isNotValidEmail && (
                    <label className="block text-xs font-medium text-red-500 mt-3">
                      Veuillez entrer un email valide!
                    </label>
                  )}
                </div>
              </div>
              <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md space-y-5 ">
                <div className=" flex flex-col items-center justify-center md:justify-end">
                  <button
                    onClick={() => {
                      resetPass();
                    }}
                    type="button"
                    className="uppercase justify-center items-center w-60 h-10 px-10 shadow-sm text-md font-medium text-white bg-black focus:outline-none"
                  >
                    Réinitialiser
                  </button>
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
        </div>
      </div>
    </>
  );
}
