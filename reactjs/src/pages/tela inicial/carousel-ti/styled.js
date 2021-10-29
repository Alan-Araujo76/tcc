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
            margin-left: .8em;
        }
        .carousel-ti{
            width: 70em;
            display: flex;
            flex-direction: row;

        }
        .carousel-item img{
            flex: none;
            width: 99%;
            height: 30em;
            margin-right: .8em;
        }
        .setaEsquerda img{
            position: absolute;
            margin: 15em 1em 1em -3.5em;
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
            margin: 15em 1em 1em -3em;
            width: 86px;
            height: 86px;
        }
`

export {Container}