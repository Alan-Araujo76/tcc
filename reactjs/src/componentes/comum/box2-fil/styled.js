import styled from "styled-components";

const BlocoC = styled.div`
    display: flex;
    flex-direction: row;
    margin: 60px 140px 00px 140px;
    justify-content: space-between;
    

    .nome {
        font-size: 17px;
        width: 115px;
        text-align: center;
        margin-top: 8px;
        line-height: 22px;
        font-weight: 500;
    }

    img {
        width: 115px;
        height: 170px;
    }

    @media (max-width: 800px) {
        margin: 10% 10% 0%;
        .filme-d { display: none; }
    }


    @media (max-width: 450px) {
        margin: 10% 5% 0%; 
        .titulo { font-weight: bold; }
        .nome { font-size: 12px;  width: 85px;  line-height: 15px; }
        img {  width: 85px; height: 140px; }
    }
`;


export { BlocoC }