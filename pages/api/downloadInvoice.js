import Urls from "./configs";
import stream from "stream";
import { promisify } from "util";

const pipeline = promisify(stream.pipeline);

export default async function handler(req, res) {
  const { ref } = req?.query;

  console.log(res);

  var requestOptions = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ref,
    }),
  };
  const response = await fetch(Urls.downloadInvoice, requestOptions);

  if (!response.ok)
    throw new Error(`unexpected response ${response.statusText}`);
  // res.setHeader("Content-Type", "application/pdf");

  if (response.headers.get("content-type") === "application/pdf") {
    res.setHeader(
      "Content-Disposition",
      "attachment; filename=facture-" + ref + ".pdf"
    );

    await pipeline(response.body, res);
  } else {
    res.redirect(307, "/account/orders");
  }
}
