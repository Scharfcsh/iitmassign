import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiLogIn } from "react-icons/bi";
import useLogin from '../hooks/useLogin';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
 const {loading,  login}= useLogin();

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
    
  };

  return (
    <>
    
      <section className=" ">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          
          <div className="w-full backdrop-blur-3xl z-30 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in
              </h1>
              <form
                className="space-y-4 md:space-y-6 z-40"
                onSubmit={handleSubmit}
              >
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Your email
                  </label>
                  <input
                    type="text"
                    className="bg-gray-50 border text-black border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5   dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:text-black"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="aman"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="123456789"
                    className="bg-gray-50 border text-black border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5   dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:text-black"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                
                <button
                  className="flex w-full items-center justify-center  gap-3 cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-300 to-cyan-600 px-7 py-3 rounded-md border border-gray-600 hover:scale-105 duration-200 hover:text-gray-500 hover:border-gray-800 hover:from-black hover:to-gray-900"
                  disabled={ loading }
                >
                  
                  {loading ?  <span className="loading loading-spinner"></span>:<BiLogIn className="text-xl mr-2" /> }
                  Login
                </button>

                <p className="text-sm text-center font-light text-gray-100">
                  Don’t have an account yet?
                  <Link
                    to="/register"
                    className="font-medium text-primary-600 ml-2  hover:underline dark:text-primary-500"
                  >
                    Sign up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
}

export default Login;

