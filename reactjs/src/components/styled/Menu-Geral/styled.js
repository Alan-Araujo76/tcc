import styled from "styled-components";

const Contaier = styled.div`
    display: flex;
    flex-direction: row;

    Menu {
        background-color: transparent;
    }

    button {
        display: flex;
        flex-direction: row;
        align-items: center;

        font-family: Montserrat;
        font-size: .9em;
        font-weight: bold;

        color: #fff;
        background-color: transparent;

        border: transparent;
    }

    .nome-usu {
        margin: 0em 0.9em 0em 0.1em;
    }

    .menu {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-right: 80px;
    }

    .foto img {
        width: 30px;
        height: 30px;
        margin-right: 8px;
    }
`;

export { Contaier }