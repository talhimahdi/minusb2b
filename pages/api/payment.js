import Urls from "./configs";

export default async function handler(req, res) {
  const { cartId, carrierId, addressDeliveryId, addressInvoiceId, moduleName } =
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
      id_address_delivery: addressDeliveryId,
      id_address_invoice: addressInvoiceId,
      pm_module_name: moduleName,
    }),
  };

  const result = await fetch(Urls.payment, requestOptions)
    .then((response) => response?.json())
    .then((data) => data)
    .catch((error) => {
      return {
        success: false,
        message: error.message,
      };
    });

  res.status(200).json(result);
}
