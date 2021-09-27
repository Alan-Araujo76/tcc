import styled from "styled-components";


const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #E5E5E4;

    .linha {margin-top: -17px; text-align: center;}

    .parte2 {
        background-color: #E5E5E4;
    }
`;

const Cabecalho = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    background-color: #000; 
    padding: 15px 110px 15px 60px;
    color: #fff;


    .usuario {
        display: flex;
        flex-direction: row;     
        align-items: center;
    }

    .img-1 img {
        width: 50px;
        height: 50px;
        border-radius: 40px;
        margin-right: 10px;
        cursor: pointer;
    }   

    .absolute {
        color: white;
        background-color: #119FDC;
        border: 3px solid white;
        border-radius: 50%;
        position: absolute;
        width: 20px;
        height: 20px;
        text-align: center;
        font-size: .7em;
        top: 8px;
        margin-left: 30px; 
    }

    button {
        background-color: #000;
        cursor: pointer;
        border: 3px solid #FF005C;
        padding: 6px;
        width: 42px;
        height: 42px;
        border-radius: 40px;
    }

    .bt {
        margin-left: 8px;
    }

`;


const Parteprincipal = styled.div`
    display: flex; 
    flex-direction: column;
    margin: 40px 50px 20px 80px;
    font-family: Montserrat;


    .barra {
        margin-top: 2px;
    }

    .titulo {
        display: flex;
        flex-direction: row;
        font-weight: bold;
        font-size: 30px;
        margin-bottom: 40px;
    }

    .texto1 {
        margin-left: 15px;
        color: #fff;
    }

    
`;

const Bloco1 = styled.div`
    background-color: #000;
    padding: 30px 50px;
    color: #fff;

    .linha1 {
        display: flex;
        flex-direction: row;
        margin-bottom: 18px;
        width: 900px;
        justify-content: space-between;
    }


    .inp1 {
        margin-right: 20px;
        margin-left: 123px;
    }

    .inp3 {
        margin-right: 35px;
        margin-left: 14px;
    }

    .inp1 input{
        height: 28px;
        margin-right: 10px;
        margin-left: 5px;
    }

    .inp-d input {
        height: 32px;
        width: 53.5em;
    }

    .inp-d1 input {
        height: 32px;
        width: 53.5em;
    }

    .inp-d  {
        margin-left: 6px;
    }

    .inp2 {
        margin-left: 30px;
    }

    .linha-d {
        display: flex;
        flex-direction: row;
        margin-right: 10px;
        margin-left: 98px;
    }

    .linha-d1 {
        display: flex;
        flex-direction: row;
        margin-left: 114px;
        margin-top: 15px;
        width: 800px;
        justify-content: space-between;
    }

    .sep {
        display: flex;
        flex-direction: row;
    }

    .text textarea {
        height: 112px;
        width: 32.5em;
        margin: 0px 15px 0px 5px;
        border-radius: 5px;
        background: #fff; 
        border: 1px solid #A8A8A8;
        resize: none;
        font-family: Montserrat;
    }

    .btn {
        margin-top: 72px;
    }

    .inpuu input {
        width: 360px;
    }

    .linha-1 {
        display: flex;
        flex-direction: row;
        margin-bottom: 18px;
        width: 900px;
    }

    

    input { height: 28px; border-radius: 5px; background: #fff; border: 1px solid #A8A8A8; font-family: Montserrat;}
`;


const Bloco2 = styled.div`
    background-color: #000;
    padding: 30px 25px 30px 50px;
    margin-top: 45px;

    td button {
        border-radius: 50%;
        background-color: #000;
        border: none;
        width: 31px;
        height: 31px;
        cursor: pointer;
    }

    .box-image {
        margin-right: 2em;
    }
    
    thead {
        background-color: #FF2875;
        width: 100px;
    }

    table {
        font-family: Montserrat;
        margin-bottom: 1em;
        border-collapse: collapse;
    }

    tbody {
        background-color: #F5F5F5;
    }

    td {
        text-align: left;
        height:  61.93px;
        color: #6D6868;
        font-weight: 600;
        padding: .1em 2em;
        font-weight: 500;
        background-color: #E5E5E4;
    }



    th {
        height: 30px;
        text-align: left;
        padding: 1em;
        color: #fff;
        font-weight: 800;
        padding: 1em 2em;
        font-weight: 500;
    } 

    .alternado td {
        background-color: #000;
    }

    .coluna-acao {
        width: .1em;
    }

    .coluna-acao > button {
       visibility: hidden;
       margin: -.1em -2em;
    }
    

    tr:hover {
        .coluna-acao > button {
            visibility: visible;
         } 
    }
`;






export { Cabecalho, Parteprincipal, Container, Bloco1, Bloco2 }