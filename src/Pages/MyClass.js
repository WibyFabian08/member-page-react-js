import axios from "axios";
import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import Empty from "../assets/images/icon-kelas-null.png";
import SideBar from "../parts/SideBar";

const EmptyState = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen px-5">
      <img src={Empty} alt="" />
      <h1 className="text-3xl mt-10 font-semibold text-center" style={{ color: "#132B50" }}>
        Wow! Your class is empty?
      </h1>
      <p className="text-md text-center mt-5 text-gray-400">
        let's find a class for you <br/> and earn all benefits for the brighter furute
      </p>
      <Link to="/login" className="text-white button-form px-4 py-2 mt-5">
        Find Class
      </Link>
    </div>
  );
};

const MyClass = () => {
  useEffect(() => {
    let token = JSON.parse(localStorage.getItem("BWAMICRO:token"));

    axios.get('http://localhost:4000/my-courses', {
      headers: {
        Authorization: token.refresh_token
      }
    }).then((result) => {
      console.log(result)
    }).catch((err) => {
      console.log(err.response.data.message);
    })
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
        <EmptyState></EmptyState>
      </section>
    </div>
  );
};

export default MyClass;
