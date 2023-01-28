import axios from "axios";
import React from "react";

/*---Order---*/

export const FetchOrder = async () => {
  try {
    const res = await axios({
      method: "get",
      url: `http://localhost:8080/order/get`,
    });
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

export const InsertOrder = async (
  userID,
  isPaid,
  paymentMethod,
  totalPrice,
  discountedTotalPrice,
  isProcessed
) => {
  axios
    .post("http://localhost:8080/order/post", {
      userID: userID,
      isPaid: isPaid,
      paymentMethod: paymentMethod,
      totalPrice: totalPrice,
      discountedTotalPrice: discountedTotalPrice,
      isProcessed: isProcessed,
    })
    .then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
};

/*---User---*/
