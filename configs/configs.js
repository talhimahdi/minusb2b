const salt = "KB9VMZW 15USVQ CR98RPM 7JBZB 4XKP6Q5";

// Localhost
// const ws_key = "7JBZBCR98RPM4XKP6Q5KB9VMZW15USVQ";
const ws_key = "PXZQ3KBZJSQYLTXDT7F8U5L9EBZ6T3SX";
const output_format = "JSON";

// const baseUrl = "http://localhost:8888/prestaboutique/api/";
const baseUrl = "https://minus-produits.prismatic.digital/api/";
const Urls = {
  register:
    baseUrl +
    `restapi/register?output_format=${output_format}&ws_key=${ws_key}`,

  login:
    baseUrl + `restapi/login?output_format=${output_format}&ws_key=${ws_key}`,

  // logout: baseUrl + "logout",

  productList: (page, limit) =>
    baseUrl +
    `restapi/products?output_format=${output_format}&ws_key=${ws_key}&limit=${
      page * limit
    },${limit}&sort=id_ASC`,

  getCart: (cartId) =>
    baseUrl +
    `restapi/getCart/${cartId}?output_format=${output_format}&ws_key=${ws_key}`,

  addToCart:
    baseUrl +
    `restapi/addToCart?output_format=${output_format}&ws_key=${ws_key}`,

  deleteFromCart:
    baseUrl +
    `restapi/deleteFromCart?output_format=${output_format}&ws_key=${ws_key}`,

  getAddresses: (id_customer) =>
    baseUrl +
    `restapi/getAddresses?output_format=${output_format}&ws_key=${ws_key}&display=full&filter[id_customer]=${id_customer}`,

  addNewAddress:
    baseUrl +
    `restapi/addNewAddress?output_format=${output_format}&ws_key=${ws_key}`,

  deleteAddress: (idAddress) =>
    baseUrl +
    `restapi/deleteAddress/${idAddress}?output_format=${output_format}&ws_key=${ws_key}`,

  getPaymentMethods:
    baseUrl +
    `restapi/getPaymentMethods?output_format=${output_format}&ws_key=${ws_key}`,

  getCarriers:
    baseUrl +
    `restapi/getCarriers?output_format=${output_format}&ws_key=${ws_key}`,

  getPaymentMethods:
    baseUrl +
    `restapi/getPaymentMethods?output_format=${output_format}&ws_key=${ws_key}`,

  getSlider:
    baseUrl +
    `restapi/getSlider?output_format=${output_format}&ws_key=${ws_key}`,

  getCountries:
    baseUrl +
    `restapi/getCountries?output_format=${output_format}&ws_key=${ws_key}`,
};

export { Urls, salt };
