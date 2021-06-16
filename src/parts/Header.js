import React from "react";
import { Link, withRouter } from "react-router-dom";

import { ReactComponent as LightLogo } from "../assets/images/light-logo.svg";
import { ReactComponent as DarkLogo } from "../assets/images/dark-logo.svg";

import MenuBlack from "../assets/images/menu-black.png";
import Menu from "../assets/images/menu.png";
import { useState } from "react";

function Header(props) {
  const linkColor = props.onDark ? "text-white" : "#132B50";
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <header className="flex justify-between items-center container mx-auto mt-0 lg:mt-10 invisible md:visible">
        <div style={{ height: 54, width: 32 }}>
          {props.dark ? <DarkLogo></DarkLogo> : <LightLogo></LightLogo>}
        </div>
        <ul className="flex">
          <li>
            <Link
              to="/"
              className={[linkColor, " px-6 py-3 hover:text-green-400"].join(
                " "
              )}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className={[linkColor, " px-6 py-3 hover:text-green-400"].join(
                " "
              )}
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className={[linkColor, " px-6 py-3 hover:text-green-400"].join(
                " "
              )}
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className={[linkColor, " px-6 py-3 hover:text-green-400"].join(
                " "
              )}
            >
              Story
            </Link>
          </li>
          <li>
            {props.path === "login" && (
              <Link
                to={"/register"}
                className="text-white px-6 py-3 ml-3 bg-indigo-500 hover:bg-indigo-400"
              >
                Daftar
              </Link>
            )}
            {props.path === "register" && (
              <Link
                to={"/login"}
                className="text-white px-6 py-3 ml-3 bg-indigo-500 hover:bg-indigo-400"
              >
                Masuk
              </Link>
            )}
          </li>
        </ul>
      </header>
      <header className="flex flex-col sm:hidden -mt-14 overflow-hidden">
        {!toggle && (
          <button
            onClick={() => setToggle(!toggle)}
            className={["toggle z-100 p-3 focus:outline-none sm:hidden"].join(
              " "
            )}
          >
            <img src={MenuBlack} width={30} height={30} alt="" />
          </button>
        )}
        {toggle && (
          <ul
            className="flex flex-col overflow-hidden transition-all duration-300"
            style={{ backgroundColor: "#161A4F" }}
          >
            <div style={{ height: 54, width: 32 }} className="ml-5">
              <LightLogo></LightLogo>
            </div>
            <button
              onClick={() => setToggle(!toggle)}
              className={[
                "toggle z-100 p-3 focus:outline-none sm:hidden absolute right-0",
              ].join(" ")}
            >
              <img src={Menu} width={30} height={30} alt="" />
            </button>
            <li className="p-3">
              <Link
                to="/"
                className={[
                  linkColor,
                  "text-white px-6 py-3 hover:text-green-400",
                ].join(" ")}
              >
                Home
              </Link>
            </li>
            <li className="p-3">
              <Link
                to="/"
                className={[
                  linkColor,
                  "text-white px-6 py-3 hover:text-green-400",
                ].join(" ")}
              >
                Pricing
              </Link>
            </li>
            <li className="p-3">
              <Link
                to="/"
                className={[
                  linkColor,
                  "text-white px-6 py-3 hover:text-green-400",
                ].join(" ")}
              >
                Features
              </Link>
            </li>
            <li className="p-3">
              <Link
                to="/"
                className={[
                  linkColor,
                  "text-white px-6 py-3 hover:text-green-400",
                ].join(" ")}
              >
                Story
              </Link>
            </li>
            <li className="p-6">
              {props.path === "login" && (
                <Link
                  to={"/register"}
                  className="text-white px-6 py-3 ml-3 bg-indigo-500 hover:bg-indigo-400"
                >
                  Daftar
                </Link>
              )}
              {props.path === "register" && (
                <Link
                  to={"/login"}
                  className="text-white px-6 py-3 ml-3 bg-indigo-500 hover:bg-indigo-400"
                >
                  Masuk
                </Link>
              )}
            </li>
          </ul>
        )}
      </header>
    </>
  );
}

export default withRouter(Header);
