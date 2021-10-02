import styled from 'styled-components';

import CapaMaior from '../../assets/img/capa-maior.jpeg';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: rgb(0, 0, 0);
    color:white;
    font-family: Montserrat;
    position: static;

    .back {
        background-image: url(${CapaMaior});
        background-size: 100% 95%;
        background-repeat: no-repeat;
        background-position: static static;
    }

    .filme{
        font-family: Montserrat;
        height: 600px;  
        color: white;

        margin-left: 25%;
        position: relative;

        display: flex;
        flex-direction: column;

        justify-content: flex-end;
    }

    .plataformas {
        margin-top: 23px;
        width: 300px;
        font-weight: bold;
    }

    .dif-f2 {
        font-weight: 500;
        margin-bottom: 8px;
    }


    .Nome_do_filme{
        display: flex;
        flex-direction: column;
        font-size: 30px; 
        margin-left: 3.5%;
    }

    .diretor{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        width: 400px;
        margin-bottom: 3.5em;
    }


    .imagen_do_filme img{
        display: flex;
        flex-direction: row !important;
        height: 450px;
        position: relative;
        margin-top: -150px;

        
    }

    .faixa-2{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 0em 4em;
        height: 550px;
    }

    .box-2{
        display: flex;
        flex-direction: column !important;
    }

    .informacao_do_filme{
        font-family: Montserrat;
        font-size: 15px;
        width: 450px;
        margin: 10px 0px 15px;
    }

    

    .sinopse{
        font-family: Montserrat;
        background-color:#FFB800;
        margin-left: 40px;
        width: 550px;
        color: black;
        padding: 10px;

    }

    .sinopse_filme {
        font-weight: bold;
        font-size: 14px;
    }

    .nota{
        font-family: Montserrat ;
        text-align: left;
        margin-top: 2em;
        font-size: 24px;
        font-weight: bold;

    }



    .faixa-3{
        display: flex;
        flex-direction: row;
    }

    .box{
        display: flex;
        flex-direction: column !important;
        width: 350px;
    }

    .linha{
        display: flex;
        flex-direction: row;
    }

    .principais_atores{
        display: flex;
        flex-direction: row;
        background-color: #575757;
        padding: 30px;
        justify-content: space-between;
        text-align: center;
    
    }

    .sep { 
        font-size: 14px;
        font-weight: bold;
        width: 70px;
    }

    .box-3{
        background-color: #3B3B3B;
        margin-top: 50px;

    }

    .principais_atores img{
        align-items: center;
        width: 70px;
        height: 100px;
    }

    .estrela img{
        width: 145px;
        height: 80px;
        margin-right: 10px;
    }

    .parte-dif {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-left: 3em;
    }

    .disponivel{
        font-family: Montserrat;
        font-size: 20px;
        margin-left: 5px;
    }

    h5{
        margin-top: -10px;
        font-size: 30px;
        width: 500px;
    }








    .critica {
        display: flex;
        flex-direction: row;
        margin: 2em 4em;
        justify-content: space-between;
    }

    .titulo {
        font-weight: bolder;
        font-size: 20px;
    }

    .p1 { 
        display: flex;
        flex-direction: column;
        width: 650px;
    }


    .comentario-geral {
        margin-top: 15px;
    }

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

    .verm-c {
        text-align: end;
        margin-top: 30px;
    }

    .verm-c button {
        color: #fff;
        background-color: transparent;
        border: 3px solid #FFB800;
        border-radius: 15px;
        width: auto;
        height: 3.4em;
        font-weight: bold;
        padding: 2px 15px;
        font-family: Montserrat;
        font-size: 12px;
        cursor: pointer;
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
    }









    .p2 { 
        display: flex;
        flex-direction: column;
    }

    .bloco {
        height: auto;
        width: 350px;
        background-color: #3B3B3B;
        text-align: center;
        padding: 20px 0em;
        font-size: 13px;
        font-weight: 600;
    }

    .parte1-p2 {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 0px 30px;
    }

    .txt-p2 {
        font-size: 10px;
    }

    .img-p2 img {
        height: 80px;
        width: 70px;
    }

    .img-p2-d img {
        height: 50px;
        width: 60px;
    }

    .img-p2-di img {
        height: 50px;
        width: 36px;
    }


    .barra-p2 img{
        align-items: center;
        text-align: center;
        width: 350px;
    }
    .barra-p2 {
        align-items: center;
        text-align: center;
        width: 350px;
    }

    .parte2-p2 {
        display: flex;
        flex-direction: column;
        padding: 25px 0px 0px;
    }


    .parte3-p2 {
        padding: 25px 0px;
    }

    .parte4-p2 {
        padding: 25px 0px 15px;
    }




`;


export { Container }