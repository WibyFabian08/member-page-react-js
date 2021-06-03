import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Empty from "../assets/images/icon-kelas-null.png";
import ListClassItem from "../parts/ListClassItem";
import Loading from "../parts/Loading";
import SideBar from "../parts/SideBar";

const EmptyState = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen px-5">
      <img src={Empty} alt="" />
      <h1
        className="text-3xl mt-10 font-semibold text-center"
        style={{ color: "#132B50" }}
      >
        Wow! Your class is empty!!
      </h1>
      <p className="text-md text-center mt-5 text-gray-400">
        let's find a class for you <br /> and earn all benefits for the brighter
        furute
      </p>
      <Link to="/login" className="text-white button-form px-4 py-2 mt-5">
        Find Class
      </Link>
    </div>
  );
};

const MyClass = () => {
  window.scroll(0, 0);

  const [status, setStatus] = useState("idle");

  const [data, setdata] = useState({});

  console.log('Data : ', data);

  // const courseData = data.reduce((acc, item) => {
  //   acc[item.course_id] = item;
  //   return acc;
  // }, {});


  useEffect(() => {
    let token = JSON.parse(localStorage.getItem("BWAMICRO:token"));

    setStatus("loading");

    axios
      .get("http://localhost:4000/my-courses", {
        headers: {
          Authorization: token.refresh_token,
        },
      })
      .then((result) => {
        setStatus("ok");
        setdata(result.data.data);
      })
      .catch((err) => {
        setStatus("error");
        console.log(err.response.data.message);
      });
  }, []);

  // const [data, setData] = useState(null);

  // useEffect(() => {
  // cara pertama get cookie
  // const cookie = decodeURIComponent(window.document.cookie).split('=')[1];

  // cara kedua get cookie
  // const userCookie = decodeURIComponent(window.document.cookie)
  //   .split(";")
  //   .find((item) => item.indexOf("BWAMICRO:user") > -1)
  //   .split("=")[1];

  // setData(JSON.parse(cookie));
  // }, []);

  return (
    <div className="flex">
      <SideBar></SideBar>
      <section className="flex-1">
        {status === "loading" && <Loading></Loading>}
        {status === "ok" &&
          (data.length > 0 ? (
            <section className="p-5 flex-col">
              <h1
                className="text-3xl font-semibold ml-8 md:ml-0 mt-5 md:mt-0 md:mb-5"
                style={{ color: "#132B50" }}
              >
                My CLass
              </h1>
              <p className="text-sm text-gray-400 ml-8 md:ml-0">Continue learning to pursue your dreams</p>
              <div className="flex flex-wrap">
                {Object.values(data).map((item, index) => {
                  return <ListClassItem key={index} data={item}></ListClassItem>;
                })}
              </div>
            </section>
          ) : (
            <EmptyState></EmptyState>
          ))}
      </section>
    </div>
  );
};

export default MyClass;
