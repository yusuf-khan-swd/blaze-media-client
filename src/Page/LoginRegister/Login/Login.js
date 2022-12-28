import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {
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
    console.log(value);
    const { email, password } = value;

  };

  return (
    <div className="container mx-auto mt-8 mb-16">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto">
          <div className="card-body">
            <h2 className="text-xl text-center font-bold">Login Form</h2>
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
              <label className="label cursor-pointer justify-start">
                <input
                  onClick={handleShowPassword}
                  type="checkbox"
                  className="checkbox checkbox-primary checkbox-sm mr-2"
                />
                <span className="label-text">Show Password</span>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;