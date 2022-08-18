import React from "react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import { useAuth } from "../RestHelper/useAuth";
import ProgressBar from "./ProgressBar";

function BottomCart({ passerCommande }) {
  const auth = useAuth();
  return (
    <div className="fixed left-0 right-0 -bottom-3 h-auto py-12 px-5 bg-white shadow-lg shadow-black drop-shadow-2xl">
      <div className="max-w-7xl mx-auto flex items-center h-10 ">
        <div className="hidden md:block flex-1 h-full">
          <ProgressBar amount={auth?.cart?.totals?.total?.amount} total={250} />
        </div>
        <div className="flex-1">
          <div className="flex md:flex-row space-x-5">
            <div
              className="flex flex-col flex-1 md:items-end mb-5 md:mb-0 cursor-pointer"
              onClick={passerCommande}
            >
              <div className="flex space-x-1">
                <p className="font-semibold uppercase">Voir le panier</p>
                <ChevronUpIcon className="h-6 w-6 text-black text-end" />
              </div>

              <a className="font-semibold">
                {auth?.cart?.summary_string} ({auth?.cart?.totals?.total?.value}
                )
              </a>
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
