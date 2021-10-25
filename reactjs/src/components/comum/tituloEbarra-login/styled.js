import styled from "styled-components";


const Parte1 = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: #fff;

    .txt {
        font-family: Montserrat;
        font-size: 800%;
        font-weight: bolder;
        line-height: 1em;
        margin-left: -2em;
        width: 300px;
        position: relative;
        animation-name: example;
        animation-duration: 4s;
    }

    .barra {
        margin: 0em 8em 0em 20em;
    }


    [data-animacao] {
        animation: 0.3s;
        animation-direction: reverse;
    }

    .barra1 {
        display: none;
    }

    @media (max-width: 800px) {
        display: flex;
        flex-direction: column;
        text-align: center;
        
        .txt {
            margin: 0px;
            font-size: 4em;
            text-align: center;
        }

        .barra {
            display: none;
        }

        .barra1 {
            display: flex;
            flex-direction: column;
            margin: 50px 0px;
        } .barra1 img {width: 350px;}

    


    }
`;

export { Parte1 }