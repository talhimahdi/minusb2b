import React, { useState } from "react";
import AddToCart from "./AddToCart";
import ProductPreview from "./ProductPreview";
import Link from "next/link";
import ResponseModal from "./ResponseModal";

function SingleProductList({ product }) {
  const [productState, setProductState] = useState(product);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");

  if (productState) {
    return (
      <>
        {modalOpen && (
          <ResponseModal
            title={modalTitle}
            description={""}
            open={modalOpen}
            setModalOpen={setModalOpen}
          />
        )}
        {/* <Example /> */}.
        <div className="bg-white p-5 shadow-[0px_2px_7px_rgba(0,_0,_0,_0.14)] select-none">
          <div className="flex flex-col sm:flex-row items-start sm:items-center sm:space-x-5 space-y-5 sm:space-y-0">
            <div className="flex space-x-5 sm:items-center">
              <div
                className="IMAGE sm:max-w-[130px] sm:min-w-[130px] cursor-pointer"
                onClick={() => setPreviewOpen(true)}
              >
                <img
                  src={productState?.images[0]?.url}
                  alt={productState?.name}
                  className="flex-none object-center object-cover w-32"
                />
              </div>
              <div className="TITLE flex flex-col items-start space-y-2 md:min-w-[250px] md:max-w-[250px]">
                <span className="inline-flex items-center px-2.5 py-0.5 text-md bg-secondary text-white font-londrina tracking-wider">
                  nouveau
                </span>
                <div className="space-y-0.5">
                  <h3 className="leading-none text-2xl text-black font-londrina">
                    <Link href={"#"}>
                      <a>
                        {productState?.name?.length > 27
                          ? productState?.name.slice(0, 27).concat("...")
                          : productState?.name}
                      </a>
                    </Link>
                  </h3>
                  <h2 className="leading-none text-black">
                    {productState?.legend?.length > 27
                      ? productState?.legend.slice(0, 27).concat("...")
                      : productState?.legend}
                  </h2>
                </div>
                <div className="pt-0 sm:pt-5">
                  <h2 className="text-black underline underline-offset-2">
                    Prix public :{" "}
                    {parseFloat(productState?.wholesale_price).toFixed(2)} €
                  </h2>
                </div>
              </div>
            </div>
            <div className="DETAILS flex-auto  text-black font-semibold w-full">
              <div
                className="list-none sm:list-disc"
                dangerouslySetInnerHTML={{
                  __html: productState?.description_short,
                }}
              ></div>
            </div>
            <div className="PRICE flex-auto items-center justify-center w-full sm:w-auto text-center sm:text-start">
              <div className="space-y-4 md:space-y-4 ">
                <div className="flex md:block space-x-4 md:space-x-0">
                  <div>
                    <span className="text-2xl text-black font-londrina">
                      {parseFloat(productState?.price).toFixed(2)} €
                    </span>
                    <span className="text-base ml-2">HT</span>
                  </div>
                  <div className="mb-2">
                    <span className="text-2xl text-black font-londrina">
                      {parseFloat(productState?.product_taxe).toFixed(2)} €
                    </span>
                    <span className="text-base ml-2">
                      TVA ({productState?.tax_rate}%)
                    </span>
                  </div>
                </div>
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
              </div>
            </div>
          </div>
          <ProductPreview
            isOpen={previewOpen}
            setIsOpen={setPreviewOpen}
            product={productState}
            onchange={setProductState}
          />
        </div>
      </>
    );
  }
}

export default SingleProductList;

