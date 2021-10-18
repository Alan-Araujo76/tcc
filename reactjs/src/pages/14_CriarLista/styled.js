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

    .parte-1 {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 280px;
    }

    .conteudo {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background-color: #2A2A2A;
        width: 1000px;
        padding: 50px;
    }

    .nome {
        font-size: 25px;
        font-weight: 700;
    }


    .nome-d {
        font-size: 25px;
        font-weight: 700;
        margin-bottom: 5px;
    }

    .g-d {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .botao {
        text-align: end;
    }

    .inp input {
        background-color: #464646;
        border: transparent;
        border-radius: 8px;
        height: 40px;
        color: #fff;
        font-size: 16px;
        padding: 0px 5px;
        font-family: Montserrat;
        width: 100%;
        outline: none;
    }
    .inp-1 input {
        background-color: #464646;
        border: transparent;
        border-radius: 8px;
        height: 40px;
        color: #fff;
        font-size: 16px;
        padding: 0px 5px;
        font-family: Montserrat;
        width: 100%;
        outline: none;
    }
    .inp-2 input {
        background-color: #464646;
        border: transparent;
        border-radius: 8px;
        height: 40px;
        color: #fff;
        font-size: 16px;
        padding: 0px 5px;
        font-family: Montserrat;
        width: 200px;
        outline: none;
    }
    input::placeholder {
        font-size: 14px;
    }

    .g-0 {
        margin-top: -20px;
    }
    
    .g-1 > *{
        margin:.1em;
    }

    .g-1 {
        display: flex;

        background-color: #464646;
        border-radius: 8px;
        border: none;
        height: 40px;
        width: 100%;

        padding: .2em .0em .2em .2em;
    }

    .g-1 img {
        width: 40px;
        height: 40px;
        margin-top: -5px;
        margin-right: -15px;
        border-radius: 8px;
        background-color: #383838;
    }

    .g-1 button {
        border: transparent;
        background-color: transparent;
    }

    button:hover {
        cursor: pointer;
    }

    .g-1 input {
       width: 90%;
       border:none;
       background-color: #464646;
       outline: none;
       color: #fff;
       margin-right: -14px;
       font-size: 16px;
    }

    .nome button {
        background-color: transparent;
        text-align: center;
        border: 3px solid #FFB800;
        color: #fff;
        padding: 10px;
        border-radius: 15px;
        width: 90%;
        font-weight: bold;
        margin-right: 20px;
        font-family: Montserrat;
    }

    .botao button {
        background-color: transparent;
        text-align: center;
        border: 3px solid #FFB800;
        color: #fff;
        padding: 10px;
        border-radius: 8px;
        width: 33.2%;
        font-weight: bold;
        margin-top: 20px;
        font-family: Montserrat;
        border-radius: 15px;
    }

    .text {
        margin-top: 1em;
    }

    textarea {
        width: 450px;
        height: 225px;
        background-color: #464646;
        color: #fff;
        border: none;
        resize: none;
        padding: 10px;
        font-size: 16px;
        font-family: Montserrat;
        border-radius: 8px;
        outline: none;
    }
`;

export { Container }