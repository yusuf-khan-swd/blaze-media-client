import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Login = () => {
  const { googleLogin, login } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [isDataLoading, setIsDataLoading] = useState(false);
  const [loginError, setLoginError] = useState("");

  const handleShowPassword = (event) => {
    setShowPassword(event.target.checked);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (value) => {
    const { email, password } = value;

    setIsDataLoading(true);
    login(email, password)
      .then(result => {
        const user = result.user;
        toast.success(`Welcome ${user.displayName || user.email}`);
        setIsDataLoading(false);
        setLoginError("");
      })
      .catch(error => {
        console.log("login error: ", error);
        toast.error(error.message);
        setLoginError(error.message);
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
        setLoginError("");
      })
      .catch(error => {
        console.log("google login error: ", error);
        setIsDataLoading(false);
        setLoginError(error.message);
      })
  };

  return (
    <div className="container mx-auto mt-8 mb-16">
      <div className="m-2">
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
                <label className="label">
                  <a href="/" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
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
              {
                loginError &&
                <p className="text-red-600">{loginError}</p>
              }
              <div className="form-control mt-3">
                <button className="btn btn-primary" disabled={isDataLoading}>Login</button>
              </div>
              <div className="form-control">
                <p>New to Blaze Media? <Link className="text-blue-600" to={`/register`}>Please Register</Link></p>
              </div>
            </div>
          </div>
        </form>
        <div className="flex flex-col max-w-sm mx-auto mt-5">
          <button onClick={handleGoogleLogin} className="btn capitalize text-lg" disabled={isDataLoading}>Google Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;