import React from 'react';
import {Link, withRouter} from 'react-router-dom';

import {ReactComponent as LightLogo} from '../assets/images/light-logo.svg';
import {ReactComponent as DarkLogo} from '../assets/images/dark-logo.svg';

function Header(props) {
    const linkColor = props.onDark ? 'text-white' : '#132B50';
    return (
        <header className="flex justify-between items-center">
            <div style={{height: 54, width: 32}}>
                {
                    props.dark ? <DarkLogo></DarkLogo> : <LightLogo></LightLogo>
                }
                
            </div>
                <ul className="flex">
                    <li><Link to="/" className={[linkColor, "px-6 py-3 hover:text-green-400"].join(" ")}>Home</Link></li>
                    <li><Link to="/" className={[linkColor, "px-6 py-3 hover:text-green-400"].join(" ")}>Pricing</Link></li>
                    <li><Link to="/" className={[linkColor, "px-6 py-3 hover:text-green-400"].join(" ")}>Features</Link></li>
                    <li><Link to="/" className={[linkColor, "px-6 py-3 hover:text-green-400"].join(" ")}>Story</Link></li>
                    <li><Link to="/" className="text-white px-6 py-3 ml-3 bg-indigo-400 hover:bg-indigo-500">{props.login ? 'Masuk' : 'Daftar'}</Link></li>
                </ul>
        </header>
    )
}

export default withRouter(Header);