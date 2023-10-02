import React from "react";

import Button from "./Button";

const ItemsDetail = ({ prod }) => {
  console.log(prod);
  return (
    <div className="flex flex-col items-center bg-white w-[325px] mb-4 py-6 font-bold text-xl ">
      <div className="flex flex-col items-center">
        <img className="h-[120px] w-full my-6" src={prod.image} alt="" />
        <div className="">{prod.title}</div>
        <div className="text-[#24C486] font-semibold">${prod.price}</div>
      </div>
      <div>
        <Button title={"Sell"} style={"bg-[#F43A69] "}/>
        <input type="text" className="w-[100px] border-2 rounded" />
        <Button title={"Buy"} style={"bg-gradient-to-r from-[#21BE9E] to-[#2DCB71]"}/>
      </div>
    </div>
  );
};

export default ItemsDetail;
