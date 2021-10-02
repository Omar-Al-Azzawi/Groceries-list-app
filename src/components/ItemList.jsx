import React from "react";

function ItemList({ items, handleCheck, handleDelete }) {
  return (
    <ul>
      {items &&
        items.map((
          item // We use here map function to loop on our data and display it
        ) => (
          <li className="item" key={item.id}>
            <input
              className="checkbox"
              onChange={() => handleCheck(item.id)}
              type="checkbox"
              checked={item.checked}
            />
            <label
              className="lable"
              style={item.checked ? { textDecoration: "line-through" } : null}
              onDoubleClick={() => handleCheck(item.id)}
            >
              {item.item}
            </label>
            <button className="btn" onClick={() => handleDelete(item.id)}>
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
}
export default ItemList;
