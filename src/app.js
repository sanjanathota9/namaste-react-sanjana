//JSX---html like structure inside js,below jsx is converted into
//ReactElement in background which is js object(this convertion is done by babel which is transpiler)

import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = () => {
  return (
    <div className="app-container">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};
root.render(<AppLayout />);
