import Urls from "./configs";

export default async function handler(req, res) {
  const { ref } = req.body;

  var requestOptions = {
    method: "POST",
    headers: {
      Accept: "application/pdf",
      "Content-Type": "application/pdf",
    },
    body: JSON.stringify({
      ref,
    }),
  };

  const result = await fetch(Urls.downloadInvoice, requestOptions)
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
