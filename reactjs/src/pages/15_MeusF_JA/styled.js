import styled from 'styled-components';


const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #000;
    color: #fff;
    height: 100%;
    min-height: 100vh;


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
    .box-c {
        margin: 0px 2em;
    }

      
    .txt {
        font-size: 100%;
        font-weight: 500;
        margin-bottom: -13px;
        background-color: #424242;
        width: 145.49px;
        padding-bottom: 3.5px;
        text-align: center;
    }

    .txt-d {
        font-size: 100%;
        font-weight: 500;
        margin-bottom: -10px;
        text-align: center;
    }


    .img-tipos {
        width: 146px;
    }

    .img-tipos img {
        width: 100%;
    }


    .prox-pag {
        display: flex; 
        flex-direction: row;
        justify-content: center;
        margin-top: 4.5em;
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