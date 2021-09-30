import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #000;
    color: #fff;
    height: 100%;



    .titulo {
        font-size: 35px;
        font-weight: bolder;
        margin-bottom: 2em;
        margin-left: 140px;
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
        width: 115px;
        text-align: center;
        margin-top: 8px;
        line-height: 22px;
        font-weight: 500;
    }

    .img img {
        width: 115px;
        height: 170px;
        position: relative;
    }

    .img-h {
        display: none;
    }

    @media (max-width: 800px) {
        margin: 0% 10%;
        .filme-d { display: none; }
    }


    @media (max-width: 450px) {
        margin: 0% 5%; 
        .titulo { font-weight: bold; }
        .nome { font-size: 12px;  width: 85px; line-height: 15px; }
        .img img {  width: 85px; height: 140px; }
    }


    
`;

const Bloco2 = styled.div`
    display: flex;
    flex-direction: row;
    margin: 60px 140px 00px 140px;
    justify-content: space-between;
    

    .nome {
        font-size: 17px;
        width: 115px;
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