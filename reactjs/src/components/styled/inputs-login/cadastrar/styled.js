import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 15px;
    margin-left: 2em;
    

    .inp {
        margin-right: 20px;
    }

    
    .txt-comp {
        font-size: 15px;
        font-family: Montserrat;
        margin-bottom: 8px;
    }

    input {
        width: 15em;
        height: 2.3em;
        padding: 8px;
        font-weight: 500;
    }
    input::placeholder {
        font-family: Montserrat;
        font-weight: 500;
        font-size: 12px;
    }

    @media (max-width: 800px) {
        input { width: auto; }
    }
`;



export { Container }