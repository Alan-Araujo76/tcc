import styled from "styled-components";

const Container = styled.div `
    display: flex; 
    flex-direction: row;
    background-color: #000;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const Parte2 = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: -19.8em;
    color: #fff;


    .txt {
        font-size: 35px;
        font-family: Montserrat;
        width: 580px;
        text-align: inline;
    }

    .email-inp-bt {
        margin: 80px 0px 50px 50px;
    }

    .txt1 {
        font-size: 20px;
        font-family: Montserrat;
        margin-bottom: 5px;
    }

    input {
        width: 30em;
        height: 3.5em;
    }

    .botao {
        margin-left: 20.5em;
    }

`;


export { Container, Parte2 }