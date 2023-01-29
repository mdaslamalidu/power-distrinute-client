import React from "react";
import { Outlet } from "react-router-dom";
import Details from "../Components/Details";
import Header from "../Components/Header";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Details></Details>
    </div>
  );
};

export default Main;
