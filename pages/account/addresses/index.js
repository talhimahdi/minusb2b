import { useState, useEffect } from "react";
import { RadioGroup } from "@headlessui/react";
import { PlusCircleIcon } from "@heroicons/react/outline";
import { TrashIcon, PencilIcon } from "@heroicons/react/solid";
import { useAuth } from "../../../RestHelper/useAuth";
import { useRouter } from "next/router";
import NewAddressForm from "../../../components/NewAddressForm";
import EditAddressForm from "../../../components/EditAddressForm";
import Loader from "../../../components/Loader";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Addresses() {
  const auth = useAuth();
  const router = useRouter();

  const [addresses, setAddresses] = useState([]);
  const [countries, setCountries] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isAddFormOpen, setIsAddFormOpen] = useState(false);
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);
  const [errorAddAddressMessage, setErrorAddAddressMessage] = useState("");
  const [updatedAddress, setUpdatedAddress] = useState({});

  useEffect(() => {
    const init = async () => {
      if (auth?.user?.id) {
        setLoading(true);
        await getAddresses();
      }
      setLoading(false);
    };
    init();
  }, [auth?.user]);

  const getAddresses = async () => {
    var requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ customerId: auth?.user?.id }),
    };

    await fetch("/api/addresses/get", requestOptions)
      .then((response) => response?.json())
      .then((data) => {
        if (data?.results?.code == 200 && data?.results?.succes) {
          setAddresses(data?.results?.addresses);
          setCountries(data?.results?.countries);
        }
      })
      .catch((error) => console.log("error", error));
  };

  const addAddress = async (addressInfos) => {
    setLoading(true);
    addressInfos.id_customer = auth?.user?.id;
    var requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ addressInfos }),
    };
    const result = await fetch("/api/addresses/add", requestOptions)
      .then((response) => response?.json())
      .then((data) => {
        return data?.results;
      })
      .catch((error) => console.log("error", error));

    if (result?.code == 200 && result?.succes) {
      setAddresses([...addresses, result?.new_address]);
      setIsAddFormOpen(false);
    } else {
      setErrorAddAddressMessage(result?.message);
    }
    setLoading(false);
  };

  const editAddress = async (addressInfos) => {
    setLoading(true);
    var requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ addressInfos }),
    };

    const result = await fetch("/api/addresses/edit", requestOptions)
      .then((response) => response?.json())
      .then((data) => {
        return data?.results;
      })
      .catch((error) => console.log("error", error));

    if (result?.code == 200 && result?.succes) {
      await getAddresses();
      setIsEditFormOpen(false);
    } else {
      console.log(result?.message);
      setErrorAddAddressMessage(result?.message);
    }
    setLoading(false);
  };

  const removeAddress = async (addressId) => {
    if (!confirm("voulez vous vraiment supprimer l'adresse?")) return;
    setLoading(true);
    var requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ addressId: addressId }),
    };
    const result = await fetch("/api/addresses/delete", requestOptions)
      .then((response) => response?.json())
      .then((data) => {
        return data?.results;
      })
      .catch((error) => console.log("error", error));

    if (result?.code == 200 && result?.succes) {
      getAddresses();
    } else {
      console.log("error!!!");
    }
    setLoading(false);
  };

  return (
    <>
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
      <main className="max-w-7xl mx-auto pt-8 pb-24 px-4 sm:px-6">
        <div className="mt-3">
          <RadioGroup>
            <RadioGroup.Label className="text-lg font-bold text-gray-900">
              <h2 className="text-lg font-bold text-gray-900">Adresses</h2>
            </RadioGroup.Label>

            <div className="my-5">
              <div className="flex">
                <span
                  className="flex flex-1/2 items-center space-x-1 cursor-pointer text-black hover:text-gray-500"
                  onClick={() => setIsAddFormOpen(true)}
                >
                  <PlusCircleIcon className="w-6 h-6 " />
                  <p>ajouter une nouvelle adresse</p>
                </span>
              </div>
            </div>

            <ul
              role="list"
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {addresses.map((address) => (
                <li
                  key={address.id}
                  className="flex flex-col justify-between col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow border"
                >
                  <div className="flex w-full items-center justify-between space-x-6 p-6">
                    <div className="flex-1 ">
                      <div className="flex items-center justify-between space-x-3 mb-5">
                        <h3 className=" text-sm font-medium text-gray-900">
                          {address.alias}
                        </h3>
                        <span className="inline-block rounded-full bg-primary px-2 py-0.5 text-sm font-semibold text-secondary">
                          {address.company}
                        </span>
                      </div>
                      <div className="mt-1  text-sm text-gray-500 space-y-2">
                        <p>{address.address1}</p>
                        <p>{address.address2}</p>
                        <p>{address.country_name}</p>
                        <p>{address.city}</p>
                        <p>{address?.phone}</p>
                      </div>
                    </div>
                  </div>
                  <div className="-mt-px flex divide-x divide-gray-200">
                    <div className="flex w-0 flex-1">
                      {address.can_delete && (
                        <a
                          onClick={() => removeAddress(address.id)}
                          className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center cursor-pointer rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
                        >
                          <TrashIcon
                            className="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                          <span className="ml-3">Supprimer</span>
                        </a>
                      )}
                    </div>
                    <div className="-ml-px flex w-0 flex-1">
                      <a
                        onClick={() => {
                          setUpdatedAddress(address);
                          setIsEditFormOpen(true);
                        }}
                        className="relative inline-flex w-0 flex-1 items-center justify-center cursor-pointer rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
                      >
                        <PencilIcon
                          className="h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                        <span className="ml-3">Modifier</span>
                      </a>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </RadioGroup>
        </div>
      </main>
    </>
  );
}
