import React from "react";
import ItemList from "./ItemList";
import "./Main.css";

function Main({ items, handleCheck, handleDelete }) {
  return (
    <main>
      {items.length ? (
        <ul>
          <ItemList
            items={items}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
        </ul>
      ) : (
        <h5>Your list is empty</h5>
      )}
    </main>
  );
}
export default Main;
