import React, { useEffect } from "react";
import API from "../webservices";

function test() {
  useEffect(
    () => async () => {
      const products = await API.products.all();

      console.log(products);
    },
    []
  );

  return <div>test</div>;
}

export default test;
