import React from 'react';

import footer from '../../assets/images/footer.svg'
import './styles.css';

function Footer() {
    return(
        <div className="footer-div">
            <img src={footer} alt="Rodapé"/>
        </div>
    )
}

export default Footer;