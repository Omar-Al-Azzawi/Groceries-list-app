import React from "react";
import "./Footer.css";

function Footer({ length }) {
  return (
    <footer>
      <h5>
        {length} list {length > 1 ? "items" : "item"}
      </h5>
    </footer>
  );
}
export default Footer;
