import styled from 'styled-components';


const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #000;
    color: #fff;



    .titulo {
        font-size: 35px;
        font-weight: bolder;
        margin-bottom: 2.5em;
        margin-left: 140px;
    }


    .prox-pag {
        display: flex; 
        flex-direction: row;
        justify-content: center;
        margin-top: 4.5em;
        margin-bottom: 15px;
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
`;


const Bloco1 = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0px 140px 0px 200px;
    justify-content: space-between;

    .nome {
        font-size: 19px;
        width: 150px;
        text-align: center;
        margin-left: -10px;
        margin-top: 8px;
        line-height: 22px;
        font-weight: 500;
    }

    img {
        width: 127px;
        height: 180px;
    }
    
`;

const Bloco2 = styled.div`
    display: flex;
    flex-direction: row;
    margin: 80px 140px 20px 200px;
    justify-content: space-between;
    

    .nome {
        font-size: 19px;
        width: 150px;
        text-align: center;
        margin-left: -10px;
        margin-top: 8px;
        line-height: 22px;
        font-weight: 500;
    }

    img {
        width: 130px;
        height: 190px;
    }


    
`;




export { Container, Bloco1, Bloco2 }