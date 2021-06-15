import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { ReactComponent as ArrowBack } from "../assets/images/arrow-back.svg";
import MenuBlack from "../assets/images/menu-black.png";
import Menu from "../assets/images/menu.png";


const SideBarClass = ({ data, match, history, defaultURI }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [left, setLeft] = useState(700);

  const getNavLinkActive = (path) => {
    return match.url === path || defaultURI === path
      ? "text-green-300"
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
    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  const list = [];

  if (data?.chapter?.length > 0) {
    data.chapter.forEach((chapter, index) => {
      list.push(
        <li
          className="relative flex px-4 py-4 w-full text-white bg-indigo-900 hover:text-white"
          key={index + 0.5}
        >
          {chapter.name}
        </li>
      );
      if (chapter?.lesson?.length > 0) {
        chapter.lesson.forEach((lesson, index2) => {
          list.push(
            <li key={lesson.created_at}>
              <Link
                className={[
                  "relative flex px-4 py-4 w-full  hover:text-white truncate ...",
                  getNavLinkActive(
                    `/courses/${data.id}/${chapter.id}/${lesson.video}`
                  ),
                ].join(' ')}
                to={`/courses/${data.id}/${chapter.id}/${lesson.video}`}
              >
                {lesson.name}
              </Link>
            </li>
          );
        });
      }
    });
  }

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
        <div className="flex items-center px-5 py-10">
          <ArrowBack
            onClick={() => history.push("/")}
            className="cursor-pointer"
          ></ArrowBack>
          <h1 className="text-white ml-3 text-xl">Back to Home</h1>
        </div>

        <ul>{list}</ul>
      </aside>
    </>
  );
};

export default withRouter(SideBarClass);
