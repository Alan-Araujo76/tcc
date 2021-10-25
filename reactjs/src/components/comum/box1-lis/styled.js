import styled from "styled-components";

const BlocoC = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    text-align: center;

    .nome {
        font-size: 17px;
        width: 300px;
        text-align: center;
        margin-top: 8px;
        line-height: 22px;
        font-weight: 500;
        margin-left: 5px;
        cursor: pointer;
    }

    .img-fil img {
        width: 100px;
        height: 155px;
        cursor: pointer;
    }


    .filme {
        display: flex;
        flex-direction: column;
    }

    


    .img-fil {
        display: flex;
        flex-direction: row;
    }

    .filme-b {
        margin: 2% 9% 0%;
    }

    .botao button {
        background-color: #FFB800;
        border-radius: 8em;
        border: none;
        width: 6.5em;
        height: 6.5em;
        cursor: pointer;
    }
    .botao:hover {
        transition: 0.8s;
        opacity: 0.6;
    }

    .desc-botao {
        font: 16px;
        color: #fff;
        padding-top: 15px;
        font-weight: bold;
    }

    @media (min-width: 1600px) {
        .img-fil img { width: 115px; height: 170px; } 
    }


    @media (min-width: 2000px) {
        .img-fil img { width: 135px; height: 195px; }
        .nome { font-size: 20px; margin-left: 55px; }
    }

    @media (max-width: 800px) {
        
    }
    
`;


export { BlocoC }