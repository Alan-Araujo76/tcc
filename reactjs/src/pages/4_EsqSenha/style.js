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

    .geral-m {
        margin: 10px;
        color: #000;
        font-family: Montserrat;
    }

    .inp-modal {
        display: flex;
        flex-direction: column;
        margin: 2em 0em;
    }

    input {
        width: 80%;
        height: 40px;
    }

    .txt-m {
        color: #000;
    }

    .txt {
        font-size: 35px;
        font-family: Montserrat;
        width: 580px;
        text-align: inline;
    }

    .email-inp-bt {
        margin: 80px 0px 50px 50px;
    }

    .txt1 {
        font-size: 20px;
        font-family: Montserrat;
        margin-bottom: 5px;
    }

    .input input {
        width: 30em;
        height: 3.5em;
        padding: 10px;
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