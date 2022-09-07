export default function handler(req, res) {
  const getProducts = async () => {
    var requestOptions = {
      method: "GET",
    };

    const url =
      process.env.BASE_URL +
      `restapi/getSlider?output_format=JSON&ws_key=${process.env.WS_KEY}`;

    return await fetch(url, requestOptions)
      .then((response) => response?.json())
      .then((data) => {
        return data;
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
