import React, { useState } from "react";
import { SearchIcon } from "@heroicons/react/solid";
import SingleProductList from "./SingleProductList";

function ProductList({ products }) {
  const [query, setQuery] = useState("");
  const [productsState, setProductsState] = useState(products);

  const searchProducts = (keyword) => {
    setQuery(keyword);
    console.log(query);
  };

  if (products?.length < 1) {
    return (
      <div className="bg-primary pt-20 -mt-20">
        <div className="max-w-sm mx-auto md:max-w-7xl my-5 py-5">
          No products to show!
        </div>
      </div>
    );
  }
  return (
    <div className="bg-primary pt-20 -mt-20">
      <div className="max-w-sm mx-auto md:max-w-7xl my-5 py-5">
        {/* Filter */}
        <div className="flex flex-0.5 space-x-5">
          <div className="flex mt-1 sm:mt-0  shadow-sm px-3 ring-1 ring-secondary sm:text-sm h-10 bg-white items-center">
            <SearchIcon className="h-5 w-5 text-secondary" />
            <input
              onChange={(e) => searchProducts(e.target.value)}
              type="text"
              placeholder="recherche"
              className="block w-full outline-none border-none focus:ring-0 focus:border-none sm:text-sm"
            />
          </div>
          <div className="flex mt-1 sm:mt-0  shadow-sm px-3 ring-1 ring-secondary sm:text-sm h-10 bg-white items-center">
            <select
              id="collection"
              name="collection"
              placeholder="Trier par collection"
              className="block w-full outline-none border-none focus:ring-0 focus:border-none sm:text-sm"
            >
              <option>Trier par collection</option>
              <option>collection 01</option>
              <option>collection 02</option>
              <option>collection 03</option>
            </select>
          </div>
        </div>
        {/* Products */}
        <section className="space-y-6 mt-4">
          {products?.filter((product) =>
            product?.name?.toLowerCase().includes(query)
          ).length > 0 ? (
            products
              ?.filter((product) =>
                product?.name?.toLowerCase().includes(query)
              )
              .map((product) => (
                <SingleProductList key={product?.id} product={product} />
              ))
          ) : (
            <div className="bg-primary pt-20 -mt-20">
              <div className="max-w-sm mx-auto md:max-w-7xl my-5 py-5">
                No products to show!
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

export default ProductList;
