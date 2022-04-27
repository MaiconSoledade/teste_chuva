import React, { useState } from 'react';
import bold from '../../assets/icons/bold.svg';
import italic from '../../assets/icons/italic.svg';

function HeaderLandForm(changeState, ...rest){ 
    
    return (
        <>
       <span className="input-title">Tem uma dúvida ou sugestão? Compartilhe seu feedback com os autores! </span>
            <span className="primary-title"> Assunto</span>
                <input type="text" name="subject" id="subject"/>
            <span className="primary-title"> Conteúdo</span>
                <div className="textarea">
                    <div className="footer-textarea">
                        <div className="boldital">
                            <img src={bold} alt="Negrito"/>
                            <img src={italic} alt="Italico"/>
                        </div>
                        <button type="button" onClick={ changeState(1) }> Enviar </button>
                    </div>
                </div>

        </>
    )
}

export default HeaderLandForm;