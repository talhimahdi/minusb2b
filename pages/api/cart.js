export default function handler(req, res) {
  const { cartId } = req.body;

  const getCart = async () => {
    var requestOptions = {
      method: "GET",
    };

    const url =
      process.env.BASE_URL +
      `restapi/getCart/${cartId}?output_format=JSON&ws_key=${process.env.WS_KEY}`;

    return await fetch(url, requestOptions)
      .then((response) => response?.json())
      .then((data) => {
        if (data?.code == 200 && data?.success && data?.cart) {
          return data;
        }
      })
      .catch((error) => {
        console.log("error", error);
        return {
          success: false,
          message: "ERROR!",
        };
      });
  };

  getCart().then((data) => res.status(200).json(data));
}
