import React from "react";
import { Link, withRouter } from "react-router-dom";

function Footer() {
  return (
    <footer
      style={{ width: "100%", backgroundColor: "#161A4F" }}
      className="mx-auto"
    >
      <div className="container px-10 py-10 mx-auto flex flex-wrap justify-between">
        <div className="w-1/2 lg:w-1/5 mb-6 lg:mb-0">
          <h2 className="text-white mb-4">Company</h2>
          <ul>
            <li>
              <Link
                to="#"
                className="text-sm footer-link hover:text-green-400 hover:underline"
              >
                API Developer
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="text-sm footer-link hover:text-green-400 hover:underline"
              >
                Career
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="text-sm footer-link hover:text-green-400 hover:underline"
              >
                Our Story
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="text-sm footer-link hover:text-green-400 hover:underline"
              >
                New Soon
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-1/2 lg:w-1/5 mb-6 lg:mb-0">
          <h2 className="text-white mb-4">Student</h2>
          <ul>
            <li>
              <Link
                to="#"
                className="text-sm footer-link hover:text-green-400 hover:underline"
              >
                Get Scholarship
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="text-sm footer-link hover:text-green-400 hover:underline"
              >
                Our Pathskillis
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="text-sm footer-link hover:text-green-400 hover:underline"
              >
                All Features
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="text-sm footer-link hover:text-green-400 hover:underline"
              >
                Refund Policy
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/5 mb-6 lg:mb-0">
          <h2 className="text-white mb-4">Touch Us</h2>
          <ul>
            <li>
              <Link
                to="#"
                className="text-sm footer-link hover:text-green-400 hover:underline"
              >
                {" "}
                Micro Center
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="text-sm footer-link hover:text-green-400 hover:underline"
              >
                {" "}
                Simpang Nyalindung
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="text-sm footer-link hover:text-green-400 hover:underline"
              >
                {" "}
                Garut Bayongbong
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="text-sm footer-link hover:text-green-400 hover:underline"
              >
                089663191201
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 lg:w-2/5">
          <h2 className="text-white mb-4">Promotions</h2>
          <ul>
            <li>
              <p className="text-sm footer-link">
                Submit your email for new updates
              </p>
            </li>
            <li>
              <form action="" className="flex mt-6">
                <input
                  className="bg-white px-4 py-3 w-full md:w-1/2 focus:outline-none border-0 md:border-blue-700"
                  type="text"
                  placeholder="Your Email Address"
                />
                <button className="text-white button-form px-4">Submit</button>
              </form>
            </li>
          </ul>
        </div>
        <div className="w-full border-indigo-300 border-t mt-14">
          <p className="text-center mt-10 text-sm" style={{ color: "#53589D" }}>
            2021 Copyright Micro by Wiby Fabian Rianto All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default withRouter(Footer);
