import React from "react";

export const AddTransaction = () => {
  return (
    <>
      <h4>Add New Transaction</h4>
      <hr />
      <form>
        <div className="form-group">
          <label htmlFor="type">Choose credit/debit</label>
          <select id="type" className="form-control">
            <option value="credit">Credit</option>
            <option value="debit">Debit</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            id="text"
            placeholder="add text"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            placeholder="add money"
            className="form-control"
          />
        </div>

        <button type="submit" class="btn btn-outline-primary btn-block">Add</button>
      </form>
    </>
  );
};
