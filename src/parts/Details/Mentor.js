import React from 'react';

function Mentor({data}) {
    return (
        <div className="flex items-center">
            <img src={data.profile} alt="" className="object-cover" style={{borderRadius: '50%', height: 100, width: 100}}/>
            <div className="ml-5">
                <h1 className="text-lg" style={{color: '#132B50'}}>{data.name}</h1>
                <h1 className="text-gray-400 text-sm">{data.profession}</h1>
            </div>
        </div>
    )
}

export default Mentor;