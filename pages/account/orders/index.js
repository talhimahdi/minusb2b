import { useState, useEffect } from "react";
import { PlusCircleIcon } from "@heroicons/react/outline";
import { useAuth } from "../../../RestHelper/useAuth";
import { useRouter } from "next/router";
import Loader from "../../../components/Loader";

import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/solid";

const people = [
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  // More people...
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Orders() {
  const auth = useAuth();
  const router = useRouter();

  const [orders, setOrders] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const init = async () => {
      if (auth?.user?.id) {
        setLoading(true);
        await getOrders();
      }
      setLoading(false);
    };
    init();
  }, [auth?.user]);

  const getOrders = async () => {
    var requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ customerId: auth?.user?.id }),
    };

    await fetch("/api/getOrders", requestOptions)
      .then((response) => response?.json())
      .then((data) => {
        if (data?.results?.code == 200 && data?.results?.succes) {
          setOrders(data?.results?.orders);
        }
      })
      .catch((error) => console.log("error", error));
  };

  const downloadInvoice = async (ref) => {
    var requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/pdf",
        "Content-Type": "application/pdf",
      },
      body: JSON.stringify({ ref }),
    };

    await fetch("/api/downloadInvoice", requestOptions)
      .then((response) => response?.json())
      .then((data) => {
        // if (data?.results?.code == 200 && data?.results?.succes) {
        // setOrders(data?.results?.orders);
        // }
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <>
      <Loader isVisible={isLoading} />
      <main className="max-w-7xl mx-auto pt-8 pb-24 px-4 sm:px-6">
        <div className="mt-3">
          <div className="text-lg font-bold text-gray-900">
            <h2 className="text-lg font-bold text-gray-900">Commandes</h2>
          </div>

          <div className="mt-8 flex flex-col">
            <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5">
                  <table className="min-w-full divide-y divide-gray-300">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 pr-3 text-left text-md font-semibold text-gray-900 sm:pl-6"
                        >
                          Réference
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-md font-semibold text-gray-900"
                        >
                          Montant
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-md font-semibold text-gray-900"
                        >
                          Méthode de paiement
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-md font-semibold text-gray-900"
                        >
                          Statut
                        </th>
                        {/* <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-md font-semibold text-gray-900"
                        >
                          Facture
                        </th> */}
                        <th
                          scope="col"
                          className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                        >
                          <span className="sr-only">Edit</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      {orders.map((order) => (
                        <tr key={order.reference}>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                            {order.reference}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {parseFloat(order.amount).toFixed(2)} €
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {order.payment}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {order.statut}
                          </td>
                          {/* <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            <a
                              onClick={() => {
                                downloadInvoice(order.reference);
                              }}
                              className=" text-blue-500 hover:text-blue-300 cursor-pointer"
                            >
                              Télécharger
                              <span className="sr-only">, {order.name}</span>
                            </a>
                          </td> */}
                          <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-md font-bold sm:pr-6">
                            <a
                              href={"/account/orders/" + order.reference}
                              className=" text-blue-500 hover:text-blue-300"
                            >
                              Détails
                              <span className="sr-only">, {order.name}</span>
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
