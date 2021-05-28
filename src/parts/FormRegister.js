import React from "react";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import Poto from "../assets/images/poto-mas-register.png";
import Input from "../components/Form/Input";
import Select from "../components/Form/Select";
import { useForm } from "../helpers/hooks/useForm";



const FormRegister = ({ history }) => {
  const dispatch = useDispatch();

  const [form, setForm] = useForm({
    name: "",
    email: "",
    password: "",
    profession: "",
    otherProfession: "",
  });

  function submit(e) {
    e.preventDefault();

    console.log('Data : ', form);

    // dispatch(loginAction(form, history));

    // setForm("reset");
  }
  return (
    <div className="flex justify-center items-center mx-auto">
      <div className="w-full md:w-5/12 px-10 md-px-0">
        <form onSubmit={submit}>
          <h1
            className="text-2xl md:text-5xl mb-5 md:mb-10"
            style={{ color: "#132B50" }}
          >
            <span className="font-bold">Grow Skills</span> From, <br /> Anywhere
          </h1>
          <Input
            name="name"
            labelname="Full Name"
            placeholder="Your Name"
            type="text"
            value={form.name}
            onChange={(e) => setForm("name", e.target.value)}
          ></Input>

          <Input
            name="email"
            labelname="Email Address"
            placeholder="Your Email Address"
            type="text"
            value={form.email}
            onChange={(e) => setForm("email", e.target.value)}
          ></Input>

          <Input
            name="password"
            labelname="Password"
            placeholder="Your Password"
            type="password"
            value={form.password}
            onChange={(e) => setForm("password", e.target.value)}
          ></Input>

          <Select
            value={form.profession}
            onClick={(e) => setForm("profession", e.target.value)}
            name="profession"
            fallbackText="Select Your Focus"
          >
            <option value="Web Developer">Web Developer</option>
            <option value="Frontend Developer">Frontend Developer</option>
            <option value="Backend Developer">Backend Developer</option>
            <option value="Others">Others</option>
          </Select>

          <div className="mt-4"></div>

          {form.profession === "Others" && (
            <Input
              name="Other"
              labelname="Other"
              placeholder="Your Focus"
              type="text"
              value={form.otherProfession}
              onChange={(e) => setForm("otherProfession", e.target.value)}
            ></Input>
          )}

          <button
            type="submit"
            className="button-form w-full px-4 py-2 text-white mt-5"
          >
            Masuk
          </button>
        </form>
      </div>

      <div className="w-5/12 hidden sm:block overflow-hidden flex justify-end">
        <div className="w-1/2 hidden md:block">
          <div className="relative" style={{ height: 440, width: 369 }}>
            <div
              className="border absolute left-32 border-indigo-400 top-10 -right-60 mb-5"
              style={{ height: 350, width: 300 }}
            ></div>
            <div className="absolute h-full mt-16 right-12 top-0 -mr-32">
              <img
                style={{ height: 350, width: 300 }}
                className="object-cover"
                src={Poto}
                alt=""
              />
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

export default withRouter(FormRegister);
