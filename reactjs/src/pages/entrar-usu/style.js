import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #000;
    height: 100vh;
    color: #fff;
    align-items: center;
    justify-content: center;

    
    @media (max-width: 800px) {
        display: flex;
        flex-direction: column;   
        align-items: center;
        justify-content: center;
        align-items: center;
        height: 100vh;
        padding: 1.5em 0em;
    }
`;

const Parte2 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-right: -9em;

    .email {
        margin-bottom: 45px;
    }

    .txt-1 {
        font-size: 18px;
        font-family: Montserrat;
    }

    input {
        width: 30em;
        height: 3em;
    }

    .leva-princ {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-end;
        margin-bottom: 80px;
    }

    .botoes {
        display: flex;
        flex-direction: row;
        margin: 20px 0px 1px 0px;
    }

    .dif {
        margin-right: 15px;
    }

    .txt {
        font-size: 18px;
        font-family: Montserrat;
        margin-bottom: 20px;
    }

  
   

    .botoes-1 {
        display: flex;
        flex-direction: row;
    }

    .botoes-1 img {
        margin-top: 1px;
        margin-right: 10px;
    }

    .bt-2 {
        margin-left: 15px;
    }

    button {
        color: #fff;
        background-color: transparent;
        border: 3px solid #FF005C;
        border-radius: 5px;
        width: 10em;
        height: 3em;
        font-family: Montserrat;
        cursor: pointer;
    }

    a:hover {
        text-decoration: underline;
        color: #FF005C;
        cursor: pointer;
    }


    @media (max-width: 800px) {
        display: flex;
        flex-direction: column;
        margin: 0px;
        
        justify-content: center;

        input {
            width: 300px;
        }

        button { 
            width: 100px;
            font-size: 10px;
            height: 35px;
        }

        .esq-senha {
            font-size: 12px;
        }

        img {
            width: 10px;
            height: 10px;
        }
    }
`;

const Botoes = styled.button`
    color: #fff;
    background-color: transparent;
    border: 3px solid #FF005C;
    border-radius: 5px;
    width: 10em;
    height: 3em;
    font-family: Montserrat;
    cursor: pointer;
`;


export { Container, Parte2, Botoes }