import React, {useContext} from "react";
import { GlobalContext } from './../context/GlobalState';

export const Transaction = ({transaction}) => {

  const { deleteTransaction } = useContext(GlobalContext);
  return (
    <li className={transaction.type === "credit" ? "credit shadow-sm p-2 mb-2 bg-white position-relative" : "debit shadow-sm p-2 mb-2 bg-white position-relative"}>
      {transaction.text} <span className="curr">&#x20B9;{transaction.amount}</span>
      <button onClick={() => deleteTransaction(transaction.id)} className="position-absolute position-li-out btn btn-danger"> X </button>
    </li>
  );
};
