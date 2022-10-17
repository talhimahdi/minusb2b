import Link from "next/link";
import {
  UserIcon,
  ChevronLeftIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

import { useAuth } from "../RestHelper/useAuth";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Header({ pageName }) {
  const auth = useAuth();
  const router = useRouter();

  // console.log(router);

  switch (pageName) {
    case "/404":
    case "/confirmation-commande/[ref]":
    case "/register":
    case "/connexion":
      return (
        <div className="bg-white pb-5">
          <header className="relative">
            <nav
              aria-label="Top"
              className="max-w-7xl mx-auto px-4 md:px-10 py-5"
            >
              <div className="flex items-center justify-between">
                <div className="h-full flex space-x-8">
                  <Link href="#">
                    <a className="flex items-center text-sm font-medium text-black hover:text-gray-800">
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
                  <a className="flex-none relative w-32 h-16 md:w-48 md:h-20">
                    {/* <Image
                    src="/logo-minus-pro.svg"
                    layout="fill"
                    className="relative"
                  /> */}
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
                      <span className="uppercase font-bold">Produits</span>
                    </a>
                  </Link>
                </div>
              </div>
            </nav>
          </header>
        </div>
      );
      break;

    case "/checkout":
      return (
        <div className="bg-white pb-5">
          <header className="relative">
            <nav aria-label="Top" className="max-w-7xl mx-auto px-4 py-5">
              <div className="flex items-center justify-between">
                {/* Logo */}
                <Link href="/">
                  <a className="flex-none relative w-32 h-16 md:w-48 md:h-20">
                    {/* <Image
                      src="/logo-minus-pro.svg"
                      layout="fill"
                      className="relative"
                    /> */}
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
                      <span className=" uppercase font-bold">Produits</span>
                    </a>
                  </Link>

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
                    <span className=" uppercase font-bold">panier</span>
                  </div>
                </div>
              </div>
            </nav>
          </header>
        </div>
      );

      break;

    case "/products":
      return (
        <div className="fixed left-0 top-10 md:top-12 right-0 bg-white pb-5 z-10">
          <header className="relative">
            <nav aria-label="Top" className="max-w-7xl mx-auto py-5">
              <div className="flex items-center justify-between">
                <div className="h-full flex space-x-8">
                  <Link href="#">
                    <a className="flex items-center text-sm font-medium text-black hover:text-gray-800">
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
                  <a className="flex-none relative w-32 h-16 md:w-48 md:h-20">
                    {/* <Image
                src="/logo-minus-pro.svg"
                layout="fill"
                className="relative"
              /> */}
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
                  <Link href="#">
                    <a className="p-2 flex items-center text-black space-x-2">
                      <UserIcon className="w-6 h-6" aria-hidden="true" />
                      <span className="hidden md:block uppercase font-bold">
                        Compte
                      </span>
                    </a>
                  </Link>

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

    default:
      return <></>;
      break;
  }
}
