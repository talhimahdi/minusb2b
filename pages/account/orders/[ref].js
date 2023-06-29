import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../../../RestHelper/useAuth";
import localStorageX from "../../../configs/localStorage";
import Loader from "../../../components/Loader";
import { CheckIcon } from "@heroicons/react/outline";

export default function OrderDetails() {
  const auth = useAuth();
  const router = useRouter();
  const ref = router?.query?.ref;

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const [isLoading, setLoading] = useState(false);
  const [order, setOrder] = useState({});
  const [orderDiscounts, setOrderDiscounts] = useState([]);
  const [products, setProducts] = useState([]);
  const [customer, setCustomer] = useState({});
  const [carrier, setCarrier] = useState({});
  const [lcrModuleInfo, setLcrModuleInfo] = useState({});
  const [lcrModuleInfo30, setLcrModuleInfo30] = useState({});
  const [bankTransferModuleInfo, setBankTransferModuleInfo] = useState({});
  const [bankTransferModuleInfo30, setBankTransferModuleInfo30] = useState({});
  const [checkModuleInfo, setCheckModuleInfo] = useState({});
  const [checkModuleInfo30, setCheckModuleInfo30] = useState({});

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
          // console.log(result);
          setProducts(result?.order_products);
          setOrder(result?.order);
          setCustomer(result?.customer);
          setCarrier(result?.carrier);
          setOrderDiscounts(result?.order_discounts);

          if (result?.lcr_module_info) {
            setLcrModuleInfo(result?.lcr_module_info);
          }
          if (result?.bank_transfer_module_info) {
            setBankTransferModuleInfo(result?.bank_transfer_module_info);
          }
          if (result?.check_module_info) {
            setCheckModuleInfo(result?.check_module_info);
          }

          if (result?.lcr_30_module_info) {
            setLcrModuleInfo30(result?.lcr_30_module_info);
          }
          if (result?.bank_transfer_30_module_info) {
            setBankTransferModuleInfo30(result?.bank_transfer_30_module_info);
          }
          if (result?.check_30_module_info) {
            setCheckModuleInfo30(result?.check_30_module_info);
          }

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
            <CheckIcon className=" w-12 h-12 md:w-6 md:h-6 text-secondary" />
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

                  <div className="hidden md:block lg:col-span-6 ">
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
                          src={product.image_cover}
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
                    <div className="block md:hidden lg:col-span-6 mt-5">
                      <dl className="grid grid-cols-3 text-sm ">
                        <div className="">
                          <dt className="text-sm font-bold text-gray-500 text-center">
                            PRIX UNITAIRE
                          </dt>
                        </div>
                        <div className="">
                          <dt className="text-sm font-bold text-gray-500 text-center">
                            QUANTITÉ
                          </dt>
                        </div>
                        <div className="">
                          <dt className="text-sm font-bold text-gray-500 text-center">
                            TOTAL PRODUITS
                          </dt>
                        </div>
                      </dl>
                    </div>
                    <div className="mt-6 lg:col-span-6 lg:mt-0">
                      <dl className="grid grid-cols-3 gap-x-6 text-sm">
                        <div className="">
                          <dd className="text-lg text-center font-bold">
                            <span className="block">
                              {parseFloat(
                                product.price_without_reduction_without_tax
                              ).toFixed(2)}
                              €{" HT"}
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
                            <p>
                              {parseFloat(
                                product.price_without_reduction_without_tax *
                                  product.cart_quantity
                              ).toFixed(2)}
                              €{" HT"}
                            </p>
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
              <div className="flex items-center justify-between ">
                <div className="text-sm text-gray-600">
                  <h2
                    id="summary-heading"
                    className="text-xl font-medium text-gray-900"
                  >
                    Total articles HT
                  </h2>
                </div>
                <div className="text-sm font-medium text-gray-900">
                  <h2
                    id="summary-heading"
                    className="text-2xl font-medium text-gray-900 font-londrina"
                  >
                    {/* {parseFloat(order?.total_paid_tax_excl).toFixed(2)} € */}
                    {parseFloat(order?.total_products).toFixed(2)} €
                  </h2>
                </div>
              </div>

              <div className="flex items-center justify-between ">
                <div className="text-sm text-gray-600">
                  <h2
                    id="summary-heading"
                    className="text-xl font-medium text-gray-900"
                  >
                    Livraison HT
                  </h2>
                </div>
                <div className="text-sm font-medium text-gray-900">
                  <h2
                    id="summary-heading"
                    className="text-2xl font-medium text-gray-900 font-londrina"
                  >
                    {carrier?.is_free == 0
                      ? parseFloat(order?.total_shipping_tax_excl).toFixed(2) +
                        " €"
                      : "gratuite"}
                  </h2>
                </div>
              </div>

              {/* Display order discounts */}

              {orderDiscounts?.length > 0 && (
                <div className="flex items-center justify-between ">
                  <div className="text-sm text-gray-600">
                    <h2
                      id="summary-heading"
                      className="text-xl font-medium text-gray-900"
                    >
                      Promotions
                    </h2>

                    {orderDiscounts?.map((discount) => (
                      <h2
                        key={discount.id_order_cart_rule}
                        id="summary-heading"
                        className="ml-10 text-base text-gray-900 font-londrina"
                      >
                        {discount.name}
                      </h2>
                    ))}
                  </div>
                  <div>
                    {orderDiscounts?.map((discount) => (
                      <h2
                        key={discount.id_order_cart_rule}
                        id="summary-heading"
                        className="text-xl font-medium text-gray-900 font-londrina"
                      >
                        - {parseFloat(discount.value_tax_excl).toFixed(2)} €
                      </h2>
                    ))}
                  </div>
                </div>
              )}

              {/* end Display order discounts */}

              <div className="flex items-center justify-between ">
                <div className="text-sm text-gray-600">
                  <h2
                    id="summary-heading"
                    className="text-xl font-medium text-gray-900"
                  >
                    Total taxes
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

        {checkModuleInfo?.CHEQUE_ADDRESS && (
          <div className="bg-primary px-7 py-5 space-y-2">
            <div
              className="text-lg font-medium text-gray-900 space-y-1"
              dangerouslySetInnerHTML={{
                __html: checkModuleInfo.CHEQUE_ADDRESS,
              }}
            ></div>
          </div>
        )}

        {checkModuleInfo30?.CHEQUE_30_ADDRESS && (
          <div className=" bg-primary px-7 py-5 space-y-2">
            <div
              className="text-lg font-medium text-gray-900 space-y-1"
              dangerouslySetInnerHTML={{
                __html: checkModuleInfo30.CHEQUE_30_ADDRESS,
              }}
            ></div>
          </div>
        )}

        {lcrModuleInfo.LCR_BANK_WIRE_ADDRESS && (
          <div className="bg-primary px-7 py-5 space-y-2">
            <div
              className="text-lg font-medium text-gray-900 space-y-1"
              dangerouslySetInnerHTML={{
                __html: lcrModuleInfo.LCR_BANK_WIRE_ADDRESS,
              }}
            ></div>
          </div>
        )}

        {lcrModuleInfo30?.LCR_30_BANK_WIRE_DETAILS && (
          <div className="bg-primary px-7 py-5 space-y-2">
            <div
              className="text-lg font-medium text-gray-900 space-y-1"
              dangerouslySetInnerHTML={{
                __html: lcrModuleInfo30?.LCR_30_BANK_WIRE_DETAILS,
              }}
            ></div>
          </div>
        )}

        {bankTransferModuleInfo?.BANK_WIRE_ADDRESS && (
          <div className="bg-primary px-7 py-5 space-y-2">
            <div
              className="text-lg font-medium text-gray-900 space-y-1"
              dangerouslySetInnerHTML={{
                __html: bankTransferModuleInfo?.BANK_WIRE_ADDRESS,
              }}
            ></div>
          </div>
        )}

        {bankTransferModuleInfo30?.BANK_WIRE_30_ADDRESS && (
          <div className="bg-primary px-7 py-5 space-y-2">
            <div
              className="text-lg font-medium text-gray-900 space-y-1"
              dangerouslySetInnerHTML={{
                __html: bankTransferModuleInfo30?.BANK_WIRE_30_ADDRESS,
              }}
            ></div>
          </div>
        )}
      </div>
    </>
  );
}
