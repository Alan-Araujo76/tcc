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
    padding: 1em 2.5em;
}

.parte1 {
    color: #fff;
    background-color: #3B3B3B;
    padding: 1em;
    margin: 0em 5.3em;
}

.desc {
    color: #fff;
    font-size: 15px;
    font-family: Montserrat;
    font-weight: bolder;
}

desc-desc {
    color: #fff;
    font-size: 15px;
    font-family: Montserrat;
}

.parte2 {
    color: #fff;
    background-color: #3B3B3B;
    margin: 3em 5.3em 8em;
}

.linha {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 3em 4em;
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
}

.desc-botao {
    font: 16px;
    color: #fff;
    padding-top: 15px;
}


.nm-filme {
    font-size: 15px;
    font-family: Montserrat;
    color: #fff;
    padding-top: 10px;
}

.Prox {
    display: flex; 
    flex-direction: row;
    justify-content: center;
    margin-top: 4.5em;
}

`;

export { Container }