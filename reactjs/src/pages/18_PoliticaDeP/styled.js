import styled from "styled-components";

const Container = styled.div` 
    display: flex;
    flex-direction: column;
    color: #fff;
    background-color: #000;
    min-height: 100vh;
    padding-top: 8px;
    padding-bottom: 3em;

    .conteudo {
        display: flex;
        flex-direction: column;
        width: 80%;
        margin-left: 10%;
        font-family: Montserrat;
        font-size: 16px;
        font-weight: 500;
        text-align: justify;
        margin-top: -1.5em;
    }

    .p2 {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 1em 0em;
        align-items: center;
    }
    .txt {
        width: 65%;
    }
    .p2 img {
        width: 380px;
        height: 280px;
    }

    .p2-d {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 1em 0em;
        align-items: center;
    }
    .p2-d img {
        width: 362px;
        height: 330px;
    }
`;

export { Container }