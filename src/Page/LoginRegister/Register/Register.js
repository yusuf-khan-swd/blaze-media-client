import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = (event) => {
    setShowPassword(event.target.checked);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (value) => {
    const { name, email, password, confirm } = value;

    if (password !== confirm) {
      return toast.error("Password did not matched");
    }
  };

  return (
    <div className="container mx-auto mt-8 mb-16">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100 mx-auto">
          <div className="card-body">
            <h2 className="text-xl text-center font-bold">Register Form</h2>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-md">Your Name</span>
              </label>
              <input
                {...register("name", { required: "name field is required" })}
                type="text"
                placeholder="name"
                className="input input-bordered"
              />
              <p className="text-red-600"><small>{errors.name?.message}</small></p>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email", { required: "email field is required" })}
                type="email"
                placeholder="email"
                className="input input-bordered"
              />
              <p className="text-red-600"><small>{errors.email?.message}</small></p>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password", {
                  required: "password field is required",
                })}
                type={`${showPassword ? "text" : "password"}`}
                placeholder="password"
                className="input input-bordered"
              />
              <p className="text-red-600"><small>{errors.password?.message}</small></p>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                {...register("confirm", {
                  required: "confirm password field is required",
                })}
                type={`${showPassword ? "text" : "password"}`}
                placeholder="password"
                className="input input-bordered"
              />
              <p className="text-red-600"><small>{errors.confirm?.message}</small></p>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer justify-start">
                <input
                  onClick={handleShowPassword}
                  type="checkbox"
                  className="checkbox checkbox-primary checkbox-sm mr-2"
                />
                <span className="label-text">Show Password</span>
              </label>
            </div>
            <div className="form-control mt-3">
              <button className="btn btn-primary">Register</button>
            </div>
            <div className="form-control">
              <p>Already have an account? <Link className="text-blue-600" to={`/login`}>Please Login</Link></p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
