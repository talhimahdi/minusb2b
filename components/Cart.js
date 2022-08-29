import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { XCircleIcon as RemoveIcon } from "@heroicons/react/solid";
import { Dialog, Transition } from "@headlessui/react";
import {
  XCircleIcon,
  ChevronLeftIcon,
  UserIcon,
} from "@heroicons/react/outline";
import TopNavbar from "./TopNavbar";
import AddToCart from "./AddToCart";
import { useAuth } from "../RestHelper/useAuth";
import ProgressBar from "./ProgressBar";
import { Urls } from "../configs/configs";
import ResponseModal from "./ResponseModal";

function Cart({ open, close, setOpenCart }) {
  const auth = useAuth();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");

  const removeProduct = async (idProduct) => {
    const result = await auth?.removeProduct(idProduct);

    if (result) {
      if (auth?.cart?.products_count == 0) {
        setOpenCart(false);
      }
      setModalTitle("Produit supprimé avec succes!");
      setModalOpen(true);
    }
  };

  return (
    <>
      <Transition.Root show={open} as={"div"}>
        <Dialog
          as="div"
          className="absolute top-0 right-0 bottom-0 left-0 h-full w-full z-50"
          onClose={close}
        >
          <div className="absolute inset-0 top-0 right-0 left-0 bottom-0">
            <div className="pointer-events-none fixed inset-y-0 left-0 right-0 flex max-w-full">
              <Transition.Child
                as={"div"}
                enter="transform transition ease-in-out duration-300"
                enterFrom="translate-y-full"
                enterTo="translate-y-0"
                leave="transform transition ease-in-out duration-300"
                leaveFrom="translate-y-0"
                leaveTo="translate-y-full"
              >
                <Dialog.Panel className="pointer-events-auto h-full w-screen ">
                  <div className="flex h-full flex-col bg-white">
                    <div className="HEADER">
                      <TopNavbar />
                      <nav
                        aria-label="Top"
                        className="py-5 shadow-[inset_0_-2px_5px_0_rgb(188_188_188_/_0.2)]"
                      >
                        <div className="flex items-center justify-between md:max-w-7xl mx-auto">
                          <div className="h-full flex space-x-8">
                            <Link href="#">
                              <a className="flex items-center focus:outline-none text-sm font-medium text-black">
                                <span className="flex">
                                  <ChevronLeftIcon
                                    className="w-6 h-6"
                                    aria-hidden="true"
                                  />

                                  <div>
                                    <span className="hidden md:block text-base font-bold">
                                      RETOURNER SUR LE SITE PRINCIPAL
                                    </span>
                                    <span className="block md:hidden  text-base font-bold">
                                      SITE B2C
                                    </span>
                                  </div>
                                </span>
                              </a>
                            </Link>
                          </div>

                          {/* Logo */}
                          <Link href="/">
                            <a className="flex-none relative w-36 h-16 md:w-48 md:h-20">
                              {/* <Image
                            src="/logo-minus-pro.svg"
                            layout="fill"
                            className="relative"
                            alt=""
                          /> */}
                              <img
                                src="/logo-minus-pro.svg"
                                alt=""
                                className="relative"
                              />
                            </a>
                          </Link>

                          <div className="flex items-center justify-end space-x-0 md:space-x-6">
                            {/* Account */}
                            <Link href="#">
                              <a className="p-2 hidden md:flex items-center text-black space-x-2">
                                <UserIcon
                                  className="w-6 h-6"
                                  aria-hidden="true"
                                />
                                <span className="hidden md:block uppercase font-bold">
                                  Compte
                                </span>
                              </a>
                            </Link>

                            {/* Cart */}
                            <a
                              onClick={close}
                              className="p-2 flex items-center text-black space-x-2 cursor-pointer"
                            >
                              <XCircleIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                              <span className="hidden md:block uppercase font-bold">
                                FERMER LE PANIER
                              </span>
                              <span className="block md:hidden uppercase font-bold">
                                FERMER
                              </span>
                            </a>
                          </div>
                        </div>
                      </nav>
                    </div>
                    {modalOpen && (
                      <ResponseModal
                        title={modalTitle}
                        description={""}
                        open={modalOpen}
                        setModalOpen={setModalOpen}
                      />
                    )}
                    {/* New Layout */}
                    <div className="block md:hidden overflow-x-hidden overflow-y-auto bg-white">
                      <div className="flex flex-col p-5 space-y-14">
                        <div className="space-y-6">
                          <div className="space-y-2">
                            {auth?.offers?.map((offer) => (
                              <ProgressBar
                                key={offer?.title + offer?.amount}
                                title={offer?.title}
                                amount={auth?.cart?.totals?.total?.amount}
                                total={offer?.amount}
                              />
                            ))}
                          </div>
                          <section
                            aria-labelledby="summary-heading"
                            className="bg-[#EEEEEE] px-4 py-6 sm:p-6 lg:p-8 lg:mt-0 lg:col-span-3 space-y-4
                            relative before:content-[' h'] 
                            before:absolute 
                            before:-bottom-8 before:left-12
                            before:w-8 
                            before:h-8 
                            before:border-l-16 before:border-l-transparent 
                            before:border-r-16 before:border-r-transparent 
                            before:border-t-16 before:border-t-[#EEEEEE]"
                          >
                            <div className="space-y-2">
                              <div className="flex items-center justify-between">
                                <div className="text-sm text-gray-600">
                                  <h2
                                    id="summary-heading"
                                    className="text-xl font-medium text-gray-900 font-londrina"
                                  >
                                    {auth?.cart?.summary_string}
                                  </h2>
                                </div>
                                <div className="text-sm font-medium text-gray-900">
                                  <h2
                                    id="summary-heading"
                                    className="text-2xl font-medium text-gray-900 font-londrina"
                                  >
                                    {auth?.cart?.totals?.total?.value}
                                  </h2>
                                </div>
                              </div>

                              <div className="flex items-center justify-between ">
                                <div className="text-sm text-gray-600">
                                  <h2
                                    id="summary-heading"
                                    className="text-xl font-medium text-gray-900"
                                  >
                                    Livraison
                                  </h2>
                                </div>
                                <div className="text-sm font-medium text-gray-900">
                                  <h2
                                    id="summary-heading"
                                    className="text-2xl font-medium text-gray-900 font-londrina"
                                  >
                                    {auth?.cart?.subtotals?.shipping?.value}
                                  </h2>
                                </div>
                              </div>
                            </div>

                            <div className="border-t-2 border-[#aaaaaa]"></div>

                            <div className="space-y-2">
                              <div className="flex items-center justify-between ">
                                <div className="text-sm text-gray-600">
                                  <h2
                                    id="summary-heading"
                                    className="text-xl font-medium text-gray-900"
                                  >
                                    Total (HT)
                                  </h2>
                                </div>
                                <div className="text-sm font-medium text-gray-900">
                                  <h2
                                    id="summary-heading"
                                    className="text-2xl font-medium text-gray-900 font-londrina"
                                  >
                                    {
                                      auth?.cart?.totals?.total_excluding_tax
                                        ?.value
                                    }
                                  </h2>
                                </div>
                              </div>

                              <div className="flex items-center justify-between">
                                <div className="text-sm text-gray-600">
                                  <h2
                                    id="summary-heading"
                                    className="text-xl font-medium text-gray-900 font-londrina"
                                  >
                                    Total (TTC)
                                  </h2>
                                </div>
                                <div className="text-sm font-medium text-gray-900">
                                  <h2
                                    id="summary-heading"
                                    className="text-2xl font-medium text-gray-900 font-londrina"
                                  >
                                    {
                                      auth?.cart?.totals?.total_including_tax
                                        ?.value
                                    }
                                  </h2>
                                </div>
                              </div>

                              <div className="flex items-center justify-between ">
                                <div className="text-sm text-gray-600">
                                  <h2
                                    id="summary-heading"
                                    className="text-xl font-medium text-gray-900"
                                  >
                                    Taxes
                                  </h2>
                                </div>
                                <div className="text-sm font-medium text-gray-900">
                                  <h2
                                    id="summary-heading"
                                    className="text-2xl font-medium text-gray-900 font-londrina"
                                  >
                                    {auth?.cart?.totals?.taxes?.value}
                                  </h2>
                                </div>
                              </div>
                            </div>
                          </section>
                          <div className="flex h-full">
                            <Link href={"/checkout"}>
                              <a className="uppercase items-center align-baseline px-10 py-4 border h-full border-gray-300 shadow-sm text-base font-medium  text-white bg-black focus:outline-none">
                                Passer commande
                              </a>
                            </Link>
                          </div>
                        </div>
                        <div className="PRODUCTS space-y-5">
                          {auth?.cart?.products?.map((product) => (
                            <div
                              key={product?.id_product}
                              className="space-y-5 border-b-2 pb-5"
                            >
                              <div className="flex items-start justify-between ">
                                <div className="flex items-center justify-between space-x-4">
                                  <div>
                                    <img
                                      src={product?.image_url}
                                      alt={product?.name}
                                      className="w-14 h-14 rounded-md object-center object-cover "
                                    />
                                  </div>
                                  <div className="space-y-1 justify-self-start">
                                    <h3 className="leading-none text-start text-2xl text-black font-londrina overflow-hidden">
                                      <a href="#" className="">
                                        {product?.name.length > 27
                                          ? product?.name
                                              .slice(0, 27)
                                              .concat("...")
                                          : product?.name}
                                      </a>
                                    </h3>
                                    <h2 className="leading-none text-md text-black">
                                      {product?.legend}
                                    </h2>
                                  </div>
                                </div>
                                <span className="w-6 h-6 cursor-pointer">
                                  <RemoveIcon
                                    onClick={() =>
                                      removeProduct(product?.id_product)
                                    }
                                    className="w-7 h-7"
                                    aria-hidden="true"
                                  />
                                </span>
                              </div>
                              <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 space-x-1 items-start justify-between">
                                <div className="flex space-x-5">
                                  <div className="flex flex-col">
                                    <div className="text-black space-x-2">
                                      <span className="text-2xl font-londrina">
                                        {parseFloat(product?.price).toFixed(2) +
                                          auth?.cart?.currency_symbol}
                                      </span>
                                      <span className="text-lg">HT</span>
                                    </div>
                                    <div className="text-black space-x-2">
                                      <span className="text-2xl font-londrina">
                                        {parseFloat(
                                          product?.product_taxe
                                        ).toFixed(2) +
                                          auth?.cart?.currency_symbol}
                                      </span>
                                      <span className="text-lg">
                                        {product?.tax_name}
                                      </span>
                                    </div>
                                  </div>
                                  <div className="flex flex-col">
                                    <div className="text-black space-x-2">
                                      <span className="text-2xl font-londrina">
                                        {product?.total +
                                          auth?.cart?.currency_symbol}
                                      </span>
                                      <span className="text-lg">HT</span>
                                    </div>
                                    <div className="text-black space-x-2">
                                      <span className="text-2xl font-londrina">
                                        {parseFloat(
                                          product?.cart_quantity *
                                            product?.product_taxe
                                        ).toFixed(2) +
                                          auth?.cart?.currency_symbol}
                                      </span>
                                      <span className="text-lg">
                                        {product?.tax_name}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex">
                                  <AddToCart
                                    max={150}
                                    min={1}
                                    product={product}
                                    defaultQuantity={product?.cart_quantity}
                                    btnVisible={false}
                                    idProduct={product?.id_product}
                                    btnText={"Modifier"}
                                  />
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    {/* End New Layout */}
                    <div className="hidden md:block relative p-5 md:p-0 md:pt-12 flex-1 overflow-x-hidden overflow-y-auto">
                      <div className="pb-24 space-y-5 md:max-w-7xl mx-auto">
                        <div className="flex flex-col md:flex-row items-end">
                          <div className="block flex-1 w-full h-full space-y-2">
                            {auth?.offers?.map((offer) => (
                              <ProgressBar
                                key={offer?.title + offer?.amount}
                                title={offer?.title}
                                amount={auth?.cart?.totals?.total?.amount}
                                total={offer?.amount}
                              />
                            ))}
                          </div>
                          <div className="flex-1 h-full">
                            <div className="h-full">
                              <div className="flex items-center justify-center md:justify-end h-full">
                                <Link href={"/checkout"}>
                                  <a className="flex uppercase items-center align-baseline px-10 py-2 border h-full border-gray-300 shadow-sm text-base font-medium  text-white bg-black focus:outline-none">
                                    Passer commande
                                  </a>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>

                        <form className="lg:grid lg:grid-cols-12 lg:gap-x-6 lg:items-start xl:gap-x-6">
                          <section
                            aria-labelledby="cart-heading"
                            className="lg:col-span-9"
                          >
                            <div className="w-full space-y-3">
                              {auth?.cart?.products?.map((product) => (
                                <div
                                  key={product?.id_product}
                                  className="grid grid-flow-row grid-cols-12 items-center py-5 border-b-2 last:border-b-0 gap-2"
                                >
                                  <div className="flex-1 space-x-10 items-center justify-between col-span-5">
                                    <div className="flex items-center space-x-4">
                                      <span className="w-6 h-6 cursor-pointer">
                                        <RemoveIcon
                                          onClick={() =>
                                            removeProduct(product?.id_product)
                                          }
                                          className="w-5 h-5"
                                          aria-hidden="true"
                                        />
                                      </span>
                                      <img
                                        src={product?.image_url}
                                        alt={product?.name}
                                        className="w-16 h-16 rounded-sm object-center object-cover "
                                      />
                                      <div className="space-y-1">
                                        <h3 className="leading-none text-start text-2xl text-black font-londrina overflow-hidden">
                                          <a href="#" className="">
                                            {product?.name.length > 27
                                              ? product?.name
                                                  .slice(0, 27)
                                                  .concat("...")
                                              : product?.name}
                                          </a>
                                        </h3>
                                        <h2 className="leading-none text-md text-black">
                                          {product?.legend}
                                        </h2>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-span-2">
                                    <div className="text-black space-x-2">
                                      <span className="text-2xl font-londrina">
                                        {parseFloat(product?.price).toFixed(2) +
                                          auth?.cart?.currency_symbol}
                                      </span>
                                      <span className="text-lg">HT</span>
                                    </div>
                                    <div className="text-black space-x-2">
                                      <span className="text-2xl font-londrina">
                                        {parseFloat(
                                          product?.product_taxe
                                        ).toFixed(2) +
                                          auth?.cart?.currency_symbol}
                                      </span>
                                      <span className="text-lg">
                                        {product?.tax_name}
                                      </span>
                                    </div>
                                  </div>
                                  <div className="col-span-3 ">
                                    <AddToCart
                                      max={150}
                                      min={1}
                                      product={product}
                                      defaultQuantity={product?.cart_quantity}
                                      btnVisible={false}
                                      idProduct={product?.id_product}
                                      btnText={"Modifier"}
                                      setModalOpen={setModalOpen}
                                      modalTitle={
                                        "Produit modifié avec succes!"
                                      }
                                      setModalTitle={setModalTitle}
                                    />
                                  </div>
                                  <div className="col-span-2 ">
                                    <div className="text-black space-x-2">
                                      <span className="text-2xl font-londrina">
                                        {product?.total +
                                          auth?.cart?.currency_symbol}
                                      </span>
                                      <span className="text-lg">HT</span>
                                    </div>
                                    <div className="text-black space-x-2">
                                      <span className="text-2xl font-londrina">
                                        {parseFloat(
                                          product?.cart_quantity *
                                            product?.product_taxe
                                        ).toFixed(2) +
                                          auth?.cart?.currency_symbol}
                                      </span>
                                      <span className="text-lg">
                                        {product?.tax_name}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </section>

                          {/* Order summary */}
                          <section
                            aria-labelledby="summary-heading"
                            className="mt-16 bg-[#EEEEEE] px-4 py-6 sm:p-6 lg:p-8 lg:mt-0 lg:col-span-3 space-y-4 
                            relative before:content-[''] 
                            before:absolute 
                            before:-top-8 before:right-12
                            before:w-8 
                            before:h-8
                            before:border-l-16 before:border-l-transparent 
                            before:border-r-16 before:border-r-transparent 
                            before:border-b-16 before:border-b-[#EEEEEE] 
                            "
                          >
                            <div className="space-y-2">
                              <div className="flex items-center justify-between">
                                <div className="text-sm text-gray-600">
                                  <h2
                                    id="summary-heading"
                                    className="text-xl font-medium text-gray-900 font-londrina"
                                  >
                                    {auth?.cart?.summary_string}
                                  </h2>
                                </div>
                                <div className="text-sm font-medium text-gray-900">
                                  <h2
                                    id="summary-heading"
                                    className="text-2xl font-medium text-gray-900 font-londrina"
                                  >
                                    {auth?.cart?.totals?.total?.value}
                                  </h2>
                                </div>
                              </div>

                              <div className="flex items-center justify-between ">
                                <div className="text-sm text-gray-600">
                                  <h2
                                    id="summary-heading"
                                    className="text-xl font-medium text-gray-900"
                                  >
                                    Livraison
                                  </h2>
                                </div>
                                <div className="text-sm font-medium text-gray-900">
                                  <h2
                                    id="summary-heading"
                                    className="text-2xl font-medium text-gray-900 font-londrina"
                                  >
                                    {auth?.cart?.subtotals?.shipping?.value}
                                  </h2>
                                </div>
                              </div>
                            </div>

                            <div className="border-t-2 border-[#aaaaaa]"></div>

                            <div className="space-y-2">
                              <div className="flex items-center justify-between ">
                                <div className="text-sm text-gray-600">
                                  <h2
                                    id="summary-heading"
                                    className="text-xl font-medium text-gray-900"
                                  >
                                    Total (HT)
                                  </h2>
                                </div>
                                <div className="text-sm font-medium text-gray-900">
                                  <h2
                                    id="summary-heading"
                                    className="text-2xl font-medium text-gray-900 font-londrina"
                                  >
                                    {
                                      auth?.cart?.totals?.total_excluding_tax
                                        ?.value
                                    }
                                  </h2>
                                </div>
                              </div>

                              <div className="flex items-center justify-between">
                                <div className="text-sm text-gray-600">
                                  <h2
                                    id="summary-heading"
                                    className="text-xl font-medium text-gray-900 font-londrina"
                                  >
                                    Total (TTC)
                                  </h2>
                                </div>
                                <div className="text-sm font-medium text-gray-900">
                                  <h2
                                    id="summary-heading"
                                    className="text-2xl font-medium text-gray-900 font-londrina"
                                  >
                                    {
                                      auth?.cart?.totals?.total_including_tax
                                        ?.value
                                    }
                                  </h2>
                                </div>
                              </div>

                              <div className="flex items-center justify-between ">
                                <div className="text-sm text-gray-600">
                                  <h2
                                    id="summary-heading"
                                    className="text-xl font-medium text-gray-900"
                                  >
                                    Taxes
                                  </h2>
                                </div>
                                <div className="text-sm font-medium text-gray-900">
                                  <h2
                                    id="summary-heading"
                                    className="text-2xl font-medium text-gray-900 font-londrina"
                                  >
                                    {auth?.cart?.totals?.taxes?.value}
                                  </h2>
                                </div>
                              </div>
                            </div>
                          </section>
                        </form>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}

export default Cart;
