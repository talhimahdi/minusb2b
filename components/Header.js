import Link from "next/link";
import {
  UserIcon,
  ChevronLeftIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

import Image from "next/image";

export default function Header() {
  return (
    <div className="bg-white">
      <header className="relative bg-white">
        <nav aria-label="Top" className="max-w-7xl mx-auto px-4 md:px-0 py-5">
          <div className="flex items-center justify-between">
            <div className="h-full flex space-x-8">
              <Link href="#">
                <a className="flex items-center text-sm font-medium text-black hover:text-gray-800">
                  <span className="flex">
                    <ChevronLeftIcon className="w-6 h-6" aria-hidden="true" />
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
            <Link href={"/"}>
              <a className="flex-none relative w-36 h-16 md:w-48 md:h-20">
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
                href="#"
                className="p-2 flex items-center text-black space-x-2"
              >
                <ShoppingCartIcon
                  className="flex-shrink-0 h-6 w-6"
                  aria-hidden="true"
                />
                <span className="hidden md:block uppercase font-bold">
                  panier
                </span>
              </a>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
