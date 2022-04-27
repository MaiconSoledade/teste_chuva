import React from 'react';

import galileu from '../../assets/images/galileu.jpg';
// import play from '../../assets/images/play-button.svg';
// import conf from '../../assets/images/conf.svg';
// import audio from '../../assets/images/audio.svg';
import './styles.css';
// import DefaultDiv from '../DefaultDiv';

function VideoDiv(props) {
    return(
    <>
    <div className="video">
        {/* havia começado a fazer o video manualmente antes de receber o link do figma */}
        <div className="div-video"></div>
        <div className="div-video-child">
            <div className="video-title">
                <p>Análise sensorial de preparações funcionais desenvolvidas para escolares entre 09 e 15 anos, do município de Campinas/SP</p>
            </div>
            <div className="footer">
                <img src={galileu} alt="Foto Galileu"/>
                <div className="footer-title">
                    <p id="firstp">Beatriz Christiane Melo</p>
                    <p id="secondp">FCA / Universidade Estadual de Campinas</p>
                </div>
            </div>

            {/*  alguns elementos do player */}
            {/* <div className="play-elements">
                <img src={play} alt="Botão Play" id="button-play"/>
                <div className="progress-status">
                    <div className="progress-bar"></div>
                </div>
                <div id="minute">
                    <span>-02.43</span>
                </div>
                <img src={audio} alt="Botão Audio" id="button-audio"/>
            </div>  */}
        </div>
        <div className="container-div">
            <div className="header-div">
                <span>Detalhes</span>
            </div>
            <div className="main-body">
                <div className="content">
                    <p>Tipo de Apresentação: <b>Pôster</b></p>
                    <p>Eixo temático: <b> Alimentação e saúde (AS) </b> </p>
                    <p>Palavras-chaves: <b> Alimentos funcionais, alimentação escolar. </b> </p>
                    <br/>
                    <p> <b>Autores:</b></p>
                    <p> Autores: Galileo Galilei¹ 
                       <br/> Berta Lange de Morretes² 
                       <br/> Isaac Newton³
                       <br/> Cesar Lattes¹
                       <br/> Stephen Hawking⁴ 
                    </p>
                    <br/>
                    <br/>
                    <p>¹Universidade Estadual de Campinas 
                        <br/>²Universidade de São Paulo 
                        <br/> ³Instituto Nacional de Pesquisas Espaciais 
                        <br/> ⁴Universidade Federal do Rio de Janeiro
                    </p>
                </div>
                <div className="scroll-bar-2">
                    <div className="scroll-bar-1"></div>
                </div>
            </div>
        </div>
    </div>
        
    </>
         
    )

}

export default VideoDiv;