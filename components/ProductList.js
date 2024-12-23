import { SearchIcon } from '@heroicons/react/solid';
import React, { useState, useEffect } from 'react';
import SingleProductList from './SingleProductList';

function ProductList({
  products,
  setPage,
  getProducts,
  isLoading,
  categories,
  idCategorySearch,
  onCategoryChange,
  term,
  onChangeTerm,
  isCatalogue = false,
  isKencreEligibility = false
}) {
  const [isEmptyResult, setEmptyResult] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [showReset, setShowReset] = useState(false);

  const getMoreProducts = async () => {
    const result = await getProducts();

    if (result < 10) {
      setEmptyResult(true);
    } else {
      setEmptyResult(false);
    }
  };

  const onSearch = async () => {
    setIsSearching(true);

    let result;
    if (idCategorySearch != 0 || term != '') {
      result = await getProducts(true);
      setShowReset(true);
    } else {
      result = await getProducts();
      setShowReset(false);
    }

    if (result < 10) {
      setEmptyResult(true);
    } else {
      setEmptyResult(false);
    }

    setIsSearching(false);
  };

  const onReset = async () => {
    onCategoryChange('0');
    onChangeTerm('');

    const result = await getProducts(false, true);

    setShowReset(false);
    if (result < 10) {
      setEmptyResult(true);
    } else {
      setEmptyResult(false);
    }
  };
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSearch();
    }
  };
  useEffect(() => {
    idCategorySearch !== 0 && onSearch();
  }, [idCategorySearch]);
  return (
    <div className="bg-primary pt-20 -mt-20 -mb-10">
      <div className="max-w-sm  mx-5 md:mx-auto md:max-w-7xl my-5 py-5">
        {/* Filter */}
        <div className="flex flex-col md:flex-row flex-0.5 items-end space-y-3  md:space-x-5 mb-5">
          <div className="flex mt-1 sm:mt-0  shadow-sm px-3 ring-1 ring-secondary sm:text-sm h-10 bg-white items-center w-full md:w-auto">
            <SearchIcon className="h-5 w-5 text-secondary" />
            <input
              onChange={(e) => {
                onChangeTerm(e.target.value);
              }}
              value={term}
              type="text"
              placeholder="recherche"
              className="block w-full outline-none border-none focus:ring-0 focus:border-none sm:text-sm"
              onKeyUp={handleKeyPress}
            />
          </div>
          <div className="flex mt-1 sm:mt-0 shadow-sm px-3 ring-1 ring-secondary sm:text-sm h-10 bg-white items-center w-full  md:w-auto">
            <select
              value={idCategorySearch}
              onChange={(e) => onCategoryChange(e.target.value)}
              placeholder="Trier par collection"
              className="block w-full outline-none border-none focus:ring-0 focus:border-none sm:text-sm"
            >
              <option value="0">Trier par collection</option>
              {categories?.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <div className=" flex space-x-2">
            <button
              type="submit"
              className=" bg-black shadow-sm py-2 px-4 text-md font-bold text-white hover:font-bold focus:outline-none 
              focus:ring-0"
              onClick={onSearch}
            >
              <div className="flex items-center space-x-2">
                {isSearching && (
                  <span>
                    <svg
                      className="inline w-5 h-5 text-gray-700 animate-spin fill-white"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                  </span>
                )}
                <p>Rechercher</p>
              </div>
            </button>
            {showReset && (
              <div
                className=" text-black underline cursor-pointer shadow-sm py-2 px-4 text-base font-bold  hover:font-bold focus:outline-none 
              focus:ring-0"
                onClick={onReset}
              >
                <div className="flex items-center space-x-2">
                  <p>Réinitialiser</p>
                </div>
              </div>
            )}
          </div>
        </div>
        {products?.length < 1 ? (
          <div className="mt-5">No products to show!</div>
        ) : (
          <>
            <section className="space-y-6 mt-4">
              {products?.map((product) => (
                <SingleProductList key={product?.id} product={product} isCatalogue={isCatalogue} isKencreEligibility={isKencreEligibility} />
              ))}
            </section>
            <div className="text-center border-t border-gray-200 py-6 px-4 sm:px-6">
              <div
                className={
                  'flex flex-col items-center justify-center h-full space-y-5'
                }
              >
                {!isEmptyResult && (
                  <button
                    type="submit"
                    className=" bg-black shadow-sm py-3 px-4 text-base font-bold text-white hover:font-bold focus:outline-none focus:ring-0"
                    onClick={getMoreProducts}
                  >
                    <div className="flex items-center space-x-2">
                      {isLoading && (
                        <span>
                          <svg
                            className="inline w-5 h-5 text-gray-700 animate-spin fill-white"
                            viewBox="0 0 100 101"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                              fill="currentColor"
                            />
                            <path
                              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                              fill="currentFill"
                            />
                          </svg>
                        </span>
                      )}

                      <p>Voir plus de produits</p>
                    </div>
                  </button>
                )}
                {/* {isEmptyResult && (
                  <p className="text text-lg text-gray-500">Aucun résultat</p>
                )} */}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ProductList;
