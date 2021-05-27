import React from "react";
import { withRouter } from "react-router-dom";

import Poto from "../assets/images/poto-mbak-login.png";
import { useForm } from "../helpers/hooks/useForm";

import { useDispatch } from "react-redux";
import { loginAction } from "../redux/action/authAction";

const FormLogin = ({ history }) => {
  const dispatch = useDispatch();

  const [form, setForm] = useForm({
    email: "",
    password: "",
  });

  function submit(e) {
    e.preventDefault();

    dispatch(loginAction(form, history));

    setForm("reset");
  }
  return (
    <div className="flex justify-center items-center mx-auto">
      <form onSubmit={submit} className="w-full md:w-5/12 px-10 md-px-0">
        <h1
          className="text-2xl md:text-5xl mb-5 md:mb-10"
          style={{ color: "#132B50" }}
        >
          <span className="font-bold">Continue</span> Study, <br /> Finish Your{" "}
          <span className="font-bold">Goals</span>
        </h1>
        <div className="mb-4 w-full">
          <label
            htmlFor="email"
            className="text-md"
            style={{ color: "#132B50" }}
          >
            Email Address
          </label>
          <input
            type="text"
            value={form.email}
            onChange={(e) => setForm("email", e.target.value)}
            placeholder="Your Email Address"
            className="w-full bg-white focus:outline-none px-4 py-2 border border-gray-400 focus:border-green-300"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="passpord"
            className="text-md"
            style={{ color: "#132B50" }}
          >
            Password
          </label>
          <input
            type="password"
            value={form.password}
            onChange={(e) => setForm("password", e.target.value)}
            placeholder="Your Password"
            className="w-full bg-white focus:outline-none px-4 py-2 border border-gray-400 focus:border-green-300"
          />
        </div>
        <button
          type="submit"
          className="button-form w-full px-4 py-2 text-white mt-2"
        >
          Masuk
        </button>
      </form>
      <div className="w-5/12 hidden sm:block overflow-hidden">
        <div className="w-1/2 hidden md:block">
          <div className="relative" style={{ height: 440, width: 369 }}>
            <div
              className="border absolute left-32 border-indigo-400 top-10 -right-60 mb-5"
              style={{ height: 350, width: 300 }}
            ></div>
            <div className="absolute mt-16 right-12 top-0 -mr-32">
              <img style={{ height: 350, width: 300 }} src={Poto} alt="" />
            </div>
            <div
              className="absolute bottom-0 transform translate-x-full bg-white mt-32 py-4 px-4"
              style={{ height: 113, width: 290 }}
            >
              <p className="font-regular mb-4" style={{ color: "#132B50" }}>
                Semua sudah terarah dengan baik dan perlu ikuti saja
              </p>
              <p className="text-gray-400 text-sm">Tamara, UX Designer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(FormLogin);