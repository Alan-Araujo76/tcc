import styled from 'styled-components'

const Container = styled.div`
    .conteiner-ti .carousel-ti{
            display: flex;
            overflow-x: auto;
            scroll-behavior: smooth;
        }
        .carousel-ti .carousel-item ::-webkit-scrollbar{
            display: none;
        }
        .carousel-item{
            width: 76em;
            display: flex;
            flex-direction: row;
        }
        .carousel-ti{
            width: 76em;
            display: flex;
            flex-direction: row;
        }
        .carousel-ti img{
            flex: none;
            width: 76em;
            height: 36em;
        }
        .setaEsquerda img{
            position: absolute;
            margin: 15em 1em 1em -4.5em;
            width: 86px;
            height: 86px;
            transform: rotate(180deg);
        }
        .carousel-ti button{
            background-color: transparent;
            border: none;
            cursor: pointer;
            padding-bottom: 40em;
        }
        .setaDireita img{
            position: absolute;
            margin: 15em 1em 1em -3.7em;
            width: 86px;
            height: 86px;
        }
`

export {Container}