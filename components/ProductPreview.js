import { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { XCircleIcon } from "@heroicons/react/solid";
import { Navigation, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import QuantityInput from "./QuantityInput";
import { Urls } from "../configs/configs";
import AddToCart from "./AddToCart";

const selectedProduct = {
  id_product: 1,
  name: "T-shirt imprimé colibri",
  available_for_order: "1",
  show_price: "1",
  new_products: "0",
  on_sale_products: "0",
  quantity: 0,
  minimal_quantity: "1",
  allow_out_of_stock: "0",
  discount_percentage: 20,
  price: "28,68 €",
  float_price: 28.68,
  discount_price: "22,94 €",
  discount_float_price: 22.944,
  images: [
    {
      src: "/preview_images/hummingbird-printed-t-shirt-1.jpg",
    },
    {
      src: "/preview_images/hummingbird-printed-t-shirt-2.jpg",
    },
  ],
  cover_image:
    "http://localhost/prestaboutique/1-large_default/hummingbird-printed-t-shirt.jpg",
  combinations: [],
  options: [],
  description:
    "<p><span></span><span></span><span style=\"white-space:pre-wrap;\">Mon papa chou, ma fille adorée ! Quel lien incroyable que celui qui unit un père et sa fille ! Un livre plein d'humour et de légèreté à remplir rien qu'à deux pour profiter de cette relation si particulière. Que l'on consomme une page par jour ou toutes d'un coup, père et fille sont certains de partager un moment de complicité !<br /><br />Une belle idée cadeau pour la fête des pères, le Noël d'un papa...<br /><br />Format : 15 x 21 cm, 60 pages<br /><br />Couverture : souple<br /><br />Couleur : Quadrichromie et un beau corail pantone<br /><br />Âge : à partir de 6 ans<br /><br />Ce livre à remplir est imprimé dans le Nord de la France. Votre commande est ensuite préparée avec amour dans un ESAT (atelier protégé) par des travailleurs handicapés. Un partenariat qui met du sens dans notre entreprise Minus.<br /><br />Minus Editions imagine des livres et des jeux qui créent du lien entre les enfants et leurs parents.<br /></span></p>",
  description_short:
    '<ul>\r\n<li><span style="white-space:pre-wrap;">22 œuvres majeures de l\'Histoire de l\'Art</span></li>\r\n<li><span style="white-space:pre-wrap;">3 façons de jouer pour alterner le plaisir d\'apprendre</span></li>\r\n<li><span style="white-space:pre-wrap;">Une façon ludique d\'apprendre les bases de l\'Art</span></li>\r\n<li><span style="white-space:pre-wrap;">À partir de 5 ans pour jouer en famille</span></li>\r\n<li><span style="white-space:pre-wrap;">Avec un livret explicatif pour en savoir plus sur les œuvres et les artistes</span></li>\r\n</ul>',
  reference: "demo_1",
  category_name: "hommes",
  manufacturer_name: "Studio Design",
  product_info: [
    {
      name: "Marque",
      value: "Studio Design",
    },
    {
      name: "SKU",
      value: "demo_1",
    },
    {
      name: "Condition",
      value: "New",
    },
    {
      name: "Composition",
      value: "Coton",
    },
    {
      name: "Propriété",
      value: "Manches courtes",
    },
  ],
  accessories: [],
  customization_fields: {
    is_customizable: "1",
    customizable_items: [
      {
        id_customization_field: "2",
        required: "1",
        title: "Slogan",
        type: "text",
      },
    ],
  },
  pack_products: [],
  seller_info: [],
  product_attachments_array: [],
  // product_url:
  //   "http://localhost/prestaboutique/hommes/1-hummingbird-printed-t-shirt.html",
  groups: [],
};

export default function ProductPreview({
  isOpen,
  setIsOpen,
  product,
  addProduct,
  onchange,
}) {
  const [productState, setProductState] = useState(product);

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
          <div className="fixed inset-0 bg-white bg-opacity-90 transition-opacity" />
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
                <div>
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
                  <div className="CONTENT flex space-x-5">
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
                        {productState?.all_images?.map((image, index) => (
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
                      <div>
                        <div className="space-y-1">
                          <h3 className="leading-none text-3xl text-black">
                            <a href={productState?.href}>
                              {productState?.name}
                            </a>
                          </h3>
                          <h2 className="leading-none text-gray-500 font-semibold">
                            {productState?.legend}
                          </h2>
                        </div>
                        <div className="pt-0 sm:pt-5">
                          <h2 className="text-black text-3xl font-semibold">
                            {productState?.price}
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

                      <div className="sm:mt-10 flex items-center justify-center sm:justify-start">
                        <AddToCart
                          max={150}
                          min={1}
                          product={productState}
                          onChange={onchange}
                        />
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
