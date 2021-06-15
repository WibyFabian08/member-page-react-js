import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Poto from "../assets/images/join-class.png";
import Status from "../parts/Status";
import { joinClassAction } from "../redux/action/courseAction";
import {Link} from 'react-router-dom'
import { useEffect } from "react";

const Joined = ({ match, history }) => {
  const dispatch = useDispatch();
  const MESSAGE = useSelector((state) => state.messageReducer);
  const STATUS = useSelector((state) => state.statusReducer);

  useEffect(() => {
    dispatch(joinClassAction(match.params.class, history));
  }, [dispatch])

  return (
    <>
      {STATUS === "loading" && (
        <Status label="Wait! we are doing some research!!!"></Status>
      )}
      {STATUS === "error" && <Status orderError label={MESSAGE}></Status>}
      {STATUS === "ok" && (
        <div className="container flex flex-col justify-center items-center h-screen mx-auto">
          <img src={Poto} className="mt-40" alt="" />
          <h1 className="text-3xl font-semibold" style={{ color: "#132B50" }}>
            Here you are welcome to the class!
          </h1>
          <p className="text-md text-center mt-5 text-gray-400">
            Now click join and you are the parts of our <br />{" "}
            <strong>Premium</strong> class
          </p>
          <Link
            to={`/courses/${match.params.class}`}
            className="text-white cursor-pointer button-form px-4 py-2 mt-5 mb-60"
          >
            Join Class
          </Link>
        </div>
      )}
    </>
  );
};

export default Joined;
