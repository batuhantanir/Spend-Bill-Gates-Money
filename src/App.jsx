import React from "react";

//components
import Title from "./components/Title";
import MoneyBar from "./components/MoneyBar";
import Items from "./components/Items";
import Card from "./components/Card";

//redux
import { cardTotalSelector } from "./redux/billGatesSlice";
import { useSelector } from "react-redux";

function App() {
  const cardTotal = useSelector(cardTotalSelector);

  return (
    <div className="flex flex-col items-center w-[1000px] ">
      <Title />
      <MoneyBar />
      <Items />
      {cardTotal > 0 && <Card />}
    </div>
  );
}

export default App;
