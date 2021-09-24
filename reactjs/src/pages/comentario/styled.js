import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #000;
    color: #fff;
`;


const PartePrin = styled.div`
    display: flex;
    flex-direction: column;

    .titulo {}

    .bloco1 {
        display: flex;
        flex-direction: column;
        background-color: #3B3B3B;
    }

    .bloco2 {
        display: flex;
        flex-direction: column;
        background-color: #3B3B3B;
    }
`;


export { Container, PartePrin }