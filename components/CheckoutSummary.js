import React, { useState } from "react";
import ProductCheckout from "./ProductCheckout";
import { useAuth } from "../RestHelper/useAuth";
import ResponseModal from "./ResponseModal";
import Paypal from "./Paypal";

function CheckoutSummary({ onConfirmCommande, showConfirmButton }) {
  const auth = useAuth();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");

  const removeProduct = async (idProduct) => {
    const result = await auth?.removeProduct(idProduct);

    if (result) {
      // if (auth?.cart?.products_count == 0) {
      //   setOpenCart(false);
      // }
      setModalTitle("Produit supprimé avec succes!");
      setModalOpen(true);
    }
  };

  return (
    <div className="sticky top-0">
      {modalOpen && (
        <ResponseModal
          title={modalTitle}
          description={""}
          open={modalOpen}
          setModalOpen={setModalOpen}
        />
      )}
      <h2 className="text-lg font-bold text-gray-900">
        Récapitulatif de la commande
      </h2>

      <div className="mt-4 bg-white border border-gray-200 shadow-sm">
        <h3 className="sr-only">Articles dans votre panier</h3>
        <ul role="list" className="divide-y divide-gray-200">
          {auth?.cart?.products?.map((product) => (
            <li key={product.id_product} className="flex py-6 px-4 sm:px-6">
              <ProductCheckout
                removeProduct={removeProduct}
                product={product}
                currency_symbol={auth?.cart?.currency_symbol}
              />
            </li>
          ))}
        </ul>
        <section
          aria-labelledby="summary-heading"
          className="mt-16 px-4 py-6 sm:p-6 lg:p-8 lg:mt-0 lg:col-span-3 space-y-4"
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
                  {auth?.cart?.totals?.total_excluding_tax?.value}
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
                  {auth?.cart?.totals?.total_including_tax?.value}
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

        <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
          {showConfirmButton ? (
            <button
              className="w-full bg-black shadow-sm py-3 px-4 text-xl font-extrabold text-white hover:font-bold focus:outline-none focus:ring-0 focus:ring-offset-2 focus:ring-offset-gray-50"
              onClick={() => {
                onConfirmCommande();
              }}
              type={"button"}
            >
              Confirmer la commande
            </button>
          ) : (
            <Paypal onApproveCommande={onConfirmCommande} />
          )}
        </div>
      </div>
    </div>
  );
}

export default CheckoutSummary;
