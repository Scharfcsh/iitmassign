import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";

import Dash from "./components/Dash";
import HomePage from "./components/HomePage";

function App() {
  const {authUser} =useAuthContext();
  return (
    <>
      <div className="h-full">
        <Routes>
          <Route path="/" element={<HomePage/>} />
  

          <Route path="/login" element={authUser?<Navigate to={"/chat"} replace={true}/> :<Login />} />

          <Route path="/chat" element={authUser?<Dash/>:<Navigate to="/login" replace={true}/> } />

          
          

          <Route path="/register" element={authUser?<Navigate to={"/chat"} replace={true}/> :<Register />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;

{
  /* <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'We produce food for Mice',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'We produce food for Hamsters',
        1000,
        'We produce food for Guinea Pigs',
        1000,
        'We produce food for Chinchillas',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2rem', display: 'inline-block' }}
      repeat={Infinity}
      /> */
}
