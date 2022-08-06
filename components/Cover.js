import Image from "next/image";
import React from "react";
import coverImage from "../public/images/cover_image.png";

export default function Cover() {
  return (
    <div className="bg-primary max-w-6xl mx-auto relative h-40 md:h-52">
      {/* <Image
        src={coverImage}
        placeholder="blur"
        layout="fill"
        objectFit="cover"
        alt=""
      /> */}
      <img
        src={"/images/cover_image.png"}
        alt=""
        className="object-cover h-full"
      />
    </div>
  );
}
