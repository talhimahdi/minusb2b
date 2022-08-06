import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CheckIcon,
  LockClosedIcon,
  ClockIcon,
  QuestionMarkCircleIcon,
  ShoppingBagIcon,
  XIcon,
  XCircleIcon as RemoveIcon,
} from "@heroicons/react/solid";
import { Dialog, Transition } from "@headlessui/react";
import {
  XCircleIcon,
  ChevronLeftIcon,
  UserIcon,
} from "@heroicons/react/outline";
import TopNavbar from "./TopNavbar";
import QuantityInput from "./QuantityInput";
import AddToCart from "./AddToCart";
import { Urls } from "../configs/configs";

const productsOLD = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    price: "32.00",
    color: "Sienna",
    inStock: true,
    size: "Large",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in sienna.",
  },
  {
    id: 2,
    name: "Basic Tee",
    href: "#",
    price: "32.00",
    color: "Black",
    inStock: false,
    leadTime: "3–4 weeks",
    size: "Large",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-02.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
  },
  {
    id: 3,
    name: "Nomad Tumbler",
    href: "#",
    price: "35.00",
    color: "White",
    inStock: true,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-03.jpg",
    imageAlt: "Insulated bottle with white base and black snap lid.",
  },
];
const products = [
  {
    id: 1,
    name: "RENC’ART AVEC L’ART",
    slug: "3 JEUX SUR L’HISTOIRE DE L’ART",
    href: "#",
    price: "27,00 €",
    priceHt: "10,30 €",
    priceTVA: "1,60 €",
    imageSrc: "../images/products/product-1.png",
    details: [
      "22 œuvresmajeures de l’Histoire de l’Art",
      "3 façons de jouer pour alterner le plaisir d’apprendre",
      "Une façon ludique d’apprendre les bases de l’Art",
      "À partir de 5 ans pour jouer en famille",
      "Avec un livret explicatif pour en savoir plus sur les œuvres et les artistes",
    ],
  },
  {
    id: 2,
    name: "COMMENT TRAÎNER SES PARENTS AU MUSÉE ?",
    slug: "CAHIER D’ACTIVITÉS",
    href: "#",
    price: "16,00 €",
    priceHt: "5,30 € HT",
    priceTVA: "1,60 € TVA (5,5%)",
    imageSrc: "../images/products/product-2.png",
    details: [
      "40 astuces pour s’amuser follement au musée",
      "Pour que les sorties familiales aient le goût de la découverte et du fun",
      "Des bingos, des jeux, des top 3 et autres activités",
      "Vous allez faire pétiller n’importe quelle balade dans un musée",
      "Un format de poche à emporter dans tous les lieux culturels",
    ],
  },
];

