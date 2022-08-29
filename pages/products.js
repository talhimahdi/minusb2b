import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import CoverThumbnails from "../components/CoverThumbnails";
import ProductList from "../components/ProductList";
import BottomCart from "../components/BottomCart";
import Cart from "../components/Cart";
import { Urls } from "../configs/configs";
import { useAuth } from "../RestHelper/useAuth";

function Products(/*{ productsList }*/) {
  const router = useRouter();
  const auth = useAuth();
  const [products, setProducts] = useState([]);
  const [slides, setSlides] = useState({});
  const [openCart, setOpenCart] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);
  const [limit, setLimit] = useState(10);
  const [renderUi, setRenderUi] = useState(false);

  const getSlides = async () => {
    var requestOptions = {
      method: "GET",
    };

    const url = Urls.getSlider;
    const result = await fetch(url, requestOptions)
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

  const getProducts = async () => {
    var requestOptions = {
      method: "GET",
    };

    const url = Urls.productList(pageNumber, limit);
    const result = await fetch(url, requestOptions)
      .then((response) => response?.json())
      .then((data) => {
        return data;
      })
      .catch((error) => console.log("error", error));

    if (result?.results?.code == 200 && result?.results?.data) {
      setProducts((prev) => [...prev, ...result?.results?.data]);
      setPageNumber((prev) => prev + 1);
    }
  };

  useEffect(
    () => async () => {
      if (auth?.user?.id) {
        await getSlides();
        await getProducts();
        await auth?.getCart(auth?.user?.id_cart);
        setRenderUi(true);
      } else {
        router.push("/connexion");
      }
    },
    []
  );

  return (
    <>
      {
        /*renderUi && */ <div className="py-5">
          <CoverThumbnails slides={slides} />
          <ProductList products={products} getProducts={getProducts} />
          {openCart && (
            <Cart
              open={openCart}
              close={() => setOpenCart(false)}
              cart={auth?.cart}
              setOpenCart={setOpenCart}
            />
          )}
          <BottomCart
            passerCommande={() => {
              if (auth?.cart?.products_count > 0) setOpenCart(true);
            }}
          />
        </div>
      }
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
