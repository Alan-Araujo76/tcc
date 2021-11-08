import styled from "styled-components";


const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #000;
    color: #fff;


    .barra-t {
        text-align: center;
        width: 100%;
    }

    .barra-t img {
        text-align: center;
        width: 100%;
    }

    .titulo {
        margin: 0px 130px;
    }

    .msg-t {
        font-size: 35px;
        font-weight: bolder;
    }


    .parte2-p {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 0em 8.3em;
    }

    .parte-inputs {
        display: flex;
        flex-direction: column;
        margin-top: 3em;
    }

    .bloco-inp {
        display: flex;
        flex-direction: column;
    }

    .bloco-inpd {
        display: flex;
        flex-direction: row;
        margin: 2.5em 0em;
    }

    .txt-bi {
        margin-bottom: 10px;
    }

    .dif {
        display: flex;
        flex-direction: column;
        margin-right: 70px;
    }

    .inpd input {
        width: 450px;
    }

    .inp input {
        background-color: #3b3b3b;
        border: transparent;
        border-radius: 8px;
        width: 190px;
        height: 35px;
        color: #fff;
        font-family: Montserrat;
        padding: 0px 10px;
    }

    .inpd input {
        background-color: #3b3b3b;
        border: transparent;
        border-radius: 8px;
        width: 450px;
        height: 35px;
        color: #fff;
        font-family: Montserrat;
        padding: 0px 10px;
    }


    .txt-t {
        margin: 2.5em 0em .8em 0em;
    }

    textarea {
        border: transparent;
        border-radius: 8px;
        width: 450px;
        height: 180px;
        color: #000;
        font-family: Montserrat;
        resize: none;
    }

    .bt-p button {
        color: #fff;
        background-color: transparent;
        border: 3px solid #FFB800;
        border-radius: 15px;
        width: 10em;
        height: 3em;
        font-family: Montserrat;
        cursor: pointer;
        margin: 1.5em 0em  3em 0em;
    }

    .botao {
        text-align: end;
        margin-right: 73px;
        margin-top: 20px;
    }

    .botao button {
        color: #fff;
        background-color: transparent;
        border: 3px solid #FFB800;
        border-radius: 15px;
        width: 10em;
        height: 3em;
        font-family: Montserrat;
        cursor: pointer;

    }


    .parte-trocarf {
        display: flex;
        flex-direction: column;
        margin-top: 3em;
        text-align: center;
    }

    .img-perfil img {
        width: 200px;
        height: 200px;
    }

    .txt-b {
        text-align: start;
    }

    .ordenar select {
        background-color: transparent;   
        color: #fff;
        border: 2px solid #fff;
        padding: 5px 8px;
        border-radius: 5px;
        font-family: Montserrat;
        width: 190px;
    }

    .ordenar option {
        color: #000;
        font-family: Montserrat;
    }

    .ordenar option {
        border: transparent;   
    }

`;


export { Container }