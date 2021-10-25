import styled from "styled-components";

const Container = styled.div`
    display: ${props => props.show === true ? 'display' : 'none'};
    height: 100vh;
    width: 100vw;
    background-color: #000;
`;

export { Container }