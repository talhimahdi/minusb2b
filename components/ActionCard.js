import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Urls } from "../configs/configs";
import { ExclamationCircleIcon } from "@heroicons/react/solid";

export default function ActionCard({ onLogin, errorMessage = "" }) {
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
                COMMANDER EN LIGNE SUR LE SITE MINUS
              </h3>
              <p className="mt-5 text-base text-black text-center">
                Le rêve pour vous c’est de passer votre commande en quelques
                clics? Créez votre compte !
              </p>
              <div className="flex justify-center md:justify-end mt-8">
                <button
                  type="button"
                  className="uppercase justify-center items-center w-60 h-10 shadow-sm text-md text-white bg-black focus:outline-none"
                >
                  <Link href={"/register"}>
                    <a>Je crée mon compte</a>
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

                  <div className="flex flex-col items-center mb-5 md:mb-0">
                    <p>Pas encore de compte ?</p>
                    <Link href={"/register"}>
                      <a className="underline ">Inscrivez-vous !</a>
                    </Link>
                  </div>
                  <div className="flex flex-col items-center justify-center md:justify-end">
                    <button
                      onClick={() => /*setOnLogin(true)*/ onLogin(loginForm)}
                      type="button"
                      className="uppercase justify-center items-center w-60 h-10 px-10 shadow-sm text-md font-medium text-white bg-black focus:outline-none"
                    >
                      Suivant
                    </button>
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
                COMMANDEZ PAR MAIL OU PAR TÉLÉPHONE
              </h3>
              <p className="mt-5 text-base text-black text-center">
                Vous êtes plutôt téléphone et rêvez d’entendre notre douce voix,
                appelez-nous pour échanger ou passer commande au 07 84 86 49 81
                ou envoyez-nous un email à
                <span className="underline ml-1">
                  commande@minus-editions.fr
                </span>
              </p>
              <div className="flex justify-center md:justify-end mt-8">
                <button
                  type="button"
                  className="uppercase justify-center items-center w-60 h-10 shadow-sm text-md  text-white bg-black focus:outline-none"
                >
                  JE TÉLÉCHARGE LE CATALOGUE
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
                COMMANDER AVEC NOTRE PARTENAIRE ANKORSTORE
              </h3>
              <p className="mt-5 text-base text-black text-center">
                Proin eget tortor risus. Donec sollicitudin molestie malesuada.
                Vestibulum ante ipsum primis
              </p>
              <div className="flex justify-center md:justify-end mt-8">
                <button
                  type="button"
                  className="uppercase justify-center items-center w-60 h-10 shadow-sm text-md text-white bg-black focus:outline-none"
                >
                  JE COMMANDE SUR ANKORSTORE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
