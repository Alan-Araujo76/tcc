import styled from "styled-components";


const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #000;
    height: 300vh;

    .linha-sep {
        text-align: center;
    }
`;


const Parte1 = styled.div`
    display: flex;
    flex-direction: column;
    color: #fff;
    font-family: Montserrat;
    margin: 0px 140px;


    .titulo {
        display: flex;
        flex-direction: row;
        margin-top: 50px;
    }

    .txt-t {
        font-size: 40px;
        font-weight: bolder;
    }

    .descricao-t {
        display: flex;
        flex-direction: row;
        align-items: end;
        margin-left: 70px;
    }

    .descricao-t img {
        width: 25px;
        height: 25px;
    }

    .txt-d {
        font-size: 10px;
        margin: 0px 0px 13px 5px;
    }

    .infos {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 50px;
    }

    .info-usu {
        display: flex;
        flex-direction: row;
    }

    .foto-pessoa img {
        width: 85px;
        height: 85px;
    }

    .nm-bt {
        font-size: 20px;
        font-weight: bolder;
        margin: 15px;
    }

    .txt-usu {
        margin-bottom: 4px;
    }

    .bt-1 button {
        color: #fff;
        background-color: transparent;
        border: 3px solid #FFB800;
        border-radius: 15px;
        width: 9em;
        height: 2.8em;
        font-weight: bold;
        font-family: Montserrat;
        font-size: 10px;
        cursor: pointer; 
    }



    .info-fil {
        display: flex;
        flex-direction: row;
        font-size: 13px;
    }

    .txt-fil {
        text-align: center;
        margin-top: 10px;
        width: 90px;
    }

    .img-fil img {
        height: 80px;
    }

    .qtd-fil {
        margin-bottom: 8px;
    }








    .bio {
        display: flex;
        flex-direction: column;
        margin-top: 60px;
    }

    .titulo-b {
        font-weight: bold;
        font-size: 20px;
    }

    .bloco-b {
        width: 50em;
        height: 10em;
        background-color: #3B3B3B;
    }




    .linha-sep1 {
        text-align: center;
        margin: 60px 0px;
    }

`;




const Parte2 = styled.div`
    display: flex;
    flex-direction: column;
    color: #fff;
    font-family: Montserrat;
    margin: 10px 140px;

    .titulo-p1 {
        font-weight: bold;
        font-size: 24px;
        margin-bottom: 20px;
    }

    .bloco-p1 {
        display: flex;
        flex-direction: row;
        width: 70em;
        height: 11em;
        background-color: #3B3B3B;
        justify-content: space-around;
        align-items: center; 
        text-align: center;
        margin-bottom: 70px;
    }

    .capa-p1 img {
        height: 110px;
        width: 70px;
    }

    .txt-p1 {
        width: 100px;
        text-align: center;
        margin-top: 8px;
        font-weight: bold;
        font-size: 12px;
    }

    .bloco-p2 {
        display: flex;
        flex-direction: row;
        width: 68em;
        height: 11em;
        background-color: #3B3B3B;
        justify-content: space-around;
        align-items: center; 
        text-align: center;
        margin-bottom: 70px;
        padding: 0px 16px;
    }

    .pt1-b2 {
        display: flex;
        flex-direction: row;
    }

    .img-b2 img {
        height: 135px;
        width: 88px;
    }


    .ver-mais {
        font-weight: bold;
    }

    .txt-b2 {
        margin-top: 8px;
    }

    .but-b2 button {
        background-color: #FFB800;
        border:transparent;
        border-radius: 15px;
        cursor: pointer; 
        border-radius: 100px;
        padding: 10px 8px;
    }

    .but-b2 img {
        margin-left: 5px;
        height: 50px;
        width: 50px;   
    }

    .lista-b1 {
        display: flex;
        flex-direction: row;
    }

    .avaliacao-b3 {
        display: flex; 
        flex-direction: column;
    }

    .inp-bt {
        display: flex;
        flex-direction: row;
    }

    .bt-1 button{
        color: #fff;
        background-color: transparent;
        border: 3px solid #FFB800;
        border-radius: 15px;
        width: 9em;
        height: 2.8em;
        font-weight: bold;
        font-family: Montserrat;
        font-size: 10px;
        cursor: pointer; 
    }

    textarea {
        height: 8em;
        width: 50em;   
        resize: none;
    }



`;

export { Container, Parte1, Parte2 }