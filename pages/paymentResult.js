import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../RestHelper/useAuth";

export default function PaymentResult() {
  const router = useRouter();
  const succes = router?.query?.succes;
  const orderId = router?.query?.orderId;

  const orderCancel = async () => {
    var requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        orderId: orderId,
      }),
    };

    await fetch("/api/payplugCancel", requestOptions)
      .then((response) => response?.json())
      .then((result) => {
        if (result?.results?.payplug) {
          setPayplugPaymentUrl(result?.results?.payplug?.payment_url);

          setPaymentPopupOpen(true);
        }
      })
      .catch((error) => console.log("error", error));
  };

  function close_window() {
    if (confirm("Close Window?")) {
      close();
    }
  }

  const closeWindow = () => {
    window.close();
    console.log("close()");
  };

  if (succes == "true") {
    return (
      <div className="flex justify-center items-center h-72 font-londrina text-2xl">
        <div>paiement réalisée avec succès</div>
      </div>
    );
  } else {
    orderCancel();
    return (
      <div className="flex justify-center items-center h-72 font-londrina text-2xl">
        <div>paiement n'a pas été réalisée</div>
        <div
          className=" text-black underline cursor-pointer shadow-sm py-2 px-4 text-base font-bold  hover:font-bold focus:outline-none 
              focus:ring-0"
          onClick={() => window.close()}
        >
          {/* <div className="flex items-center space-x-2">
            <p>Fermer</p>
          </div> */}
        </div>
      </div>
    );
  }
}
