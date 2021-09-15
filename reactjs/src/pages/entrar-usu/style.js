import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #000;
    height: 100vh;
    color: #fff;
    align-items: center;
    justify-content: center;

    .barra {
        margin: 0em 5em 0em 18em;
    }
`;

const Parte1 = styled.div`
    font-family: Montserrat;
    font-size: 8em;
    font-weight: bolder;
    line-height: 1em;
    width: 300px;
    margin-left: -2em;
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
    }

    a:hover {
        text-decoration: underline;
        color: #FF005C;
    }
`;

export { Container, Parte1, Parte2 }