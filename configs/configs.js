const salt = "KB9VMZW 15USVQ CR98RPM 7JBZB 4XKP6Q5";

// const baseUrl = "http://localhost/prestaboutique/rest/";
const ws_key = "7JBZBCR98RPM4XKP6Q5KB9VMZW15USVQ";
const output_format = "JSON";

const baseUrl = "http://localhost/prestaboutique/api/";
const Urls = {
  // register: baseUrl + "register",
  login:
    baseUrl + `restapi/login?output_format=${output_format}&ws_key=${ws_key}`,
  // logout: baseUrl + "logout",
  productList:
    baseUrl +
    `restapi/products/?output_format=${output_format}&ws_key=${ws_key}&limit=0,100&sort=id_ASC`,
  getCart: (cartId) =>
    baseUrl +
    `restapi/getCart/${cartId}/?output_format=${output_format}&ws_key=${ws_key}`,
  addToCart:
    baseUrl +
    `restapi/addToCart/?output_format=${output_format}&ws_key=${ws_key}`,
  deleteFromCart:
    baseUrl +
    `restapi/deleteFromCart/?output_format=${output_format}&ws_key=${ws_key}`,
};

export { Urls, salt };
