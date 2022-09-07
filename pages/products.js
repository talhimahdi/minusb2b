import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import CoverThumbnails from "../components/CoverThumbnails";
import ProductList from "../components/ProductList";
import BottomCart from "../components/BottomCart";
import Cart from "../components/Cart";
import { Urls } from "../configs/configs";
import { useAuth } from "../RestHelper/useAuth";
import Loader from "../components/Loader";

import localStorageX from "../configs/localStorage";
import Header from "../components/Header";

function Products(/*{ productsList }*/) {
  const router = useRouter();
  const auth = useAuth();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [slides, setSlides] = useState({});
  const [openCart, setOpenCart] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);
  const [limit, setLimit] = useState(10);
  const [idCategorySearch, setIdCategorySearch] = useState(0);
  const [term, setTerm] = useState("");
  const [renderUi, setRenderUi] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [isButtonSpin, setIsButtonSpin] = useState(false);

  const getCategories = async () => {
    var requestOptions = {
      method: "GET",
    };

    const result = await fetch("/api/categories", requestOptions)
      .then((response) => response?.json())
      .then((data) => {
        if (data?.results?.code == 200 && data?.results?.succes) {
          return data?.results;
        } else {
          console.log("Error!!");
        }
      })
      .catch((error) => console.log("error", error));

    if (result?.categories) {
      setCategories(result.categories);
    }
  };

  const getSlides = async () => {
    var requestOptions = {
      method: "GET",
    };

    const result = await fetch("/api/slider", requestOptions)
      .then((response) => response?.json())
      .then((data) => {
        if (data?.results?.code == 200 && data?.results?.succes) {
          return data?.results;
        } else {
          console.log("Error!!");
        }
      })
      .catch((error) => console.log("error", error));

    if (result?.slides) {
      setSlides(result.slides);
    }
  };

  const getProducts = async (isSearch = false) => {
    setIsButtonSpin(true);
    setPageNumber((prev) => prev + 1);
    if (isSearch) {
      setPageNumber(0);
    }

    var requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        pageNumber: isSearch ? 0 : pageNumber,
        limit,
        idCategorySearch,
        term,
      }),
    };

    const result = await fetch("/api/products", requestOptions)
      .then((response) => response?.json())
      .then((data) => {
        return data;
      })
      .catch((error) => console.log("error", error));

    if (result?.results?.code == 200 && result?.results?.products) {
      if (isSearch || pageNumber == 0) {
        setProducts(result?.results?.products);
      } else {
        setProducts((prev) => [
          ...prev,
          ...result?.results?.products?.filter((item) =>
            prev.find((element) => element.id === item.id) ? false : true
          ),
        ]);
      }

      setIsButtonSpin(false);
    }

    return result?.results?.products?.length;
  };

  useEffect(() => {
    const init = async () => {
      if (auth?.user?.id) {
        setLoading(true);
        await getCategories();
        await getSlides();
        await getProducts();
        await auth?.getCart(auth?.user?.id_cart);
        setRenderUi(true);
      }
      setLoading(false);
    };
    init();
  }, [auth?.user]);

  return (
    <>
      <Loader isVisible={isLoading} />
      {renderUi && (
        <div>
          <Header />
          <div className="pt-0 py-5">
            <CoverThumbnails slides={slides} />
            <ProductList
              products={products}
              categories={categories}
              getProducts={getProducts}
              isLoading={isButtonSpin}
              idCategorySearch={idCategorySearch}
              onCategoryChange={setIdCategorySearch}
              term={term}
              onChangeTerm={setTerm}
            />
            <Cart
              open={openCart}
              close={() => setOpenCart(false)}
              cart={auth?.cart}
              setOpenCart={setOpenCart}
            />
            <BottomCart
              onOpenCart={() => {
                if (auth?.cart?.products_count > 0) setOpenCart(true);
              }}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Products;

// export async function getServerSideProps(context) {
// const products = await API.products.all();
// console.log(products);
// var requestOptions = {
//   method: "GET",
// };
// const url = Urls.productList;
// const result = await fetch(url, requestOptions)
//   .then((response) => response?.json())
//   .then((result) => {
//     return result;
//   })
//   .catch((error) => console.log("error", error));
// return {
//   // props: { productsList: result?.psdata ? result?.psdata : [] }, // will be passed to the page component as props
//   props: { productsList: products ? products : [] }, // will be passed to the page component as props
// };
// }
