import axios from "axios";
import React, { useEffect, useState } from "react";

import Poto from "../assets/images/join-class.png";
import Status from "../parts/Status";

const Joined = ({ match, history }) => {
  const [course, setCourse] = useState({});
  const [status, setStatus] = useState("ok");
  const [message, setMessage] = useState("");

  function join() {
    let token = JSON.parse(localStorage.getItem("BWAMICRO:token"));
    setStatus('loading');
    
    axios
      .post(
        `http://localhost:4000/my-courses/`,
        { course_id: match.params.class },
        {
          headers: {
            Authorization: token.refresh_token,
          },
        }
      )
      .then((result) => {
        setStatus('ok');
        setCourse(result.data);
        console.log(result.data);
      })
      .catch((err) => {
        setStatus('error');
        setMessage(err?.response?.data?.message);
        
        console.log(err?.response?.data?.message);
      });
  }

  return (
    <>
    {status === 'loading' && <Status label="Wait! we are doing some research!!!"></Status>}
    {status === 'error' && <Status orderError label={message}></Status>}
    { status === 'ok' && 
    <div className="container flex flex-col justify-center items-center h-screen mx-auto">
      <img src={Poto} className="mt-40" alt="" />
      <h1 className="text-3xl font-semibold" style={{ color: "#132B50" }}>
        Here you are welcome to the class!
      </h1>
      <p className="text-md text-center mt-5 text-gray-400">
        Now click join and you are the parts of our <br />{" "}
        <strong>Premium</strong> class
      </p>
      <p onClick={join} to="/" className="text-white cursor-pointer button-form px-4 py-2 mt-5 mb-60">
        Join Class
      </p>
    </div>
  }
    </>
  );
};

export default Joined;
