import React, { useEffect, useRef, useState, Children } from "react";

const Select = ({ onClick, children, name, fallbackText, value }) => {
  const selectWrapper = useRef(null);

  const [toggle, setToggle] = useState(false);

  const items = Children.toArray(children);

  function handleToggle() {
    setToggle(!toggle);
  }

  function clickOutside(e) {
    if (selectWrapper && !selectWrapper.current.contains(e.target)) {
      setToggle(false);
    }
  }

  useEffect(() => {
    window.addEventListener("mousedown", clickOutside);
    return () => {
      window.removeEventListener("mousedown", clickOutside);
    };
  }, []);

  const selected = items.find((item) => item.props.value === value);

  return (
    <div className="relative">
      <label className="text-md" style={{ color: "#132B50" }}>
        Occupation
      </label>
      <div
        className={[
          "border border-gray-400 px-4 py-2",
          toggle ? "border-green-400" : "",
        ].join(" ")}
        ref={selectWrapper}
        onClick={() => handleToggle()}
      >
        <div className="flex justify-between cursor-pointer">
          <div className="text-gray-400">
            {selected?.props.children ?? fallbackText}
          </div>
          <div className="transition duration-200 border-gray-400 border-b-2 border-r-2 transform rotate-45 translate-y-1 w-2 h-2"></div>
        </div>
        <div className={["bg-white border transition-all duration-500 border-gray-400 w-full left-0 mt-2 absolute mb-5", toggle ? '' : 'hidden'].join(' ')}>
          {items.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => onClick({target: {value: item.props.value}})}
                className="hover:bg-gray-300 cursor-pointer px-4 py-2 text-gray-400 z-10"
              >
                {item.props.value}
              </div>
            );
          })}
        </div>
      </div>
      
    </div>
  );
};

export default Select;
