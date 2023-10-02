import React from "react";

//components
import Title from "./components/Title";
import MoneyBar from "./components/MoneyBar";
import Items from "./components/Items";

function App() {
  return (
    <div className="flex flex-col items-center w-[1000px]">
      <Title />
      <MoneyBar />
      <Items />
    </div>
  );
}

export default App;
