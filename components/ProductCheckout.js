import { TrashIcon } from "@heroicons/react/solid";
import React from "react";
import AddToCart from "./AddToCart";

function ProductCheckout({ product, currency_symbol, removeProduct }) {
  return (
    <div className="flex-1 flex flex-col">
      <div className="flex">
        <div className="min-w-0 flex-1">
          <h4 className="text-xl text-black font-londrina">{product.name}</h4>
          <p className="text-sm text-black">{product.legend}</p>
        </div>

        <div className="ml-4 flex-shrink-0 flow-root">
          <button
            type="button"
            className="-m-2.5 bg-white p-2.5 flex items-center justify-center text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">Supprimer</span>
            <TrashIcon
              onClick={() => removeProduct(product?.id_product)}
              className="h-5 w-5"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>

      <div className="flex-1 pt-2 flex items-end justify-between">
        <p className="text-2xl font-medium text-gray-900 font-londrina">
          {/* {parseFloat(product?.price).toFixed(2)} {currency_symbol} */}
          {product?.formatted_total}
        </p>

        <div className="ml-4">
          <label htmlFor="quantity" className="sr-only">
            Quantité
          </label>
          <AddToCart
            max={150}
            min={1}
            product={product}
            defaultQuantity={product?.cart_quantity}
            btnVisible={true}
            idProduct={product?.id_product}
            btnText={"Modifier"}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductCheckout;
