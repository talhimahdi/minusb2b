import Urls from "./configs";

export default async function handler(req, res) {
  const { reference } = req.body;

  var requestOptions = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      reference: reference,
    }),
  };

  const result = await fetch(Urls.confirmationOrder, requestOptions)
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
