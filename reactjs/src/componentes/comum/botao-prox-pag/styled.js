import styled from "styled-components";


const Geral = styled.div`
    display: flex; 
    flex-direction: row;
    justify-content: center;
    margin-top: 3.5em;
`;

const Botao1 = styled.button`
    border: 3px solid #FFB800;
    background-color: #424242;
    color: #fff;
    height: 43px;
    width: 44px;
    padding: 10px 15px;
    border-radius: 10px;
    cursor: pointer;
    margin: 0px 5px;
    font-size: 14px;
    font-family: Montserrat;
`;

export { Geral, Botao1 }