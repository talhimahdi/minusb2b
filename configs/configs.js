const baseUrl = "http://localhost/prestaboutique/rest/";
const Urls = {
  register: baseUrl + "register",
  login: baseUrl + "login",
  logout: baseUrl + "logout",
  productList: baseUrl + "featuredproducts",
  productDetails: baseUrl + "productdetail?product_id=",
  getCart: baseUrl + "cart?image_size=medium_default",
  updateCart: (id, qty) => {
    // &id_product_attribute=11
    return (
      baseUrl +
      `cart?update=1&id_product=${id}&op=up&action=update&image_size=medium_default&qty=${qty}`
    );
  },
};

export { baseUrl, Urls };