function Cart({ open, close }) {
  const [cartState, setCartState] = useState({});

  useEffect(
    () => async () => {
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };

      await fetch(Urls.getCart, requestOptions)
        .then((response) => response?.json())
        .then((result) => {
          // if (result?.code == 200) {
          // setCartState(result?.psdata);
          console.log(result);
          // }
        })
        .catch((error) => console.log("error", error));
    },
    []
  );

  const onQuantityChange = (quantity) => {
    // setThisProduct({ ...thisProduct, quantity });
  };

  return (
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
                  <div className="">
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
                        <a
                          href="/"
                          className="flex-none relative w-36 h-16 md:w-48 md:h-20"
                        >
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

                        <div className="flex items-center justify-end space-x-0 md:space-x-6">
                          {/* Account */}
                          <a
                            href="#"
                            className="p-2 flex items-center text-black space-x-2"
                          >
                            <UserIcon className="w-6 h-6" aria-hidden="true" />
                            <span className="hidden md:block uppercase font-bold">
                              Compte
                            </span>
                          </a>

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
                          </a>
                        </div>
                      </div>
                    </nav>
                  </div>
                  <div className="relative pt-12 flex-1 overflow-x-hidden overflow-y-auto">
                    {/* Replace with your content */}
                    <div className="pb-24 space-y-5 md:max-w-7xl mx-auto">
                      <div className="flex items-center h-10">
                        <div className="hidden md:block flex-1 h-full">
                          <div className="relative flex justify-between w-full h-full border border-secondary">
                            <div className="absolute bg-primary w-[64%] h-full"></div>
                            <div className="absolute p-2 h-full">
                              FRANCO DÈS 250€ D&apos;ACHATS !
                            </div>
                            <div className="absolute p-2 h-full right-0 text-end">
                              180,65€ / 250,00€
                            </div>
                          </div>
                        </div>
                        <div className="flex-1 h-full">
                          <div className="h-full">
                            <div className="flex items-center justify-center md:justify-end h-full">
                              <Link href={"/checkout"}>
                                <a className="flex uppercase items-center align-baseline px-10 border h-full border-gray-300 shadow-sm text-base font-medium  text-white bg-black focus:outline-none">
                                  Passer commande
                                </a>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>

                      <form className="lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-16">
                        <section
                          aria-labelledby="cart-heading"
                          className="lg:col-span-8"
                        >
                          <h2 id="cart-heading" className="sr-only">
                            Items in your shopping cart
                          </h2>

                          <ul role="list" className="space-y-4 mt-10">
                            {products.map((product) => (
                              <li
                                key={product.id}
                                className="flex flex-col md:flex-row items-center justify-between"
                              >
                                <div className="flex-1 space-x-10 items-center justify-between">
                                  <div className="flex items-center space-x-4">
                                    <span className="w-6 h-6 cursor-pointer">
                                      <RemoveIcon
                                        className="w-5 h-5"
                                        aria-hidden="true"
                                      />
                                    </span>
                                    <img
                                      src={product.imageSrc}
                                      alt={product.name}
                                      className="w-20 h-20 rounded-md object-center object-cover "
                                    />
                                    <div className="space-y-1">
                                      <h3 className="leading-none text-start text-2xl text-black font-londrina overflow-hidden">
                                        <a href="#" className="">
                                          {product.name.length > 27
                                            ? product.name
                                                .slice(0, 27)
                                                .concat("...")
                                            : product.name}
                                        </a>
                                      </h3>
                                      <h2 className="leading-none text-md text-black">
                                        3 JEUX SUR L’HISTOIRE DE L’ART
                                      </h2>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex-1 flex flex-col md:flex-row space-y-10 md:space-y-0 space-x-10 items-center justify-between">
                                  <div className="flex">
                                    <div className="space-y-1">
                                      <h3 className="leading-none text-2xl text-black font-londrina">
                                        5,30€ HT
                                      </h3>
                                      <h2 className="leading-none text-md text-black font-londrina">
                                        1,60€ TVA (5.5%)
                                      </h2>
                                    </div>
                                  </div>
                                  <div className="flex">
                                    <AddToCart
                                      max={150}
                                      min={1}
                                      // onChange={onQuantityChange}
                                      product={product}
                                    />
                                    {/* <div className="space-y-1">
                                      <QuantityInput
                                        
                                      />
                                    </div> */}
                                  </div>
                                  <div className="flex">
                                    <div className="space-y-1">
                                      <h3 className="leading-none text-2xl text-black font-londrina">
                                        5,30€ HT
                                      </h3>
                                      <h2 className="leading-none text-md text-black font-londrina">
                                        1,60€ TVA (5.5%)
                                      </h2>
                                    </div>
                                  </div>
                                </div>
                                <div></div>
                              </li>
                            ))}
                          </ul>
                        </section>

                        {/* Order summary */}
                        <section
                          aria-labelledby="summary-heading"
                          className="mt-16 bg-[#EEEEEE] px-4 py-6 sm:p-6 lg:p-8 lg:mt-0 lg:col-span-4 space-y-4"
                        >
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <div className="text-sm text-gray-600">
                                <h2
                                  id="summary-heading"
                                  className="text-xl font-medium text-gray-900 font-londrina"
                                >
                                  32 articles
                                </h2>
                              </div>
                              <div className="text-sm font-medium text-gray-900">
                                <h2
                                  id="summary-heading"
                                  className="text-2xl font-medium text-gray-900 font-londrina"
                                >
                                  150,32 €
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
                                  25,30 €
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
                                  175,62 €
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
                                  215,65 €
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
                                  42,02 €
                                </h2>
                              </div>
                            </div>
                          </div>
                        </section>
                      </form>
                    </div>
                    {/* /End replace */}
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

export default Cart;
