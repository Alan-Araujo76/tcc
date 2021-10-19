import styled from 'styled-components';

const Conteiner = styled.div`
        display: flex;
        flex-wrap: wrap;
        background-color: rgba(196, 196, 196, 0.2);
        width: 55em;
        margin: 0px auto 0px auto;
        padding: 1em 1em 1em 2em;
    


        .filme-ti img{
            align-self: center;
            margin: 1em 2em;
            width: 6em;
        }
        .filme1-ti img{
            align-self: center;
            margin: 1em 2em;
            width: 6em;
        }
        .filme2-ti img{
            align-self: center;
            margin: 1em 2em;
            width: 6em;
        }
        .botao-ti div{
            padding: .5em 1em 1em 1.5em;
            align-self: center;

            color: #FFFFFF;
            font: 24px Montserrat;
            font-weight: 600;
        }
        .botao2-ti{
            margin: 1em 1em 1em 2.5em;
            display: flex;
            flex-direction: column;
            align-self: center;

            width: 100px;
            height: 100px;
            border-radius: 100%;
            border:  0px;  
            background-color: #FFB800;
        }
        .botao2-ti img{
            align-self: center;
            padding: 1.5em 1.5em 1em 2em;
        }
       
        .botao-ti button:hover{
            cursor: pointer;
            transition: .5s;
            background-color: #ffb7009c;
        }

        @media(max-width: 1200px){
            width: 90%;
            padding: 1em 1em 1em 12%;

            .filme-ti img{
                margin: .5em .5em;
                width: 4em;
            }
            .filme2-ti img{
                margin: .5em .5em .5em .5em;
                width: 4em;
            }
            .filme1-ti img{
                display: none;
            }
            .botao-ti div{
                padding: .5em 1em 1em 1em;
                font-size: 80%;
            }
            .botao2-ti{
                padding: 0em 0em 1em 1em;
                margin: .5em;
                width: 40%;
                height: 35%;
            }
            .botao2-ti img{
                padding: .5em .3em .3em 0em;
                width: 120%;
            }
        }
`
export {Conteiner}