/* eslint-disable no-unused-vars */
// Loading.jsx

import React from "react";

const Loading = () => {
  return (
    <div className="flex space-x-2 justify-center items-center">
      <span className="sr-only">Loading...</span>
      <div className="neomorphic-dot shadow-inner bg-red-500 h-8 w-8 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div className="neomorphic-dot shadow-inner bg-red-500 h-8 w-8 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
      <div className="neomorphic-dot shadow-inner bg-red-500 h-8 w-8 rounded-full animate-bounce"></div>
    </div>
  );
};

export default Loading;
