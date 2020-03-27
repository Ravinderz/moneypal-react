import React, { useContext } from "react";
import { GlobalContext } from "./../context/GlobalState";

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  let total = 0;
    transactions.forEach(element => {
      if (element.type === "credit") {
        total += element.amount;
      } else {
        total -= element.amount;
      }
    });


  

  return (
    <div className="balance">
      <h4>Your Balance</h4>
      <h2>&#x20B9;{total}</h2>
    </div>
  );
};
