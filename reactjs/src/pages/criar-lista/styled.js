import styled from 'styled-components';


const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #000;
    color: #fff;

    .geral {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .titulo {
        font-size: 35px;
        font-weight: bold;
        width: 1120px;
        margin-bottom: 50px;
    }

    .conteudo {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background-color: #3b3b3b;
        width: 1000px;
        padding: 30px 50px;
    }

    .nome {
        font-size: 20px;
        font-weight: 700;
    }
`;

export { Container }