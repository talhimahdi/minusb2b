let Storage;
const salt = "KB9VMZW 15USVQ CR98RPM 7JBZB 4XKP6Q5";

let localStorage = null;

if (typeof window !== "undefined") {
  if (
    window.location.hostname == "minusb2b.vercel.app" ||
    window.location.hostname == "minusb2b-git-stage-talhimahdi.vercel.app" ||
    window.location.hostname == "minusb2b-frontend.vercel.app" ||
    window.location.hostname == "localhost"
  )
    Storage = window.localStorage;

  let prefix = "ps_";

  localStorage = {
    add(key, value) {
      Storage?.setItem(prefix + key, encrypt(value, salt));
    },
    edit(key, value) {
      const data = {
        customer: value,
      };
      localStorage?.add(key, data);
    },
    get(key) {
      return Storage?.getItem(prefix + key) !== null
        ? decrypt(Storage?.getItem(prefix + key), salt)
        : false;
    },
    remove(key) {
      Storage?.removeItem(prefix + key);
    },
    clear() {
      Storage?.clear();
    },
    isConnected() {
      if (localStorage?.get("local_data")) return true;
      return false;
    },
  };
}

function encrypt(o, salt) {
  o = JSON.stringify(o).split("");
  for (var i = 0, l = o.length; i < l; i++)
    if (o[i] == "{") o[i] = "}";
    else if (o[i] == "}") o[i] = "{";
  return encodeURI(salt + o.join(""));
}

function decrypt(o, salt) {
  o = decodeURI(o);
  if (salt && o.indexOf(salt) != 0) return false;
  o = o.substring(salt.length).split("");
  for (var i = 0, l = o.length; i < l; i++)
    if (o[i] == "{") o[i] = "}";
    else if (o[i] == "}") o[i] = "{";
  return JSON.parse(o.join(""));
}

export default localStorage;
