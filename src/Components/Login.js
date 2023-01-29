import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };
  return (
    <div className="flex justify-center items-center text-black">
      <div className="w-96 p-7 my-8 bg-black rounded">
        <h2 className="text-xl text-center text-white">Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-control w-full my-2">
            <label className="label">
              <span className="label-text text-white">Email</span>
            </label>{" "}
            <input
              className="input input-bordered w-full"
              name="email"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="form-control w-full my-2">
            <label className="label">
              <span className="label-text text-white">Password</span>
            </label>{" "}
            <input
              className="input input-bordered w-full"
              name="password"
              type="password"
              placeholder="Password"
            />
          </div>
          <button type="submit" className="btn btn-accent w-full my-2">
            Sign In
          </button>
        </form>
        <p className="text-white">
          Are You new In This Site?
          <Link className="text-white" to="/signup">
            Sign Up
          </Link>
        </p>
        <div className="divider text-white">OR</div>
      </div>
    </div>
  );
};

export default Login;
