import { ChevronUpIcon } from "@heroicons/react/solid";
import React from "react";

function BottomCart({ passerCommande }) {
  return (
    <div className="fixed left-0 right-0 bottom-0 h-auto py-10 bg-white shadow-lg shadow-black  drop-shadow-2xl">
      <div className="max-w-7xl mx-auto flex items-center h-10 md:pl-5">
        <div className="hidden md:block flex-1 h-full">
          <div className="relative flex justify-between w-full h-full border border-secondary">
            <div className="absolute bg-primary w-[50%] h-full"></div>
            <div className="absolute p-2 h-full">
              FRANCO DÈS 250€ D&apos;ACHATS !
            </div>
            <div className="absolute p-2 h-full right-0 text-end">
              180,65€ / 250,00€
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex md:flex-row space-x-5 px-5">
            <div
              className="flex flex-col flex-1 md:items-end mb-5 md:mb-0 cursor-pointer"
              onClick={passerCommande}
            >
              <div className="flex space-x-1">
                <p className="font-semibold uppercase">Voir le panier</p>
                <ChevronUpIcon className="h-6 w-6 text-black text-end" />
              </div>

              <a className="font-semibold">16 articles (180,65€)</a>
            </div>
            <div className="flex items-stretch justify-center md:justify-end">
              <button
                onClick={passerCommande}
                type="button"
                className="uppercase justify-center items-center px-10 border border-gray-300 shadow-sm text-base font-medium  text-white bg-black focus:outline-none"
              >
                Passer commande
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottomCart;
