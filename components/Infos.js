import Image from "next/image";
import React from "react";

export default function Infos() {
  return (
    <div className="max-w-7xl mx-auto mt-10 py-5 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col justify-center items-center">
        <h1 className="uppercase text-4xl text-center font-londrina">
          Vivamus suscipit tortor eget felis
        </h1>
        <p className="mt-3 max-w-md text-center font-semibold">
          Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui posuere blandit. 
          Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
        </p>
      </div>
    </div>
  );
}
