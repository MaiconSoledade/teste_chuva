import React from 'react';
import { Link } from 'react-router-dom';

import slaca from '../../assets/images/logo-slaca.svg'
import './styles.css'
function SideMenu() {
    return (
        <>
        <div className="sidenav">    
        <div className="slaca">
                SLACA 2019
        </div>
        <img src={slaca} alt=""/>
           <Link to="" className="menu-button">
              <span> Apresentação </span>
            </Link>
           <Link to="" className="menu-button">
               <span> Comitês </span>
            </Link>
           <Link to="" className="menu-button">
               <span> Autores </span> 
            </Link>
           <Link to="" className="menu-button">
               <span> Eixos temáticos </span>
            </Link>
           <Link to="" className="menu-button">
               <span> Trabalhos </span> 
            </Link>
           <Link to="" className="menu-button">
               <span> Contato </span>
            </Link>
        </div>
        </>
    )
}

export default SideMenu;