import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ActionCard from "../components/ActionCard";
import Cover from "../components/Cover";
import Infos from "../components/Infos";
import { useAuth } from "../RestHelper/useAuth";
import localStorageX from "../configs/localStorage";
import Link from "next/link";

export default function ForgetPassword() {
  const router = useRouter();
  const auth = useAuth();
  const [renderUi, setRenderUi] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <>
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
                    onChange={(e) =>
                      setLoginForm({ ...loginForm, email: e.target.value })
                    }
                    type="email"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 placeholder-gray-400 focus:outline-none ring-secondary focus:border-secondary sm:text-sm"
                  />
                </div>
              </div>
              <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md space-y-5 ">
                <div className=" flex flex-col items-center justify-center md:justify-end">
                  <button
                    onClick={() => {}}
                    type="button"
                    className="uppercase justify-center items-center w-60 h-10 px-10 shadow-sm text-md font-medium text-white bg-black focus:outline-none"
                  >
                    Réinitialiser
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
