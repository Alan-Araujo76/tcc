import styled from "styled-components";

const Geral = styled.div`
    margin-top: 15px;

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

    .comentario-txt {
        font-size: 15px;
        margin-left: 50px;
        text-align: justify;
        text-justify: inter-word;
        line-height: 18px;
    }

    .pt3-b2 {
        display: flex;
        flex-direction: column;
        margin-left: 50px;
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

    .like img{
        height: 30px;
        width: 40px;
        margin-top: -5px;
    }
`;


export { Geral }