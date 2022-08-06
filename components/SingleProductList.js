import React, { useState } from "react";
import AddToCart from "./AddToCart";
import ProductPreview from "./ProductPreview";
import QuantityInput from "./QuantityInput";
import Link from "next/link";

function SingleProductList({ product, addProduct }) {
  // const clicked_product = {
  //   success: true,
  //   code: 200,
  //   psdata: {
  //     id_product: 1,
  //     name: "T-shirt imprimé colibri",
  //     available_for_order: "1",
  //     show_price: "1",
  //     new_products: "0",
  //     on_sale_products: "0",
  //     quantity: 2400,
  //     minimal_quantity: "1",
  //     allow_out_of_stock: "0",
  //     discount_percentage: 20,
  //     price: "28,68 €",
  //     float_price: 28.68,
  //     discount_price: "22,94 €",
  //     discount_float_price: 22.944,
  //     images: [
  //       {
  //         src: "http://localhost/prestaboutique/1-large_default/hummingbird-printed-t-shirt.jpg",
  //       },
  //       {
  //         src: "http://localhost/prestaboutique/2-large_default/hummingbird-printed-t-shirt.jpg",
  //       },
  //       {
  //         src: "http://localhost/prestaboutique/24-large_default/hummingbird-printed-t-shirt.jpg",
  //       },
  //     ],
  //     cover_image:
  //       "http://localhost/prestaboutique/1-large_default/hummingbird-printed-t-shirt.jpg",
  //     combinations: [
  //       {
  //         id_product_attribute: 2,
  //         quantity: 300,
  //         price: "22,94 €",
  //         float_price: 22.944,
  //         minimal_quantity: 1,
  //         combination_code: "1_11",
  //       },
  //       {
  //         id_product_attribute: 1,
  //         quantity: 300,
  //         price: "22,94 €",
  //         float_price: 22.944,
  //         minimal_quantity: 1,
  //         combination_code: "1_8",
  //       },
  //       {
  //         id_product_attribute: 4,
  //         quantity: 300,
  //         price: "22,94 €",
  //         float_price: 22.944,
  //         minimal_quantity: 1,
  //         combination_code: "2_11",
  //       },
  //       {
  //         id_product_attribute: 3,
  //         quantity: 300,
  //         price: "22,94 €",
  //         float_price: 22.944,
  //         minimal_quantity: 1,
  //         combination_code: "2_8",
  //       },
  //       {
  //         id_product_attribute: 6,
  //         quantity: 300,
  //         price: "22,94 €",
  //         float_price: 22.944,
  //         minimal_quantity: 1,
  //         combination_code: "3_11",
  //       },
  //       {
  //         id_product_attribute: 5,
  //         quantity: 300,
  //         price: "22,94 €",
  //         float_price: 22.944,
  //         minimal_quantity: 1,
  //         combination_code: "3_8",
  //       },
  //       {
  //         id_product_attribute: 8,
  //         quantity: 300,
  //         price: "22,94 €",
  //         float_price: 22.944,
  //         minimal_quantity: 1,
  //         combination_code: "4_11",
  //       },
  //       {
  //         id_product_attribute: 7,
  //         quantity: 300,
  //         price: "22,94 €",
  //         float_price: 22.944,
  //         minimal_quantity: 1,
  //         combination_code: "4_8",
  //       },
  //     ],
  //     options: [
  //       {
  //         id: 1,
  //         title: "Taille",
  //         is_color_option: 0,
  //         items: [
  //           {
  //             id: 1,
  //             value: "S",
  //           },
  //           {
  //             id: 2,
  //             value: "M",
  //           },
  //           {
  //             id: 3,
  //             value: "L",
  //           },
  //           {
  //             id: 4,
  //             value: "XL",
  //           },
  //         ],
  //       },
  //       {
  //         id: 2,
  //         title: "Couleur",
  //         is_color_option: 1,
  //         items: [
  //           {
  //             id: 8,
  //             value: "Blanc",
  //             hex_value: "#ffffff",
  //           },
  //           {
  //             id: 11,
  //             value: "Noir",
  //             hex_value: "#434A54",
  //           },
  //         ],
  //       },
  //     ],
  //     description:
  //       "<p><span></span><span></span><span style=\"white-space:pre-wrap;\">Mon papa chou, ma fille adorée ! Quel lien incroyable que celui qui unit un père et sa fille ! Un livre plein d'humour et de légèreté à remplir rien qu'à deux pour profiter de cette relation si particulière. Que l'on consomme une page par jour ou toutes d'un coup, père et fille sont certains de partager un moment de complicité !<br /><br />Une belle idée cadeau pour la fête des pères, le Noël d'un papa...<br /><br />Format : 15 x 21 cm, 60 pages<br /><br />Couverture : souple<br /><br />Couleur : Quadrichromie et un beau corail pantone<br /><br />Âge : à partir de 6 ans<br /><br />Ce livre à remplir est imprimé dans le Nord de la France. Votre commande est ensuite préparée avec amour dans un ESAT (atelier protégé) par des travailleurs handicapés. Un partenariat qui met du sens dans notre entreprise Minus.<br /><br />Minus Editions imagine des livres et des jeux qui créent du lien entre les enfants et leurs parents.<br /></span></p>",
  //     description_short:
  //       '<ul>\r\n<li><span style="white-space:pre-wrap;">22 œuvres majeures de l\'Histoire de l\'Art</span></li>\r\n<li><span style="white-space:pre-wrap;">3 façons de jouer pour alterner le plaisir d\'apprendre</span></li>\r\n<li><span style="white-space:pre-wrap;">Une façon ludique d\'apprendre les bases de l\'Art</span></li>\r\n<li><span style="white-space:pre-wrap;">À partir de 5 ans pour jouer en famille</span></li>\r\n<li><span style="white-space:pre-wrap;">Avec un livret explicatif pour en savoir plus sur les œuvres et les artistes</span></li>\r\n</ul>',
  //     reference: "demo_1",
  //     category_name: "hommes",
  //     manufacturer_name: "Studio Design",
  //     product_info: [
  //       {
  //         name: "Marque",
  //         value: "Studio Design",
  //       },
  //       {
  //         name: "SKU",
  //         value: "demo_1",
  //       },
  //       {
  //         name: "Condition",
  //         value: "New",
  //       },
  //       {
  //         name: "Composition",
  //         value: "Coton",
  //       },
  //       {
  //         name: "Propriété",
  //         value: "Manches courtes",
  //       },
  //     ],
  //     accessories: [],
  //     customization_fields: {
  //       is_customizable: "0",
  //       customizable_items: [],
  //     },
  //     pack_products: [],
  //     seller_info: [],
  //     product_attachments_array: [],
  //     product_url:
  //       "http://localhost/prestaboutique/hommes/1-hummingbird-printed-t-shirt.html",
  //     groups: {
  //       1: {
  //         group_name: "Taille",
  //         name: "Taille",
  //         group_type: "select",
  //         default: 1,
  //         attributes: {
  //           1: {
  //             name: "S",
  //             html_color_code: "",
  //             texture: "",
  //             selected: false,
  //           },
  //           2: {
  //             name: "M",
  //             html_color_code: "",
  //             texture: "",
  //             selected: false,
  //           },
  //           3: {
  //             name: "L",
  //             html_color_code: "",
  //             texture: "",
  //             selected: false,
  //           },
  //           4: {
  //             name: "XL",
  //             html_color_code: "",
  //             texture: "",
  //             selected: false,
  //           },
  //         },
  //         attributes_quantity: {
  //           1: 600,
  //           2: 600,
  //           3: 600,
  //           4: 600,
  //         },
  //       },
  //       2: {
  //         group_name: "Couleur",
  //         name: "Couleur",
  //         group_type: "color",
  //         default: 8,
  //         attributes: {
  //           8: {
  //             name: "Blanc",
  //             html_color_code: "#ffffff",
  //             texture: "",
  //             selected: false,
  //           },
  //           11: {
  //             name: "Noir",
  //             html_color_code: "#434A54",
  //             texture: "",
  //             selected: false,
  //           },
  //         },
  //         attributes_quantity: {
  //           8: 1200,
  //           11: 1200,
  //         },
  //       },
  //     },
  //   },
  // };
  const [productState, setProductState] = useState(product);
  const [previewOpen, setPreviewOpen] = useState(false);

  if (productState) {
    return (
      <div className="bg-white p-5 shadow-[0px_2px_7px_rgba(0,_0,_0,_0.14)] select-none">
        <div className="flex flex-col sm:flex-row items-start sm:items-center sm:space-x-5 space-y-5 sm:space-y-0">
          <div className="flex space-x-5 sm:items-center">
            <div
              className="IMAGE sm:max-w-[130px] sm:min-w-[130px] cursor-pointer"
              onClick={() => setPreviewOpen(true)}
            >
              <img
                src={productState?.cover?.url}
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
                  <Link href={productState?.href}>
                    <a>{productState?.name}</a>
                  </Link>
                </h3>
                <h2 className="leading-none text-black">
                  {productState?.legend}
                </h2>
              </div>
              <div className="pt-0 sm:pt-5">
                <h2 className="text-black underline underline-offset-2">
                  Prix public : {productState?.price_without_reduction} €
                </h2>
              </div>
            </div>
          </div>
          <div className="DETAILS flex-auto  text-black font-semibold w-full">
            <div
              className="list-disc"
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
                    {productState?.price_tax_exc} €
                  </span>
                  <span className="text-base ml-2">HT</span>
                </div>
                <div className="mb-2">
                  <span className="text-2xl text-black font-londrina">
                    {productState?.reduction} €
                  </span>
                  <span className="text-base ml-2">TVA (6,5%)</span>
                </div>
              </div>
              <AddToCart
                max={150}
                min={1}
                product={productState}
                onChange={setProductState}
              />
              {/* <div className="flex items-center justify-center sm:justify-start">
                <div className="grid grid-flow-col grid-cols-3 w-52">
                  <div className="bg-white h-full border-2 border-black p-0">
                    
                  </div>
                  <div className="bg-black h-full w-full justify-end  col-span-2 ">
                    <button
                      onClick={() => {
                        console.log(productState);
                        addProduct(productState);
                      }}
                      type={"button"}
                      className="text-white h-full w-full select-none"
                    >
                      Je le veux !
                    </button>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <ProductPreview
          isOpen={previewOpen}
          setIsOpen={setPreviewOpen}
          product={productState}
          onchange={setProductState}
          addProduct={addProduct}
        />
      </div>
    );
  }
}

export default SingleProductList;
