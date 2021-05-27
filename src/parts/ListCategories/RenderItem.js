import React from 'react';

import formatThousand from '../../pages/helpers/formatThousand';

function RenderItem({item}) {

    return (
        <div className="card w-1/2 md:w-1/3 lg:w-1/6 px-4 mb-4 lg-mb-0 relative">
            <div className="card-category border border-gray-100 shadow-md px-4 py-4 flex justify-between flex-col">
                <div className="hover:fill-white">
                    {item.icon}
                </div>
                <div className="mt-10" style={{height: 100, maxWidth: 172}}>
                    <p className="text-lg mb-4 mt-3" style={{color: '#132B50', maxWidth: 30}}>{item.title}</p>
                    <p className="text-gray-400 text-sm">{formatThousand(item.total)} Courses</p>
                </div>
            </div>
        </div>
    )
}

export default RenderItem;