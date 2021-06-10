import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Empty from "../assets/images/icon-kelas-null.png";
import ListClassItem from "../parts/ListClassItem";
import Status from "../parts/Status";
import SideBar from "../parts/SideBar";
import { myCourseAction } from "../redux/action/courseAction";

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

  const dispatch = useDispatch();

  const myCourse = useSelector((state) => state.myCourseReducer);
  const status = useSelector((state) => state.statusReducer);
  const message = useSelector((state) => state.messageReducer);

  useEffect(() => {
    window.scroll(0, 0);
    let token = JSON.parse(localStorage.getItem("BWAMICRO:token"));

    dispatch(myCourseAction(token.refresh_token));

  }, [dispatch]);

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
        {status === "loading" && <Status label="Wait! we are doing some research!!!"></Status>}
        {status === "error" && <Status label={message}></Status>}
        {status === "ok" &&
          (myCourse.length > 0 ? (
            <section className="p-5 flex-col">
              <h1
                className="text-3xl font-semibold ml-8 md:ml-0 mt-5 md:mt-0 mb-3 md:mb-0 px-5"
                style={{ color: "#132B50" }}
              >
                My CLass
              </h1>
              <p className="text-sm text-gray-400 ml-8 md:ml-0 px-5">Continue learning to pursue your dreams</p>
              <div className="flex flex-wrap">
                {myCourse.map((item, index) => {
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
