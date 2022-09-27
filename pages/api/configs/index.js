export default {
  login:
    process.env.BASE_URL +
    `login?output_format=JSON&ws_key=${process.env.WS_KEY}`,

  getCart: (cartId) =>
    process.env.BASE_URL +
    `getCart/${cartId}?output_format=JSON&ws_key=${process.env.WS_KEY}`,

  getSlider:
    process.env.BASE_URL +
    `getSlider?output_format=JSON&ws_key=${process.env.WS_KEY}`,

  productList: (pageNumber, limit, idCategorySearch, term) =>
    process.env.BASE_URL +
    `products?output_format=JSON&ws_key=${process.env.WS_KEY}&limit=${
      pageNumber * limit
    },${limit}&sort=id_ASC&category_id=${idCategorySearch}&term=${term}`,

  getCategories:
    process.env.BASE_URL +
    `getCategories?output_format=JSON&ws_key=${process.env.WS_KEY}`,

  getAddresses: (customerId) =>
    process.env.BASE_URL +
    `getAddresses?output_format=JSON&ws_key=${process.env.WS_KEY}&display=full&filter[id_customer]=${customerId}`,

  addNewAddress:
    process.env.BASE_URL +
    `addNewAddress?output_format=JSON&ws_key=${process.env.WS_KEY}`,

  deleteAddress: (idAddress) =>
    process.env.BASE_URL +
    `deleteAddress/${idAddress}?output_format=JSON&ws_key=${process.env.WS_KEY}`,

  getCarriers:
    process.env.BASE_URL +
    `getCarriers?output_format=JSON&ws_key=${process.env.WS_KEY}`,

  getPaymentMethods:
    process.env.BASE_URL +
    `getPaymentMethods?output_format=JSON&ws_key=${process.env.WS_KEY}`,

  addToCart:
    process.env.BASE_URL +
    `addToCart?output_format=JSON&ws_key=${process.env.WS_KEY}`,

  deleteFromCart:
    process.env.BASE_URL +
    `deleteFromCart?output_format=JSON&ws_key=${process.env.WS_KEY}`,

  getCountries:
    process.env.BASE_URL +
    `getCountries?output_format=JSON&ws_key=${process.env.WS_KEY}`,

  register:
    process.env.BASE_URL +
    `register?output_format=JSON&ws_key=${process.env.WS_KEY}`,

  payment:
    process.env.BASE_URL +
    `createOrder?output_format=JSON&ws_key=${process.env.WS_KEY}`,
  payplugCancel:
    process.env.BASE_URL +
    `payplug_cancel?output_format=JSON&ws_key=${process.env.WS_KEY}`,

  // OLD URLS

  //   // logout: baseUrl + "logout",
};
