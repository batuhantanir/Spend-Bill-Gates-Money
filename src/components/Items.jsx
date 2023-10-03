import React from "react";

import ItemsDetail from "./ItemsDetail";
import { useSelector } from "react-redux";
import {
  productsSelector,
  
} from "../redux/billGatesSlice";

const Items = () => {
  const products = useSelector(productsSelector);
  
  return (
    <div className="flex flex-wrap justify-center my-4">
      {products.map((prod, idx) => (
        <ItemsDetail key={idx} prod={prod} />
      ))}
    </div>
  );
};

export default Items;
