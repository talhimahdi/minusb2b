import Image from "next/image";
import { MailIcon, ChevronRightIcon } from "@heroicons/react/solid";

export default function Footer() {
  return (
    <footer className="bg-primary" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-4 xl:gap-8">
          <div className="grid grid-cols-1 gap-8 xl:col-span-4">
            <div className="grid md:grid-cols-4 md:gap-8">
              <div className="text-center mt-12 md:mt-0 space-y-6 order-last md:order-first">
                <a
                  href="#"
                  className="flex w-36 h-16 md:w-48 md:h-20 mx-auto z-0"
                >
                  <img src="/logo-footer.png" className="" />
                </a>
                <p className="text-md text-gray-900 font-semibold">
                  Minus, une collection de moments à partager qui re connectent
                  les parents et les enfants !
                </p>

                <p className="text-xs text-gray-900 font-semibold">
                  2022 - Tous droits réservés - prismatic.digital
                </p>
              </div>
              <div className="text-center mt-2 md:mt-0">
                <div className="flex-none w-16 md:w-12 h-6 mx-auto">
                  <img src="/images/footer-images/infos.png" />
                </div>
                <ul role="list" className="mt-4 space-y-2">
                  <li>
                    <a
                      href={"#"}
                      className="text-sm text-gray-900 hover:text-gray-500 font-semibold"
                    >
                      À propos de Minus
                    </a>
                  </li>
                  <li>
                    <a
                      href={"#"}
                      className="text-sm text-gray-900 hover:text-gray-500 font-semibold"
                    >
                      Contact
                    </a>
                  </li>
                  <li>
                    <a
                      href={"#"}
                      className="text-sm text-gray-900 hover:text-gray-500 font-semibold"
                    >
                      Livraison
                    </a>
                  </li>
                  <li>
                    <a
                      href={"#"}
                      className="text-sm text-gray-900 hover:text-gray-500 font-semibold"
                    >
                      Mentions légales
                    </a>
                  </li>
                  <li>
                    <a
                      href={"#"}
                      className="text-sm text-gray-900 hover:text-gray-500 font-semibold"
                    >
                      Conditions générales de vente
                    </a>
                  </li>
                </ul>
              </div>
              <div className="text-center mt-12 md:mt-0">
                <div className="flex-none w-24 h-6 mx-auto">
                  <img src="/images/footer-images/suivez-nous.png" />
                </div>
                <ul role="list" className="mt-4 space-y-2">
                  <li>
                    <a
                      href={"#"}
                      className="text-sm text-gray-900 hover:text-gray-500 font-semibold"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href={"#"}
                      className="text-sm text-gray-900 hover:text-gray-500 font-semibold"
                    >
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      href={"#"}
                      className="text-sm text-gray-900 hover:text-gray-500 font-semibold"
                    >
                      Pinterest
                    </a>
                  </li>
                </ul>
              </div>
              <div className="text-center mt-12 md:mt-0  space-y-6">
                <div className="flex-none w-12 h-6 mx-auto">
                  <img src="/images/footer-images/news.png" />
                </div>
                <p className="text-md text-gray-900 font-semibold">
                  N&apos;hésitez pas à vous abonner pour suivre notre actualité.
                  On ne fait pas commerce de vos datas et on ne vous écrira pas
                  tous les jours, loin de là !
                </p>
                <div className="flex mt-1 sm:mt-0 flex-1 md:w-full shadow-sm focus:outline-none h-10 px-3 bg-white items-center">
                  <MailIcon className="h-5 w-5 mr-2 text-secondary" />
                  <input
                    name="email"
                    type="email"
                    placeholder="Votre email"
                    autoComplete="email"
                    className="block w-full focus:outline-none"
                  />
                  <a href="#">
                    <ChevronRightIcon className="h-5 w-5 text-black" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
