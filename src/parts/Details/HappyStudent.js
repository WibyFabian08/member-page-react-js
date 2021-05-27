import React from "react";

import StarLight from '../../../public/images/ICStart.svg';
import StarOff from '../../../public/images/Staroff.svg';

function HappyStudent({ data }) {
    function renderStar() {
        let star = [];
        for(let i = 1; i <= 5; i++) {
            if(i <= data.rating) {
                star.push(<StarLight></StarLight>)
            } else {
                star.push(<StarOff></StarOff>)
            }
        }

        return star;
    }

  return (
    <div className="mb-5 w-full md:w-3/4">
      <p className="text-gray-600 text-justify text-sm">{data.note}</p>
      <div className="flex mt-3 items-center">
          {data.users.avatar.length > 0 ? (
            <img src={data.users.avatar} alt="" />
          ) : (
            <img src="../../../images/icon-photo-null.png" className="w-8 h-8 object-cover rounded-full" alt="" />
          )}
        <div className="ml-3">
            <p style={{color: '#132B50'}}>{data.users.name}</p>
            <p className="capitalize text-gray-400 text-xs">{data.users.role}</p>
        </div>
      </div>
        <div className="flex mt-3">{renderStar()}</div>
    </div>
  );
}

export default HappyStudent;
