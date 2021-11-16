import styled from "styled-components";

const Geral = styled.div`
    margin: 1em 1em 1em 10.7em;
    width: 32.5em;

    .usuario {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .nome {
        font-size: 18px;
        font-weight: bold;
        margin-left: 15px;
    }

    .ft-perfil img {
        height: 55px;
        width: 40px;
    }

    .comentario-txt {
        font-size: 15px;
        margin-left: 55px;
        text-align: justify;
        text-justify: inter-word;
        line-height: 18px;
        width: 32.5em;
    }

    .pt3-b2 {
        display: flex;
        flex-direction: column;
        margin-left: 55px;
        margin-top: 20px;
    }

    .dif {
        display: flex;
        flex-direction: row;
    }

    .tudo {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        font-size: 14px;
    }

    .sobre {
        display: flex;
        flex-direction: row;
        text-align: center;
    }

    .tit-s {
        font-weight: bold;
        margin-right: 10px; 
    }

    .data {
        font-weight: bold;
        margin-bottom: -15px;
    }

    .like {
        margin-left: 15px;
    }

    .like button {
        background-color: transparent;
        border: transparent;
        cursor: pointer;
    }
    .like button:hover {
        background-color: red;
    }

    .like img{
        height: 30px;
        width: 40px;
        margin-top: -5px;
    }
`;


export { Geral }