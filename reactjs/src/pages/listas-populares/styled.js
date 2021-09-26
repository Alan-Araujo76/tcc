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

    .filmes {
        background-color: #3b3b3b;
        margin: 0px 140px;
        padding: 50px;
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
        margin-left: 10px;
    }

    img {
        width: 115px;
        height: 170px;
    }


    .filme {
        display: flex;
        flex-direction: column;
    }

    .img-fil {
        display: flex;
        flex-direction: row;
    }



    
`;

const Bloco2 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    

    .nome {
        margin-left: 10px;
        font-size: 17px;
        width: 300px;
        text-align: center;
        margin-top: 8px;
        line-height: 22px;
        font-weight: 500;
    }

    img {
        width: 115px;
        height: 170px;
    }

    .filmes {
        display: flex;
        flex-direction: column;
    }

    .img-fil {
        display: flex;
        flex-direction: row;
    }


    
`;




export { Container, Bloco1, Bloco2 }