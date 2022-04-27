import React, { useState } from 'react';

import QuestionDiv from '../QuestionDiv';

import information from '../../assets/icons/information-icon.svg';
import like from '../../assets/icons/fav-icon.svg';


import { ViewQuestion, DivQuestion } from './styles';

function QuestionViewMore() {

    const [viewMore, setViewMore] = useState(false);

    return (
        <>
            <QuestionDiv title="Assunto da pergunta aparece aqui" name="Carlos Henrique Santos" onClick={() => setViewMore(true)}>
                Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo...
                <div className="div-footer">
                    <img src={information} alt="Mais informações"/>
                    <img src={like} alt="Like"/>
                    <span> 1 like</span>
                    <span> 1 resposta</span>
                </div>
            </QuestionDiv>

            {
                viewMore &&
                    <DivQuestion>
                        <ViewQuestion name="Adriano da Silva" background="var(--color-primary-lighter)" who="Autor" icon="true">
                            
                        Resposta do autor é aqui. Relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo.
                        </ViewQuestion>

                        <ViewQuestion  name="Carlos Henrique Santos"  who="Coautor" icon="true">
                            
                        Consegui entender melhor agora! Parece que a variação da análise da dimensão e impacto de processo formativo situado impacto de processo formativo. <br/> <br/>
                        Obrigada pela resposta, muito interessante o seu trabalho!
                        </ViewQuestion>

                        <ViewQuestion  name="Camila Ferreira Andrade" background="var(--color-primary-lighter)" who="Coautor" icon="true">
                        
                        Também ínteressante lembrar que o relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo. <br/> <br/>
                        Situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo.
                        </ViewQuestion>

                        <ViewQuestion  name="Ana Carolina" background="var(--color-primary-lighter)" who="Coautor" icon="true">
                        
                        Resposta do autor é aqui. Relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo.
                        </ViewQuestion>
                    </ DivQuestion>
               
            }
    </>
    )
}

export default QuestionViewMore;