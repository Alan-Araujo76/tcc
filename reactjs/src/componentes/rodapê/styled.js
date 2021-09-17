import styled from "styled-components";


const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #000;
    color: #fff;
    justify-content: center;

    .barra img {
        width: 93.2em;
    }

    .qlq-coisa {
        display: flex;
        flex-direction: row;
        padding: 2.5em 8em;
    }

    .parte1 {
        font-family: Montserrat;
        font-size: 3.5em;
        font-weight: bolder;
        line-height: 1em;
        width: 100px;
        margin-right: 5em;
        margin-top: .8em;
    }

    .parte2 {
        display: flex;
        flex-direction: row;
    }

    .titulo-g {
        font-size: 20px;
        margin-bottom: 15px;

    }

    .parte-p1 {
        display: flex;
        flex-direction: column;
    }

    .titulo-p2 {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 10px;
    }

    .subtitulo {
        font-size: 15px;
        font-weight: bold;
        margin: 15px 0px;
    }

    .e1 {
        font-size: 13px; 
    }

    .titulo-d {
        font-size: 18px;
        font-weight: bold;
        margin: 42px 0px 10px 0px;
    }


    .parte-p2 {
        margin: 0px 100px;
    }

    .img-b1 {
        display: flex;
        flex-direction: row;
    }


`;



export { Container }