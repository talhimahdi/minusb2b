import React, { useState } from "react";
import Image from "next/image";
// import Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper styles
import "swiper/css";
import ImagePopup from "./ImagePopup";

function CoverThumbnails({ slides }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white h-48 md:h-56">
      <Swiper
        className="max-w-7xl mx-auto h-full w-full px-3 md:px-0 z-0"
        spaceBetween={10}
        slidesPerView={3}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
        breakpoints={{
          300: {
            slidesPerView: 1.15,
          },
          500: {
            slidesPerView: 2.15,
          },
          1000: {
            slidesPerView: 3,
          },
        }}
      >
        <SwiperSlide className="h-full shadow-[0px_2px_7px_rgba(0,_0,_0,_0.14)]">
          {/* <Image
            src={"/images/cover-thumbnail-1.png"}
            layout="fill"
            className=""
            priority="true"
            alt=""
          /> */}
          <img src={slides.image_1_url} alt="" className="object-fill" />
        </SwiperSlide>
        <SwiperSlide className="h-full  shadow-[0px_2px_7px_rgba(0,_0,_0,_0.14)] cursor-pointer">
          <a href={slides.image_2_link} target={"_blank"} rel="noreferrer">
            {/* <Image
              src={"/images/cover-thumbnail-2.png"}
              layout="fill"
              className=""
              priority="true"
              alt=""
            /> */}
            <img src={slides.image_2_url} alt="" className="object-fill" />
          </a>
        </SwiperSlide>

        <SwiperSlide
          className="h-full  shadow-[0px_2px_7px_rgba(0,_0,_0,_0.14)] cursor-pointer"
          onClick={() => setOpen(true)}
        >
          {/* <Image
            src={"/images/cover-thumbnail-3.png"}
            layout="fill"
            className=""
            priority="true"
            alt=""
          /> */}
          <img src={slides.image_3_url} alt="" className="object-fill" />
        </SwiperSlide>
      </Swiper>
      <ImagePopup
        isOpen={open}
        setIsOpen={setOpen}
        image_url={slides.image_3_popup_img_url}
        title={slides.image_3_popup_title}
        description={slides.image_3_popup_desc}
      />
    </div>
  );
}

export default CoverThumbnails;
