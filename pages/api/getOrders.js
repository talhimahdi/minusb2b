import Urls from "./configs";

export default async function handler(req, res) {
  const { customerId } = req.body;

  var requestOptions = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id_customer: customerId,
    }),
  };

  const result = await fetch(Urls.getOrders, requestOptions)
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
