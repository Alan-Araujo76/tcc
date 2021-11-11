import styled from 'styled-components';

const Conteiner = styled.div`
        display: flex;
        flex-wrap: wrap;
        background-color: rgba(196, 196, 196, 0.2);
        width: 55em;
        margin: 0px auto 0px auto;
        padding: 1em 1em 1em 2em;
    
        .filmes {
            display: flex;
            flex-wrap: wrap;
        }

        .filme img{
            align-self: center;
            margin: 1em 2em;
            width: 6em;
            height: 9em;
            cursor: pointer;
        }
        .botao-ti{
            position: relative;
            margin: 1.5em 0em;
            background-color:transparent;
            border: none;
        }
        .botao-ti div img{
            width: 60%;
            height: 30%;
            border-radius: 100%;
            border:  0px;  
            background-color: #FFB800;
        }
        .botao-ti img{
            margin: 0px auto 0px auto;
            padding: 0em 0em 0em .5em;
        }
        .ver-mais{
            color: white;
            font: 2em Montserrat;
            margin: .5em 1em 1em 1em;
        }
        .botao-ti:hover{
            cursor: pointer;
        }
        

        @media(max-width: 1200px){
            width: 90%;
            padding: .3em .3em .3em 10%;

            .filme-ti img{
                margin: .7em;
                width: 4em;
            }
            .filme2-ti img{
                margin: .5em;
                width: 4em;
            }
            .filme1-ti img{
                display: none;
            }
            .botao-ti div{
                padding: .5em 1em 1em 2em;
                font-size: 80%;
            }
            .botao2-ti{
                padding: 0em 0em 1em 1em;
                margin: 1em 1em 1em 1.2em;
                width: 50%;
                height: 45%;
            }
            .botao2-ti img{
                padding: .5em .3em .3em 0em;
                width: 120%;
            }
        }
`

const BlocoC = styled.div`

`;
export {Conteiner,BlocoC}