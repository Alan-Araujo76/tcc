import styled from "styled-components";


const Parte1 = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: #fff;

    .txt {
        font-family: Montserrat;
        font-size: 8em;
        font-weight: bolder;
        line-height: 1em;
        margin-left: -2em;
        width: 300px;
    }

    .barra {
        margin: 0em 5em 0em 18em;
    }

    .barra1 {
        display: none;
    }

    @media (max-width: 800px) {
        display: flex;
        flex-direction: column;
        
        .txt {
            margin: 0px;
            width: 500px;
        }

        .barra {
            display: none;
        }

        .barra1 {
            display: flex;
            flex-direction: column;
            margin: 100px 0px;
        }
    }
`;

export { Parte1 }