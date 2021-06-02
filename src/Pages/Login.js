import React, { useEffect } from "react";
import Footer from "../parts/Footer";
import FormLogin from "../parts/FormLogin";
import Header from "../parts/Header";

const Login = (props) => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <section className="container mx-auto mt-10 overflow-hidden">
        <Header dark path='login'></Header>
      </section>
      <section className="mt-20">
        <FormLogin></FormLogin>
      </section>
      <section className="mt-24">
        <Footer></Footer>
      </section>
    </>
  );
};

export default Login;
