export default function handler(req, res) {
  const getCategories = async () => {
    console.log(req.body);
    var requestOptions = {
      method: "GET",
    };

    const url =
      process.env.BASE_URL +
      `restapi/getCategories?output_format=JSON&ws_key=${process.env.WS_KEY}`;

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

  getCategories().then((data) => res.status(200).json(data));
}
