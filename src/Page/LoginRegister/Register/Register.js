import React, { useState } from 'react';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = event => {
    setShowPassword(event.target.checked);
  }

  return (
    <div className="container mx-auto mt-8 mb-16">
      <form>
        <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100 mx-auto">
          <div className="card-body">
            <h2 className="text-xl text-center font-bold">Register Form</h2>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input type="text" placeholder="name" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="email" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type={`${showPassword ? "text" : "password"}`} placeholder="password" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input type={`${showPassword ? "text" : "password"}`} placeholder="password" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label cursor-pointer justify-start">
                <input onClick={handleShowPassword} type="checkbox" className="checkbox checkbox-primary checkbox-sm mr-2" />
                <span className="label-text">Show Password</span>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;