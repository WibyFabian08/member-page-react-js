import React from 'react';

const Congratulation = () => {
    function myClass() {
        window.location.href = 'http://localhost:3030/';
    }
    return (
        <div className="container flex flex-col justify-center items-center h-screen mx-auto">
            <img src={`${process.env.PUBLIC_URL}images/no-access.png`} alt="" />
            <h1 className="text-3xl mt-10 font-semibold" style={{ color: "#132B50" }}>Congratulation! You are part of us now</h1>
            <p className="text-md text-center mt-5 text-gray-400">Close this page and enjoy your premium class<br/> Happy hacking</p>
            <button
            onClick={myClass}
            className="button-form  px-4 py-2 text-white mt-5 mb-32"
          >
            My Class
          </button>
        </div>
    )

}

export default Congratulation;