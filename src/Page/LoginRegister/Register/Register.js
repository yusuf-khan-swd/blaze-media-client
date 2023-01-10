import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Register = () => {
  const { googleLogin, createUser, updateUserInfo } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [isDataLoading, setIsDataLoading] = useState(false);
  const [registerError, setRegisterError] = useState("");

  const handleShowPassword = (event) => {
    setShowPassword(event.target.checked);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (value) => {
    setIsDataLoading(true);
    const { name, email, password, confirm } = value;

    if (password !== confirm) {
      setIsDataLoading(false);
      return toast.error("Password did not matched");
    }

    createUser(email, password)
      .then(result => {
        const user = result.user;
        toast.success(`Welcome! ${user.email}`);
        setIsDataLoading(false);
        setRegisterError("");
        handleUpdateUserInfo(name);
      })
      .catch(error => {
        console.log("Register error: ", error);
        setIsDataLoading(false);
        setRegisterError(error.message);
        toast.error(error.message);
      })
  };

  const handleUpdateUserInfo = (name) => {
    const profile = {
      displayName: name
    };

    setIsDataLoading(true);
    updateUserInfo(profile)
      .then(() => {
        setIsDataLoading(false);
        setRegisterError("");
      })
      .catch(error => {
        console.log("update user info error: ", error);
        setRegisterError(error.message);
        toast.error(error.message);
        setIsDataLoading(false);
      })
  };

  const handleGoogleLogin = () => {
    setIsDataLoading(true);
    googleLogin()
      .then(result => {
        const user = result.user;
        toast.success(`Welcome! ${user.displayName || user.email}`);
        setIsDataLoading(false);
        setRegisterError("");
      })
      .catch(error => {
        console.log("google login error: ", error);
        setIsDataLoading(false);
        setRegisterError(error.message);
      })
  };


  return (
    <div className="container mx-auto mt-8 mb-16">
      <div className="m-2">
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
                  placeholder="Name"
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
                  placeholder="Email"
                  className="input input-bordered"
                />
                <p className="text-red-600"><small>{errors.email?.message}</small></p>
              </div>
              <div className="grid grid-cols-1">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    {...register("password", {
                      required: "password field is required",
                    })}
                    type={`${showPassword ? "text" : "password"}`}
                    placeholder="Password"
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
                    placeholder="Password"
                    className="input input-bordered"
                  />
                  <p className="text-red-600"><small>{errors.confirm?.message}</small></p>
                </div>
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
              {
                registerError &&
                <p className="text-red-600">{registerError}</p>
              }
              <div className="form-control mt-3">
                <button className="btn btn-primary capitalize text-lg" disabled={isDataLoading}>Register</button>
              </div>
              <div className="form-control">
                <p>Already have an account? <Link className="text-blue-600" to={`/login`}>Please Login</Link></p>
              </div>
            </div>
          </div>
        </form>
        <div className="flex flex-col max-w-lg mx-auto mt-5">
          <button onClick={handleGoogleLogin} className="btn capitalize text-lg" disabled={isDataLoading}>Google Login</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
