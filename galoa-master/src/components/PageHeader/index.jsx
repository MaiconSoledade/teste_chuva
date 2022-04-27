import React from 'react';

import mundial from '../../assets/images/mundial.svg'

import './styles.css';
import { Link } from 'react-router-dom';

function PageHeader() {
    return (
        <nav className="page-header">
           <div className="top-bar-container">
               <div className="top-bar-container-text">
                    <h3>Anais do Simpósio Latino Americano de Ciências de Alimentos</h3>
                    <h2>Anais do Simpósio Latino Americano de Ciências de Alimentos</h2>
                    <h3>ISSN: 1234-5678</h3>
                </div>

                <button type="button" className="button-language" > 
                    <img src={mundial} /> PT, BR
                </button>
                <div className="top-bar-container-text-wel">
                    <span>Bem Vindo!</span>
                    <strong>maiconsoledade@hotmail.com</strong>
                </div>
                <img src="../../assets/images/foto_para_documento.jpeg" alt="Maicon Douglas"/>
                
            </div>
        </nav>
    )
}

export default PageHeader;