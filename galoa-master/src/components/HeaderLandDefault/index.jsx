import React, { useState } from 'react';

import hand from '../../assets/icons/hand-icon.svg';
import qa from '../../assets/icons/qa-icon.svg';
import chat from '../../assets/icons/chat-icon.svg';

function HeaderLandDefault( onClick, ..rest ){ 
    const [form, setForm] = useState(false);
    const [defaultHeader, setDefaultHeader] = useState(true);
    const [waitingFeedback, setWaitingFeedback] = useState(false);
    
    return (
        <>
        <span className="title">Compartilhe suas ideias ou dúvidas com os autores!</span>
            <div className="icons">
                <img src={hand} alt="Icone Mãos"/>
                <img src={qa} alt="Icone QA"/>
                <img src={chat} alt="Icone Chat"/>
            </div>
            <div className="word-wrap">
                <span> Sabia que o maior estímulo no desenvolvimento científico e cultural é a curiosidade? Deixe seus </span>
                <span>questionamentos ou sugestões para o autor!</span>
            </div>
            <br/>
            <hr/>
            <div className="div-create" onClick={ onClick } >
                                <ButtonCreate content="Criar tópico" icon="true"  buttoncrt="button-create-default" />
            </div>
        </>
    )
}

export default HeaderLandDefault;