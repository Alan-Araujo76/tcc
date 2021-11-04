import styled from "styled-components";

const Container = styled.div `
    display: flex; 
    flex-direction: row;
    background-color: #000;
    justify-content: center;
    align-items: center;
    height: 100vh;

   
    .kPpjPc {
        color: #000;
        font-weight: 600;
    }

    input::placeholder {
        font-family: Montserrat;
    }

    .geral-m {
        margin: 10px 40px;
        color: #000;
        font-family: Montserrat;
    }

    .txt-m {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 20px;
    }
    
    .bt-m {
        margin-top: 20px;
    }

    .inp-modal {
        display: flex;
        flex-direction: column;
        margin: 10em 0em;
    }

    .r-m {
        font-size: 14px;
    }

    .inp-modal input {
        width: 100%;
        height: 40px;
        font-size: 17px;
    }

    .txt-m {
        color: #000;
    }


    @media (max-width: 800px) {
        display: flex;
        flex-direction: column;   
        align-items: center;
        height: 100vh;
        padding: 1.5em 0em;
    }
`;

const Parte2 = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: -19.8em;
    color: #fff;

    .kPpjPc {
        color: #fff;
        font-weight: 600;
    }

    .txt {
        font-size: 35px;
        font-family: Montserrat;
        width: 580px;
        text-align: inline;
    }

    .input-d {
        margin-bottom: 2em;
    }

    .email-inp-bt {
        margin: 80px 0px 50px 50px;
    }

    .txt1 {
        font-size: 20px;
        font-family: Montserrat;
        margin-bottom: 5px;
    }

    .botao {
        margin-left: 20.5em;
    }



    @media (max-width: 800px) {
        display: flex;
        flex-direction: column;  
        margin: 0em;
        align-items: center;

        .texto { align-items: center;  }
        .txt { font-size: 22px; width: 340px; text-align: justify; text-justify: inter-word;}
        .email-inp-bt { margin: 80px 0px 50px 0px;}
        input { width: 315px; }
        .botao { margin: 0px; }
    }
`;


export { Container, Parte2 }