import styled from "styled-components";


const Container = styled.div` 
    display: flex;
    flex-direction: column;
    color: #fff;
    background-color: #000;
    min-height: 100vh;
    padding-top: 8px;

    .conteudo {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-top: -4%;
    }

    .titulo {
        font-family: Montserrat;
        font-weight: bolder;
        font-size: 500%;
    }

    .subtitulo {
        color: #AAA;
        font-family: Montserrat;
        font-size: 190%;
        margin: 0% 0% 10% 0%;
    }

    .descricao {
        width: 700px;
        font-size: 120%;
        text-align: justify;
        font-family: Montserrat;
    }
`;

export { Container }