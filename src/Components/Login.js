import React from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const passowrd = form.password.value;
    console.log(email);
    fetch(`http://localhost:5000/login/${email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Login Successfully");
        navigate("/add-your-bill");
      })
      .catch((error) => {
        toast.error(error.message);
      });
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
          <button type="submit" className="btn btn-secondary w-full my-4">
            Sign In
          </button>
        </form>
        <p className="text-white my-3">
          Are You new In This Site?
          <Link className="text-white mx-3" to="/signup">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
