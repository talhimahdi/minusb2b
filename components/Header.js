import { Fragment, useState } from "react";
import Link from "next/link";
import {
  LogoutIcon,
  MapIcon,
  ViewListIcon,
  LockClosedIcon,
  UserIcon,
  ChevronLeftIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

import { useAuth } from "../RestHelper/useAuth";
import { useRouter } from "next/router";
import Image from "next/image";

import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header({ pageName }) {
  const auth = useAuth();
  const router = useRouter();

  const [popOpen, setPopOpen] = useState(false);

  const menu = [
    {
      name: "Historique commande",
      icon: (
        <ViewListIcon
          className="w-6 h-6 text-gray-800 cursor-pointer"
          aria-hidden="true"
        />
      ),
      click: () => {
        router.push("/account/orders");
      },
    },
    {
      name: "Gérer adresses",
      icon: (
        <MapIcon
          className="w-6 h-6 text-gray-800 cursor-pointer"
          aria-hidden="true"
        />
      ),
      click: () => {
        router.push("/account/addresses");
      },
    },
    {
      name: "Modifier mot de passe",
      icon: (
        <LockClosedIcon
          className="w-6 h-6 text-gray-800 cursor-pointer"
          aria-hidden="true"
        />
      ),
      click: () => {
        router.push("/account/password");
      },
    },
    {
      name: "Se déconnecter",
      icon: (
        <LogoutIcon
          className="w-6 h-6 text-gray-800 cursor-pointer"
          aria-hidden="true"
        />
      ),
      click: () => {
        auth?.logout();
      },
    },
  ];

  // console.log(router);

  switch (pageName) {
    case "/conditions-generales":
    case "/page-attente":
    case "/forget-password":
    case "/recovery-password":
    case "/404":
    case "/confirmation-commande/[ref]":
    case "/register":
    case "/connexion":
      return (
        <div className="bg-white pb-5">
          <header className="relative">
            <nav aria-label="Top" className="mx-6 max-w-7xl md:mx-auto py-5">
              <div className="flex items-center justify-between">
                {/* Logo */}
                <Link href="/">
                  <a className="flex-none relative w-32 h-16 md:w-48 md:h-20">
                    <img
                      src={"/logo-minus-pro.svg"}
                      alt=""
                      className="relative object-fill"
                    />
                  </a>
                </Link>
              </div>
            </nav>
          </header>
        </div>
      );

    case "/checkout":
    case "/account/orders":
    case "/account/orders/[ref]":
    case "/account/addresses":
    case "/account/password":
      return (
        <div className="left-0 top-10 md:top-12 right-0 bg-white pb-5 z-10">
          <header className="relative">
            <nav aria-label="Top" className="mx-6 max-w-7xl md:mx-auto py-5">
              <div className="flex items-center justify-between">
                {/* Logo */}
                <Link href="/">
                  <a className="flex-none relative w-32 h-16 md:w-48 md:h-20">
                    <img
                      src={"/logo-minus-pro.svg"}
                      alt=""
                      className="relative object-fill"
                    />
                  </a>
                </Link>

                <div className="flex items-center justify-end space-x-0 md:space-x-6">
                  {/* Produits */}
                  <Link href="/products">
                    <a className="p-2 flex items-center text-black space-x-2">
                      <span className="w-5 h-5">
                        <img
                          src={"/images/icons/books.svg"}
                          alt=""
                          className="relative object-fill"
                        />
                      </span>
                      <span className="hidden md:block uppercase font-bold">
                        Produits
                      </span>
                    </a>
                  </Link>

                  {/* Account */}
                  <Popover className="relative">
                    {({ open }) => (
                      <>
                        <Popover.Button
                          className={classNames(
                            open ? "text-gray-900" : "text-gray-500",
                            "group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-0 focus:ring-offset-2"
                          )}
                        >
                          <div className="p-2 pr-0 md:pr-2 flex items-center text-black space-x-2">
                            <UserIcon className="w-6 h-6" aria-hidden="true" />
                            <span className="hidden md:block uppercase font-bold">
                              Compte
                            </span>
                          </div>
                          <ChevronDownIcon
                            className={classNames(
                              open ? "text-gray-600" : "text-gray-400",
                              "h-5 w-5 group-hover:text-gray-500"
                            )}
                            aria-hidden="true"
                          />
                        </Popover.Button>

                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1"
                        >
                          <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-xs -translate-x-1/2 transform px-2 sm:px-0">
                            <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                              <div className="relative grid gap-4 bg-white p-5">
                                {menu.map((item) => (
                                  <div
                                    key={item.name}
                                    onClick={item.click}
                                    className="-m-3 flex space-x-2 rounded-md p-3 transition duration-150 ease-in-out hover:bg-gray-50 cursor-pointer"
                                  >
                                    {item.icon}
                                    <p className="text-base font-medium text-gray-900">
                                      {item.name}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>

                  {/* Cart */}
                  <div
                    className="p-2 flex items-center text-black space-x-2 cursor-pointer"
                    onClick={() =>
                      router.push({
                        pathname: "/products",
                        query: { cart: "open" },
                      })
                    }
                  >
                    <ShoppingCartIcon
                      className="flex-shrink-0 h-6 w-6"
                      aria-hidden="true"
                    />
                    <span className="hidden md:block uppercase font-bold">
                      panier
                    </span>
                  </div>
                </div>
              </div>
            </nav>
          </header>
        </div>
      );

    case "/products":
      return (
        <div className="fixed left-0 top-10 md:top-12 right-0 bg-white pb-5 z-10">
          <header className="relative">
            <nav aria-label="Top" className="mx-6 xl:max-w-7xl xl:mx-auto py-5">
              <div className="flex items-center justify-between">
                {/* Logo */}
                <Link href="/">
                  <a className="flex-none relative w-32 h-16 md:w-48 md:h-20">
                    <img
                      src={"/logo-minus-pro.svg"}
                      alt=""
                      className="relative object-fill"
                    />
                  </a>
                </Link>

                <div className="flex items-center justify-end space-x-0 md:space-x-6">
                  {/* Produits */}
                  <Link href="/products">
                    <a className="p-2 flex items-center text-black space-x-2">
                      <span className="w-5 h-5">
                        <img
                          src={"/images/icons/books.svg"}
                          alt=""
                          className="relative object-fill"
                        />
                      </span>
                      <span className="hidden md:block uppercase font-bold">
                        Produits
                      </span>
                    </a>
                  </Link>

                  {/* Account */}
                  <Popover className="relative">
                    {({ open }) => (
                      <>
                        <Popover.Button
                          className={classNames(
                            open ? "text-gray-900" : "text-gray-500",
                            "group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-0 focus:ring-offset-2"
                          )}
                        >
                          <div className="p-2 pr-0 md:pr-2 flex items-center text-black space-x-2">
                            <UserIcon className="w-6 h-6" aria-hidden="true" />
                            <span className="hidden md:block uppercase font-bold">
                              Compte
                            </span>
                          </div>
                          <ChevronDownIcon
                            className={classNames(
                              open ? "text-gray-600" : "text-gray-400",
                              "h-5 w-5 group-hover:text-gray-500"
                            )}
                            aria-hidden="true"
                          />
                        </Popover.Button>

                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1"
                        >
                          <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-xs -translate-x-1/2 transform px-2 sm:px-0">
                            <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                              <div className="relative grid gap-4 bg-white p-5">
                                {menu.map((item) => (
                                  <div
                                    key={item.name}
                                    onClick={item.click}
                                    className="-m-3 flex space-x-2 rounded-md p-3 transition duration-150 ease-in-out hover:bg-gray-50 cursor-pointer"
                                  >
                                    {item.icon}
                                    <p className="text-base font-medium text-gray-900">
                                      {item.name}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>

                  {/* Cart */}
                  <div
                    className="p-2 flex items-center text-black space-x-2 cursor-pointer"
                    onClick={() => {
                      if (auth?.cart?.products_count > 0)
                        auth?.setOpenCart((prev) => !prev);
                    }}
                  >
                    <ShoppingCartIcon
                      className="flex-shrink-0 h-6 w-6"
                      aria-hidden="true"
                    />
                    <span className="hidden md:block uppercase font-bold">
                      panier
                    </span>
                  </div>
                </div>
              </div>
            </nav>
          </header>
        </div>
      );

    case "/catalogue":
      return (
        <div className="fixed left-0 top-10 md:top-12 right-0 bg-white pb-5 z-10">
          <header className="relative">
            <nav aria-label="Top" className="mx-6 xl:max-w-7xl xl:mx-auto py-5">
              <div className="flex items-center justify-between">
                {/* Logo */}
                <Link href="/">
                  <a className="flex-none relative w-32 h-16 md:w-48 md:h-20">
                    <img
                      src={"/logo-minus-pro.svg"}
                      alt=""
                      className="relative object-fill"
                    />
                  </a>
                </Link>

              </div>
            </nav>
          </header>
        </div>
      );

    default:
      return <></>;
      break;
  }
}
