import styled from 'styled-components';

import QuestionDiv from '../QuestionDiv';

export const ViewQuestion = styled(QuestionDiv)`
   padding: 2rem;
    margin-top: 0;
    margin: 0rem 1.3rem;
    border: 0.1rem solid var(--color-primary-lighter);
    border-radius: 0.4rem;
    box-sizing: border-box;
    box-shadow: 0rem 0rem 0.7rem var(--color-shadow);
    display: flex;
    flex-direction: column;
    background-color: ${props => props.background};
`


export const DivQuestion = styled.div `
   padding-bottom: 1rem;
`
