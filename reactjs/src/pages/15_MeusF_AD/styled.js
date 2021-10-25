import styled from 'styled-components';


const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #000;
    color: #fff;
    height: 100%;
    min-height: 100vh;


    .dif {
        display: none;
    }
    .caMwGp button {
        margin-top: 1em;
    }

    .caMwGp{
        margin-top: 0em;
    }

    .filmes {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }

    .tipos {
        display: flex;
        flex-direction: row;
        margin: 0% 0% 3% 9.5%;
    }

    .box1 {
        margin-right: -5px;
    }

    .box1 button {
        border: none;
        background-color: transparent;
    }

    .box-c {
        margin: 0px 2em;
    }

    .txt {
        font-size: 100%;
        font-weight: 500;
        margin-bottom: -13px;
        background-color: #424242;
        width: 145.49px;
        padding-bottom: 3.5px;
        text-align: center;
    }

    .txt-d {
        font-size: 100%;
        font-weight: 500;
        margin-bottom: -10px;
        text-align: center;
    }


    .img-tipos {
        width: 146px;
    }

    .img-tipos img {
        width: 100%;
    }


    .prox-pag {
        display: flex; 
        flex-direction: row;
        justify-content: center;
        margin-top: 4.5em;
    }

    button {
        border: 3px solid #FFB800;
        background-color: #424242;
        color: #fff;
        height: 43px;
        width: 44px;
        padding: 10px 15px;
        border-radius: 10px;
        cursor: pointer;
        margin: 0px 5px;
        font-size: 14px;
        font-family: Montserrat;
    }

    @media (max-width: 800px) {
        text-align: center;

        .titulo {
            margin: 70px 0px 50px 0px;
            font-size: 150%;
        }
    }
`;


const Bloco1 = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0px 140px 0px 140px;
    justify-content: space-between;
    text-align: center;

    .nome {
        font-size: 17px;
        width: 100px;
        text-align: center;
        margin-top: 8px;
        line-height: 22px;
        font-weight: 500;
        margin-left: 10px;
    }

    img {
        width: 115px;
        height: 170px;
    }

    @media (max-width: 800px) {
        margin: 0% 10%;
        .filme-d { display: none; }
    }


    @media (max-width: 450px) {
        margin: 0% 5%; 
        .titulo { font-weight: bold; }
        .nome { font-size: 12px;  width: 85px; line-height: 15px; }
        img {  width: 85px; height: 140px; }
    }
    
    
`;

const Bloco2 = styled.div`
    display: flex;
    flex-direction: row;
    margin: 60px 140px 00px 140px;
    justify-content: space-between;
    

    .nome {
        margin-left: 10px;
        font-size: 17px;
        width: 100px;
        text-align: center;
        margin-top: 8px;
        line-height: 22px;
        font-weight: 500;
    }

    img {
        width: 115px;
        height: 170px;
    }


    @media (max-width: 800px) {
        margin: 10% 10% 0%;
        .filme-d { display: none; }
    }


    @media (max-width: 450px) {
        margin: 10% 5% 0%; 
        .titulo { font-weight: bold; }
        .nome { font-size: 12px;  width: 85px;  line-height: 15px; }
        img {  width: 85px; height: 140px; }
    }

    
    
`;




export { Container, Bloco1, Bloco2 }