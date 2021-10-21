import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #000;
    color: #fff;
    height: 100%;
    min-height: 100vh;

    .titulo {
        font-size: 35px;
        font-weight: bolder;
        margin-bottom: 2em;
        margin-left: 140px;
    }
    .caMwGp button {
        margin-top: 1em;
    }

    .caMwGp{
        margin-top: 0em;
    }

    .filmes {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }

    .prox-pag {
        display: flex; 
        flex-direction: row;
        justify-content: center;
        margin-top: 4.5em;
    }

    .dif {
        display: none;
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


    .tipos {
        display: flex;
        flex-direction: row;
        margin: 0% 0% 3% 9.5%;
    }

    .box1 {
        margin-right: -5px;
    }

    .box1 button {
        border: none;
        background-color: transparent;
    }

    .txt {
        font-size: 100%;
        font-weight: 500;
        margin-bottom: -10px;
    }

    .img-tipos {
        width: 75%;
    }

    .img-tipos img {
        width: 100%;
    }

    @media (max-width: 800px) {
        text-align: center;

        .titulo {
            margin: 70px 0px 50px 0px;
            font-size: 150%;
        }
    }
`;

export { Container }