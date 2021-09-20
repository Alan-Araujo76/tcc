import styled from 'styled-components';


const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #000;
    color: #fff;



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
        margin-top: 5em;
    }

    button {
        border: 3px solid #FF0
    }
`;


const Bloco1 = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0px 140px 0px 200px;
    justify-content: space-between;

    .nome {
        font-size: 20px;
        width: 150px;
        text-align: center;
        margin-left: -10px;
        margin-top: 5px;
        line-height: 22px;
    }

    img {
        width: 127px;
        height: 180px;
    }
    
`;

const Bloco2 = styled.div`
    display: flex;
    flex-direction: row;
    margin: 70px 140px 0px 200px;
    justify-content: space-between;
    

    .nome {
        font-size: 20px;
        width: 150px;
        text-align: center;
        margin-left: -10px;
        margin-top: 5px;
        line-height: 22px;
    }

    img {
        width: 127px;
        height: 180px;
    }


    
`;




export { Container, Bloco1, Bloco2 }