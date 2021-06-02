import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import DefaultUser from "../assets/images/icon-photo-null.png";
import MenuBlack from "../assets/images/menu-black.png";
import Menu from "../assets/images/menu.png";
import { logoutAction } from "../redux/action/authAction";

const SideBar = ({ match, history, token }) => {
  const [data, setData] = useState(null);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [left, setLeft] = useState(700);

  const dispatch = useDispatch();

  const getNavLinkActive = (path) => {
    return match.path === path
      ? "active text-white bg-indigo-900"
      : "text-indigo-300";
  };

  const sideBarStyle = {
    width: 280,
    backgroundColor: "#161A4F",
    left: left < 640 && !toggleMenu ? "-280px" : 0,
  };

  const updateWidth = () => {
    setLeft(window.innerWidth);
  };

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("BWAMICRO:token")));

    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);
  
  const logout = () => {
    
    dispatch(logoutAction(data.refresh_token, history));

  };

  return (
    <>
      <div className="flex">
        <button
          onClick={() => setToggleMenu((prev) => !prev)}
          className={[
            "toggle z-100 p-3 focus:outline-none absolute sm:hidden",
            toggleMenu ? "active" : "",
          ].join(" ")}
        >
          <img src={MenuBlack} width={30} height={30} alt="" />
        </button>
      </div>
      <aside
        className="h-screen flex flex-col overflow-y-auto fixed sm:relative z-50 transition-all duration-300"
        style={sideBarStyle}
      >
        {toggleMenu && (
          <div
            className="overlay flex justify-end p-3"
            onClick={() => setToggleMenu((prev) => !prev)}
          >
            <img
              src={Menu}
              width={30}
              height={30}
              className="cursor-pointer"
              alt=""
            />
          </div>
        )}
        <div className="flex flex-col justify-center items-center mt-20">
          {data?.data?.avatar ? (
            <img
              src={data?.data?.avatar}
              className="border border-gray-400 rounded-full p-2"
              width={95}
              height={95}
              alt=""
            />
          ) : (
            <img
              src={DefaultUser}
              className="border border-gray-400 rounded-full p-2 object-cover"
              width={95}
              height={95}
              alt=""
            />
          )}

          <h1 className="text-white text-xl mt-4">
            {data?.data?.name ? data.data.name : "User Name"}
          </h1>
          <h3 className="text-sm" style={{ color: "#7176B8" }}>
            {data?.data?.profession
              ? data?.data?.profession
              : "User Profession"}
          </h3>
        </div>

        <ul className="mt-12">
          <li>
            <Link
              to="/"
              className={[
                "nav-link focus:outline-none relative flex px-4 py-4 w-full text-indigo-300 hover:text-white",
                getNavLinkActive("/"),
              ].join(" ")}
            >
              My Class
            </Link>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className={[
                "nav-link focus:outline-none relative flex px-4 py-4 w-full text-indigo-300 hover:text-white",
                getNavLinkActive("http://localhost:4000/library"),
              ].join(" ")}
              href="http://localhost:4000/library"
            >
              Library
            </a>
          </li>
          <li>
            <Link
              to="/transaction"
              className="nav-link focus:outline-none relative flex px-4 py-4 w-full text-indigo-300 hover:text-white"
            >
              Transactions
            </Link>
          </li>
          <li>
            <Link
              to="/setting"
              className={[
                "nav-link focus:outline-none relative flex px-4 py-4 w-full text-indigo-300 hover:text-white",
                getNavLinkActive("/setting"),
              ].join(" ")}
            >
              Settings
            </Link>
          </li>
        </ul>

        <div className="my-auto"></div>

        <ul className="mt-12">
          <li>
            <button
              type="submit"
              onClick={logout}
              className="nav-link focus:outline-none relative flex px-4 py-4 w-full text-indigo-300 hover:text-white"
            >
              Logout
            </button>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default withRouter(SideBar);