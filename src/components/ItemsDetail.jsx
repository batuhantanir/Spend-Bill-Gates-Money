import React from "react";

import Button from "./Button";
import { useSelector } from "react-redux";
import { moneySelector, cardItemSelector } from "../redux/billGatesSlice";
import { useDispatch } from "react-redux";
import { buyItem, sellItem } from "../redux/billGatesSlice";

const ItemsDetail = ({ prod }) => {
  const money = useSelector(moneySelector);
  const dispatch = useDispatch();
  const cardItem = useSelector(cardItemSelector);
console.log(money);
  return (
    <div className="flex flex-col items-center mx-1 bg-white w-[325px] mb-4 py-6 font-bold text-xl ">
      <div className="flex flex-col items-center">
        <img className="h-[120px] my-6" src={prod.image} alt="" />
        <div className="">{prod.title}</div>
        <div className="text-[#24C486] font-semibold">
          {new Intl.NumberFormat("en-En", {
            style: "currency",
            currency: "USD",
          }).format(prod.price)}
        </div>
      </div>
      <div className="h-10 mt-6">
        <Button
          title={"Sell"}
          style={"bg-[#F43A69]  "}
          dis={cardItem.find((item) => item.id === prod.id) === undefined  ? true : false}
          click={() => dispatch(sellItem(prod))}
        />
        <input
          type="number"
          value={
            cardItem.find((item) => item.id === prod.id) !== undefined &&
            cardItem.find((item) => item.id === prod.id).quantity !== undefined
              ? cardItem.find((item) => item.id === prod.id).quantity
              : 0
          }
          disabled
          className="w-[100px] border-2 rounded text-center font-normal h-full"
        />

        <Button
          title={"Buy"}
          style={"bg-gradient-to-r from-[#21BE9E] to-[#2DCB71]"}
          dis={prod.price > money ? true : false}
          click={() => dispatch(buyItem(prod))}
        />
      </div>
    </div>
  );
};

export default ItemsDetail;
