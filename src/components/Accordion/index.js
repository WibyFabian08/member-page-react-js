import React, { useState } from 'react';

function Accordion({children}) {

    const [Active, setActive] = useState(null);

    function toggle(id) {
        setActive(prev => (prev === id ? null : id));
    }

    return (
        <div className="accordion">
            {children(Active, toggle)}
        </div>
    );
}

export default Accordion;