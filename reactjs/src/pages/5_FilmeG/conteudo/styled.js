import styled from "styled-components";

import CapaMaior from '../../../assets/img/exp-filme.jpg';

const Container = styled.div`
    .back {
        background-image: url(${CapaMaior});
        background-size: 100% 95%;
        background-repeat: no-repeat;
        background-position: absolute;
    }
    .back {
        opacity: 0.5;
    }

    .cabecalho  {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        position: relative;
    }

    .fundo img {
        width: 100%;
        height: 100vh;
        position: absolute;  
        opacity: 0.5;
        top: 0px;
    }

    .iPzoRb {
        padding-top: 20px;
        margin-top: -.3em;
    }

    .filme{ 
        display: flex;
        flex-direction: column;
        font-family: Montserrat;
        width: 420px;
        color: white;
        position: relative;
        bottom: -1em;
    }

    .plataformas {
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
        margin-bottom: .3em;
    }

    .diretor{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        text-align: center;
        width: 420px;
        margin-bottom: 3.5em;
    }


    .imagen_do_filme img{
        height: 320px;
        position: relative;
    }

    @media (max-width: 800px) {
 

       .back { background-size: 100% 35%; }
       .filme { margin: 0px; height: 100px;  }
       .imagen_do_filme img { width: 100px; height: 155px; }
    }

    .faixa-2{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: .5em 4em 1em;
        height: auto;
    }

    .box-2{
        display: flex;
        flex-direction: column !important;
    }

    .informacao_do_filme{
        font-family: Montserrat;
        font-size: 15px;
        width: 450px;
        margin: 2em 0em 1em;
        text-align: justify;
    }

    

    .sinopse{
        font-family: Montserrat;
        background-color:#FFB800;
        width: 430px;
        color: black;
        padding: 10px;
        text-align: justify;
        margin-left: 0em;
    }

    .sinopse_filme {
        font-weight: bold;
        font-size: 15px;
    }

    .nota{
        font-family: Montserrat ;
        text-align: left;
        margin-top: 2em;
        font-size: 16px;
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
        width: 165px;
        height: 80px;
        margin-right: 10px;
        margin-top: -1em;
    }

    .nota-final {
        margin-top: -1em;
        font-size: 20px;
    }

    .parte-dif {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-left: 0em;
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

    @media (max-width: 800px) {
        .back { background-size: 100% 35%; }
        .filme { margin: 0px; height: 100px;  }
        .imagen_do_filme img { width: 100px; height: 155px; }
    }
`;


export { Container }