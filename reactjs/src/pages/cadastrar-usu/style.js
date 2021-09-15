import styled from "styled-components";


const Container = styled.div `
    display: flex; 
    flex-direction: row;
    background-color: #000;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const Parte2 = styled.div`
    display: flex;
    flex-direction: column;
    color: #fff;

    .bloco-inp {
        display: flex;
        flex-direction: row;
    }
`;

export { Container, Parte2 }