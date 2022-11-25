import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/outline";
import { ExclamationCircleIcon } from "@heroicons/react/solid";

export default function NewAddressForm({
  open,
  setOpen,
  countries,
  addAddress,
  errorMessage,
}) {
  const [addressForm, setAddressForm] = useState({
    id_country: 1,
    alias: "",
    company: "",
    lastname: "",
    firstname: "",
    address1: "",
    address2: "",
    city: "",
    postcode: "",
    phone: "",
  });
  const cancelButtonRef = useRef(null);
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={() => {}}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative bg-white px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full sm:p-6">
                <div className="bg-white">
                  <h2 className="text-lg font-bold text-gray-900">
                    Informations sur la livraison
                  </h2>

                  <div className="mt-4 grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-4">
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-bold text-gray-700"
                      >
                        Alias
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          value={addressForm.alias}
                          onChange={(e) =>
                            setAddressForm({
                              ...addressForm,
                              alias: e.target.value,
                            })
                          }
                          className="block w-full border-gray-300 shadow-sm focus:ring-secondary focus:border-secondary sm:text-sm"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-bold text-gray-700"
                      >
                        Prénom
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          value={addressForm.firstname}
                          onChange={(e) =>
                            setAddressForm({
                              ...addressForm,
                              firstname: e.target.value,
                            })
                          }
                          className="block w-full border-gray-300 shadow-sm focus:ring-secondary focus:border-secondary sm:text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-bold text-gray-700"
                      >
                        Nom
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          value={addressForm.lastname}
                          onChange={(e) =>
                            setAddressForm({
                              ...addressForm,
                              lastname: e.target.value,
                            })
                          }
                          className="block w-full border-gray-300 shadow-sm focus:ring-secondary focus:border-secondary sm:text-sm"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="company"
                        className="block text-sm font-bold text-gray-700"
                      >
                        Entreprise
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          value={addressForm.company}
                          onChange={(e) =>
                            setAddressForm({
                              ...addressForm,
                              company: e.target.value,
                            })
                          }
                          className="block w-full border-gray-300 shadow-sm focus:ring-secondary focus:border-secondary sm:text-sm"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="address"
                        className="block text-sm font-bold text-gray-700"
                      >
                        Adresse
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          value={addressForm.address1}
                          onChange={(e) =>
                            setAddressForm({
                              ...addressForm,
                              address1: e.target.value,
                            })
                          }
                          className="block w-full border-gray-300 shadow-sm focus:ring-secondary focus:border-secondary sm:text-sm"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="apartment"
                        className="block text-sm font-bold text-gray-700"
                      >
                        Complément d&apos;adresse
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          value={addressForm.address2}
                          onChange={(e) =>
                            setAddressForm({
                              ...addressForm,
                              address2: e.target.value,
                            })
                          }
                          className="block w-full border-gray-300 shadow-sm focus:ring-secondary focus:border-secondary sm:text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="city"
                        className="block text-sm font-bold text-gray-700"
                      >
                        Ville
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          value={addressForm.city}
                          onChange={(e) =>
                            setAddressForm({
                              ...addressForm,
                              city: e.target.value,
                            })
                          }
                          className="block w-full border-gray-300 shadow-sm focus:ring-secondary focus:border-secondary sm:text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="country"
                        className="block text-sm font-bold text-gray-700"
                      >
                        Pays
                      </label>
                      <div className="mt-1">
                        <select
                          value={addressForm.id_country}
                          onChange={(e) =>
                            setAddressForm({
                              ...addressForm,
                              id_country: e.target.value,
                            })
                          }
                          className="block w-full border-gray-300 shadow-sm focus:ring-secondary focus:border-secondary sm:text-sm"
                        >
                          <option value={0}>Selectionner un pays</option>
                          {countries?.map((country) => (
                            <option key={country?.id} value={country?.id}>
                              {country?.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="postal-code"
                        className="block text-sm font-bold text-gray-700"
                      >
                        Code Postal
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          value={addressForm.postcode}
                          onChange={(e) =>
                            setAddressForm({
                              ...addressForm,
                              postcode: e.target.value,
                            })
                          }
                          className="block w-full border-gray-300 shadow-sm focus:ring-secondary focus:border-secondary sm:text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-bold text-gray-700"
                      >
                        Téléphone
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          value={addressForm.phone}
                          onChange={(e) =>
                            setAddressForm({
                              ...addressForm,
                              phone: e.target.value,
                            })
                          }
                          className="block w-full border-gray-300 shadow-sm focus:ring-secondary focus:border-secondary sm:text-sm"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center border border-transparent shadow-sm px-4 py-2 bg-primary text-lg font-medium text-secondary focus:outline-none focus:ring-0 sm:col-start-2"
                    onClick={async () => await addAddress(addressForm)}
                  >
                    Enregister
                  </button>
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center border border-gray-300 shadow-sm px-4 py-2 bg-white text-lg font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-0 sm:mt-0 sm:col-start-1"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Annuler
                  </button>
                </div>
                <div className="mt-5">
                  {errorMessage != "" && (
                    <div className="flex items-center space-x-2 text-secondary">
                      <ExclamationCircleIcon className="h-5 w-5" />
                      <p>{errorMessage}</p>
                    </div>
                  )}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
