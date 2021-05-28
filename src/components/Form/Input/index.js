import React from 'react';

const Input = ({name, labelname, type, onChange, value, placeholder}) => {
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
            className="w-full text-gray-400 bg-white focus:outline-none px-4 py-2 border border-gray-400 focus:border-green-300"
          />
        </div>
    )
}

export default Input;