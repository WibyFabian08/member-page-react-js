import React from "react";
import { Link } from "react-router-dom";

import IconPlay from "../assets/images/icon-play.png";

const ListClassItem = ({ data }) => {
  console.log("Data : ", data);
  return (
    <div className="item w-full md:w-1/2 lg:w-1/4 mt-5 px-6">
      <figure className="item-image relative w-full transition-all duration-300">
        <div className="btn-play transition-all duration-300">
          <img width={45} src={IconPlay}></img>
        </div>
        <img className="w-full" src={data?.course?.thumbnail}></img>
        <Link to={`/courses/${data.course_id}`}>
          <a className="link-wrapped"></a>
        </Link>
      </figure>
      <div className="decs mt-4">
        <p className="text-lg" style={{ color: "#132B50" }}>
          {data?.course?.name}
        </p>
        <p
          className="text-sm text-gray-400"
          style={{ textTransform: "capitalize" }}
        >
          {data?.course?.level}
        </p>
      </div>
    </div>
  );
};

export default ListClassItem;
