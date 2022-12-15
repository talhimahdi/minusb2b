import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Urls } from "../configs/configs";
import { ExclamationCircleIcon } from "@heroicons/react/solid";
import { useAuth } from "../RestHelper/useAuth";

export default function ActionCard({ onLogin, errorMessage = "" }) {
  const auth = useAuth();

  const [isLoading, setIsLoading] = useState();
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  return (
    <div className="mt-12">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div className="pt-6 order-1 md:order-2">
          <div className="flow-root bg-primary px-6 pb-8">
            <div className="-mt-20 flex flex-col items-center justify-center">
              <div className="flex flex-auto items-center justify-center">
                <div className="flex-none relative w-32 h-32 object-center object-cover rounded-full border-8 border-white bg-white">
                  {/* <Image src={"/images/info2.png"} layout="fill" alt="" /> */}
                  <img src={"/images/info2.png"} alt="" />
                </div>
              </div>
              <h3 className="uppercase mt-8 text-xl text-gray-900 font-londrina text-center">
                {auth?.frontContent?.card_1_title}
              </h3>
              <p className="mt-5 text-base text-black text-center">
                {auth?.frontContent?.card_1_desc}
              </p>
              <div className="flex justify-center md:justify-end mt-8">
                <button
                  type="button"
                  className="uppercase justify-center items-center w-60 h-10 shadow-sm text-md text-white bg-black focus:outline-none"
                >
                  <Link href={"/register"}>
                    <a>{auth?.frontContent?.card_1_button_text}</a>
                  </Link>
                </button>
              </div>
              <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md space-y-5 border-black border-t-2 pt-5">
                <div>
                  <h3 className="uppercase text-xl text-gray-900 font-londrina text-center">
                    Déjà inscrit ?
                  </h3>
                  <p className="mt-3 text-base text-black text-center">
                    Connectez-vous avec votre email et mot de passe.
                  </p>
                </div>
                <form className="space-y-4" action="#" method="POST">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Votre adresse email
                    </label>
                    <div className="mt-1">
                      <input
                        onChange={(e) =>
                          setLoginForm({ ...loginForm, email: e.target.value })
                        }
                        id="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 placeholder-gray-400 focus:outline-none ring-secondary focus:border-secondary sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Mot de passe
                    </label>
                    <div className="mt-1">
                      <input
                        onChange={(e) =>
                          setLoginForm({
                            ...loginForm,
                            password: e.target.value,
                          })
                        }
                        id="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 placeholder-gray-400 focus:outline-none ring-secondary focus:border-secondary sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className="pt-5 flex flex-col items-center justify-center md:justify-end">
                    <button
                      onClick={() => {
                        setIsLoading(true);
                        onLogin(loginForm);
                        setIsLoading(false);
                      }}
                      type="button"
                      className="uppercase justify-center items-center w-60 h-10 px-10 shadow-sm text-md font-medium text-white bg-black focus:outline-none"
                    >
                      {isLoading && (
                        <span>
                          <svg
                            className="inline w-5 h-5 text-gray-700 animate-spin fill-white mr-2"
                            viewBox="0 0 100 101"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                              fill="currentColor"
                            />
                            <path
                              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                              fill="currentFill"
                            />
                          </svg>
                        </span>
                      )}
                      Suivant
                    </button>
                  </div>
                  <div className="flex flex-col items-center mb-5 md:mb-0">
                    <p>Mot de passe oublié ?</p>
                    <Link href={"#"}>
                      <a className="underline ">
                        Réinitialisez votre mot de passe.
                      </a>
                    </Link>
                  </div>

                  {errorMessage != "" && (
                    <div className="flex items-center space-x-2 text-secondary">
                      <ExclamationCircleIcon className="h-5 w-5" />
                      <p>{errorMessage}</p>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6 order-2 md:order-1">
          <div className="flow-root bg-primary px-6 pb-8">
            <div className="-mt-20 flex flex-col items-center justify-center">
              <div className="flex flex-auto items-center justify-center">
                <div className="flex-none relative w-32 h-32 object-center object-cover rounded-full border-8 border-white bg-white">
                  {/* <Image src={"/images/info1.png"} layout="fill" alt="" /> */}
                  <img src={"/images/info1.png"} alt="" />
                </div>
              </div>
              <h3 className="uppercase mt-8 text-xl text-gray-900 font-londrina text-center">
                {auth?.frontContent?.card_2_title}
              </h3>
              <p className="mt-5 text-base text-black text-center">
                {auth?.frontContent?.card_2_desc}
              </p>
              <div className="flex justify-center md:justify-end mt-8">
                <button
                  type="button"
                  className="uppercase justify-center items-center w-60 h-10 shadow-sm text-md  text-white bg-black focus:outline-none"
                >
                  {auth?.frontContent?.card_2_button_text}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6 order-3 md:order-3">
          <div className="flow-root bg-primary px-6 pb-8">
            <div className="-mt-20 flex flex-col items-center justify-center">
              <div className="flex flex-auto items-center justify-center">
                <div className="flex-none relative w-32 h-32 object-center object-cover rounded-full border-8 border-white bg-white">
                  {/* <Image src={"/images/info1.png"} layout="fill" alt="" /> */}
                  <img src={"/images/info3.png"} alt="" />
                </div>
              </div>
              <h3 className="uppercase mt-8 text-xl text-center text-gray-900 font-londrina">
                {auth?.frontContent?.card_3_title}
              </h3>
              <p className="mt-5 text-base text-black text-center">
                {auth?.frontContent?.card_3_desc}
              </p>
              <div className="flex justify-center md:justify-end mt-8">
                <button
                  type="button"
                  className="uppercase justify-center items-center w-60 h-10 shadow-sm text-md text-white bg-black focus:outline-none"
                >
                  {auth?.frontContent?.card_3_button_text}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
