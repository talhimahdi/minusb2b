import React from "react";
import useSWR, { SWRConfig } from "swr";
import Checkout from "./checkout";

const addressesFetcher = (url) =>
  fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ customerId: 2 }),
  }).then((res) => res.json());

const fetcher = async (url) => {
  var requestOptions = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ customerId: auth?.user?.id }),
  };

  await fetch(url, requestOptions)
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

  await fetch("/api/carriers", requestOptions)
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

  await fetch("/api/paymentMethods", requestOptions)
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

export default function Testswr({ fallback }) {
  return (
    <SWRConfig value={{ fallback }}>
      <Address />
      <Address2 />
    </SWRConfig>
  );
}

function Address() {
  const { data } = useSWR("/api/addresses/get", addressesFetcher);
  return <h1>{data.results.addresses[0].alias}</h1>;
}

function Address2() {
  const { data } = useSWR("/api/addresses/get", addressesFetcher);
  return <h1>{data.results.addresses[1].alias}</h1>;
}

export async function getServerSideProps() {
  const addressesResult = await fetch(
    "http://localhost:3000/api/addresses/get",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ customerId: 2 }),
    }
  );
  const addresses = await addressesResult.json();

  const carriersResult = await fetch("http://localhost:3000/api/carriers", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ customerId: 2 }),
  });
  const carriers = await carriersResult.json();

  const paymentMethodsResult = await fetch(
    "http://localhost:3000/api/paymentMethods",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ customerId: 2 }),
    }
  );
  const paymentMethods = await paymentMethodsResult.json();

  return {
    props: {
      addressesssss: addresses,
      fallback: {
        "/api/addresses/get": addresses,
        "/api/carriers": carriers,
        "/api/paymentMethods": paymentMethods,
      },
    },
  };
}
