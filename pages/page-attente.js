import React, { useState } from "react";
import Cover from "../components/Cover";

function PageAttente() {
  return (
    <div>
      <div className="max-w-7xl mx-auto mt-10 py-5 px-4 sm:px-6 lg:px-8">
        <Cover />
        <div className="max-w-7xl mx-auto py-5 px-4 sm:px-6 lg:px-8 my-10">
          <div className="flex flex-col justify-center items-center">
            <h1 className="uppercase text-4xl text-center font-londrina">
              Donec rutrum congue leo eget malesuada
            </h1>
            <p className="mt-3 max-w-md text-center font-semibold">
              Donec rutrum congue leo eget malesuada. Vestibulum ante ipsum
              primis in faucibus orci luctus et ultrices posuere cubilia Curae;
              Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit
              amet ligula. Mauris blandit aliquet elit, eget tincidunt nibh
              pulvinar a. Mauris blandit aliquet elit, eget tincidunt nibh
              pulvinar a.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageAttente;
