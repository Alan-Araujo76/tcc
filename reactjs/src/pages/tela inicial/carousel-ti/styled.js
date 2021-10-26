import styled from 'styled-components'

const Container = styled.div`
        .carousel-item{
            display: flex;
            overflow-x: auto;
            scroll-behavior: smooth;
            overflow-x: hidden;
        }
        
        .carousel-item{
            display: flex;
            flex-direction: row;
            margin-left: 1em;
        }
        .carousel-ti{
            width: 76em;
            display: flex;
            flex-direction: row;

        }
        .carousel-item img{
            flex: none;
            width: 99%;
            height: 36em;
            margin-right: 1em;
        }
        .setaEsquerda img{
            position: absolute;
            margin: 15em 1em 1em -4em;
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
            margin: 15em 1em 1em -1.5em;
            width: 86px;
            height: 86px;
        }
`

export {Container}