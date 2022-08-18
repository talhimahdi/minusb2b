import React from "react";

function ProgressBar({ amount, total }) {
  const pourcentage =
    (amount * 100) / total < 100 ? (amount * 100) / total : 100;

  return (
    <>
      <div className="relative flex justify-between w-full border border-secondary h-10 ">
        <div
          style={{ width: `${pourcentage}%` }}
          className={`absolute bg-primary h-full`}
        ></div>
        <div className="absolute p-2 h-full ">
          FRANCO DÈS {total}€ D&apos;ACHATS !
        </div>
        <div className="absolute p-2 h-full right-0 text-end">
          {amount}€ / {total}€
        </div>
      </div>
      <div className="w-full h-full hidden">
        <div className="relative flex justify-between w-full h-full border border-secondary">
          <div
            style={{ width: `${pourcentage}%` }}
            className={`absolute bg-primary w-full h-full`}
          ></div>
          <div className="absolute p-2 w-full h-full">
            FRANCO DÈS {total}€ D&apos;ACHATS !
          </div>
          <div className="absolute p-2 w-full h-full right-0 text-end">
            {amount}€ / {total}€
          </div>
        </div>
      </div>
    </>
  );
}

export default ProgressBar;
