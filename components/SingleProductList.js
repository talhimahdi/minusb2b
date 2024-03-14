import React, { useState } from "react";
import AddToCart from "./AddToCart";
import ProductPreview from "./ProductPreview";
import Link from "next/link";
import ResponseModal from "./ResponseModal";

function SingleProductList({ product, isCatalogue }) {
  const [productState, setProductState] = useState(product);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");

  if (productState) {
    if (isCatalogue) {
      return (<>
        <div className="bg-white p-5 shadow-[0px_2px_7px_rgba(0,_0,_0,_0.14)] select-none">
          <div className="flex flex-col sm:flex-row items-start sm:space-x-5 space-y-5 sm:space-y-0">
            <div className="flex ">
              <div
                className="IMAGE max-w-[130px] min-w-[130px] sm:max-w-[200px] sm:min-w-[200px] cursor-pointer -m-5 mr-5"
              >
                <img
                  src={productState?.images[0]?.url}
                  alt={productState?.name}
                  className="flex-none object-center object-cover w-52"
                />
              </div>
              <div className="TITLE flex flex-col items-start space-y-2 md:min-w-[250px] md:max-w-[250px]">
                {productState?.quantity != 0 ? (
                  productState?.new ? (
                    <span className="inline-flex items-center px-2.5 py-0.5 text-md bg-secondary text-white font-londrina tracking-wider">
                      nouveau
                      {productState?.new}
                    </span>
                  ) : (
                    <></>
                  )
                ) : (
                  <>
                    <span className="inline-flex items-center px-2.5 py-0.5 text-md bg-secondary text-white font-londrina tracking-wider">
                      réapprovisionnement
                    </span>
                    <span className="leading-none text-gray-500 text-sm pb-3">
                      {productState?.available_later}
                    </span>
                  </>
                )}

                <div className="space-y-2">
                  <h3 className="text-lg text-black leading-6">
                    {productState?.name?.length > 65
                      ? productState?.name.slice(0, 65).concat("...")
                      : productState?.name}
                  </h3>
                  <h2 className="leading-none text-gray-700 text-sm">
                    {/* {productState?.legend?.length > 27
                      ? productState?.legend.slice(0, 27).concat("...")
                      : productState?.legend} */}
                    {productState?.display_categorie.toUpperCase()}
                  </h2>
                </div>
                <div className="pt-0 sm:pt-5">
                  <h2 className="text-black">
                    Réf : {productState?.reference}
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


                <div className="flex justify-center md:justify-end">
                  <button
                    type="button"
                    className="uppercase justify-center items-center w-40 h-10 shadow-sm text-md text-white bg-black focus:outline-none"
                  >
                    {/* <Link href={"/register"}>
                    <a>{auth?.frontContent?.card_1_button_text}</a>
                  </Link> */}
                    <Link href={"/register"}>
                      <a>Je le veux !</a>
                    </Link>
                  </button>
                </div>
                {/* <AddToCart
                  max={150}
                  min={1}
                  product={productState}
                  idProduct={productState?.id}
                  btnVisible={true}
                  btnText={"Je le veux !"}
                  setModalOpen={setModalOpen}
                  modalTitle={"Produit ajouté avec succes!"}
                  setModalTitle={setModalTitle}
                /> */}
              </div>
            </div>
          </div>
        </div>
      </>)
    }
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

        <div className="bg-white p-5 shadow-[0px_2px_7px_rgba(0,_0,_0,_0.14)] select-none">
          <div className="flex flex-col sm:flex-row items-start sm:space-x-5 space-y-5 sm:space-y-0">
            <div className="flex ">
              <div
                className="IMAGE max-w-[130px] min-w-[130px] sm:max-w-[200px] sm:min-w-[200px] cursor-pointer -m-5 mr-5"
                onClick={() => setPreviewOpen(true)}
              >
                <img
                  src={productState?.images[0]?.url}
                  alt={productState?.name}
                  className="flex-none object-center object-cover w-52"
                />
              </div>
              <div className="TITLE flex flex-col items-start space-y-2 md:min-w-[250px] md:max-w-[250px]">
                {productState?.quantity != 0 ? (
                  productState?.new ? (
                    <span className="inline-flex items-center px-2.5 py-0.5 text-md bg-secondary text-white font-londrina tracking-wider">
                      nouveau
                      {productState?.new}
                    </span>
                  ) : (
                    <></>
                  )
                ) : (
                  <>
                    <span className="inline-flex items-center px-2.5 py-0.5 text-md bg-secondary text-white font-londrina tracking-wider">
                      réapprovisionnement
                    </span>
                    <span className="leading-none text-gray-500 text-sm pb-3">
                      {productState?.available_later}
                    </span>
                  </>
                )}

                <div className="space-y-2">
                  <h3 className="text-lg text-black leading-6">
                    {productState?.name?.length > 65
                      ? productState?.name.slice(0, 65).concat("...")
                      : productState?.name}
                  </h3>
                  <h2 className="leading-none text-gray-700 text-sm">
                    {/* {productState?.legend?.length > 27
                      ? productState?.legend.slice(0, 27).concat("...")
                      : productState?.legend} */}
                    {productState?.display_categorie.toUpperCase()}
                  </h2>
                </div>
                <div className="pt-0 sm:pt-5">
                  <h2 className="text-black">
                    Réf : {productState?.reference}
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
                <div className="pt-0 flex items-start justify-start">
                  <h2 className="text-black underline underline-offset-2">
                    Prix public :{" "}
                    {parseFloat(productState?.price_ttc).toFixed(2)} €
                  </h2>
                </div>
                <div className="flex md:block space-x-4 md:space-x-0">
                  <div>
                    <span className="text-xl text-black font-londrina">
                      {parseFloat(productState?.price).toFixed(2)} €
                    </span>
                    <span className="text-base ml-2">HT</span>
                  </div>
                  <div className="mb-2">
                    <span className="text-xl text-black font-londrina">
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
