import styled from "styled-components";

const BlocoC = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0px 140px 0px 140px;
    text-align: center;
    color: #fff;
    margin-right: -2.5%;
    width: 115px;
    margin-bottom: 3em;
    position: relative;

    .nome {
        font-size: 17px;
        width: 115px;
        text-align: center;
        margin-top: 8px;
        line-height: 22px;
        font-weight: 500;
        color: #fff;
    }


    .img img {
        width: 115px;
        height: 170px;
    }

    .img-m img {
        width: 115px;
        height: 170px;
    }
    .geral-m {
        display: flex;
        flex-direction: row;
        cursor: pointer;
        font-family: Montserrat;
    }

    .nome-m {
        font-size: 17px;
        width: 115px;
        text-align: center;
        margin-top: 8px;
        line-height: 22px;
        font-weight: 500;
        color: #000;
    }

    .sub-m {
        text-align: justify;
        width: 300px;
        color: #000;
    }

    .p2 {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .botao button {
        color: #000;
        background-color: transparent;
        border: 3px solid #FFB800;
        border-radius: 15px;
        width: 9em;
        height: 2.8em;
        font-weight: bolder;
        font-family: Montserrat;
        font-size: 13px;
        cursor: pointer; 
    }

    .sub2-m {
        text-align: justify;
        width: 300px;
        color: #000;
    }

    .botao {
        text-align: end;
    }

    .sep {
        margin: 0px 30px;
    }


    .remover {
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        position: absolute;
        top: 0px;
        right: 0px;
        visibility: hidden;
    }
    :hover {
        .remover {
            visibility: visible;
        }
    }

    .remover img {
        height: 20px;
        width: 20px;
    }




    @media (max-width: 800px) {
        margin: 0% 10%;
        .filme-d { display: none; }
    }


    @media (max-width: 450px) {
        margin: 0% 5%; 
        .titulo { font-weight: bold; }
        .nome { font-size: 12px;  width: 85px; line-height: 15px; }
        .img img {  width: 85px; height: 140px; }
    }
`;


export { BlocoC }


