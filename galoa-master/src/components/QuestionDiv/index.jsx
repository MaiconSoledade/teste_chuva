import React from 'react';
import iconSvg from '../../assets/icons/icon.svg';

import './styles.css'

function QuestionDiv({ title, name, children, who, icon, background, ...rest }) {
   
    return (
        <div className={background ? 'background' : 'question-div'} {...rest}>
            <span className="question-title">
                {title}
            </span>
            <div className="name-who">
                <div className="question-name">
                    {name}
                </div>
                <div className="question-who">
                    {who}
                </div>
                {
                    icon &&
                    <img src={iconSvg} alt="Icone"/> 
                }
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}

export default QuestionDiv;