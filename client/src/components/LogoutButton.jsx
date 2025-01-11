import React from "react";
import useLogout from "../hooks/useLogout";
function LogoutButton() {
  const { loading, logout } = useLogout();
  return (
    <>
      <div className="text-2xl font-bold text-white bg-black w-10 rounded-xl ">
        
      </div>

      <button 
        className="px-6 py-2 text-white bg-red-500 rounded-lg hover:bg-red-700"
        onClick={logout} 
      >
       {!loading ?"Logout" : (
          <span className="loading loading-spinner"></span>
        )}
      </button>
    </>
  );
}

export default LogoutButton;
