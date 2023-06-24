import React from "react";
import style from "./navber.module.css";

const Navber = () => {
  return (
    <div>
      <h2 className={style.main}>navber </h2>
      <div>
        <ul>
          <li>NSR</li>
          <li>Shop</li>
          <li>Product</li>
          <li>Blog</li>
          <li>Pages</li>
          <li>New In</li>
          <li>Trend</li>
        </ul>
      </div>
    </div>
  );
};

export default Navber;
