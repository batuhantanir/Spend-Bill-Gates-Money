import React from "react";

import products from "../items/product";

import ItemsDetail from "./ItemsDetail";

const Items = () => {
  return (
    <div className="flex flex-wrap justify-between my-4">
      {products.map((prod, idx) => (
        <ItemsDetail key={idx} prod={prod} />
      ))}
    </div>
  );
};

export default Items;
