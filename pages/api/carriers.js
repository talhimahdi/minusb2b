import Urls from "./configs";

export default async function handler(req, res) {
  var requestOptions = {
    method: "GET",
  };

  const result = await fetch(Urls.getCarriers, requestOptions)
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
