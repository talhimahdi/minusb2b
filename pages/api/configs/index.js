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

  productList: (pageNumber, limit, idCategorySearch, term, customer_id) =>
    process.env.BASE_URL +
    `products?output_format=JSON&ws_key=${process.env.WS_KEY}&limit=${
      pageNumber * limit
    },${limit}&sort=id_ASC&category_id=${idCategorySearch}&term=${term}&customer_id=${customer_id}`,

  getCategories:
    process.env.BASE_URL +
    `getCategories?output_format=JSON&ws_key=${process.env.WS_KEY}`,

  getAddresses: (customerId) =>
    process.env.BASE_URL +
    `getAddresses?output_format=JSON&ws_key=${process.env.WS_KEY}&id_customer=${customerId}`,

  addNewAddress:
    process.env.BASE_URL +
    `addNewAddress?output_format=JSON&ws_key=${process.env.WS_KEY}`,

  editAddress:
    process.env.BASE_URL +
    `editAddress?output_format=JSON&ws_key=${process.env.WS_KEY}`,

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

  updateCart:
    process.env.BASE_URL +
    `updateCart?output_format=JSON&ws_key=${process.env.WS_KEY}`,

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

  confirmationOrder:
    process.env.BASE_URL +
    `confirmationOrder?output_format=JSON&ws_key=${process.env.WS_KEY}`,

  frontContent:
    process.env.BASE_URL +
    `getFrontContent?output_format=JSON&ws_key=${process.env.WS_KEY}`,

  editPassword:
    process.env.BASE_URL +
    `editPassword?output_format=JSON&ws_key=${process.env.WS_KEY}`,

  getOrders:
    process.env.BASE_URL +
    `getOrders?output_format=JSON&ws_key=${process.env.WS_KEY}`,

  downloadInvoice:
    process.env.BASE_URL +
    `downloadInvoice?output_format=JSON&ws_key=${process.env.WS_KEY}`,

  forgetPassword:
    process.env.BASE_URL +
    `forgetPassword?output_format=JSON&ws_key=${process.env.WS_KEY}`,
};
