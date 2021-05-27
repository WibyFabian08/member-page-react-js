import React from "react";

function Feature(props) {
  return (
    <div className='w-full md:w-1/3 px-0 md:px-4'>
      <div className="px-6 py-6 bg-white border border-gray-200 shadow-md mb-3 md:mb-0 overflow-hidden box-border" style={{height: 100}}>
          <div className="flex">
            <span className='w-auto'>{props.icon}</span>
            <span className="ml-5 w-auto">
              <p className="text-xs text-gray-400">{props.title}</p>
              <h1 className="text-xl" style={{color: '#132B50'}}>{props.data}</h1>
            </span>
          </div>
      </div>
    </div>
  );
}

export default Feature;
