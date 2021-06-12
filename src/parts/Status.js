import React from "react";
import {Link} from 'react-router-dom';

const Status = ({label, orderError}) => {
  return (
    <div className="container flex flex-col justify-center items-center h-screen mx-auto">
      <h1 className="text-3xl text-center mt-10 font-semibold capitalize" style={{ color: "#132B50" }}>
        {label}
      </h1>
      {
        orderError && <Link to="/" className="text-white cursor-pointer button-form px-4 py-2 mt-5 mb-60">
        Back Home
      </Link>
      }
    </div>
  );
};

export default Status;
