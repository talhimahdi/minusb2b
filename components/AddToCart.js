import React, { useState, useEffect } from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/solid";
import { Urls } from "../configs/configs";
import { useAuth } from "../RestHelper/useAuth";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function AddToCart({
  max = 100,
  min = 1,
  idProduct,
  defaultQuantity = 0,
  btnVisible = true,
  btnText = "",
  setModalOpen,
  modalTitle = "",
  setModalTitle,
}) {
  const [quantity, setQuantity] = useState(defaultQuantity);
  const [btnVisibleState, setBtnVisibleState] = useState(btnVisible);
  const auth = useAuth();

  const addProduct = async () => {
    if (quantity < 1) return;

    var requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        cart_id: auth?.user?.id_cart,
        product_id: idProduct,
        qty: quantity,
      }),
    };

    await fetch(Urls.addToCart, requestOptions)
      .then((response) => response?.json())
      .then((result) => {
        if (result?.code == 200 && result?.succes && result?.cart) {
          auth?.setCart(result?.cart);
          if (!btnVisible) {
            setBtnVisibleState(false);
          }
          setModalTitle(modalTitle);
          setModalOpen(true);
        }
      })
      .catch((error) => console.log("error", error));
  };

  const increment = () => {
    if (quantity < max) {
      setQuantity((prevQuantity) => parseInt(prevQuantity) + 1);
    }
    if (!btnVisibleState) {
      setBtnVisibleState(true);
    }
  };

  const decrement = () => {
    if (quantity > min) {
      setQuantity((prevQuantity) => parseInt(prevQuantity) - 1);
    }
    if (!btnVisibleState) {
      setBtnVisibleState(true);
    }
  };

  const valueChanged = (value) => {
    if (value >= min && value <= max) {
      setQuantity(parseInt(value));
    }
    if (!btnVisibleState) {
      setBtnVisibleState(true);
    }
  };

  return (
    <div className="flex items-center justify-center sm:justify-start">
      <div className="grid grid-flow-col grid-cols-3 w-52">
        <div
          className={classNames(
            btnVisibleState ? "md:col-start-1" : "md:col-start-2",
            "bg-white h-full border-2 border-black p-0"
          )}
        >
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
        {btnVisibleState && (
          <div className="bg-black h-full w-full justify-end  col-span-2">
            <button
              onClick={() => {
                addProduct();
              }}
              type={"button"}
              className="text-white h-full w-full select-none"
            >
              {btnText}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default AddToCart;
