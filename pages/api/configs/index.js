export default {
  login:
    process.env.BASE_URL +
    `restapi/login?output_format=JSON&ws_key=${process.env.WS_KEY}`,

  getCart: (cartId) =>
    process.env.BASE_URL +
    `restapi/getCart/${cartId}?output_format=JSON&ws_key=${process.env.WS_KEY}`,

  getSlider:
    process.env.BASE_URL +
    `restapi/getSlider?output_format=JSON&ws_key=${process.env.WS_KEY}`,

  productList: (pageNumber, limit, idCategorySearch, term) =>
    process.env.BASE_URL +
    `restapi/products?output_format=JSON&ws_key=${process.env.WS_KEY}&limit=${
      pageNumber * limit
    },${limit}&sort=id_ASC&category_id=${idCategorySearch}&term=${term}`,

  getCategories:
    process.env.BASE_URL +
    `restapi/getCategories?output_format=JSON&ws_key=${process.env.WS_KEY}`,

  getAddresses: (customerId) =>
    process.env.BASE_URL +
    `restapi/getAddresses?output_format=JSON&ws_key=${process.env.WS_KEY}&display=full&filter[id_customer]=${customerId}`,

  addNewAddress:
    process.env.BASE_URL +
    `restapi/addNewAddress?output_format=JSON&ws_key=${process.env.WS_KEY}`,

  deleteAddress: (idAddress) =>
    process.env.BASE_URL +
    `restapi/deleteAddress/${idAddress}?output_format=JSON&ws_key=${process.env.WS_KEY}`,

  getCarriers:
    process.env.BASE_URL +
    `restapi/getCarriers?output_format=JSON&ws_key=${process.env.WS_KEY}`,

  getPaymentMethods:
    process.env.BASE_URL +
    `restapi/getPaymentMethods?output_format=JSON&ws_key=${process.env.WS_KEY}`,

  addToCart:
    process.env.BASE_URL +
    `restapi/addToCart?output_format=JSON&ws_key=${process.env.WS_KEY}`,

  deleteFromCart:
    process.env.BASE_URL +
    `restapi/deleteFromCart?output_format=JSON&ws_key=${process.env.WS_KEY}`,

  getCountries:
    process.env.BASE_URL +
    `restapi/getCountries?output_format=JSON&ws_key=${process.env.WS_KEY}`,

  register:
    process.env.BASE_URL +
    `restapi/register?output_format=JSON&ws_key=${process.env.WS_KEY}`,

  // OLD URLS

  //   // logout: baseUrl + "logout",
};
