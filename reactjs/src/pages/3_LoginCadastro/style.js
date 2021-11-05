import styled from "styled-components";


const Container = styled.div `
    display: flex; 
    flex-direction: row;
    background-color: #000;
    justify-content: center;
    align-items: center;
    height: 100vh;

    
    @media (max-width: 800px) {
        display: flex;
        flex-direction: column;  
        padding: 1.5em 0em;
        height: 100%;
        align-items: center;
    }
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

    .inputsss {
        display: flex;
        flex-direction: column;
    }

    .inputsss-d {
        display: flex;
        flex-direction: row;
    }

    .barra {
        width: 533px;
    }

    .barra img{
        width: 450px;
    }


    .sep {
        display: flex;
        flex-direction: row;
    }

    .sep-d {
        display: flex;
        flex-direction: row;
        margin: 15px 0px;
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
        margin-bottom: 15px;
    }

    .inp {
        margin-right: 20px;
    }

    .btn {
        display: flex;
        flex-direction: row;
        margin-right: 21%;
        justify-content: flex-end;
        margin-top: 3%;
    }

    .geral {
        margin-left: 20px;
        margin-bottom: 20px;
    }

    .input-d input{
        width: 31.5em;
        padding: 10px;
    }

    .inp {
        margin-right: 20px;
    }

    
    .txt-comp {
        font-size: 15px;
        font-family: Montserrat;
        margin-bottom: 8px;
    }

    input {
        width: 15em;
        height: 2.3em;
        padding: 8px;
        font-weight: 500;
    }
    input::placeholder {
        font-family: Montserrat;
        font-weight: 500;
        font-size: 12px;
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
        padding: 8px;
        font-weight: 500;
    }

    input::placeholder {
        font-family: Montserrat;
        font-weight: 500;
        font-size: 12px;
    }

    @media (max-width: 800px) {
        display: flex;
        flex-direction: column;
        margin: 0px;
        align-items: center;

        .bloco1 { display: flex; flex-direction: column; }
        .bloco2 { display: flex; flex-direction: column; }
        .bloco-inp { display: flex; flex-direction: column; margin: 0px; }
        .barra img{ width: 350px; }
        .bloco2 { margin-top: 25px; }
        .botao { margin: 0px; }
        .barra { width: 90%; margin: 20px 0px; }
        .barra img { width: 100%; }
        .inp { margin-top: 20px; }
        input { width: 250px; }
        .input-d input{ width: 250px; }
        .btn { margin-top: 35px; }
    }

`;






export { Container, Parte2 }