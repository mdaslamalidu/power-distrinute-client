import React from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const passowrd = form.password.value;
    const userData = { name, email, passowrd };
    fetch("http://localhost:5000/registration", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast("Successfully Register");
        navigate("/add-your-bill");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex justify-center items-center text-black">
      <div className="w-96 p-7 my-8 bg-black rounded">
        <h2 className="text-xl text-center text-white">Registration</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-control w-full my-2">
            <label className="label">
              <span className="label-text text-white">Full Name</span>
            </label>{" "}
            <input
              className="input input-bordered w-full"
              name="name"
              type="text"
              placeholder="Your Full name"
            />
          </div>
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
            Sign Up
          </button>
        </form>
        <p className="text-white my-3">
          Already Have An Account?
          <Link className="text-white mx-3" to="/login">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
