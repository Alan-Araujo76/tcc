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






export { Container, Parte2 }