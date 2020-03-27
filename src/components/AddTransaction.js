import React, { useState,useContext } from "react";
import { GlobalContext } from './../context/GlobalState';
import { uuid } from 'uuidv4';

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState("credit");

  const { addTransaction } = useContext(GlobalContext);


  const onSubmit = (e) =>{
      e.preventDefault();

      const newTransaction = {
          id: uuid(),
          text,
          amount: +amount,
          type
      }
      console.log(newTransaction);
      addTransaction(newTransaction);
  }

  return (
    <>
      <h4>Add New Transaction</h4>
      <hr />
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="type">Choose credit/debit</label>
          <select
            id="type"
            className="form-control"
            value={type}
            onChange={e => setType(e.target.value)}
          >
            <option value="credit">Credit</option>
            <option value="debit">Debit</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            id="text"
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="add text"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={e => setAmount(e.target.value)}
            placeholder="add money"
            className="form-control"
          />
        </div>

        <button type="submit" className="btn btn-outline-primary btn-block">
          Add
        </button>
      </form>
    </>
  );
};
