import { Fragment, useState, useEffect } from 'react';
import { RadioGroup } from '@headlessui/react';
import { PlusCircleIcon } from '@heroicons/react/outline';
import { CheckCircleIcon, TrashIcon, PencilIcon } from '@heroicons/react/solid';
import { useAuth } from '../RestHelper/useAuth';
import CheckoutSummary from '../components/CheckoutSummary';
import { useRouter } from 'next/router';
import NewAddressForm from '../components/NewAddressForm';
import Loader from '../components/Loader';

import localStorageX from '../configs/localStorage';
import EditAddressForm from '../components/EditAddressForm';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function Checkout() {
  const auth = useAuth();
  const router = useRouter();
  const [selectedAddressFacturation, setSelectedAddressFacturation] = useState(
    {},
  );
  const [addressesFacturation, setAddressesFacturation] = useState([]);
  const [selectedAddressLivraison, setSelectedAddressLivraison] = useState({});
  const [addressesLivraison, setAddressesLivraison] = useState([]);
  const [countries, setCountries] = useState([]);
  const [carriers, setCarriers] = useState([]);
  const [selectedCarrier, setSelectedCarrier] = useState({});
  const [paymentMethods, setPaymentMethods] = useState([]);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState({});
  // const [isFormOpen, setIsFormOpen] = useState(false);
  const [isAddFormOpen, setIsAddFormOpen] = useState(false);
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [showPaypalButton, setShowPaypalButton] = useState(false);
  const [isOtherDeliveryAddress, setIsOtherDeliveryAddress] = useState(true);
  const [errorAddAddressMessage, setErrorAddAddressMessage] = useState('');

  const [updatedAddress, setUpdatedAddress] = useState({});

  useEffect(() => {
    const init = async () => {
      if (!localStorageX.isConnected()) {
        router.push('/connexion');
      }
    };
    init();
  }, []);

  useEffect(() => {
    const init = async () => {
      if (auth?.user?.id) {
        setLoading(true);
        const result = await updateCart({
          id_carrier: selectedCarrier?.id_carrier,
        });

        if (result) {
          await auth?.getCart(auth?.user?.id_cart);
        }
      }
      setLoading(false);
    };
    init();
  }, [selectedCarrier?.id_carrier]);

  useEffect(() => {
    const init = async () => {
      if (auth?.user?.id) {
        setLoading(true);
        await auth?.getCart(auth?.user?.id_cart);
        // await getAddresses();
        // await getCarriers();
        await getPaymentMethods();
      }
      setLoading(false);
    };
    init();
  }, [auth?.user]);

  useEffect(() => {
    const init = async () => {
      if (auth?.user?.id) {
        const addressCountry = await getAddresses();
        await getCarriers(addressCountry);
      }
      setLoading(false);
    };
    init();
  }, [auth?.cart]);

  useEffect(() => {
    const init = async () => {
      if (auth?.cart?.products_count < 1) {
        router.push('/products');
      }
    };
    init();
  }, [auth?.cart]);

  useEffect(() => {
    const init = async () => {
      if (
        paymentMethods.filter(
          (e) => e.id === auth?.cart?.last_payment_methode?.id,
        ).length > 0
      ) {
        setSelectedPaymentMethod(auth?.cart?.last_payment_methode);
      }
    };

    init();
  }, [auth?.cart?.last_payment_methode]);

  const updateCart = async ({
    id_carrier,
    id_address_invoice = null,
    id_address_delivery = null,
  }) => {
    setLoading(true);
    const addressFacturationId = id_address_invoice
      ? id_address_invoice
      : selectedAddressFacturation.id;

    const addressLivraisonId = null;
    if (id_address_invoice && isOtherDeliveryAddress) {
      addressLivraisonId = id_address_invoice;
    } else {
      addressLivraisonId = id_address_delivery
        ? id_address_delivery
        : selectedAddressLivraison.id;
    }

    if (addressFacturationId != addressLivraisonId) {
      setIsOtherDeliveryAddress(false);
    }

    var requestOptions = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        cartId: auth?.user?.id_cart,
        carrierId: id_carrier,
        addressFacturationId: addressFacturationId,
        addressLivraisonId: addressLivraisonId,
      }),
    };
    const result = await fetch('/api/cart/update', requestOptions)
      .then((response) => response?.json())
      .then((data) => data)
      .catch((error) => error);

    if (result?.code == 200 && result?.succes) {
      await auth?.getCart(auth?.user?.id_cart);
      setLoading(false);
      return true;
    } else {
      setLoading(false);
      return false;
    }
  };

  const confirmCommande = async () => {
    setLoading(true);
    var requestOptions = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        cartId: auth?.user?.id_cart,
        carrierId: selectedCarrier?.id_carrier,
        addressInvoiceId: selectedAddressFacturation?.id,
        addressDeliveryId: isOtherDeliveryAddress
          ? selectedAddressFacturation?.id
          : selectedAddressLivraison?.id,
        moduleName: selectedPaymentMethod?.module_name,
      }),
    };

    const result = await fetch('/api/payment', requestOptions)
      .then((response) => response?.json())
      .then((data) => data.results)
      .catch((error) => error);

    if (result?.code == 200 && result?.succes == false) {
      alert(result?.message);
      return;
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

    if (result?.payplug) {
      Payplug.showPayment(result?.payplug?.payment_url);
    } else {
      router.push(`/confirmation-commande/${result?.order?.reference}`);
    }

    setLoading(false);
  };

  const openNewAddressForm = () => {
    setIsAddFormOpen(true);
  };

  const openEditAddressForm = () => {
    setIsEditFormOpen(true);
  };

  const addAddress = async (addressInfos) => {
    setLoading(true);
    addressInfos.id_customer = auth?.user?.id;
    var requestOptions = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ addressInfos }),
    };
    const result = await fetch('/api/addresses/add', requestOptions)
      .then((response) => response?.json())
      .then((data) => {
        return data?.results;
      })
      .catch((error) => error);

    if (result?.code == 200 && result?.succes) {
      setAddressesFacturation([...addressesFacturation, result?.new_address]);
      setAddressesLivraison([...addressesLivraison, result?.new_address]);
      // setSelectedAddress(result?.new_address);
      setIsAddFormOpen(false);
    } else {
      setErrorAddAddressMessage(result?.message);
    }
    setLoading(false);
  };

  const editAddress = async (addressInfos) => {
    setLoading(true);
    var requestOptions = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ addressInfos }),
    };

    const result = await fetch('/api/addresses/edit', requestOptions)
      .then((response) => response?.json())
      .then((data) => {
        return data?.results;
      })
      .catch((error) => error);

    if (result?.code == 200 && result?.succes) {
      await getAddresses();
      setIsEditFormOpen(false);
    } else {
      setErrorAddAddressMessage(result?.message);
    }
    setLoading(false);
  };

  const removeAddress = async (addressId) => {
    if (!confirm("voulez vous vraiment supprimer l'adresse?")) return;
    setLoading(true);
    var requestOptions = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ addressId: addressId }),
    };
    const result = await fetch('/api/addresses/delete', requestOptions)
      .then((response) => response?.json())
      .then((data) => {
        return data?.results;
      })
      .catch((error) => error);

    if (result?.code == 200 && result?.succes) {
      getAddresses();
    }
    setLoading(false);
  };

  const getAddresses = async () => {
    var requestOptions = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ customerId: auth?.user?.id }),
    };

    return await fetch('/api/addresses/get', requestOptions)
      .then((response) => response?.json())
      .then((data) => {
        if (data?.results?.code == 200 && data?.results?.succes) {
          setAddressesFacturation(data?.results?.addresses);
          setAddressesLivraison(data?.results?.addresses);
          setCountries(data?.results?.countries);

          if (
            data?.results?.addresses.length > 0 &&
            auth?.cart?.id_address_invoice > 0
          ) {
            setSelectedAddressFacturation(
              data?.results?.addresses.find(
                (address) => address.id === auth?.cart?.id_address_invoice,
              ),
            );
          }
          if (
            data?.results?.addresses.length > 0 &&
            auth?.cart?.id_address_delivery > 0
          ) {
            const usedAddress = data?.results?.addresses.find(
              (address) => address.id === auth?.cart?.id_address_delivery,
            );
            setSelectedAddressLivraison(usedAddress);
            return usedAddress.country_name;
          } else {
            setSelectedAddressFacturation(data?.results?.addresses[0]);
            setSelectedAddressLivraison(data?.results?.addresses[0]);
            return data?.results?.addresses[0].country_name;
          }
        }
      })
      .catch((error) => error);
  };

  const getCarriers = async (addressCountry = '') => {
    const franceCountries = ['France', 'Luxembourg', 'Belgique', 'Pays-Bas'];
    const Dcountry = franceCountries.includes(addressCountry)
      ? 'france'
      : 'monde';
    var requestOptions = {
      method: 'GET',
    };
    await fetch('/api/carriers', requestOptions)
      .then((response) => response?.json())
      .then((data) => {
        if (data?.results?.code == 200 && data?.results?.succes) {
          const usedCarriers = data?.results?.carriers.filter((carrier) =>
            carrier.name.includes(Dcountry),
          );
          const usedSelectedCarrier = data?.results?.carriers.find((carrier) =>
            carrier.name.includes(Dcountry),
          );
          setCarriers(usedCarriers);
          setSelectedCarrier(usedSelectedCarrier);
          // if (
          //   data?.results?.carriers.length > 0 &&
          //   auth?.cart?.id_carrier > 0
          // ) {
          //   setSelectedCarrier(usedSelectedCarrier);
          // } else {
          //   setSelectedCarrier(usedSelectedCarrier);
          // }
        }
      })
      .catch((error) => error);
  };

  const getPaymentMethods = async () => {
    var requestOptions = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        customerId: auth?.user?.id,
      }),
    };

    await fetch('/api/paymentMethods', requestOptions)
      .then((response) => response?.json())
      .then((data) => {
        if (data?.results?.code == 200 && data?.results?.succes) {
          setPaymentMethods(data?.results?.paymentMethods);
          if (data?.results?.paymentMethods.length > 0) {
            setSelectedPaymentMethod(data?.results?.paymentMethods[1]);
          }
        }
      })
      .catch((error) => error);
  };

  return (
    <>
      <div className="bg-white">
        <Loader isVisible={isLoading} />
        <NewAddressForm
          open={isAddFormOpen}
          setOpen={setIsAddFormOpen}
          countries={countries}
          addAddress={addAddress}
          errorMessage={errorAddAddressMessage}
        />
        <EditAddressForm
          address={updatedAddress}
          open={isEditFormOpen}
          setOpen={setIsEditFormOpen}
          countries={countries}
          editAddress={editAddress}
          errorMessage={errorAddAddressMessage}
        />
        <main className="max-w-7xl mx-auto md:pt-16 pb-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto lg:max-w-none">
            <h1 className="sr-only">Checkout</h1>

            <form className="grid md:grid-cols-2 gap-x-12 gap-y-12">
              <div className="order-2 md:order-1">
                <div>
                  <h2 className="text-lg font-bold text-gray-900">
                    Informations de contact
                  </h2>
                </div>

                <hr className="mt-5" />
                <div className="mt-3">
                  <RadioGroup
                    value={selectedAddressFacturation}
                    onChange={setSelectedAddressFacturation}
                  >
                    <RadioGroup.Label className="text-lg font-bold text-gray-900">
                      <h2 className="text-lg font-bold text-gray-900">
                        Adresse de facturation
                      </h2>
                    </RadioGroup.Label>

                    <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                      {addressesFacturation?.map((address) => (
                        <RadioGroup.Option
                          onClick={() =>
                            updateCart({
                              id_carrier: selectedCarrier?.id_carrier,
                              id_address_invoice: address.id,
                            })
                          }
                          key={address.id}
                          value={address}
                          className={({ checked, active }) =>
                            classNames(
                              checked
                                ? 'border-transparent'
                                : 'border-gray-300',
                              active ? 'ring-2 ring-secondary' : '',
                              'relative bg-white border shadow-sm p-4 flex cursor-pointer focus:outline-none',
                            )
                          }
                        >
                          {({ checked, active }) => (
                            <>
                              <span className="flex-1 flex flex-col space-y-5">
                                <RadioGroup.Label
                                  as="span"
                                  className="block text-md font-bold text-gray-900"
                                >
                                  {address.company}
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
                                  {address.can_delete && (
                                    <span className="flex items-end justify-start space-x-2 mt-4 h-5">
                                      <PencilIcon
                                        onClick={() => {
                                          setUpdatedAddress(address);
                                          openEditAddressForm();
                                        }}
                                        className="h-5 w-5 text-secondary hover:text-red-500"
                                        aria-hidden="true"
                                      />
                                      <TrashIcon
                                        onClick={() =>
                                          removeAddress(address.id)
                                        }
                                        className="h-5 w-5 text-secondary hover:text-red-500"
                                        aria-hidden="true"
                                      />
                                    </span>
                                  )}
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
                                  active ? 'border' : 'border-2',
                                  checked
                                    ? 'border-secondary'
                                    : 'border-transparent',
                                  'absolute -inset-px pointer-events-none',
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

                <div className="flex items-center my-4">
                  <input
                    onChange={(e) => {
                      setIsOtherDeliveryAddress(e.target.checked);
                    }}
                    checked={isOtherDeliveryAddress}
                    id="default-checkbox"
                    type="checkbox"
                    className="w-4 h-4 text-black ring-0 border-gray-300 focus:outline-none "
                  />
                  <label
                    htmlFor="default-checkbox"
                    className="ml-2  text-gray-900 "
                  >
                    <p>Je souhaite être livré à mon adresse de facturation</p>
                  </label>
                </div>

                {!isOtherDeliveryAddress && (
                  <div className="mt-3">
                    <RadioGroup
                      value={selectedAddressLivraison}
                      onChange={setSelectedAddressLivraison}
                    >
                      <RadioGroup.Label className="text-lg font-bold text-gray-900">
                        <h2 className="text-lg font-bold text-gray-900">
                          Adresse de livraison
                        </h2>
                      </RadioGroup.Label>

                      <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                        {addressesLivraison?.map((address) => (
                          <RadioGroup.Option
                            onClick={() =>
                              updateCart({
                                id_carrier: selectedCarrier?.id_carrier,
                                id_address_delivery: address.id,
                              })
                            }
                            key={address.id}
                            value={address}
                            className={({ checked, active }) =>
                              classNames(
                                checked
                                  ? 'border-transparent'
                                  : 'border-gray-300',
                                active ? 'ring-2 ring-secondary' : '',
                                'relative bg-white border shadow-sm p-4 flex cursor-pointer focus:outline-none',
                              )
                            }
                          >
                            {({ checked, active }) => (
                              <>
                                <span className="flex-1 flex flex-col space-y-5">
                                  <RadioGroup.Label
                                    as="span"
                                    className="block text-md font-bold text-gray-900"
                                  >
                                    {address.company}
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
                                    <span className="flex items-end justify-start mt-4 h-5">
                                      {address.can_delete && (
                                        <TrashIcon
                                          onClick={() =>
                                            removeAddress(address.id)
                                          }
                                          className="h-5 w-5 text-secondary hover:text-red-500"
                                          aria-hidden="true"
                                        />
                                      )}
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
                                    active ? 'border' : 'border-2',
                                    checked
                                      ? 'border-secondary'
                                      : 'border-transparent',
                                    'absolute -inset-px pointer-events-none',
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
                )}

                <div className="mt-5">
                  <div className="flex">
                    <span
                      className="flex flex-1/2 items-center space-x-1 cursor-pointer text-black hover:text-gray-500"
                      onClick={openNewAddressForm}
                    >
                      <PlusCircleIcon className="w-6 h-6 " />
                      <p>ajouter une nouvelle adresse</p>
                    </span>
                  </div>
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
                          onClick={() =>
                            updateCart({ id_carrier: carrier.id_carrier })
                          }
                          key={carrier.id_carrier}
                          value={carrier}
                          className={({ checked, active }) =>
                            classNames(
                              checked
                                ? 'border-transparent'
                                : 'border-gray-300',
                              active ? 'ring-2 ring-secondary' : '',
                              'relative bg-white border shadow-sm p-4 flex cursor-pointer focus:outline-none',
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
                                  active ? 'border' : 'border-2',
                                  checked
                                    ? 'border-secondary'
                                    : 'border-transparent',
                                  'absolute -inset-px pointer-events-none',
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
                    {/* space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10 */}
                    <div className="grid grid-cols-4 gap-3">
                      {paymentMethods.map((paymentMethod) => (
                        <div
                          key={paymentMethod.id}
                          className="flex items-center"
                        >
                          <input
                            id={paymentMethod.id}
                            name="payment-type"
                            type="radio"
                            checked={
                              paymentMethod.id === selectedPaymentMethod?.id
                            }
                            onChange={(e) => {
                              if (paymentMethod.module_name == 'paypal') {
                                setShowPaypalButton(true);
                              } else {
                                setShowPaypalButton(false);
                              }
                              setSelectedPaymentMethod(paymentMethod);
                            }}
                            className="focus:ring-0 h-4 w-4 text-secondary"
                          />

                          <label
                            htmlFor={paymentMethod.id}
                            className="ml-2 block text-sm font-bold text-gray-700"
                          >
                            {paymentMethod.name}
                          </label>
                        </div>
                      ))}
                    </div>
                  </fieldset>
                </div>
              </div>

              {/* Order summary */}
              <div className="mt-10 lg:mt-0 order-1">
                <CheckoutSummary
                  onConfirmCommande={confirmCommande}
                  showConfirmButton={!showPaypalButton}
                  rr={selectedPaymentMethod}
                />
              </div>
            </form>
          </div>
        </main>
      </div>
    </>
  );
}

export default Checkout;
