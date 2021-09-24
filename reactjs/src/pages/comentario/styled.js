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
        padding: 1em 2em;
        width: 60em;
    }

    .excluir {
        text-align: end;
    }

    .excluir button{
        text-decoration: underline;
        background-color: transparent;
        border: transparent;
        color: red;
        cursor: pointer;
    }

    .bloco2 {
        display: flex;
        flex-direction: column;
        background-color: #3B3B3B;
        padding: 1.5em 2.5em;
        width: 60em;
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
    }


    .pt3-b2 {
        display: flex;
        flex-direction: row;
        margin-left: 50px;
        margin-top: 20px;
        justify-content: space-between;
    }

    .dif {
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
        margin: 15px 0px;
    }
`;


export { Container, PartePrin }