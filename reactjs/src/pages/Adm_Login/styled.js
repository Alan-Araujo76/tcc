import styled from "styled-components";

import Fundo from '../../assets/img/fundo_adm.png'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-image: url(${Fundo});
    background-size: 100% 100%;
    align-items: center;
    justify-content: center;

    .bloco {
        display: flex;
        flex-direction: column;
        width: 40%;
        height: 50%;
        padding: 55px 0px;
        align-items: center;
        justify-content: center;
        background-color: #FF005C;
        box-shadow: 0px 4px 5px 5px #7C6E73;
        color: #fff;
        justify-content: space-between;
    }

    .p1 {
        margin-left: -40%;
    }
    .p2 {
        margin-left: -40%;
    }

    .txt {
        font-weight: 600;
        font-family: Montserrat;
        font-size: 18px;
        margin-bottom: 5px;
    }

    .bt {
        margin-top: 20px;
        text-align: end;
        margin-left: 144%;
    }
    .bt button {
        background-color: transparent;
        color: #fff;
        font-weight: 700;
        padding: 10px 40px;
        border: none;
        box-shadow: 0px 5px 5px 2px #9F1547;
        cursor: pointer;
        font-family: Montserrat;
    }

    .inp input {
        border: none;
        outline: 0;
        width: 190%;
        height: 50px;
        font-size: 20px;
        font-weight: 500;
        font-family: Montserrat;
        padding: 0px 5px;
        box-shadow: 0px 5px 5px 2px #9F1547;
    }
    
`;


export { Container }