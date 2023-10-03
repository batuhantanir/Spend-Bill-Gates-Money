import React from "react";

import bill from "../assets/billgates.jpg";

const Title = () => {
  return (
    <div className="flex flex-col bg-white w-full items-center py-[30px] mt-6mb-2">
      <img className="rounded-full w-[125px] h-[125px] mb-4" src={bill} alt="bill gates" />
      <h1 className="font-bold text-3xl text-[#333333]">Spend Bill Gates' Money</h1>
    </div>
  );
};

export default Title;
