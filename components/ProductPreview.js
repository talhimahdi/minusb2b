import { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { XCircleIcon } from "@heroicons/react/solid";
import { Navigation, Pagination } from "swiper";
import Link from "next/link";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import AddToCart from "./AddToCart";
import ResponseModal from "./ResponseModal";

export default function ProductPreview({ isOpen, setIsOpen, product, isKencreEligibility }) {
  const [productState, setProductState] = useState(product);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setIsOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div>
            {modalOpen && (
              <ResponseModal
                title={modalTitle}
                description={""}
                open={modalOpen}
                setModalOpen={setModalOpen}
              />
            )}
            <div className="fixed inset-0 bg-white bg-opacity-90 transition-opacity" />
          </div>
        </Transition.Child>

        <div className="fixed z-10 inset-0 overflow-y-auto ">
          <div className="flex items-center sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel
                className="relative bg-white p-3 sm:p-4 text-left overflow-hidden 
              transform transition-all sm:max-w-7xl mx-auto shadow-[0px_2px_7px_rgba(0,_0,_0,_0.14)]"
              >
                <div className="relative">
                  <div className="absolute top-0 right-0 pt-4 pr-4">
                    <button
                      type="button"
                      className="bg-white rounded-md focus:outline-none focus:ring-0"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XCircleIcon
                        className="h-6 w-6 text-black"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                  <div className="CONTENT flex flex-col md:flex-row space-y-5 md:space-x-5">
                    <div className="bg-white">
                      {/*<img
                        src={product.images[0].src}
                        className="object-center object-fill max-w-md"
                      />*/}
                      <Swiper
                        modules={[Navigation, Pagination]}
                        className="max-w-md"
                        slidesPerView={1}
                        autoplay={true}
                        pagination={{
                          clickable: true,
                        }}
                        // Navigation arrows
                        navigation
                      // onSlideChange={() => console.log("slide change")}
                      // onSwiper={(swiper) => console.log(swiper)}
                      >
                        {productState?.images?.map((image, index) => (
                          <SwiperSlide key={index} className="w-full">
                            <img
                              src={image?.url}
                              className="object-center object-fill max-w-md"
                            />
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                    <div className="flex-1 flex flex-col w-full justify-between">
                      <div className="space-y-5">
                        <div className="space-y-1">
                          <h3 className="leading-none text-3xl text-black">
                            <Link href={"#"}>
                              <a>{productState?.name}</a>
                            </Link>
                          </h3>
                          <h2 className="leading-none text-gray-500 font-semibold">
                            {productState?.legend}
                          </h2>
                        </div>
                        <div className="space-y-1">
                          <h2 className="leading-none text-gray-700 text-sm">
                            {productState?.display_categorie.toUpperCase()}
                          </h2>
                          <h2 className="text-black">
                            Réf : {productState?.reference}
                          </h2>
                        </div>
                        <div className="pt-0 sm:pt-5">
                          <h2 className="text-black text-3xl font-semibold">
                            {parseFloat(productState?.price).toFixed(2)} €
                          </h2>
                        </div>
                        <div className="sm:mt-10">
                          <div
                            dangerouslySetInnerHTML={{
                              __html: productState?.description,
                            }}
                          />
                        </div>
                      </div>

                      <div className="mt-10 flex items-center justify-center sm:justify-start">
                        {
                          productState.reference.startsWith("S0") ? (

                            isKencreEligibility ? (
                              <AddToCart
                                max={150}
                                min={1}
                                product={productState}
                                idProduct={productState?.id}
                                btnVisible={true}
                                btnText={"Je le veux !"}
                                setModalOpen={setModalOpen}
                                modalTitle={"Produit ajouté avec succes!"}
                                setModalTitle={setModalTitle}
                              />
                            ) : (
                              <div className="bg-black w-52 justify-end py-2 text-center">
                                <a href="mailto:contact@minus-editions.fr" className="h-full w-52 text-white block">
                                  Contactez Minus
                                  {/* {productState.reference} */}
                                </a>
                              </div>
                            )
                          ) : (
                            <AddToCart
                              max={150}
                              min={1}
                              product={productState}
                              idProduct={productState?.id}
                              btnVisible={true}
                              btnText={"Je le veux !"}
                              setModalOpen={setModalOpen}
                              modalTitle={"Produit ajouté avec succes!"}
                              setModalTitle={setModalTitle}
                            />
                          )
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
