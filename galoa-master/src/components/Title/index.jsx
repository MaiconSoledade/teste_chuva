import React from 'react'

import star from '../../assets/icons/star.svg'
import doi from '../../assets/icons/doi.svg'
import download from '../../assets/icons/download.svg'

import './styles.css'

function Title() {
    return(
        <div className="div-top">
            <div className="top-page-text">
                <p>
                    Análise sensorial de preparações funcionais desenvolvidas para escolares
                    entre 09 e 15 anos, do município de Campinas/SP
                </p>
            </div>
            <div className="right-elements">
                <div className="buttons-right-page">
                    <button type="button">
                        <img src={download} alt="Download button"/> 
                        Download
                    </button>
                    <button type="button">
                        <img src={star} alt="Start button"/>
                    </button>
                    <button type="button">
                        <img src={doi} alt="Doi button"/>
                    </button>
                </div>
                    <div className="how">
                        <span>
                        COMO CITAR ESSE TRABALHO?
                        </span>
                    </div>
            </div>
            
        </div>
    )
}

export default Title;