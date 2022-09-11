import Urls from "../configs";

export default async function handler(req, res) {
  const { cartId, productId } = req.body;

  var requestOptions = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      cart_id: cartId,
      product_id: productId,
    }),
  };

  const result = await fetch(Urls.deleteFromCart, requestOptions)
    .then((response) => response?.json())
    .then((data) => data)
    .catch((error) => {
      return {
        success: false,
        message: "ERROR!",
      };
    });

  res.status(200).json(result);
}
