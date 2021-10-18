import styled from "styled-components";

const Container = styled.div` 
    display: flex;
    flex-direction: column;
    background-color: #000;
    color: #fff;
    min-height: 100vh;

    .bloco {
        display: flex;
        flex-direction: row;
        justify-content: center;
        height: 100%;
    }

    .titulo {
        font-size: 2em;
        font-weight: bold;
        margin-bottom: 1em;
    }.titulo1 {
        font-size: 2em;
        font-weight: bold;
        text-align: center;
        margin-bottom: 1em;
    }

    .p1 {
        display: flex;
        flex-direction: column;
        background-color: #3B3B3B;
        width: 45%;
        align-items: center;
        padding: 4em 0em;
    }
    .inp1 input {
        width: 400px;
        height: 40px;
        border-radius: 3px;
        padding: 0px 10px;
        font-family: Montserrat;
    }
    .inp1 input {
        width: 400px;
        height: 40px;
        border-radius: 3px;
        font-family: Montserrat;
    }
    .inps {
        display: flex;
        flex-direction: row;
        margin: 2em 0em;
        width: 400px;
        justify-content: space-between;
    }
    .inps input {
        width: 180px;
        height: 40px;
        border-radius: 3px;
        padding: 0px 10px;
        font-family: Montserrat;
    }
    .text textarea {
        width: 400px;
        height: 130px;
        border-radius: 3px;
        margin-bottom: 1em;
        padding: 5px 10px;
        font-family: Montserrat;
    }

    .btn {
        margin-left: 40%;
    }
    .btn button {
        display: flex;
        flex-direction: row;
        color: #fff;
        background-color: transparent;
        border: 3px solid #FF005C;
        border-radius: 5px;
        width: 10em;
        height: 3em;
        font-family: Montserrat;
        cursor: pointer;
        align-items: center;
        justify-content: center;
    }
    button:hover {
        background-color: #FF005C;
        color: #fff;
        font-weight: bold;
    }
    


    .p2 {
        display: flex;
        flex-direction: column;
        background-color: #FF005C;
        width: 30%;
        padding: 4em 4em;
    }

    .g {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 310px;
    }

    .box {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .box img {
        width: 32px;
        height: 32px;
        margin-right: 10px;
    }

    
`;

export { Container }