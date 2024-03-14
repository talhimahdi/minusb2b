import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import CoverThumbnails from "../components/CoverThumbnails";
import ProductList from "../components/ProductList";
import { useAuth } from "../RestHelper/useAuth";
import Loader from "../components/Loader";

function Catalogue() {
  const auth = useAuth();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [slides, setSlides] = useState({});
  const [slides_, setSlides_] = useState({});
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
      setSlides_(result.slides_);
    }
  };

  const getProducts = async (isSearch = false, reset = false) => {
    setIsButtonSpin(true);
    if (reset) {
      setLoading(true);
    }
    if (isSearch) {
      setPageNumber(1);
    } else {
      setPageNumber((prev) => prev + 1);
    }

    var requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        customer_id: auth?.user?.id,
        pageNumber: isSearch || reset ? 0 : pageNumber,
        limit,
        idCategorySearch: reset ? 0 : idCategorySearch,
        term: reset ? "" : term,
      }),
    };

    const result = await fetch("/api/products", requestOptions)
      .then((response) => response?.json())
      .then((data) => {
        return data;
      })
      .catch((error) => console.log("error", error));

    if (result?.results?.code == 200 && result?.results?.products) {
      if (isSearch || reset || pageNumber == 0) {
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
      setLoading(false);
    }

    console.log(result?.results);

    return result?.results?.products?.length;
  };

  useEffect(() => {
    const init = async () => {
      setLoading(true);
      await getCategories();
      await getSlides();
      await getProducts();
      setRenderUi(true);
      setLoading(false);
    };
    init();
  }, []);

  return (
    <>
      <Loader isVisible={isLoading} />
      {renderUi && (
        <div className="mt-52 pt-0 py-5">
          <CoverThumbnails slides={slides} slides_={slides_} />
          <ProductList
            products={products}
            categories={categories}
            getProducts={getProducts}
            isLoading={isButtonSpin}
            idCategorySearch={idCategorySearch}
            onCategoryChange={setIdCategorySearch}
            term={term}
            onChangeTerm={setTerm}
            isCatalogue={true}
          />
        </div>
      )}
    </>
  );
}

export default Catalogue;
