import React from "react";
import { useSelector } from "react-redux";
import { moneySelector } from "../redux/billGatesSlice";

const MoneyBar = () => {
  const money = useSelector(moneySelector);
  return (
    <div  className="sticky z-10 bg-gradient-to-r from-[#21BE9E] to-[#2DCB71] w-full text-center text-3xl font-bold py-6 text-white ">
      {new Intl.NumberFormat("en-En", {
        style: "currency",
        currency: "USD",
      }).format(money)}
    </div>
  );
};

export default MoneyBar;
