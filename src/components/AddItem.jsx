import React from "react";
import "./AddItem.css";

function AddItem({ newItem, setNewItem, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      {/*       <label htmlFor="addItem">Add item</label> */}
      <input
        autoFocus
        id="addItem"
        type="text"
        placeholder="Add item"
        required
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button className="btn_add" type="submit" aria-label="add Item">
        Add
      </button>
    </form>
  );
}
export default AddItem;
