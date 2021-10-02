import styled from "styled-components";

const BlocoC = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 50px 0px;
    

    .nome {
        margin-left: 5px;
        font-size: 17px;
        width: 300px;
        text-align: center;
        margin-top: 8px;
        line-height: 22px;
        font-weight: 500;
    }

    img {
        width: 100px;
        height: 155px;
    }

    .filmes {
        display: flex;
        flex-direction: column;
    }

    .img-fil {
        display: flex;
        flex-direction: row;
    }

    @media (min-width: 1600px) {
        img { width: 115px; height: 170px; }
    }

    @media (min-width: 2000px) {
        img { width: 135px; height: 195px; }
        .nome { font-size: 20px; margin-left: 55px; }
    }


    @media (max-width: 800px) {
        .filmes {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            padding: 0px;
            margin: 0px;
            width: 100%;
            
        }
    }
    
`;


export { BlocoC }