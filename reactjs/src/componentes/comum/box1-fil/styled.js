import styled from "styled-components";

const BlocoC = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0px 140px 0px 140px;
    justify-content: space-between;
    text-align: center;

    .nome {
        font-size: 17px;
        width: 100px;
        text-align: center;
        margin-top: 8px;
        line-height: 22px;
        font-weight: 500;
        margin-left: 10px;
    }

    img {
        width: 115px;
        height: 170px;
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