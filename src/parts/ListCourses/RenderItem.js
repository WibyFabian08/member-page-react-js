import React from "react";
import Link from 'next/link';

import IconPlay from '../../../public/images/btn_play.svg';

function RenderItem({data}) {
  return (
    <div className="w-full md:w-1/2 lg:w-1/4 mt-8 px-6">
      <div className="item">
          <figure className="item-image relative w-full transition-all duration-300">
                <div className="btn-play transition-all duration-300">
                  <IconPlay></IconPlay>
                </div>
                <img className="w-full" src={data?.thumbnail}></img>
                <Link href={`/courses/[id]`} as={`/courses/${data.id}`}><a className="link-wrapped"></a></Link>
          </figure>
          <div className="decs mt-4">
              <p className="text-lg" style={{ color: "#132B50" }}>
                {data?.name}
              </p>
              <p className="text-sm text-gray-400" style={{textTransform: "capitalize"}}>{data?.level}</p>
          </div>
      </div>
    </div>
  );
}

export default RenderItem;