const products = [
  {
    tax_name: "deprecated",
    tax_rate: 5.5,
    id_manufacturer: "0",
    id_supplier: "0",
    id_category_default: "2",
    id_shop_default: "1",
    manufacturer_name: false,
    supplier_name: false,
    name: "CHÂTEAU PLESSIS-MACÉ  Carnet d'exploration",
    description:
      '<p>Oh le joli château en Anjou...</p>\r\n<p>Notre partenaire <a href="https://www.kidiklik.fr/" target="_blank" rel="noreferrer noopener">KIDIKLIK</a> nous a renouvelé sa confiance et nous a confié la réalisation d\'un carnet d\'exploration des extérieurs du <a href="http://www.chateau-plessis-mace.fr/fr/" target="_blank" rel="noreferrer noopener">château du Plessis-Macé</a>.</p>\r\n<p>Un seul regret... ne pas l\'avoir encore visité !</p>\r\n<p></p>\r\n<p>Oh le joli château en Anjou...</p>\r\n<p>Notre partenaire <a href="https://www.kidiklik.fr/" target="_blank" rel="noreferrer noopener">KIDIKLIK</a> nous a renouvelé sa confiance et nous a confié la réalisation d\'un carnet d\'exploration des extérieurs du <a href="http://www.chateau-plessis-mace.fr/fr/" target="_blank" rel="noreferrer noopener">château du Plessis-Macé</a>.</p>\r\n<p>Un seul regret... ne pas l\'avoir encore visité !</p>',
    description_short:
      '<p>Oh le joli château en Anjou...</p>\r\n<p>Notre partenaire <a href="https://www.kidiklik.fr/" target="_blank" rel="noreferrer noopener">KIDIKLIK</a> nous a renouvelé sa confiance et nous a confié la réalisation d\'un carnet d\'exploration des extérieurs du <a href="http://www.chateau-plessis-mace.fr/fr/" target="_blank" rel="noreferrer noopener">château du Plessis-Macé</a>.</p>\r\n<p>Un seul regret... ne pas l\'avoir encore visité !</p>',
    quantity: 600,
    minimal_quantity: "1",
    low_stock_threshold: null,
    low_stock_alert: "0",
    available_now: "",
    available_later: "",
    price: 17.65,
    specificPrice: [],
    additional_shipping_cost: "0.000000",
    wholesale_price: "26.650000",
    on_sale: "0",
    online_only: "0",
    unity: "",
    unit_price: 0,
    unit_price_ratio: "0.000000",
    ecotax: "0.000000",
    reference: "",
    supplier_reference: "",
    location: "",
    width: "0.000000",
    height: "0.000000",
    depth: "0.000000",
    weight: "0.000000",
    ean13: "",
    isbn: "",
    upc: "",
    mpn: "",
    link_rewrite: "chateau-plessis-mace-carnet-d-exploration",
    meta_description: "",
    meta_keywords: "",
    meta_title: "",
    quantity_discount: "0",
    customizable: "0",
    new: true,
    uploadable_files: "0",
    text_fields: "0",
    active: "0",
    redirect_type: "404",
    id_type_redirected: "0",
    available_for_order: "1",
    available_date: "0000-00-00",
    show_condition: "0",
    condition: "new",
    show_price: "1",
    indexed: "0",
    visibility: "both",
    date_add: "2022-08-15 01:00:08",
    date_upd: "2022-08-15 01:06:20",
    tags: false,
    state: "1",
    base_price: "17.650000",
    id_tax_rules_group: "3",
    id_color_default: 0,
    advanced_stock_management: "0",
    out_of_stock: 2,
    depends_on_stock: false,
    isFullyLoaded: true,
    cache_is_pack: "0",
    cache_has_attachments: "0",
    is_virtual: "0",
    id_pack_product_attribute: null,
    cache_default_attribute: "0",
    category: "accueil",
    pack_stock_type: "3",
    additional_delivery_times: "1",
    delivery_in_stock: "",
    delivery_out_stock: "",
    product_type: "",
    id: 21,
    id_shop_list: [],
    force_id: false,
    images: [
      {
        cover: "1",
        id_image: "25",
        legend: "CHÂTEAU PLESSIS-MACÉ  Carnet d'exploration",
        position: "1",
        url: "http://localhost/prestaboutique/25-large_default/h.jpg",
      },
      {
        cover: null,
        id_image: "26",
        legend: "",
        position: "2",
        url: "http://localhost/prestaboutique/26-large_default/h.jpg",
      },
      {
        cover: null,
        id_image: "27",
        legend: "",
        position: "3",
        url: "http://localhost/prestaboutique/27-large_default/h.jpg",
      },
      {
        cover: null,
        id_image: "28",
        legend: "",
        position: "4",
        url: "http://localhost/prestaboutique/28-large_default/h.jpg",
      },
    ],
    cover_url: "http://localhost/prestaboutique/25-large_default/h.jpg",
    legend: "CHÂTEAU PLESSIS-MACÉ  Carnet d'exploration",
    product_taxe: 0.97,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function Example() {
  return (
    <div className="max-w-2xl mx-auto lg:max-w-7xl">
      {products.map((productState) => (
        <div
          key={productState.id}
          className="bg-white border-t border-b border-gray-200 shadow-sm sm:border"
        >
          <div className="py-4 px-4 sm:px-6 lg:grid lg:grid-cols-12 lg:gap-x-8 lg:p-5">
            <div className="sm:flex lg:col-span-4 items-center">
              <div
                className="flex-shrink-0 w-full aspect-w-1 aspect-h-1  overflow-hidden sm:aspect-none sm:w-32 sm:h-32"
                onClick={() => setPreviewOpen(true)}
              >
                <img
                  src={productState?.cover_url}
                  alt={productState?.name}
                  className="w-full h-full object-center object-cover sm:w-full sm:h-full"
                />
              </div>

              <div className="TITLE mt-6 sm:mt-0 sm:ml-6 space-y-2">
                <span className="inline-flex items-center px-2.5 py-0.5 text-md bg-secondary text-white font-londrina tracking-wider">
                  nouveau
                </span>
                <div className="space-y-0.5">
                  <h3 className="leading-none text-2xl text-black font-londrina">
                    <Link href={"#"}>
                      <a>
                        {productState?.name?.length > 27
                          ? productState?.name.slice(0, 27).concat("...")
                          : productState?.name}
                      </a>
                    </Link>
                  </h3>
                  <h2 className="leading-none text-black">
                    {productState?.name?.length > 27
                      ? productState?.name.slice(0, 27).concat("...")
                      : productState?.name}
                  </h2>
                </div>
                <div className="pt-0 sm:pt-5">
                  <h2 className="text-black underline underline-offset-2">
                    Prix public :{" "}
                    {parseFloat(productState?.wholesale_price).toFixed(2)} €
                  </h2>
                </div>
              </div>
            </div>

            <div className="mt-6 lg:mt-0 lg:col-span-8">
              <dl className="grid grid-cols-4 gap-x-6 items-center">
                <div className="col-span-3">
                  <div
                    className="list-disc text-black font-semibold"
                    dangerouslySetInnerHTML={{
                      __html: productState?.description_short,
                    }}
                  ></div>
                </div>

                <div>
                  <div className="space-y-4 md:space-y-4 ">
                    <div className="flex md:block space-x-4 md:space-x-0">
                      <div>
                        <span className="text-2xl text-black font-londrina">
                          {parseFloat(productState?.price).toFixed(2)} €
                        </span>
                        <span className="text-base ml-2">HT</span>
                      </div>
                      <div className="mb-2">
                        <span className="text-2xl text-black font-londrina">
                          {parseFloat(productState?.price).toFixed(2)} €
                        </span>
                        <span className="text-base ml-2">
                          TVA ({productState?.price}%)
                        </span>
                      </div>
                    </div>
                    <AddToCart
                      max={150}
                      min={1}
                      product={productState}
                      btnVisible={false}
                    />
                  </div>
                </div>
              </dl>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
