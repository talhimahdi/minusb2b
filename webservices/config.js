var pwa_module_config_json = {
  ajax_url: "http://localhost/prestaboutique/en/module/pwa/ajax",
  base_url: "http://localhost/prestaboutique/",
  api_key: "7JBZBCR98RPM4XKP6Q5KB9VMZW15USVQ",
  module_link_display:
    "http://localhost/prestaboutique/index.php?fc=module&module=webservices&controller=display",
};

let getValue = (value) => {
  let configJson = pwa_module_config_json;

  if (configJson[value]) {
    return configJson[value];
  }

  return null;
};

let hostUrl = new URL(getValue("base_url"));
let productionRoutePath = new URL(getValue("module_link_display"));
export default {
  shopUrl: getValue("base_url"),
  apiUrl: `${getValue("base_url")}api/`,
  apiKey: getValue("api_key"),
  dataType: "output_format=JSON",
  routeSuffix: "",
  postRequest: {
    url: getValue("ajax_url"),
  },
  routePath:
    hostUrl.hostname === "localhost"
      ? "/"
      : productionRoutePath.pathname + productionRoutePath.search,
};
