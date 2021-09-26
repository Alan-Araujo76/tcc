import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #000;
    color: #fff;

.titulo {
    color: #fff;
    font-size: 35px;
    font-family: Montserrat;
    padding: 0em 6.8em 1em;
}

.parte1 {
    color: #fff;
    background-color: #3B3B3B;
    padding: 1.5em;
    margin: 0em 15em;
}

.desc {
    color: #fff;
    font-size: 15px;
    font-family: Montserrat;
    font-weight: bolder;
}

.desc-desc {
    color: #fff;
    font-size: 15px;
    font-family: Montserrat;
    padding-top: 7px;
}

.parte2 {
    color: #fff;
    background-color: #3B3B3B;
    margin: 3em 15em 8em;
    padding-bottom: 4em;
}

.linha {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 3em 4em 0em;
}

.bloco {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.botao button {
    background-color: #FFB800;
    border-radius: 8em;
    border: none;
    width: 6.5em;
    height: 6.5em;
    cursor: pointer;
}
.botao:hover {
    transition: 0.8s;
    opacity: 0.6;
}

.desc-botao {
    font: 16px;
    color: #fff;
    padding-top: 15px;
}

.img-filme {
    cursor: pointer;
}

.nm-filme {
    font-size: 15px;
    font-family: Montserrat;
    color: #fff;
    padding-top: 10px;
    cursor: pointer;
}
.nm-filme:hover {
    color: #fff;
    text-decoration: underline;
}

`;

export { Container }