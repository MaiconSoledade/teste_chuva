import React from 'react';

import './styles.css';

function DefaultDiv(props) {
    return (
        <div className="container-div-default">
            <div className="header-div-default"> {props.title} </div>
                {props.children}
        </div>
       
)
}

export default DefaultDiv;