import { useState, useEffect } from "react";
import { RadioGroup } from "@headlessui/react";
import { PlusCircleIcon } from "@heroicons/react/outline";
import { useAuth } from "../../RestHelper/useAuth";
// import CheckoutSummary from "../components/CheckoutSummary";
import { useRouter } from "next/router";
import NewAddressForm from "../../components/NewAddressForm";
import Loader from "../../components/Loader";

// import localStorageX from "../configs/localStorage";

import { LockClosedIcon } from "@heroicons/react/solid";

function Password() {
  const auth = useAuth();
  const router = useRouter();

  const [passwordForm, setPasswordForm] = useState({
    oldPass: "",
    newPass: "",
    confirmNewPass: "",
  });
  const [isLoading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const init = async () => {
      if (auth?.user?.id) {
        setLoading(true);
      }
      setLoading(false);
    };
    init();
  }, [auth?.user]);

  const updatePassword = async () => {
    console.log(passwordForm);
    if (passwordForm.newPass != passwordForm.confirmNewPass) {
      setErrorMessage(
        "Le mot de passe et sa confirmation ne correspondent pas"
      );
      setSuccessMessage("");
      return;
    }

    var requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        oldPass: passwordForm.oldPass,
        newPass: passwordForm.newPass,
        customerId: auth?.user?.id,
      }),
    };

    await fetch("/api/editPass", requestOptions)
      .then((response) => response?.json())
      .then((data) => {
        if (data?.results?.code == 200 && data?.results?.succes) {
          setSuccessMessage("Mot de passe mis à jour avec succès.");
          setErrorMessage("");
        } else {
          setErrorMessage(data?.results?.message);
          setSuccessMessage("");
        }
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <>
      <Loader isVisible={isLoading} />

      <main className="max-w-7xl mx-auto pt-8 pb-24 px-4 sm:px-6">
        <div className="my-3">Changer votre mot de passe</div>
        <div className="max-w-xl mx-auto pt-8 pb-24 px-4 sm:px-6">
          <div className=" py-3">
            <label
              htmlFor="email"
              className="block text-md font-medium text-gray-700"
            >
              Mot de pass actuel
            </label>
            <div className="relative mt-1 shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <LockClosedIcon
                  className="h-5 w-5 text-gray-500"
                  aria-hidden="true"
                />
              </div>
              <input
                type="password"
                className="block w-full border-gray-300 pl-10 focus:ring-0 sm:text-md"
                placeholder=""
                value={passwordForm.oldPass}
                onChange={(e) =>
                  setPasswordForm({
                    ...passwordForm,
                    oldPass: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className=" py-3">
            <label
              htmlFor="email"
              className="block text-md font-medium text-gray-700"
            >
              Nouveau Mot de pass
            </label>
            <div className="relative mt-1 shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <LockClosedIcon
                  className="h-5 w-5 text-gray-500"
                  aria-hidden="true"
                />
              </div>
              <input
                type="password"
                className="block w-full border-gray-300 pl-10 focus:ring-0 sm:text-md"
                placeholder=""
                value={passwordForm.newPass}
                onChange={(e) =>
                  setPasswordForm({
                    ...passwordForm,
                    newPass: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className=" py-3">
            <label
              htmlFor="email"
              className="block text-md font-medium text-gray-700"
            >
              Confirmer le nouveau Mot de pass
            </label>
            <div className="relative mt-1 shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <LockClosedIcon
                  className="h-5 w-5 text-gray-500"
                  aria-hidden="true"
                />
              </div>
              <input
                type="password"
                className="block w-full border-gray-300 pl-10 focus:ring-0 sm:text-md"
                placeholder=""
                value={passwordForm.confirmNewPass}
                onChange={(e) =>
                  setPasswordForm({
                    ...passwordForm,
                    confirmNewPass: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className=" py-3">
            <button
              className="w-full bg-black shadow-sm py-2 px-4 text-md font-extrabold text-white hover:font-bold focus:outline-none focus:ring-0 focus:ring-offset-2 focus:ring-offset-gray-50"
              type={"button"}
              onClick={updatePassword}
            >
              Confirmer la commande
            </button>
          </div>
          <div>
            <p className="mt-5 text-red-500 font-bold">{errorMessage}</p>
            <p className="mt-5 text-green-500 font-bold">{successMessage}</p>
          </div>
        </div>
      </main>
    </>
  );
}

export default Password;
