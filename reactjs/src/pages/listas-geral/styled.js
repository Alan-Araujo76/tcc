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
    }


    @media (min-width: 1600px) {
        .filmes { padding: 60px; }
    }

    @media (min-width: 2000px) {
        .filmes { padding: 80px; }
        .titulo { font-size: 45px; }
    }


    @media (max-width: 800px) {
        .titulo {
            text-align: center;
            margin: 0px 0px 20px 0px;
        }

        .filmes {
          width: auto;   
          max-width: 700px;
  
        }
        
        .filme {
           width: 100vh;
           margin-right: 10px;
        }

        .botao {
        }
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

    .img-fil img {
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

    .filme-b {
        margin: 2em 6.4em 0em;
    }

    .botao button {
        background-color: #FFB800;
        border-radius: 8em;
        border: none;
        width: 6.5em;
        height: 6.5em;
        cursor: pointer;
    }
    .botao:hover {
        transition: 0.8s;
        opacity: 0.6;
    }

    .desc-botao {
        font: 16px;
        color: #fff;
        padding-top: 15px;
        font-weight: bold;
    }

    @media (min-width: 1600px) {
        .img-fil img { width: 115px; height: 170px; } 
    }


    @media (min-width: 2000px) {
        .img-fil img { width: 135px; height: 195px; }
        .nome { font-size: 20px; margin-left: 55px; }
    }

    @media (max-width: 800px) {
        
    }
    
`;

const Bloco2 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 50px 0px;
    

    .nome {
        margin-left: 5px;
        font-size: 17px;
        width: 300px;
        text-align: center;
        margin-top: 8px;
        line-height: 22px;
        font-weight: 500;
    }

    img {
        width: 100px;
        height: 155px;
    }

    .filmes {
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


    @media (max-width: 800px) {
        .filmes {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            padding: 0px;
            margin: 0px;
            width: 100%;
            
        }
    }
    
`;




export { Container, Bloco1, Bloco2 }