import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/AuthContext/AuthContext';
import Lottie from 'lottie-react';
import lottieregistration from "../../assets/Lotties/Animation -4.json"

const Register = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const {createUser} = useContext(AuthContext);


  const handleRegister = e => {
    e.preventDefault();
    setErrorMessage("");

    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    const newUser = {name, email, photo}
    console.log(newUser)

    createUser(email, password)
    .then(result => {
      console.log(result)
    })
    .catch(error => {
      console.log(error.massage)
    } )
  }

  return (

    <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col md:flex-row-reverse">
    <div className="text-center lg:text-left">

      <Lottie animationData={lottieregistration} />
      
    </div>
    <div className="card  max-w-md lg:max-w-lg mx-auto  shrink-0 my-10">
      <h1 className="text-center text-5xl font-bold  mb-6">
        Register Now!
      </h1>
      <form onSubmit={handleRegister} className="card-body shadow-2xl">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input
            type="text"
            name="photo"
            placeholder="photo url"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>

    {/* error massage */}
    <div className="text-sm ml-2 mt-1 opacity-85">
            {errorMessage ? (
              <p className="text-red-500">{errorMessage}</p>
            ) : (
              <p className="">
                Make sure your password contain 6 character including 1
                uppercase & 1 lowercase letter.
              </p>
            )}
          </div>

        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
        <p>
          Already have an account? please{" "}
          <Link to={"/login"} className="text-purple-700"> Login</Link>
        </p>
      </form>
    </div>
  </div>
</div>
   
  );
};

export default Register;