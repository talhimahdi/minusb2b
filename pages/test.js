import React, { useEffect } from "react";
import API from "../webservices";

function Test() {
  useEffect(
    () => async () => {
      const products = await API.products.all();

      console.log(products);
    },
    []
  );
  return <div>Test</div>;
}

export default Test;
