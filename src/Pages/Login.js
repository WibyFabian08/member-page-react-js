import React from 'react';

import Header from '../parts/Header';
import Footer from '../parts/Footer';
import FormLogin from '../parts/FormLogin';

const Login = () => {
    return (
        <>
            <section className="container mx-auto mt-10 overflow-hidden">
                <Header dark></Header>
            </section>
            <section className="mt-20">
                <FormLogin></FormLogin>
            </section>
            <section className="mt-24">
                <Footer></Footer>
            </section>
        </>
    )
}

export default Login;