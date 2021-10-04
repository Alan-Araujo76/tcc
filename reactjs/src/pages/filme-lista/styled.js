import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #000;
    color: #fff;
    align-items: center;


.titulo {
    color: #fff;
    font-size: 35px;
    font-family: Montserrat;
    font-weight: bold;
    padding: 0em 6.8em 1em;
    width: 1680px;
}

.parte1 {
    color: #fff;
    background-color: #3B3B3B;
    padding: 1.5em;
    width: 1200px;
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
    padding: 1em;
    width: 1200px;
    margin-top: 3em;
    box-shadow: 15px -10px 1px 0px #202020;
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
    text-align: center;
    width: 110px;
    height: 200px;
}

.bloco-d {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 110px;
    height: 200px;
}

.bloco img {
    width: 110px;
    height: 155px;
}

.botao button {
    background-color: #FFB800;
    border-radius: 8em;
    border: none;
    width: 6.5em;
    height: 6.5em;
    cursor: pointer;
    padding: 3px 0px 0px 0px;
}
.botao:hover {
    transition: 0.8s;
    opacity: 0.6;
}

.desc-botao {
    font-size: 17px;
    width: 100px;
    text-align: center;
    margin-top: 15px;
    line-height: 22px;
    font-weight: 500;
}

.img-filme {
    cursor: pointer;
}

.nm-filme {
    font-size: 17px;
    width: 100px;
    text-align: center;
    margin-top: 8px;
    line-height: 22px;
    font-weight: 500;
}

.dif {
    display: none;
}

@media (max-width: 800px) {
    margin: 0px;
    display: flex;
    flex-direction: column;

    .titulo {}
    .parte1 {}
    .desc {}
    .desc-desc {}
    .parte2 {}
    .linha {}
    .bloco {}
    .botao {}
    .desc-botao {}
    .img-filme {}
    .nm-filme {}
}

`;

export { Container }