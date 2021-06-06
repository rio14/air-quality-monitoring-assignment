import React from "react";
import "./index.css";
function Loader({ connectionStatus }) {
  return (
    <div className="fixed top-0 left-0 z-50 w-screen h-screen flex items-center justify-center">
      <div className="bg-white border py-2 px-5 rounded-lg flex items-center flex-col">
        <div className="loader-dots block relative w-20 h-5 mt-2">
          <div className="absolute top-0 mt-1 w-3 h-3 rounded-full bg-blue-700"></div>
          <div className="absolute top-0 mt-1 w-3 h-3 rounded-full bg-blue-700"></div>
          <div className="absolute top-0 mt-1 w-3 h-3 rounded-full bg-blue-700"></div>
          <div className="absolute top-0 mt-1 w-3 h-3 rounded-full bg-blue-700"></div>
        </div>
        <div
          id="connection"
          className="text-gray-500 text-xs font-light mt-2 text-center"
        >
          {connectionStatus}
        </div>
      </div>
    </div>
  );
}

export default Loader;
