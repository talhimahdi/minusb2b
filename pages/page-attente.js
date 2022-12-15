import React, { useState } from "react";
import Cover from "../components/Cover";
import { useAuth } from "../RestHelper/useAuth";

function PageAttente() {
  const auth = useAuth();

  return (
    <div>
      <div className="max-w-7xl mx-auto mt-10 py-5 px-4 sm:px-6 lg:px-8">
        <Cover />
        <div className="max-w-7xl mx-auto py-5 px-4 sm:px-6 lg:px-8 my-10">
          <div className="flex flex-col justify-center items-center">
            <h1 className="uppercase text-4xl text-center font-londrina">
              {auth?.frontContent?.wait_title}
            </h1>
            <p className="mt-3 max-w-md text-center font-semibold">
              {auth?.frontContent?.wait_desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageAttente;
