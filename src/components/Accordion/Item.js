import React, { useState } from 'react';
import {CSSTransition} from 'react-transition-group';

import ArrowDown from '../../../public/images/icon-arrow-down.svg';

function Item({name, id, child, children, Active, toggle}) {
    const [Height, setHeight] = useState(() => 0);

    function calcHeight(e) {
        setHeight(e.offsetHeight);
    }
    return (
        <div className="overflow-hidden">
        <div className="w-full flex justify-between border border-gray-300 py-1 px-4 overflow-hidden">
            <h1>{name}</h1>
            <button className="link-wraped focus:outline-none" onClick={() => toggle(id)}>
                {
                    child && child.length > 0 && (
                        <ArrowDown className={['transition-all duration-300 transform', Active === id ? 'rotate-180' : 'rotate-0'].join(' ')}></ArrowDown>
                    )
                }
            </button>
        </div>
        <div className="transition-all duration-500" style={{height: Active === id ? Height : 0}}>
        <CSSTransition in={Active === id} timeout={500} onEnter={calcHeight} className="accordion-item">
             <div className='accordion-item'>
                 <div className="bg-gray-200 py-2">
                     {children}
                 </div>
             </div>
        </CSSTransition>
    </div>
    </div>
    )
}

export default Item;