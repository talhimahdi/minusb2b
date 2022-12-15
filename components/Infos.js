import Image from "next/image";
import React from "react";

import { useAuth } from "../RestHelper/useAuth";

export default function Infos() {
  const auth = useAuth();
  return (
    <div className="max-w-7xl mx-auto mt-10 py-5 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col justify-center items-center">
        <h1 className="uppercase text-4xl text-center font-londrina">
          {auth?.frontContent?.hero_title}
        </h1>
        <p className="mt-3 max-w-md text-center font-semibold">
          {auth?.frontContent?.hero_desc}
        </p>
      </div>
    </div>
  );
}
