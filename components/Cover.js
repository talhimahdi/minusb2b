import React from "react";
import { useAuth } from "../RestHelper/useAuth";

export default function Cover() {
  const auth = useAuth();

  return (
    <div className="bg-primary max-w-6xl mx-auto relative h-40 md:h-52">
      <img
        src={auth?.frontContent?.hero_banner_url}
        alt=""
        className="object-cover h-full w-full"
      />
    </div>
  );
}
