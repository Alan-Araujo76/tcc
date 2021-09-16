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
        font-size: 30px;
        margin-bottom: 20px;
    }

    .bloco-p1 {
        display: flex;
        flex-direction: row;
        width: 76em;
        height: 14em;
        background-color: #3B3B3B;
        
    }

    .txt-p1 {
        width: 100px;
    }
`;

export { Container, Parte1, Parte2 }