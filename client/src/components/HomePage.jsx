import React from 'react';

import { useNavigate } from "react-router-dom";

const HomePage = () => {
    let navigate = useNavigate();
  const routeChangeLogin = () => {
    let path = `/login`;
    navigate(path);
  };
  const routeChangeSignUp = () => {
    let path = `/register`;
    navigate(path);
  };
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <div className="text-center bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">Welcome to Our Platform</h1>
                <div className="flex gap-4 justify-center mt-4">
                    <button 
                        className="px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-700"
                        onClick={routeChangeLogin}
                    >
                        Login
                    </button>
                    <button 
                        className="px-6 py-2 text-white bg-green-500 rounded-lg hover:bg-green-700"
                        onClick={routeChangeSignUp}
                    >
                        Register
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
