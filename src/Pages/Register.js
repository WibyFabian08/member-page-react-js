import React, { useEffect } from 'react';

import Header from '../parts/Header';
import Footer from '../parts/Footer';
import FormRegister from '../parts/FormRegister';

const Register = (props) => {
    useEffect(() => {
        window.scroll(0, 0);
      }, []);

    return (
        <>
            <section className="overflow-hidden">
                <Header dark path='register'></Header>
            </section>
            <section className="mt-10">
                <FormRegister></FormRegister>
            </section>
            <section className="mt-24">
                <Footer></Footer>
            </section>
        </>
    )
}

export default Register;