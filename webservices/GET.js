import config from "./config.js";
import API from "../webservices";

export default class GET {
  constructor(name) {
    this.name = name;
  }

  collections() {
    return new Promise((resolve, reject) => {
      let returnData = [];

      fetch(
        `${config.apiUrl}/${this.name}/?ws_key=${config.apiKey}&${config.dataType}`
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          data[this.name].forEach((item) => {
            this.one(item.id).then((item) => {
              for (var i in item) {
                //console.log(item[i]);
                if (this.name == "products") {
                  const productItem = {
                    ...item[i],
                    images: API.images.getProductImages(
                      item[i].id,
                      item[i].associations.images
                    ),
                  };
                  returnData.push(productItem);
                } else {
                  returnData.push(item[i]);
                }
                break;
              }

              if (returnData.length === data[this.name].length) {
                resolve(returnData);
              }
            });
          });
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  selected(array) {
    return new Promise((resolve, reject) => {
      let returnData = [];

      array.forEach((item) => {
        this.one(item.id)
          .then((item) => {
            for (var i in item) {
              returnData.push(item[i]);
              break;
            }

            if (returnData.length === array.length) {
              resolve(returnData);
            }
          })
          .catch((err) => reject(err));
      });
    });
  }

  one(id) {
    return fetch(
      `${config.apiUrl}/${this.name}/${id}?ws_key=${config.apiKey}&${config.dataType}`
    ).then(function (response) {
      return response.json();
    });
  }
}
