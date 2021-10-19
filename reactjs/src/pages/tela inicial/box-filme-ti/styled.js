import styled from 'styled-components';

const Conteiner = styled.div`
        display: flex;
        flex-wrap: wrap;
        background-color: rgba(196, 196, 196, 0.2);
        width: 70em;
        margin: 0px auto 0px auto;


        .filme-ti img{
            align-self: center;
            margin: 1.5em 3em;
            width: 8em;
        }
        .filme1-ti img{
            align-self: center;
            margin: 1.5em 6em 1.5em 3em;
            width: 8em;
        }
        .botao-ti div{
            padding: .5em;
            align-self: center;

            color: #FFFFFF;
            font: 24px Montserrat;
            font-weight: 600;
        }
        .botao2-ti{
            margin: 1.5em 4em 1em 0em;
            display: flex;
            flex-direction: column;
            align-self: center;

            width: 120px;
            height: 120px;
            border-radius: 100%;
            border:  0px;  
            background-color: #FFB800;
        }
        .botao2-ti img{
            align-self: center;
            padding: 2em 1.5em 2em 2em;
        }
       
        .botao-ti button:hover{
            cursor: pointer;
            transition: .5s;
            background-color: #ffb7009c;
        }
`
export {Conteiner}