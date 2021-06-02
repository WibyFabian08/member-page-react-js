import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import Poto from "../assets/images/poto-mbak-login.png";
import Input from "../components/Form/Input";
import fieldErrors from "../helpers/fieldErrors";
import { useForm } from "../helpers/hooks/useForm";
import { loginAction } from "../redux/action/authAction";



const FormLogin = ({ history }) => {
  const dispatch = useDispatch();

  const globalError = useSelector((state) => state.errorReducer);

  const ERROR = fieldErrors(globalError);

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
        <Input
          name="email"
          labelname="Email Address"
          error={ERROR?.email?.message}
          placeholder="Your Email Address"
          type="text"
          value={form.email}
          onChange={(e) => setForm('email', e.target.value)}
        ></Input>
         <Input
          name="password"
          labelname="Password"
          error={ERROR?.password?.message}
          placeholder="Your Password"
          type="password"
          value={form.password}
          onChange={(e) => setForm('password', e.target.value)}
        ></Input>
        <button
          type="submit"
          className="button-form w-full px-4 py-2 text-white mt-2"
        >
          Masuk
        </button>
      </form>

      <div className="w-1/12 hidden sm:block"></div>

      <div className="w-5/12 hidden sm:block overflow-hidden">
        <div className="w-1/2 hidden md:block">
          <div className="relative" style={{ height: 440, width: 369 }}>
            <div
              className="border absolute left-0 border-indigo-400 top-10 -right-60 mb-5"
              style={{ height: 350, width: 300 }}
            ></div>
            <div className="absolute mt-16 left-8 right-12 top-0 -mr-32">
              <img style={{ height: 350, width: 300 }} src={Poto} alt="" />
            </div>
            <div
              className="absolute bottom-0 left-1/3 bg-white mt-32 py-4 px-4 border border-gray-200"
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
