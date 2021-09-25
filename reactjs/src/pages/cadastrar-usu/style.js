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
        text-align: center;
        padding: 3.5em 0em;
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
        margin-left: 2em;
    }

    .inp {
        margin-right: 20px;
    }

    .btn {
        margin-right: 4em;
        text-align: end;
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

    @media (max-width: 800px) {
        display: flex;
        flex-direction: column;
        margin: 0px;

        .bloco1 {
            display: flex;
            flex-direction: column;
        }

        .bloco2 {
            display: flex;
            flex-direction: column;
        }

        .bloco-inp {
            display: flex;
            flex-direction: column;
            margin: 0px;
        }

        .barra img{
            width: 350px;
        }

        .bloco2 {
            margin-top: 25px;
        }

        .botao {
            margin: 0px;
        }

        .input-d input{
            width: 18em;
        }

    }

`;






export { Container, Parte2 }