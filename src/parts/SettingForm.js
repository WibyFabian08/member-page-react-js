import React, { useState, useRef, useEffect } from "react";
import Input from "../components/Form/Input";
import Select from "../components/Form/Select";

import DefaultUser from "../assets/images/icon-photo-null.png";
import image2base64 from "../utils/image2base64";
import { useForm } from "../helpers/hooks/useForm";
import { useDispatch, useSelector } from "react-redux";

import fieldErrors from "../helpers/fieldErrors";
import axios from "axios";

const SettingForm = () => {
  const [token, setToken] = useState("");
  const USERDATA = useSelector((state) => state.userReducer);
  const globalError = useSelector((state) => state.errorReducer);

  const dispatch = useDispatch();

  const [form, setForm] = useForm({
    name: USERDATA?.name ?? "",
    email: USERDATA?.email ?? "",
    password: "",
    avatar: USERDATA?.avatar ?? "",
    profession: USERDATA?.profession ?? "",
    otherProfession: "",
  });

  const addPicture = useRef(null);

  const [avatar, setAvatar] = useState(null);

  const ERROR = fieldErrors(globalError);

  function previewImage(e) {
    e.persist();

    image2base64(e.target.files[0]).then((image) => {
      setAvatar(image);
    });

    form.avatar = avatar;
  }

  async function submit(e) {
    e.preventDefault();

    let poto;

    if (form.profession === "Others") {
      form.profession = form.otherProfession;
    }

    if (avatar.indexOf("base64") > -1) {
      await axios
        .post(
          "http://localhost:4000/media",
          { image: avatar },
          {
            headers: { Authorization: token.refresh_token },
          }
        )
        .then((result) => (poto = result.data.data.image))
        .catch((err) =>
          dispatch({ type: "SET_ERROR", value: err.response.data.message })
        );
    }

    await axios
      .put(
        "http://localhost:4000/users/update",
        {
          name: form.name,
          email: form.email,
          profession: form.profession,
          avatar: poto,
        },
        { headers: { Authorization: token.refresh_token } }
      )
      .then((result) => {
        dispatch({ type: "SET_USER_DETAILS", value: result.data.data });
      })
      .catch((err) => err.response.data.message);
  }

  useEffect(() => {
    setToken(JSON.parse(localStorage.getItem("BWAMICRO:token")));
  }, []);

  return (
    <div>
      <section className="flex flex-col">
        <h1
          className="text-3xl font-semibold mt-8 md:mt-0"
          style={{ color: "#132B50" }}
        >
          Settings
        </h1>
        <p className="text-gray-400 text-sm mt-2">
          Secure your data information
        </p>
      </section>
      <section className="flex items-center mt-5">
        {avatar ? (
          <img
            src={avatar}
            className="object-cover rounded-full w-20 h-20"
            alt=""
          />
        ) : form.avatar ? (
          <img
            src={form.avatar}
            className="object-cover rounded-full w-20 h-20"
            alt=""
          />
        ) : (
          <img
            src={DefaultUser}
            className="rounded-full object-cover w-20 h-20"
            width={95}
            height={95}
            alt=""
          />
        )}

        <div className="flex flex-col ml-3">
          <p className="text-sm text-gray-400">Choose your profile picture</p>
          <input
            type="file"
            name="avatar"
            className="hidden"
            onChange={previewImage}
            ref={addPicture}
          />
          <div>
            <button
              onClick={() => addPicture.current.click()}
              className="px-4 py-2 text-gray-500 mt-5 bg-gray-300 hover:bg-gray-200"
            >
              Browse...
            </button>
          </div>
        </div>
      </section>
      <form onSubmit={submit} className="flex flex-col mt-8">
        <Input
          name="name"
          error={ERROR?.name?.message}
          labelname="Full Name"
          placeholder="Your Name"
          type="text"
          value={form.name}
          onChange={(e) => setForm("name", e.target.value)}
        ></Input>

        <Input
          name="email"
          labelname="Email Address"
          error={ERROR?.email?.message}
          placeholder="Your Email Address"
          type="text"
          value={form.email}
          onChange={(e) => setForm("email", e.target.value)}
        ></Input>

        <Input
          name="password"
          labelname="Password"
          error={ERROR?.password?.message}
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

        <div className="mt-6"></div>

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

        <div className="mt-2">
          <button type="submit" className="button-form px-4 py-2 text-white">
            Simpan
          </button>
        </div>
      </form>
    </div>
  );
};

export default SettingForm;
