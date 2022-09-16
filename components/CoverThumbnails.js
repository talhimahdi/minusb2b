import React, { useState } from "react";
import Image from "next/image";
// import Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper styles
import "swiper/css";
import ImagePopup from "./ImagePopup";

function CoverThumbnails({ slides, slides_ }) {
  const [slide1open, setSlide1Open] = useState(false);
  const [slide2open, setSlide2Open] = useState(false);
  const [slide3open, setSlide3Open] = useState(false);

  const renderSlide = (numSlide) => {
    // console.log(slides_["slide_" + numSlide + "_type"]);

    switch (slides_["slide_" + numSlide + "_type"]) {
      case "image":
        return (
          <SwiperSlide className="h-full shadow-[0px_2px_7px_rgba(0,_0,_0,_0.14)]">
            <img
              src={slides_["slide_" + numSlide + "_image_url"]}
              alt=""
              className="object-fill"
            />
          </SwiperSlide>
        );
        break;

      case "lien":
        return (
          <SwiperSlide className="h-full shadow-[0px_2px_7px_rgba(0,_0,_0,_0.14)] cursor-pointer">
            <a
              href={slides_["slide_" + numSlide + "_lien"]}
              target={"_blank"}
              rel="noreferrer"
            >
              <img
                src={slides_["slide_" + numSlide + "_image_url"]}
                alt=""
                className="object-fill"
              />
            </a>
          </SwiperSlide>
        );
        break;

      case "popup":
        return (
          <SwiperSlide
            className="h-full shadow-[0px_2px_7px_rgba(0,_0,_0,_0.14)] cursor-pointer"
            onClick={() => {
              numSlide == 1 && setSlide1Open(true);
              numSlide == 2 && setSlide2Open(true);
              numSlide == 3 && setSlide3Open(true);
            }}
          >
            <img
              src={slides_["slide_" + numSlide + "_image_url"]}
              alt=""
              className="object-fill"
            />
          </SwiperSlide>
        );
        break;

      default:
        break;
    }
  };

  //   {
  //     "slide_1_type": "image",
  //     "slide_1_image_url": "http://minus-produits.prismatic.digital/modules/minus_slider/views/img/slides/2c51617b9f41d56096d24dd1b70cf17e.png",
  //     "slide_1_lien": false,
  //     "slide_1_popup_image_url": false,
  //     "slide_1_popup_title": false,
  //     "slide_1_popup_desc": false,
  // }

  return (
    <div className="bg-white h-48 md:h-56">
      <Swiper
        className="relative max-w-7xl mx-auto h-full w-full px-3 md:px-0"
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
        {renderSlide(1)}
        {renderSlide(2)}
        {renderSlide(3)}
        {/* <SwiperSlide className="h-full shadow-[0px_2px_7px_rgba(0,_0,_0,_0.14)]">
          <img src={slides.image_1_url} alt="" className="object-fill" />
        </SwiperSlide>

        <SwiperSlide className="h-full shadow-[0px_2px_7px_rgba(0,_0,_0,_0.14)] cursor-pointer">
          <a href={slides.image_2_link} target={"_blank"} rel="noreferrer">
            <img src={slides.image_2_url} alt="" className="object-fill" />
          </a>
        </SwiperSlide>

        <SwiperSlide
          className="h-full shadow-[0px_2px_7px_rgba(0,_0,_0,_0.14)] cursor-pointer"
          onClick={() => setOpen(true)}
        >
          <img src={slides.image_3_url} alt="" className="object-fill" />
        </SwiperSlide> */}
      </Swiper>
      {/* <ImagePopup
        isOpen={open}
        setIsOpen={setOpen}
        image_url={slides.image_3_popup_img_url}
        title={slides.image_3_popup_title}
        description={slides.image_3_popup_desc}
      /> */}

      <ImagePopup
        isOpen={slide1open}
        setIsOpen={setSlide1Open}
        image_url={slides_.slide_1_popup_image_url}
        title={slides_.slide_1_popup_title}
        description={slides_.slide_1_popup_desc}
      />

      <ImagePopup
        isOpen={slide2open}
        setIsOpen={setSlide2Open}
        image_url={slides_.slide_2_popup_image_url}
        title={slides_.slide_2_popup_title}
        description={slides_.slide_2_popup_desc}
      />

      <ImagePopup
        isOpen={slide3open}
        setIsOpen={setSlide3Open}
        image_url={slides_.slide_3_popup_image_url}
        title={slides_.slide_3_popup_title}
        description={slides_.slide_3_popup_desc}
      />
    </div>
  );
}

export default CoverThumbnails;
