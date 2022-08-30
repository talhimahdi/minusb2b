import { Fragment, useState, useEffect } from "react";
import {
  Dialog,
  Popover,
  RadioGroup,
  Tab,
  Transition,
} from "@headlessui/react";
import {
  MenuIcon,
  QuestionMarkCircleIcon,
  SearchIcon,
  ShoppingBagIcon,
  XIcon,
  PlusCircleIcon,
} from "@heroicons/react/outline";
import { CheckCircleIcon, TrashIcon } from "@heroicons/react/solid";
import { useAuth } from "../RestHelper/useAuth";
import ProductCheckout from "../components/ProductCheckout";
import CheckoutSummary from "../components/CheckoutSummary";
import { Urls } from "../configs/configs";
import { useRouter } from "next/router";
import NewAddressForm from "../components/NewAddressForm";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Checkout() {
  const auth = useAuth();
  const router = useRouter();
  const [selectedAddress, setSelectedAddress] = useState({});
  const [addresses, setAddresses] = useState([]);
  const [countries, setCountries] = useState([]);
  const [carriers, setCarriers] = useState([]);
  const [selectedCarrier, setSelectedCarrier] = useState({});
  const [paymentMethods, setPaymentMethods] = useState([]);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState({});
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openNewAddressForm = () => {
    setIsFormOpen(true);
  };

  const addAddress = async (addressInfos) => {
    addressInfos.id_customer = auth?.user?.id;
    var requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addressInfos),
    };
    const result = await fetch(Urls.addNewAddress, requestOptions)
      .then((response) => response?.json())
      .then((data) => {
        return data?.results;
      })
      .catch((error) => console.log("error", error));

    if (result?.code == 200 && result?.succes) {
      setAddresses([...addresses, result?.new_address]);
      setSelectedAddress(result?.new_address);
      setIsFormOpen(false);
    } else {
      console.log("error!!!");
    }
  };

  const removeAddress = async (idAddress) => {
    if (!confirm("voulez vous vraiment supprimer l'adresse?")) return;
    var requestOptions = {
      method: "GET",
    };
    const result = await fetch(Urls.deleteAddress(idAddress), requestOptions)
      .then((response) => response?.json())
      .then((data) => {
        return data?.results;
      })
      .catch((error) => console.log("error", error));

    if (result?.code == 200 && result?.succes) {
      /*const result = */ getAddresses();

      // GET ADDRESSES

      // setAddresses([...addresses, result?.new_address]);
      // setSelectedAddress(result?.new_address);
      // setIsFormOpen(false);
    } else {
      console.log("error!!!");
    }
  };

  const getAddresses = async () => {
    var requestOptions = {
      method: "GET",
    };

    await fetch(Urls.getAddresses(auth?.user?.id), requestOptions)
      .then((response) => response?.json())
      .then((data) => {
        if (data?.results?.code == 200 && data?.results?.succes) {
          // return data?.results;
          setAddresses(data?.results?.addresses);
          setCountries(data?.results?.countries);
          data?.results?.addresses.length > 0 &&
            setSelectedAddress(data?.results?.addresses[0]);
        }
      })
      .catch((error) => console.log("error", error));
  };

  const getCarriers = async () => {
    var requestOptions = {
      method: "GET",
    };

    await fetch(Urls.getCarriers, requestOptions)
      .then((response) => response?.json())
      .then((data) => {
        if (data?.results?.code == 200 && data?.results?.succes) {
          setCarriers(data?.results?.carriers);
          data?.results?.carriers.length > 0 &&
            setSelectedCarrier(data?.results?.carriers[0]);
        }
      })
      .catch((error) => console.log("error", error));
  };

  const getPaymentMethods = async () => {
    var requestOptions = {
      method: "GET",
    };

    await fetch(Urls.getPaymentMethods, requestOptions)
      .then((response) => response?.json())
      .then((data) => {
        if (data?.results?.code == 200 && data?.results?.succes) {
          setPaymentMethods(data?.results?.paymentMethods);
          data?.results?.paymentMethods.length > 0 &&
            setSelectedPaymentMethod(data?.results?.paymentMethods[0]);
        }
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    const init = async () => {
      if (auth?.user?.id) {
        await getAddresses();
        await getCarriers();
        await getPaymentMethods();
      } else {
        router.push("/connexion");
      }
    };
    init();
  }, []);

  return (
    <div className="bg-white">
      <NewAddressForm
        open={isFormOpen}
        setOpen={setIsFormOpen}
        countries={countries}
        addAddress={addAddress}
      />
      <main className="max-w-7xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto lg:max-w-none">
          <h1 className="sr-only">Checkout</h1>

          <form className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
            <div>
              <div>
                <h2 className="text-lg font-bold text-gray-900">
                  Informations de contact
                </h2>

                <div className="mt-4">
                  <label
                    htmlFor="email-address"
                    className="block text-sm font-bold text-gray-700"
                  >
                    Adresse email
                  </label>
                  <div className="mt-1">
                    <input
                      type="email"
                      id="email-address"
                      name="email-address"
                      autoComplete="email"
                      className="block w-full border-gray-300 shadow-sm focus:ring-secondary focus:border-secondary sm:text-sm"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-3">
                <RadioGroup
                  value={selectedAddress}
                  onChange={setSelectedAddress}
                >
                  <RadioGroup.Label className="text-lg font-bold text-gray-900">
                    <h2 className="text-lg font-bold text-gray-900">
                      Adresses
                    </h2>
                  </RadioGroup.Label>

                  <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                    {/* {addresses?.map((address) => (
                      <div key={address.id}>
                        <RadioGroup.Option
                          value={address}
                          className={({ checked, active }) =>
                            classNames(
                              checked
                                ? "border-transparent"
                                : "border-gray-300",
                              active ? "ring-2 ring-secondary" : "",
                              "relative bg-white border shadow-sm p-4 flex cursor-pointer focus:outline-none"
                            )
                          }
                        ></RadioGroup.Option>
                      </div>
                    ))} */}
                    {addresses?.map((address) => (
                      <RadioGroup.Option
                        key={address.id}
                        value={address}
                        className={({ checked, active }) =>
                          classNames(
                            checked ? "border-transparent" : "border-gray-300",
                            active ? "ring-2 ring-secondary" : "",
                            "relative bg-white border shadow-sm p-4 flex cursor-pointer focus:outline-none"
                          )
                        }
                      >
                        {({ checked, active }) => (
                          <>
                            <span className="flex-1 flex flex-col justify-between">
                              <RadioGroup.Label
                                as="span"
                                className="block text-lg font-bold text-gray-900"
                              >
                                {address.alias}
                              </RadioGroup.Label>
                              <RadioGroup.Description
                                as="span"
                                className="mt-1 text-sm text-black space-y-1"
                              >
                                <p>{address.address1}</p>
                                <p>{address.address2}</p>
                                <p>{address.country_name}</p>
                                <p>{address.city}</p>
                                <p>{address?.phone}</p>
                              </RadioGroup.Description>
                              <RadioGroup.Description>
                                <span className="flex items-end justify-start mt-4">
                                  <TrashIcon
                                    onClick={() => removeAddress(address.id)}
                                    className="h-5 w-5 text-secondary hover:text-red-500"
                                    aria-hidden="true"
                                  />
                                </span>
                              </RadioGroup.Description>
                            </span>
                            {checked ? (
                              <CheckCircleIcon
                                className="h-5 w-5 text-secondary"
                                aria-hidden="true"
                              />
                            ) : null}
                            <span
                              className={classNames(
                                active ? "border" : "border-2",
                                checked
                                  ? "border-secondary"
                                  : "border-transparent",
                                "absolute -inset-px pointer-events-none"
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </RadioGroup.Option>
                    ))}
                  </div>
                  <div className="flex">
                    <span
                      className="flex flex-1/2 items-center mt-5 space-x-1 cursor-pointer text-gray-400 hover:text-gray-500"
                      onClick={openNewAddressForm}
                    >
                      <PlusCircleIcon className="w-7 h-7 " />
                      <p>ajouter une nouvelle adresse</p>
                    </span>
                  </div>
                </RadioGroup>
              </div>

              <div className="mt-10 border-t border-gray-200 pt-10">
                <RadioGroup
                  value={selectedCarrier}
                  onChange={setSelectedCarrier}
                >
                  <RadioGroup.Label className="text-lg font-bold text-gray-900">
                    Méthode de livraison
                  </RadioGroup.Label>

                  <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                    {carriers.map((carrier) => (
                      <RadioGroup.Option
                        key={carrier.id_carrier}
                        value={carrier}
                        className={({ checked, active }) =>
                          classNames(
                            checked ? "border-transparent" : "border-gray-300",
                            active ? "ring-2 ring-secondary" : "",
                            "relative bg-white border shadow-sm p-4 flex cursor-pointer focus:outline-none"
                          )
                        }
                      >
                        {({ checked, active }) => (
                          <>
                            <span className="flex-1 flex">
                              <span className="flex flex-col">
                                <RadioGroup.Label
                                  as="span"
                                  className="block text-sm font-bold text-gray-900"
                                >
                                  {carrier.name}
                                </RadioGroup.Label>
                                <RadioGroup.Description
                                  as="span"
                                  className="mt-1 flex items-center text-sm text-gray-500"
                                >
                                  {carrier.delay}
                                </RadioGroup.Description>
                              </span>
                            </span>
                            {checked ? (
                              <CheckCircleIcon
                                className="h-5 w-5 text-secondary"
                                aria-hidden="true"
                              />
                            ) : null}
                            <span
                              className={classNames(
                                active ? "border" : "border-2",
                                checked
                                  ? "border-secondary"
                                  : "border-transparent",
                                "absolute -inset-px pointer-events-none"
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              <div className="mt-10 border-t border-gray-200 pt-10">
                <h2 className="text-lg font-bold text-gray-900">Paiement</h2>

                <fieldset className="mt-4">
                  <legend className="sr-only">Type de Paiement</legend>
                  <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                    {paymentMethods.map((paymentMethod) => (
                      <div key={paymentMethod.id} className="flex items-center">
                        <input
                          id={paymentMethod.id}
                          name="payment-type"
                          type="radio"
                          checked={
                            paymentMethod.id === selectedPaymentMethod?.id
                          }
                          onChange={() =>
                            setSelectedPaymentMethod(paymentMethod)
                          }
                          className="focus:ring-0 h-4 w-4 text-secondary"
                        />

                        <label
                          htmlFor={paymentMethod.id}
                          className="ml-3 block text-sm font-bold text-gray-700"
                        >
                          {paymentMethod.name}
                        </label>
                      </div>
                    ))}
                  </div>
                </fieldset>

                <div className="mt-6 grid grid-cols-4 gap-y-6 gap-x-4">
                  <div className="col-span-4">
                    <label
                      htmlFor="card-number"
                      className="block text-sm font-bold text-gray-700"
                    >
                      Numéro de carte
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="card-number"
                        name="card-number"
                        autoComplete="cc-number"
                        className="block w-full border-gray-300 shadow-sm focus:ring-secondary focus:border-secondary sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="col-span-4">
                    <label
                      htmlFor="name-on-card"
                      className="block text-sm font-bold text-gray-700"
                    >
                      Nom sur la carte
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="name-on-card"
                        name="name-on-card"
                        autoComplete="cc-name"
                        className="block w-full border-gray-300 shadow-sm focus:ring-secondary focus:border-secondary sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="col-span-3">
                    <label
                      htmlFor="expiration-date"
                      className="block text-sm font-bold text-gray-700"
                    >
                      Date d&apos;expiration (MM/AA)
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="expiration-date"
                        id="expiration-date"
                        autoComplete="cc-exp"
                        className="block w-full border-gray-300 shadow-sm focus:ring-secondary focus:border-secondary sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="cvc"
                      className="block text-sm font-bold text-gray-700"
                    >
                      CVC
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="cvc"
                        id="cvc"
                        autoComplete="csc"
                        className="block w-full border-gray-300 shadow-sm focus:ring-secondary focus:border-secondary sm:text-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Order summary */}
            <div className="relative mt-10 lg:mt-0">
              <CheckoutSummary />
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Checkout;
