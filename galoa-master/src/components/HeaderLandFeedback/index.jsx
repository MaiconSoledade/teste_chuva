import React, { useState } from 'react';

import ButtonCreate from '../../components/ButtonCreate';
import QuestionDiv from '../../components/QuestionDiv';
import iconDark from '../../assets/icons/icon-dark.svg';
function HeaderLandFeedback(onClick, ...rest){ 
    const [form, setForm] = useState(false);
    const [defaultHeader, setDefaultHeader] = useState(true);
    const [waitingFeedback, setWaitingFeedback] = useState(false);
    return (
        <>
        
        <div className="waiting-feedback">
            <span className="title">Seu tópico foi enviado com sucesso! :D !</span>
            <span className="input-title">Agradecemos por sua contribuição, uma notificação será enviada ao seu email assim que seu tópico for respondido! </span>
            <span className="discover-others">Descubra outros trabalhos</span>
        </div>
        <br/>
        <hr/>
        <div className="div-create">
            <ButtonCreate content="Criar Novo tópico" buttoncrt="button-create-new" onClick={() => setForm(true), () => setWaitingFeedback([])}/>
        </div>
        
        <div className="div-waiting-feedback">
            <div className="text">
                <img src={iconDark} alt="Icone escuro"/>
                Aguardando feedback dos autores
            <span className="discover-others" onClick={ onClick }>Editar tópico</span>
            </div>
            <QuestionDiv title="Assunto da pergunta aparece aqui" name="Carlos Henrique Santos" background="true">
                Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo...
                Aguardando feedback dos autores
            </QuestionDiv>
        </div>
          
        </>
    )
}

export default HeaderLandFeedback;