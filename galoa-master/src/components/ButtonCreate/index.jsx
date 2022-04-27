import React from 'react';

import create from '../../assets/icons/create-icon.svg';
import './styles.css';

function ButtonCreate({ content, icon, buttoncrt}) {
    return(
        <button type="button" className={buttoncrt}>
            <div>
                { icon &&
                 <img src={create} alt="Botão Criar"/>
                }
                <span className="create">{content} </span>
            </div>
        </button>
    )
}

export default ButtonCreate;