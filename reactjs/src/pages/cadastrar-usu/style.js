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
    color: #fff;
    margin-right: -17.3em;


    .txt {
        font-size: 20px;
        font-family: Montserrat;
        margin-bottom: 20px;
    }

    .txt-1 {
        font-size: 15px;
        font-family: Montserrat;
        margin-bottom: 8px;
    }

    .txt-d {
        margin-bottom: 5px;
    }

    .bloco-inp {
        display: flex;
        flex-direction: row;
    }

    .geral {
        margin-left: 20px;
        margin-bottom: 20px;
    }

    .input-d input{
        width: 32em;
    }

    .bloco2 {
        margin-top: 25px;
    }

    .botao {
        margin-right: 4.8em;
        text-align: end;
    }

    input {
        width: 15em;
        height: 2.3em;
    }

`;


const Bloco1 = styled.div`
    background-color: #fff;
    padding: 30px 50px;

    .linha1 {
        display: flex;
        flex-direction: row;
        margin-bottom: 10px;
    }


    .inp1 {
        margin-right: 20px;
        margin-left: 42px;
    }

    .inp2 {
        margin-right: 25px;
        margin-left: 21px;
    }

    .inp3 {
        margin-right: 35px;
        margin-left: 22px;
    }

    .inp1 input{
        height: 28px;
        margin-right: 10px;
        margin-left: 5px;
    }

    .inp-d input {
        width: 32.4em;
    }

    .linha-d {
        display: flex;
        flex-direction: row;
        margin-right: 10px;
        margin-left: 21px;
    }

    .text textarea {
        height: 112px;
        width: 32.5em;
        margin: 0px 15px 0px 5px;
        border-radius: 5px;
        background: #FFFFFF; 
        border: 1px solid #A8A8A8;
        resize: none;
    }

    input { height: 28px; border-radius: 5px; background: #FFFFFF; border: 1px solid #A8A8A8;}
`;





export { Container, Parte2, Bloco1 }