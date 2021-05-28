import React from 'react';
import { useSelector } from 'react-redux';

const MyClass = () => {
    const userData = useSelector((state) => state.userReducer);

    return (
        <div className="container p-6 mx-auto">
            <h1>My Class</h1>
            <h1>Haloo {userData ? userData?.name : ''}</h1>
        </div>
    )
}

export default MyClass;