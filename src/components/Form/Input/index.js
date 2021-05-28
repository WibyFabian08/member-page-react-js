import React from 'react';

const Input = ({name, labelname, type, onChange, value, placeholder, error}) => {
    return (
        <div className="mb-4 w-full">
          <label
            htmlFor={name}
            className="text-md"
            style={{ color: "#132B50" }}
          >
            {labelname}
          </label>
          <input
            type={type}
            name={name}
            onChange={onChange}
            value={value}
            placeholder={placeholder}
            className={["w-full text-gray-400 bg-white focus:outline-none px-4 py-2 border focus:border-green-300", error ? 'border-red-400' : 'border-gray-400'].join(' ')}
          />
          <div className="text-red-500 text-sm mt-2">{error}</div>
        </div>
    )
}

export default Input;