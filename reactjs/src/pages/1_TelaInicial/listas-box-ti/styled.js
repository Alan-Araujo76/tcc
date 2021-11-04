import styled from 'styled-components'

const Lista = styled.div`
    .box-lista-ti{
        margin-bottom: .5em;
    }
    .lista-filmes-ti{
        display: flex;
        flex-direction: row;
    }
    .nome-lista-ti{
        display: flex;
        flex-direction: row;
    }
    .nome-lista-ti div{
        color: #ffff;
        font: 15px Montserrat;
        margin: 1em .5em 0em .5em;
        font-weight: 600;
    }
    .nome-lista-ti img{
        margin-top: .5em;
        width: 2em;
    }

    .g {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .s {
        justify-content: flex-end;
        align-items: flex-end;
        text-align: end;
    }

    .s img {
        width: 1.5em;
        height: 1.8em;
        margin-top: 10px;
    }

    .s button {
        background-color: transparent;
        border: none;
        padding: 0px;
        margin: 0px;
    }
`


export {Lista}