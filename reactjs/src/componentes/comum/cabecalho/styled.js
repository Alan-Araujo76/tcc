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
       margin-right: -15px;
    }

    .parte-celular {
        display: none;
    }

    .logo-celular {
        display: none;
    }

    select {
        background-color: transparent;
        border: none;
        color: #fff;
    }





    @media (max-width: 800px) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin: 30px 0px 0px 0px;

        .logo { display: none; }
        .parte2 { display: none; }
        .logo-celular { display: flex; flex-direction: row; justify-content: space-between; align-items: center; width: 80%; }
        .barra-pesq { margin-top: 8px;}
        .tt { width: 10px; font-weight: bold;}
        .parte-celular { display: flex; flex-direction: row; text-align: center; margin-top: 30px; justify-content: space-between; width: 60%;}
        .usuario-m { display: flex; flex-direction: row; align-items: center; }
        .nome-usu { font-size: 12px }
        .troco { font-size: 0.8em; font-weight: bold; min-width: auto; margin: 0px 60px;}
        .sair { font-size: 0.8em; margin: 0px; width: auto; }
        .per { font-size: 0.8em; font-weight: bold; min-width: auto;}
        .barra-pesq input { width: 6.5em; border:none; background-color: #3b3b3b; outline: none;  }
        .barra-pesq { height: 1.5em; width: 6.5em; margin-left: -50px; margin-bottom: 10px; }
        .barra-pesq img { width: 10px; height: 10px; }

        @media (max-width: 500px) {
            .parte-celular { width: 80%;}
            .troco { font-size: 0.8em; width: 100%; }
            .sair { font-size: 0.8em; width: 80%; }
            .per { font-size: 0.8em; width: 100%; }
        }

        @media (max-width: 450px) {
            .tt { font-size: 13px; }
            .nome-usu { font-size: 10px; }
            .foto img { width: 23px; height: 23px; }
            .parte-celular { width: 80%;}
            .troco { font-size: 0.7em; width: 100%; }
            .sair { font-size: 0.7em; width: 20%; }
            .per { font-size: 0.7em; width: 80%; }
            .barra-pesq input { width: 5.5em; border:none; background-color: #3b3b3b; outline: none;  }
            .barra-pesq { height: 1.5em; width: 5.5em; margin-left: -50px; }
            .barra-pesq img { width: 10px; height: 10px; }
        }
            
    }
`;



export { Container }