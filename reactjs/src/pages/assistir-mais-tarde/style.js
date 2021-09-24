import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #000;
    color: #fff;

.titulo {
    font: 16px;
    color: #fff;
    padding: 2em 4.5em;
}

.parte1 {
    font: 16px;
    color: #fff;
    background-color: #C4C4C4;
    padding: 50px;
    margin: 0px 70px;
}

.desc {}
.desc-desc {}

.parte2 {
    background-color: #C4C4C4;
    margin: 3em;
}

.linha {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 2em 4.5em;
}

.bloco {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.botao {
    background-color: #FFB800;
}

.desc-botao {
    font: 16px;
    color: #fff;
    padding-top: 15px;
}

.img-filme {}

.nm-filme {
    font: 16px;
    color: #fff;
    padding-top: 10px;
}

`;

export { Container }