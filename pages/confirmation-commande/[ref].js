import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../../RestHelper/useAuth";
import localStorageX from "../../configs/localStorage";
import Loader from "../../components/Loader";
import { CheckIcon } from "@heroicons/react/outline";

export default function ConfirmationCommande() {
  const auth = useAuth();
  const router = useRouter();
  const ref = router?.query?.ref;

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const [isLoading, setLoading] = useState(false);
  const [order, setOrder] = useState({});
  const [products, setProducts] = useState([]);
  const [customer, setCustomer] = useState({});
  const [carrier, setCarrier] = useState({});

  useEffect(() => {
    const init = async () => {
      if (!localStorageX.isConnected()) {
        router.push("/connexion");
      }
    };
    init();
  }, []);

  useEffect(() => {
    const init = async () => {
      setLoading(true);
      await getConfirmCommandeDetails();

      setLoading(false);
    };
    if (typeof ref != "undefined") {
      init();
    }
  }, [router?.query?.ref]);

  const getConfirmCommandeDetails = async () => {
    var requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        reference: ref,
      }),
    };

    await fetch("/api/confirmationOrder", requestOptions)
      .then((response) => response?.json())
      .then((result) => {
        if (result?.succes) {
          setProducts(result?.order_products);
          setOrder(result?.order);
          setCustomer(result?.customer);
          setCarrier(result?.carrier);

          if (result?.newCartId) {
            auth?.setUser({
              ...auth?.user,
              id_cart: result?.newCartId,
            });
            auth?.editLocalStorage({
              ...auth?.user,
              id_cart: result?.newCartId,
            });
          }
        } else {
          router.push("/");
          console.log(result?.succes);
        }
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <>
      <Loader isVisible={isLoading} />
      <div className="md:max-w-6xl mx-auto my-5 space-y-5">
        <div className=" bg-primary px-7 py-5 space-y-2">
          <div className="flex items-center space-x-2">
            <CheckIcon className="w-6 h-6 text-secondary" />
            <p className=" text-2xl font-bold">VOTRE COMMANDE EST CONFIRMÉE</p>
          </div>
          <p className=" text-base text-gray-500">
            Un e-mail vous a été envoyé à l&apos;adresse {customer?.email}.
          </p>
        </div>

        <div className=" bg-primary px-7 py-5 space-y-2">
          <div className="">
            <div className="space-y-4">
              <div className="">
                <div className="px-4 sm:px-6 lg:grid lg:grid-cols-12 lg:gap-x-8">
                  <div className="sm:flex lg:col-span-6">
                    <p className=" text-lg font-bold">
                      ARTICLES DE LA COMMANDE
                    </p>
                  </div>

                  <div className=" lg:col-span-6 ">
                    <dl className="grid grid-cols-3 gap-x-6 text-sm">
                      <div>
                        <dt className="text-lg font-bold text-gray-900 text-center">
                          PRIX UNITAIRE
                        </dt>
                      </div>
                      <div>
                        <dt className="text-lg font-bold text-gray-900 text-center">
                          QUANTITÉ
                        </dt>
                      </div>
                      <div>
                        <dt className="text-lg font-bold text-gray-900 text-center">
                          TOTAL PRODUITS
                        </dt>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
              {products.map((product) => (
                <div
                  key={product.id_product}
                  className="border-t border-b border-gray-200 bg-white shadow-sm sm:rounded-lg sm:border"
                >
                  <div className="py-6 px-4 sm:px-6 lg:grid lg:grid-cols-12 lg:gap-x-8">
                    <div className="sm:flex lg:col-span-6">
                      <div className="aspect-w-1 aspect-h-1 w-full flex-shrink-0 overflow-hidden rounded-lg sm:aspect-none sm:h-32 sm:w-32">
                        <img
                          src={
                            "https://tailwindui.com/img/ecommerce-images/confirmation-page-03-product-01.jpg"
                          }
                          alt={"imageAlt"}
                          className="h-full w-full object-cover object-center sm:h-full sm:w-full"
                        />
                      </div>

                      <div className="mt-6 sm:mt-0 sm:ml-6">
                        <h3 className=" text-lg font-medium text-gray-900">
                          {product.name}
                        </h3>
                        {/* <p className="mt-2 text-sm font-medium text-gray-900">
                          ${product.price}
                        </p> */}
                        {/* <p className="mt-3 text-sm text-gray-500">
                          {product.description}
                        </p> */}
                      </div>
                    </div>

                    <div className="mt-6 lg:col-span-6 lg:mt-0">
                      <dl className="grid grid-cols-3 gap-x-6 text-sm">
                        <div className="">
                          <dd className="text-lg text-center font-bold">
                            <span className="block">
                              {parseFloat(product.price).toFixed(2)} €
                            </span>
                          </dd>
                        </div>
                        <div className="">
                          <dd className="text-lg text-center font-bold">
                            <p>{product.cart_quantity}</p>
                          </dd>
                        </div>
                        <div className="">
                          <dd className="text-lg text-center font-bold">
                            <p>{parseFloat(product.total).toFixed(2)} €</p>
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className=" bg-primary px-7 py-5 space-y-2">
          <section
            aria-labelledby="summary-heading"
            className=" lg:col-span-3 space-y-4"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-600">
                  <h2
                    id="summary-heading"
                    className="text-xl font-medium text-gray-900 font-londrina"
                  >
                    TOTAL TTC
                  </h2>
                </div>
                <div className="text-sm font-medium text-gray-900">
                  <h2
                    id="summary-heading"
                    className="text-2xl font-medium text-gray-900 font-londrina"
                  >
                    {parseFloat(order?.total_paid).toFixed(2)} €
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
                    {carrier?.is_free == 0
                      ? parseFloat(order?.total_shipping).toFixed(2) + "€"
                      : "gratuite"}
                  </h2>
                </div>
              </div>
            </div>

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
                    {parseFloat(order?.total_paid_tax_excl).toFixed(2)} €
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
                    {parseFloat(
                      order?.total_paid_tax_incl - order?.total_paid_tax_excl
                    ).toFixed(2)}{" "}
                    €
                  </h2>
                </div>
              </div>
            </div>
          </section>

          <div className="border-t-2 border-[#aaaaaa]"></div>

          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-600">
              <h2
                id="summary-heading"
                className="text-xl font-medium text-gray-900"
              >
                Mode de livraison
              </h2>
            </div>
            <div className="text-sm font-medium text-gray-900">
              <h2
                id="summary-heading"
                className="text-2xl font-medium text-gray-900 font-londrina"
              >
                {carrier?.name}
              </h2>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-600">
              <h2
                id="summary-heading"
                className="text-xl font-medium text-gray-900"
              >
                Moyen de paiement
              </h2>
            </div>
            <div className="text-sm font-medium text-gray-900">
              <h2
                id="summary-heading"
                className="text-2xl font-medium text-gray-900 font-londrina"
              >
                {order?.payment}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
