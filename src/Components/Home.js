import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="text-center my-7">
      <h1>
        Please{" "}
        <Link className="bg-slate-500 text-white py-2 px-3 rounded" to="/login">
          Log In
        </Link>{" "}
        to Add Your Bill
      </h1>
    </div>
  );
};

export default Home;
