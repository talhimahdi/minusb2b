import { TrashIcon } from "@heroicons/react/solid";
import React from "react";
import AddToCart from "./AddToCart";

function ProductCheckout({ product, currency_symbol, removeProduct }) {
  return (
    <div className="flex-1 flex flex-col">
      <div className="flex">
        <div className="flex flex-1 space-x-5">
          <div className="w-20">
            <img src={product.image_url} alt="  " />
          </div>
          <div className="min-w-0 flex-1">
            <h4 className="leading-none text-xl text-black">{product.name}</h4>
            <h2 className="leading-none text-gray-700 text-sm mt-1">
              {product.display_categorie}
            </h2>
            <p className="text-xl font-medium text-gray-900 font-londrina">
              {parseFloat(product?.price).toFixed(2)} {currency_symbol} HT
              {/* {product?.formatted_total} */}
            </p>
          </div>
        </div>

        <div className="ml-4">
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

      <div className="flex-1 flex pt-2 justify-end">
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
