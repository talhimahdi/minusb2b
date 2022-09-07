export default function handler(req, res) {
  const { pageNumber, limit, idCategorySearch = "", term = "" } = req.body;

  const getProducts = async () => {
    var requestOptions = {
      method: "GET",
    };

    const url =
      process.env.BASE_URL +
      `restapi/products?output_format=JSON&ws_key=${process.env.WS_KEY}&limit=${
        pageNumber * limit
      },${limit}&sort=id_ASC&category_id=${idCategorySearch}&term=${term}`;

    return await fetch(url, requestOptions)
      .then((response) => response?.json())
      .then((data) => {
        if (data?.results?.code == 200 && data?.results?.products) {
          return data;
        }
      })
      .catch((error) => {
        console.log("error", error);
        return {
          success: false,
          message: "ERROR!",
        };
      });
  };

  getProducts().then((data) => res.status(200).json(data));
}
