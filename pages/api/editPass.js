import Urls from "./configs";

export default async function handler(req, res) {
  const { oldPass, customerId, newPass } = req.body;

  var requestOptions = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      oldPass,
      customerId,
      newPass,
    }),
  };

  const result = await fetch(Urls.editPassword, requestOptions)
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
