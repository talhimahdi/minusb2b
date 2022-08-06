import React, { useState, useEffect } from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/solid";
import { Urls } from "../configs/configs";

function AddToCart({
  max = 100,
  min = 1,
  product,
  defaultValue = 1,
  onChange,
}) {
  const [quantity, setQuantity] = useState(defaultValue);

  const updateCart = async () => {
    const url = Urls.updateCart(product.id_product, quantity);
    console.log(url);

    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    await fetch(url, requestOptions)
      .then((response) => response?.json())
      .then((result) => {
        // if (result?.code == 200) {
        // setCartState(result?.psdata);
        console.log(result);
        // }
      })
      .catch((error) => console.log("error", error));
  };

  //   useEffect(() => {
  //     onChange((prev) => ({ ...prev, quantityDyalna: quantity }));
  //   }, [quantity]);

  const increment = () => {
    if (quantity < max) {
      setQuantity((prevQuantity) => parseInt(prevQuantity) + 1);
    }
  };

  const decrement = () => {
    if (quantity > min) {
      setQuantity((prevQuantity) => parseInt(prevQuantity) - 1);
    }
  };

  const valueChanged = (value) => {
    if (value >= min && value <= max) {
      setQuantity(parseInt(value));
    }
  };

  return (
    <>
      <div className="flex items-center justify-center sm:justify-start">
        <div className="grid grid-flow-col grid-cols-3 w-52">
          <div className="bg-white h-full border-2 border-black p-0">
            <div className="flex">
              <input
                onChange={(e) => valueChanged(e.target.value)}
                min={min}
                max={max}
                value={quantity}
                type="number"
                id="quantity"
                name="quantity"
                className="p-0 text-black text-sm border-none focus:outline-none focus:border-0 focus:ring-0 block w-full text-center font-semibold "
                required
              />
              <div>
                <span className="cursor-pointer" onClick={increment}>
                  <ChevronUpIcon className="h-5 w-5 text-black" />
                </span>
                <span className="cursor-pointer" onClick={decrement}>
                  <ChevronDownIcon className="h-5 w-5 text-black" />
                </span>
              </div>
            </div>
          </div>
          <div className="bg-black h-full w-full justify-end  col-span-2 ">
            <button
              onClick={() => {
                updateCart();
              }}
              type={"button"}
              className="text-white h-full w-full select-none"
            >
              Je le veux !
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddToCart;
