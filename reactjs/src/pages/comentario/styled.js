import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #000;
    color: #fff;
`;


const PartePrin = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0px 140px;

    .titulo {
        font-size: 35px;
        font-weight: bolder;
        margin-bottom: 1em;
    }

    .bloco1 {
        display: flex;
        flex-direction: column;
        background-color: #3B3B3B;
        margin-bottom: 1.5em;
        padding: 1.5em 2em;
        width: 60em;
    }

    .txt-c {
        font-size: 18px;
        text-align: justify;
        text-justify: inter-word;
        line-height: 20px;
    }

    .excluir {
        text-align: end;
        margin-top: 10px;
    }

    .excluir button{
        text-decoration: underline;
        background-color: transparent;
        border: transparent;
        color: red;
        cursor: pointer;
        font-size: 16px;
        font-weight: 600;
    }

    .usuario {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .nome {
        font-size: 20px;
        font-weight: bold;
        margin-left: 15px;
    }

    .comentario {
        margin-left: 50px;
        text-align: justify;
        text-justify: inter-word;
        line-height: 20px;
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
        justify-content: flex-end;
        margin-left: 37.5em;
    }

    .tudo {
        display: flex;
        flex-direction: row;
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
    }

    .linha {
        align-items: center;
        text-align: center;
        margin: 0px 50px 8px 0px;
    }

    .linha img {
        width: 830px;
    }

    .bloco2 {
        display: flex;
        flex-direction: column;
        background-color: #3B3B3B;
        padding: 1.5em 2.5em;
        width: 60em;
        height: 40em;

        overflow-y: auto;
        flex-grow: 1;
    }


    .bloco2::-webkit-scrollbar-track
    {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        border-radius: 10px;
        background-color: #000;
        border: 1px solid #fff;
    }

    .bloco2::-webkit-scrollbar
    {
        width: 10px;
        background-color: #fff;
        border-radius: 10px;
    }

    .bloco2::-webkit-scrollbar-thumb
    {
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
        background-color: #fff;
    }


    @media (max-width: 400px) {
        margin: 0px;
        align-items: center;

        .titulo { font-size: 25px; font-weight: bolder; align-items: flex-start !important; }
        .bloco1 {  width: 320px; height: 130px; padding: 1em; }
        .txt-c { font-size: 12px; line-height: 15px; margin: 0px;}
        .excluir { margin: 0px; margin-top: 5px; }
        .excluir button { font-size: 12px; line-height: 15px; margin: 0px;}
        .bloco2 {  width: 320px;  height: 35em; padding: 1.3em; }
        .ft-perfil img { height: 40px; width: 30px; }
        .nome { font-size: 15px; }
        .comentario { font-size: 12px; line-height: 15px; margin-left: 40px; }
        .pt3-b2 { margin: 0px; }
        .tudo { font-size: 12px; margin: 15px 0px 0px 40px; }
        .linha { margin: -10px 0px 8px 0px; }
        .linha img { margin: 0px; width: 250px; }
        .tit-s { margin: 0px; margin-right: 3px; font-weight: bolder; }
        .dif { margin: 0px; margin-left: 5.8em;  }
        .data { font-size: 12px;}
        .like { margin: 0px; margin-top: -3px; }
        .like img {   width: 30px; height: 20px; }

    }
`;


export { Container, PartePrin }