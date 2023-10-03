import React from "react";

import { useSelector } from "react-redux";
import {
  cardItemSelector,
  cardTotalSelector,
  moneySelector,
} from "../redux/billGatesSlice";

const Card = () => {
  const cardItem = useSelector(cardItemSelector);
  const cardTotal = useSelector(cardTotalSelector);
  const money = useSelector(moneySelector);
  return (
    <div className="flex flex-col items-center bg-white w-full text-center mb-48 py-12">
      <div className=" w-[350px] ">
        <div className="border-b-2 pb-2 ">
          <div className="mb-4 text-3xl font-bold">Your Receipt</div>
          {cardItem.map((item, idx) => (
            <div className=" flex justify-between font-semibold" key={idx}>
              <div className="">{item.title}</div> <div>x{item.quantity}</div>
              <div className="text-[#24C486]">
                {new Intl.NumberFormat("en-En", {
                  style: "currency",
                  currency: "USD",
                }).format(item.price * item.quantity)}
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col  font-semibold">
          <div className="flex justify-between  font-semibold border-b-2 pb-2">
            <div>TOTAL</div>{" "}
            <div className="text-[#24C486]">
              {new Intl.NumberFormat("en-En", {
                style: "currency",
                currency: "USD",
              }).format(cardTotal)}
            </div>
          </div>
          <div className="flex justify-between  font-semibold">
            <div>Available balance</div>
            <div className="text-[#24C486]">
              {" "}
              {new Intl.NumberFormat("en-En", {
                style: "currency",
                currency: "USD",
              }).format(money)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
