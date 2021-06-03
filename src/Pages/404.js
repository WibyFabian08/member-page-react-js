import React from 'react';

import {Link} from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="container flex flex-col justify-center items-center h-screen mx-auto">
            <img src={`${process.env.PUBLIC_URL}/images/page-not-found.png`} alt="" />
            <h1 className="text-3xl mt-10 font-semibold" style={{ color: "#132B50" }}>Opps! We're lost</h1>
            <p className="text-md text-center mt-5 text-gray-400">The Page that you requested is not <br/> found in our system</p>
            <Link to="/" className="text-white button-form px-4 py-2 mt-5 mb-60">Back to home</Link>
        </div>
    )
}

export default NotFound;