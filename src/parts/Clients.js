import React from 'react';

function Client() {
    return (
        <div className="flex flex-wrap justify-center items-center">
            <div className="w-full md:w-1/3 lg:w-1/6 mb-12 lg:mb-0 px-4">
                <img className="mx-auto" src="../../images/logo-amazon.png" alt="" />
            </div>
            <div className="w-full md:w-1/3 lg:w-1/6 mb-12 lg:mb-0 px-4">
                <img className="mx-auto" src="../../images/logo-microsoft.png" alt="" />
            </div>
            <div className="w-full md:w-1/3 lg:w-1/6 mb-12 lg:mb-0 px-4">
                <img className="mx-auto" src="../../images/logo-tesla.png" alt="" />
            </div>
            <div className="w-full md:w-1/3 lg:w-1/6 mb-12 lg:mb-0 px-4">
                <img className="mx-auto" src="../../images/logo-google.png" alt="" />
            </div>
            <div className="w-full md:w-1/3 lg:w-1/6 mb-12 lg:mb-0 px-4">
                <img className="mx-auto" src="../../images/logo-facebook.png" alt="" />
            </div>
        </div>
    )
}

export default Client;