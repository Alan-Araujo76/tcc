import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    font-family: Montserrat;
    margin: 16px 9% 50px 9%;
    color: #fff;
    justify-content: space-between;
    align-items: center;
    

    .logo {
        font-family: Montserrat;
        font-size: 1.1em;
        line-height: 1em;
        width: 100px;
        font-weight: bolder;
    }
    
    .parte2 {
        display: flex;
        flex-direction: row;
        font-size: .9em;
        align-items: center;
    }

    .usuario {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-right: 80px;
    }

    .foto img {
        width: 30px;
        height: 30px;
        margin-right: 8px;
    }

    .tr { font-weight: bolder; }

    .sair {
        margin: 0px 80px;
        font-weight: bold;
    }

    .barra-pesq > *{
        margin:.1em;
    }

    .barra-pesq {
        display: flex;
        justify-content: center;
        align-items: center;

        background-color: #3b3b3b;
        border-radius: 20px;
        border: none;
        height: 2em;
        width: 13em;

        padding: .2em;
    }

    .barra-pesq img {
        width: 15px;
        height: 15px;
    }

    .barra-pesq button {
        border: transparent;
        background-color: transparent;
    }

    button:hover {
        cursor: pointer;
    }

    .barra-pesq input {
       width: 11em;
       border:none;
       background-color: #3b3b3b;
       outline: none;
       color: #fff;
    }

    .parte-celular {
        display: none;
    }

    .logo-celular {
        display: none;
    }





    @media (max-width: 800px) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin: 30px 0px 0px 0px;

        .logo { display: none; }
        .parte2 { display: none; }
        .logo-celular { display: flex; flex-direction: row; justify-content: space-between; width: 80%; }
        .barra-pesq { margin-left: 75px; margin-top: 8px;}
        .tt { width: 10px; }
        .parte-celular { display: flex; flex-direction: row; text-align: center; margin-top: 30px; justify-content: space-between; width: 60%;}
        .usuario { display: none; }
        .troco { font-size: 0.8em; font-weight: bold;width: 100px; margin: 0px 60px;}
        .sair { font-size: 0.8em; margin: 0px; width: 60px; }
        .per { font-size: 0.8em; font-weight: bold; width: 100px;}
        input { width: 9em; border:none; background-color: #D0D0D0; outline: none;}
        .barra-pesq { height: 1.5em; width: 10.5em; }
        .barra-pesq img { width: 12px; height: 12px; }
    }
`;



export { Container }