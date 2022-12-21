import Urls from "./configs";

export default async function handler(req, res) {
  const { password, token, id_customer, reset_token } = req.body;

  var requestOptions = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      password,
      token,
      id_customer,
      reset_token,
    }),
  };

  const result = await fetch(Urls.changeForgetPass, requestOptions)
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
