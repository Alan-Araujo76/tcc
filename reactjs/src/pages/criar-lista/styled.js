import styled from 'styled-components';


const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #000;
    color: #fff;
    font-family: Montserrat;

    .geral {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .titulo {
        font-size: 35px;
        font-weight: bold;
        width: 1120px;
        margin-bottom: 50px;
    }

    .conteudo {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background-color: #3b3b3b;
        width: 1000px;
        padding: 50px;
    }

    .nome {
        font-size: 20px;
        font-weight: 700;
    }


    .nome-d {
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 10px;
    }

    .g-d {
        display: flex;
        flex-direction: row;
        margin-top: 50px;
        align-items: center;
    }

    .botao {
        text-align: end;
    }

    .inp input {
        background-color: #fff;
        border: transparent;
        border-radius: 8px;
        height: 35px;
        color: #fff;
    }

    .nome button {
        background-color: transparent;
        text-align: center;
        border: 3px solid #FFB800;
        color: #fff;
        padding: 10px;
        border-radius: 8px;
        width: 120px;
        font-weight: bold;
        margin-right: 20px;
    }

    .botao button {
        background-color: transparent;
        text-align: center;
        border: 3px solid #FFB800;
        color: #fff;
        padding: 10px;
        border-radius: 8px;
        width: 120px;
        font-weight: bold;
        margin-top: 20px;
    }

    textarea {
        width: 450px;
        height: 225px;
    }
`;

export { Container }