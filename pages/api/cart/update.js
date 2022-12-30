import Urls from "../configs";

export default async function handler(req, res) {
  const { cartId, carrierId, addressFacturationId, addressLivraisonId } =
    req.body;

  var requestOptions = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id_cart: cartId,
      id_carrier: carrierId,
      id_address_facturation: addressFacturationId,
      id_address_livraison: addressLivraisonId,
    }),
  };

  const result = await fetch(Urls.updateCart, requestOptions)
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
