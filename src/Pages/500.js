import React from 'react';

import {Link} from 'react-router-dom';

const ServerError = () => {
    return (
        <div className="container flex flex-col justify-center items-center h-screen mx-auto">
            <img src={`${process.env.PUBLIC_URL}images/no-access.png`} alt="" />
            <h1 className="text-3xl mt-10 font-semibold" style={{ color: "#132B50" }}>Wow! How are you here?</h1>
            <p className="text-md text-center mt-5 text-gray-400">Seems like you do not have access to <br/> this page We are sorry</p>
            <Link to="/login" className="text-white button-form px-4 py-2 mt-5 mb-60">Loging me in</Link>
        </div>
    )
}

export default ServerError;