import React from "react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useAuth } from "../RestHelper/useAuth";
import ProgressBar from "./ProgressBar";
import { useRouter } from "next/router";

function BottomCart({ onOpenCart }) {
  const auth = useAuth();
  const router = useRouter();

  const offer = auth?.offers[0];

  return (
    <div className="fixed left-0 right-0 bottom-0 h-auto py-6 px-3 md:px-5 bg-white shadow-lg shadow-black drop-shadow-2xl">
      <div className="max-w-7xl mx-auto flex items-center ">
        <div className="hidden md:block flex-1 h-full space-y-2">
          {/* {auth?.offers?.map((offer) => ( */}
          <ProgressBar
            key={offer?.title + offer?.amount}
            title={offer?.title}
            // amount={auth?.cart?.totals?.total?.amount}
            amount={parseFloat(auth?.cart?.total_products_ht).toFixed(2)}
            total={offer?.amount}
          />
          {/* ))} */}
        </div>
        <div className="flex-1">
          <div className="flex md:flex-row space-x-2 cursor-pointer">
            <div
              className="flex flex-col flex-1 md:items-end justify-center md:mb-0"
              onClick={onOpenCart}
            >
              <div className="flex space-x-1">
                <p className="font-semibold uppercase">Voir le panier</p>
                <ChevronUpIcon className="h-6 w-6 text-black text-end" />
              </div>

              <a className="font-semibold">
                {auth?.cart?.summary_string} (
                {/* {auth?.cart?.subtotals?.products?.value} HT) */}
                {parseFloat(auth?.cart?.total_products_ht).toFixed(2)}€ HT)
              </a>
            </div>
            <div className="flex items-center justify-center md:justify-end">
              <div
                className="uppercase items-center align-baseline px-10 py-4 h-full shadow-sm text-md font-medium  text-white bg-black focus:outline-none"
                onClick={() =>
                  auth?.cart?.products_count > 0 && router.push("/checkout")
                }
              >
                Passer commande
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottomCart;
