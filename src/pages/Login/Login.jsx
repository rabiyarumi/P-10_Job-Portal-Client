import Lottie from 'lottie-react';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import lottieLogin from "../../assets/Lotties/login.json"
import AuthContext from '../../context/AuthContext/AuthContext';

const Login = () => {
    const [errorMessage, setErrorMessage] = useState("");
    const {loginUser} = useContext(AuthContext);
  

    const handleLogin = e => {
        e.preventDefault();
        setErrorMessage("");
    
        const form = e.target;
    
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password)
        .then(result => {
            console.log(result)
        }) 
        .catch(error => {
            console.log(error.massage)
            setErrorMessage(error.massage)
        })
    
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col md:flex-row-reverse">
    <div className="text-center lg:text-left flex-1">

      <Lottie animationData={lottieLogin} />
      
    </div>
    <div className="card  max-w-md lg:max-w-lg mx-auto  flex-1 my-10">
      <h1 className="text-center text-5xl font-bold  mb-6">
        Login Now!
      </h1>
      <form onSubmit={handleLogin} className="card-body shadow-2xl">
        
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
    <div className="text-sm text-red-600 opacity-85">
           {errorMessage}
          </div>

        <div className="form-control ">
          <button className="btn btn-primary">Login</button>
        </div>
        <p>
          Already have an account? please{" "}
          <Link to={"/register"} className="text-purple-700"> Register</Link>
        </p>
      </form>
    </div>
  </div>
</div>
    );
};

export default Login;