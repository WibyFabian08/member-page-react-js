import React, { useEffect } from 'react';

import Header from '../parts/Header';
import Footer from '../parts/Footer';
import FormRegister from '../parts/FormRegister';

const Register = () => {
    useEffect(() => {
        window.scroll(0, 0);
      }, []);

    return (
        <>
            <section className="container mx-auto mt-10 overflow-hidden">
                <Header dark></Header>
            </section>
            <section className="mt-20">
                <FormRegister></FormRegister>
            </section>
            <section className="mt-24">
                <Footer></Footer>
            </section>
        </>
    )
}

export default Register;