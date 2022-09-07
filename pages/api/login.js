export default function handler(req, res) {
  const { email, password } = req.body;

  const login = async () => {
    console.log(req.body);
    var requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    };

    const url =
      process.env.BASE_URL +
      `restapi/login?output_format=JSON&ws_key=${process.env.WS_KEY}`;

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

  login().then((data) => res.status(200).json(data));
}
