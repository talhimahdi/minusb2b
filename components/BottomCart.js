import React from "react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import { useAuth } from "../RestHelper/useAuth";
import ProgressBar from "./ProgressBar";

function BottomCart({ passerCommande }) {
  const auth = useAuth();

  return (
    <div className="fixed left-0 right-0 -bottom-3 h-auto py-10 px-3 md:px-5 bg-white shadow-lg shadow-black drop-shadow-2xl">
      <div className="max-w-7xl mx-auto flex items-center ">
        <div className="hidden md:block flex-1 h-full space-y-2">
          {auth?.offers?.map((offer) => (
            <ProgressBar
              key={offer?.title + offer?.amount}
              title={offer?.title}
              amount={auth?.cart?.totals?.total?.amount}
              total={offer?.amount}
            />
          ))}
        </div>
        <div className="flex-1">
          <div className="flex md:flex-row space-x-2">
            <div
              className="flex flex-col flex-1 md:items-end md:mb-0 cursor-pointer"
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
            <div className="flex items-center justify-center md:justify-end">
              <button
                onClick={passerCommande}
                type="button"
                className="uppercase justify-center items-center px-10 py-4  border border-gray-300 shadow-sm text-base font-medium  text-white bg-black focus:outline-none"
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
