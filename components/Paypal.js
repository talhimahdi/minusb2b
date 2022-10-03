import React, { useRef, useEffect } from "react";
import { useAuth } from "../RestHelper/useAuth";

export default function Paypal({ onApproveCommande }) {
  const auth = useAuth();
  const paypal = useRef();

  const confirmOrder = async (orderId = "") => {
    if (orderId != "") {
      await onApproveCommande();
      console.log("order confirmed");
      console.log(orderId);
    }
  };

  const getItemsList = () => {
    const itemsList = auth?.cart?.products?.map((item) => {
      return {
        reference_id: item.id_product,
        description: item.name,
        amount: {
          currency_code: "EUR",
          value: (
            parseFloat(item.price_wt) * parseInt(item.cart_quantity)
          ).toFixed(2),
        },
      };
    });

    // console.log(itemsList);
    return itemsList;
  };

  useEffect(() => {
    const itemsList = getItemsList();
    window.paypal
      .Buttons({
        style: {
          layout: "horizontal",
          color: "black",
          shape: "rect",
          label: "checkout",
          tagline: false,
        },
        createOrder: (data, actions, err) => {
          const order = actions.order.create({
            intent: "CAPTURE",
            purchase_units: itemsList,
          });
          return order;
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          if (order.id && order.status == "COMPLETED") {
            const result = await confirmOrder(order.id);
            console.log(data);
          }
        },
        onError: (err) => {
          console.log("onError");
          console.log(err);
        },
      })
      .render(paypal.current);
  }, []);

  return (
    <div>
      <div ref={paypal}></div>
    </div>
  );
}
