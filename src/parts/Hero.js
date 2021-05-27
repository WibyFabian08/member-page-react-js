import React, { useState } from "react";

function Hero() {
  const [email, setEmail] = useState('');

  function submit() {
    window.open(`http://localhost:3000/${email}`)
  }

  return (
    <div className="flex justify-between items-center">
      <div className="w-1/2 hidden md:block">
        <div className="relative" style={{ height: 440, width: 369 }}>
          <div
            className="border absolute border-gray-400 -right-60 mb-5"
            style={{ height: 350, width: 300 }}
          ></div>
          <div className="absolute mt-16 right-0 -mr-32">
            <img
              style={{ height: 350, width: 300 }}
              src="../assets/images/poto-mbak-anisa.png"
              alt=""
            />
          </div>
          <div
            className="absolute bg-white mt-32 py-4 px-4"
            style={{ height: 113, width: 290 }}
          >
            <p className="font-regular mb-4" style={{ color: "#132B50" }}>
              Metode belajar yang santai seperti nonton drakor di Netflix
            </p>
            <p className="text-gray-400 text-sm">Alyssa, Apps Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
