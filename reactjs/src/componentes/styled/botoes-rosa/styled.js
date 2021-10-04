import styled from 'styled-components'

const Botao = styled.button`
    display: flex;
    flex-direction: row;
    color: #fff;
    background-color: transparent;
    border: 3px solid #FF005C;
    border-radius: 5px;
    width: 10em;
    height: 3em;
    font-family: Montserrat;
    cursor: pointer;
    text-align: center;
    align-items: center;
    justify-content: center;

    :hover {
        background-color: #FF005C;
        color: #000;
        font-weight: bold;
    }
`;


export { Botao }