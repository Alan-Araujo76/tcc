import styled from "styled-components";


const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #000;

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



    @media (max-width: 800px) {
        margin: 0px;
        padding: 0px 30px;

        .titulo { display: none; }
        .linha-sep { display: none; }
        .foto-pessoa img { width: 50px; height: 50px; }
        .txt-usu { font-size: 10px;  margin: 0px;}
        .bt-1 button { font-size: 8px; width: 70px; height: 20px; margin: 0px; }
        .infos { margin: 0px; }
        .txt-fil { font-size: 10px; text-align: center; margin-top: 10px; width: 65px; }
        .img-fil img { height: 65px; }
        .titulo-b { margin-bottom: 10px; }
        .bloco-b { width: 25em;  height: 8em; }
        .linha-sep1 img { width: 500px; }

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
        width: 1120px;
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
        align-items: center;
    }

    .bt-1 {
        text-align: center;
        margin-left: 130px;
    }

    .bt-1 button{
        color: #fff;
        background-color: transparent;
        border: 3px solid #FFB800;
        border-radius: 15px;
        width: 11em;
        height: 3.4em;
        font-weight: bold;
        font-family: Montserrat;
        font-size: 10px;
        cursor: pointer; 
    }

    textarea {
        height: 8em;
        width: 50em;   
        resize: none;
        margin: 10px 50px;
    }

    .desc-b3 {
        margin: 25px 0px;
    }

    .estrela img {
        width: 150px;
        height: 70px;
        margin-left: 5em;
    }

    .bloco-mobile {
        display: none;
    }

    @media (max-width: 800px) {
        margin: 0px;
        display: flex;
        flex-direction: column;
        justify-content: center;

        .bloco-p1 { display: none; }
        .bloco-mobile { display: flex; flex-direction: column; width: 30em;  height: 30em; background-color: #3B3B3B;  align-items: center; margin-bottom: 70px;  }
        .divisao-mobile { display: flex; flex-direction: row; text-align: center; }
        

    }

`;

export { Container, Parte1, Parte2 }