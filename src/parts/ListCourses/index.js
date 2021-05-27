import React from 'react';
import Link from 'next/link';

import RenderItem from './RenderItem';

function ListCourse({data, all}) {
    return (
        <div>
            <div className="flex justify-between items-center mx-auto">
                <div>
                    <p className="text-sm text-gray-400 pl-6 md:pl-0">New Classes</p>
                    <h2 className="text-2xl font-regular pl-6 md:pl-0" style={{color: "#132B50"}}>Summer <span className="text-green-400">Productive</span></h2>
                </div>
                {
                    all && (
                        <div>
                            <Link href="/courses"><a><p className="text-sm text-gray-400 underline ml-16 md:pl-0">View All Classes</p></a></Link>
                        </div>
                    )
                }
            </div>
            <div className="flex flex-wrap justify-start mx-auto">
                {
                    data.map(item => {
                        return (
                            <RenderItem key={item.id} data={item}></RenderItem>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ListCourse;