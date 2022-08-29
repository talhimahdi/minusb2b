import Link from "next/link";
import React from "react";

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
} from "@heroicons/react/solid";

export default function RegisterForm() {
  return (
    <div className="bg-primary max-w-lg mx-auto my-10 px-4 py-8 sm:px-6 lg:px-8">
      <form className="space-y-8">
        <div className="space-y-6 sm:space-y-5">
          <div className="flex flex-col items-center">
          <div className="flex items-center md:items-end mb-5 space-x-2">
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
                    id="first-name"
                    name="first-name"
                    type="text"
                    placeholder="Jules"
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
                    id="last-name"
                    name="last-name"
                    type="text"
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
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
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
                  id="password"
                  name="password"
                  type="password"
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
                <select id="boutique-type" 
                  className="block w-full outline-none border-none focus:ring-0 focus:border-none sm:text-sm"
                  name="boutique-type">
                  <option>Concept/déco</option>
                  <option>Musée</option>
                  <option>Collab</option>
                  <option>Librairie</option>
                  <option>Jouets</option>
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
                    id="societe"
                    name="societe"
                    type="text"
                    placeholder="Nom entreprise"
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
                    id="numero-tva"
                    name="numero-tva"
                    type="text"
                    placeholder="FR..."
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
                  id="adress-colement"
                  name="adress-colement"
                  type="text"
                  placeholder="Numéro et rue"
                  className="block w-full outline-none border-none focus:ring-0 focus:border-none sm:text-sm"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-base text-gray-700 sm:mt-px sm:pt-2 font-semibold"
              >
                Complément d’adresse
              </label>
              <div className="flex mt-1 sm:mt-0 flex-1 w-full shadow-sm px-3 ring-1 ring-secondary sm:text-sm h-10 bg-white items-center">
                <InformationCircleIcon className="h-5 w-5 text-secondary" />
                <input
                  id="adress-colement"
                  name="adress-colement"
                  type="text"
                  placeholder="Étages, code d’accès..."
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
                    id="code-postal"
                    name="code-postal"
                    type="text"
                    placeholder="80000"
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
                    id="ville"
                    name="ville"
                    type="text"
                    placeholder="Amiens"
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
                <div className="flex mt-1 sm:mt-0 flex-1 w-full shadow-sm px-3 ring-1 ring-secondary sm:text-sm h-10 bg-white items-center">
                  <GlobeIcon className="h-5 w-5 text-secondary" />
                  <input
                    id="pays"
                    name="pays"
                    type="text"
                    placeholder="France"
                    className="block w-full outline-none border-none focus:ring-0 focus:border-none sm:text-sm"
                  />
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
                    id="telephone"
                    name="telephone"
                    type="text"
                    placeholder="+33 01 ..."
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
            >
              Je crée mon compte
            </button>
          </div>
      </form>
    </div>
  );
}
