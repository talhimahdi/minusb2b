import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Urls } from "../configs/configs";
import Loader from "../components/Loader";

import {
  MailIcon,
  LockClosedIcon,
  UserIcon,
  HomeIcon,
  BriefcaseIcon,
  IdentificationIcon,
  InformationCircleIcon,
  GlobeIcon,
  PhoneIcon,
  InboxIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/solid";

export default function RegisterForm({ onRegister, errorMessage }) {
  const [isLoading, setLoading] = useState(false);
  const [countries, setCountries] = useState([]);
  const [form, setForm] = useState({
    passwd: "123456",
    firstname: "Mahdi",
    lastname: "Talhi",
    email: "test.email+1@gmail.com",
    other: "Concept/déco",
    company: "my company",
    address1: "my address 1",
    address2: "my address 2",
    id_country: "8",
    vat_number: "FR12345678901",
    city: "Paris",
    postcode: "20330",
    phone: "+212566443322",
  });

  const getCountries = async () => {
    var requestOptions = {
      method: "GET",
    };

    const result = await fetch("/api/countries", requestOptions)
      .then((response) => response?.json())
      .then((data) => {
        return data?.results;
      })
      .catch((error) => console.log("error", error));

    if (result?.code == 200 && result?.succes && result?.countries) {
      setCountries(result?.countries);
    }
  };

  useEffect(() => {
    const init = async () => {
      console.log("register");
      setLoading(true);
      await getCountries();
      setLoading(false);
    };
    init();
  }, []);

  return (
    <div className="bg-primary max-w-lg mx-auto my-10 px-4 py-8 sm:px-6 lg:px-8">
      <Loader isVisible={isLoading} />
      <form className="space-y-8">
        <div className="space-y-6 sm:space-y-5">
          <div className="flex flex-col items-center">
            <div className="flex items-center md:items-end mb-12 space-x-2">
              <p className="font-semibold">Vous avez déjà un compte ?</p>
              <Link href={"/connexion"}>
                <a className="underline font-semibold">Connectez-vous !</a>
              </Link>
            </div>
            <h3 className="uppercase leading-6 text-gray-900 font-bold text-3xl mb-4 w-80  text-center font-londrina">
              Vous...
            </h3>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex-1 space-y-2">
                <label
                  htmlFor="first-name"
                  className="block text-base text-gray-700 sm:mt-px sm:pt-2 font-semibold"
                >
                  Votre prénom
                </label>
                <div className="flex mt-1 sm:mt-0 flex-1 w-full shadow-sm px-3 ring-1 ring-secondary sm:text-sm h-10 bg-white items-center">
                  <UserIcon className="h-5 w-5 text-secondary" />
                  <input
                    type="text"
                    placeholder="Jules"
                    value={form.firstname}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        firstname: e.target.value,
                      })
                    }
                    className="block w-full outline-none border-none focus:ring-0 focus:border-none sm:text-sm"
                  />
                </div>
              </div>

              <div className="flex-1 space-y-2">
                <label
                  htmlFor="last-name"
                  className="block text-base text-gray-700 sm:mt-px sm:pt-2 font-semibold"
                >
                  Votre nom
                </label>
                <div className="flex mt-1 sm:mt-0 flex-1 w-full shadow-sm px-3 ring-1 ring-secondary sm:text-sm h-10 bg-white items-center">
                  <UserIcon className="h-5 w-5 text-secondary" />
                  <input
                    type="text"
                    value={form.lastname}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        lastname: e.target.value,
                      })
                    }
                    placeholder="Verne"
                    className="block w-full outline-none border-none focus:ring-0 focus:border-none sm:text-sm"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-base text-gray-700 sm:mt-px sm:pt-2 font-semibold"
              >
                Votre adresse email
              </label>
              <div className="flex mt-1 sm:mt-0 flex-1 w-full shadow-sm px-3 ring-1 ring-secondary sm:text-sm h-10 bg-white items-center">
                <MailIcon className="h-5 w-5 text-secondary" />
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      email: e.target.value,
                    })
                  }
                  placeholder="jules.verne@email.fr"
                  className="block w-full outline-none border-none focus:ring-0 focus:border-none sm:text-sm"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-base text-gray-700 sm:mt-px sm:pt-2 font-semibold"
              >
                Mot de passe
              </label>
              <div className="flex mt-1 sm:mt-0 flex-1 w-full shadow-sm px-3 ring-1 ring-secondary sm:text-sm h-10 bg-white items-center">
                <LockClosedIcon className="h-5 w-5 text-secondary" />
                <input
                  type="password"
                  value={form.passwd}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      passwd: e.target.value,
                    })
                  }
                  placeholder="Minimum 8 caractères"
                  className="block w-full outline-none border-none focus:ring-0 focus:border-none sm:text-sm"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6 sm:space-y-5 pt-5">
          <div className="flex flex-col items-center">
            <h3 className="uppercase leading-6 text-gray-900 font-bold text-3xl mb-4 w-80  text-center font-londrina">
              ...ET VOTRE ENTREPRISE
            </h3>
          </div>

          <div className="space-y-2">
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-base text-gray-700 sm:mt-px sm:pt-2 font-semibold"
              >
                Quel genre de boutique avez-vous ?
              </label>
              <div className="flex mt-1 sm:mt-0 flex-1 w-full shadow-sm px-3 ring-1 ring-secondary sm:text-sm h-10 bg-white items-center">
                <select
                  className="block w-full outline-none border-none focus:ring-0 focus:border-none sm:text-sm"
                  value={form.other}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      other: e.target.value,
                    })
                  }
                >
                  <option value={"Concept/déco"}>Concept/déco</option>
                  <option value={"Musée"}>Musée</option>
                  <option value={"Collab"}>Collab</option>
                  <option value={"Librairie"}>Librairie</option>
                  <option value={"Jouets"}>Jouets</option>
                </select>
              </div>
            </div>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex-1 space-y-2">
                <label
                  htmlFor="first-name"
                  className="block text-base text-gray-700 sm:mt-px sm:pt-2 font-semibold"
                >
                  Société
                </label>
                <div className="flex mt-1 sm:mt-0 flex-1 w-full shadow-sm px-3 ring-1 ring-secondary sm:text-sm h-10 bg-white items-center">
                  <UserIcon className="h-5 w-5 text-secondary" />
                  <input
                    type="text"
                    placeholder="Nom entreprise"
                    value={form.company}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        company: e.target.value,
                      })
                    }
                    className="block w-full outline-none border-none focus:ring-0 focus:border-none sm:text-sm"
                  />
                </div>
              </div>

              <div className="flex-1 space-y-2">
                <label
                  htmlFor="last-name"
                  className="block text-base text-gray-700 sm:mt-px sm:pt-2 font-semibold"
                >
                  Numéro de TVA
                </label>
                <div className="flex mt-1 sm:mt-0 flex-1 w-full shadow-sm px-3 ring-1 ring-secondary sm:text-sm h-10 bg-white items-center">
                  <UserIcon className="h-5 w-5 text-secondary" />
                  <input
                    type="text"
                    placeholder="FR..."
                    value={form.vat_number}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        vat_number: e.target.value,
                      })
                    }
                    className="block w-full outline-none border-none focus:ring-0 focus:border-none sm:text-sm"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-base text-gray-700 sm:mt-px sm:pt-2 font-semibold"
              >
                Adresse
              </label>
              <div className="flex mt-1 sm:mt-0 flex-1 w-full shadow-sm px-3 ring-1 ring-secondary sm:text-sm h-10 bg-white items-center">
                <HomeIcon className="h-5 w-5 text-secondary" />
                <input
                  type="text"
                  placeholder="Numéro et rue"
                  value={form.address1}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      address1: e.target.value,
                    })
                  }
                  className="block w-full outline-none border-none focus:ring-0 focus:border-none sm:text-sm"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-base text-gray-700 sm:mt-px sm:pt-2 font-semibold"
              >
                Complément adresse
              </label>
              <div className="flex mt-1 sm:mt-0 flex-1 w-full shadow-sm px-3 ring-1 ring-secondary sm:text-sm h-10 bg-white items-center">
                <InformationCircleIcon className="h-5 w-5 text-secondary" />
                <input
                  type="text"
                  placeholder="Étages, code d’accès..."
                  value={form.address2}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      address2: e.target.value,
                    })
                  }
                  className="block w-full outline-none border-none focus:ring-0 focus:border-none sm:text-sm"
                />
              </div>
            </div>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex-1 space-y-2">
                <label
                  htmlFor="first-name"
                  className="block text-base text-gray-700 sm:mt-px sm:pt-2 font-semibold"
                >
                  Code Postal
                </label>
                <div className="flex mt-1 sm:mt-0 flex-1 w-full shadow-sm px-3 ring-1 ring-secondary sm:text-sm h-10 bg-white items-center">
                  <InboxIcon className="h-5 w-5 text-secondary" />
                  <input
                    type="text"
                    placeholder="80000"
                    value={form.postcode}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        postcode: e.target.value,
                      })
                    }
                    className="block w-full outline-none border-none focus:ring-0 focus:border-none sm:text-sm"
                  />
                </div>
              </div>

              <div className="flex-1 space-y-2">
                <label
                  htmlFor="last-name"
                  className="block text-base text-gray-700 sm:mt-px sm:pt-2 font-semibold"
                >
                  Ville
                </label>
                <div className="flex mt-1 sm:mt-0 flex-1 w-full shadow-sm px-3 ring-1 ring-secondary sm:text-sm h-10 bg-white items-center">
                  <HomeIcon className="h-5 w-5 text-secondary" />
                  <input
                    type="text"
                    placeholder="Amiens"
                    value={form.city}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        city: e.target.value,
                      })
                    }
                    className="block w-full outline-none border-none focus:ring-0 focus:border-none sm:text-sm"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex-1 space-y-2">
                <label
                  htmlFor="first-name"
                  className="block text-base text-gray-700 sm:mt-px sm:pt-2 font-semibold"
                >
                  Pays
                </label>
                <div className="flex mt-1 sm:mt-0 flex-1 w-full shadow-sm pl-3 ring-1 ring-secondary sm:text-sm h-10 bg-white items-center">
                  <GlobeIcon className="h-5 w-5 text-secondary" />
                  <select
                    value={form.id_country}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        id_country: e.target.value,
                      })
                    }
                    className="block w-full border-none shadow-sm focus:ring-0  sm:text-sm"
                  >
                    <option value={0}>Selectionner un pays</option>
                    {countries?.map((country) => (
                      <option key={country?.id} value={country?.id}>
                        {country?.name}
                      </option>
                    ))}
                  </select>
                  {/* <input
                    type="text"
                    placeholder="France"
                    value={form.id_country}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        id_country: e.target.value,
                      })
                    }
                    className="block w-full outline-none border-none focus:ring-0 focus:border-none sm:text-sm"
                  /> */}
                </div>
              </div>

              <div className="flex-1 space-y-2">
                <label
                  htmlFor="last-name"
                  className="block text-base text-gray-700 sm:mt-px sm:pt-2 font-semibold"
                >
                  Téléphone
                </label>
                <div className="flex mt-1 sm:mt-0 flex-1 w-full shadow-sm px-3 ring-1 ring-secondary sm:text-sm h-10 bg-white items-center">
                  <PhoneIcon className="h-5 w-5 text-secondary" />
                  <input
                    type="text"
                    placeholder="+33 01 ..."
                    value={form.phone}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        phone: e.target.value,
                      })
                    }
                    className="block w-full outline-none border-none focus:ring-0 focus:border-none sm:text-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <button
            type="button"
            className="uppercase justify-center items-center w-60 h-10 px-10 border border-gray-300 shadow-sm text-base font-medium  text-white bg-black focus:outline-none"
            onClick={async () => await onRegister(form)}
          >
            Je crée mon compte
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
  );
}
