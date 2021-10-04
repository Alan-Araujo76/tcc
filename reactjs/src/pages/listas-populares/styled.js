import styled from 'styled-components';


const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #000;
    color: #fff;
    height: 100%;

    .dif {
        display: none;
    }



    .titulo {
        font-size: 35px;
        font-weight: bolder;
        margin-bottom: 1.2em;
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

    .filmes {
        background-color: #3b3b3b;
        margin: 0px 140px;
        padding: 40px;
        box-shadow: 15px -10px 1px 0px #202020;
    }


    @media (min-width: 1600px) {
        .filmes { padding: 60px; }
    }

    @media (min-width: 2000px) {
        .filmes { padding: 80px; }
        .titulo { font-size: 45px; }
    }
`;


const Bloco1 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    text-align: center;

    .nome {
        font-size: 17px;
        width: 300px;
        text-align: center;
        margin-top: 8px;
        line-height: 22px;
        font-weight: 500;
        margin-left: 5px;
    }

    img {
        width: 100px;
        height: 155px;
    }


    .filme {
        display: flex;
        flex-direction: column;
    }

    .img-fil {
        display: flex;
        flex-direction: row;
    }

    @media (min-width: 1600px) {
        img { width: 115px; height: 170px; } 
    }


    @media (min-width: 2000px) {
        img { width: 135px; height: 195px; }
        .nome { font-size: 20px; margin-left: 55px; }
    }
    
`;



export { Container, Bloco1 }