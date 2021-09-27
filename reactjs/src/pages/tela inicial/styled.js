import styled from "styled-components";

const Container = styled.div`
        display: flex;
        flex-direction: column;
        background-color: black;
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
        body {
        margin: 0px;
      }

      * { box-sizing: border-box; }

        .conteiner-ti{
            display: flex;
            flex-direction: column;
            background-color: black;
            align-items: center;
        }
        .titulo-ti{
            margin-top: 1em;
            color: #ffff;
            font: 60px Montserrat;
            font-weight: 600;
        }

        .subTitulo-ti{
            color: #AAAAAA;
            font: 20px Montserrat;
            margin-bottom: 2em;
            font-weight: 600;
        }

        .titulo-box-ti{
           color: #FFFFFF;
           font: 28px Montserrat;
           margin-bottom: 1.5em;
           font-weight: 600;
        }

        .box-filmes-ti{
            margin: 0px auto 0px auto;
            display: flex;
            flex-direction: column;
            background-color: rgba(196, 196, 196, 0.2);
            width: 70em;
        }
        .boxPT1-ti{
            align-self: center;
            display: flex;
            flex-direction: row;
            padding: 1em 0px 0em 0px;
        }
        .boxPT2-ti{
            align-self: center;
            display: flex;
            flex-direction: row;
            padding: 0em 0px 1em 0px;
        }
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

        .conteudo-cl-ti{
            display: flex;
            flex-direction: row;
            margin-top: 6em;
            margin-right: 2em;
        }

        .comentarios-ti{
            display: flex;
            flex-direction: column;
            margin-left:-9em;
            width: 53em;
            
        }

        .comentarios-ti hr{
            margin-right: 11em;
            width: 500px;
        }

        .box-comentario{
            display: flex;
            flex-direction: row;
            padding: 1em 8.5em 1em 10.8em;
            align-self: left;
        }
        .box-comentario img{
            margin-right: 1em;
        }

        .titulo-cl-ti{
            color: #ffff;
            font: 20px Montserrat;
            margin: 0em 8.5em 1em;
            font-weight: 900;
        }

        .nome-cl-ti{
            color: #ffff;
            font: 20px Montserrat;
            margin-bottom: 1em;
            font-weight: 900;
        }
        
        .comentarioTXT-ti{
            color: #ffff;
            font: 15px Montserrat;
            margin-bottom: 2em;
            font-weight: 600;
        }
        .sobre-coracao-ti{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }

        .sobre-ti{
            color: #ffff;
            font: 15px Montserrat;
            margin-bottom: 2em;
            font-weight: 900;
        }
        .listas-ti{
            margin-left: -2.5em;
        }
        .listas-box-ti{
            margin-top: 1em;
            background-color: rgba(196, 196, 196, 0.2);
            padding: 3em;
        }
        .titulo-l-ti{
            color: #ffff;
            font: 20px Montserrat;
            font-weight: 900;
            margin-top: .5em;
            margin-bottom: 1em;
        }
        .box-lista-ti{
            margin-bottom: 2em;
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
            margin: 1em .5em .5em .5em;
            font-weight: 600;
        }
        .nome-lista-ti img{
            margin-top: .5em;
            width: 2em;
        }
        .listas-box-ti button{
            background-color: rgba(196, 196, 196, 0.2);
            color: white;
            border:  3px solid #FFB800;  
            border-radius: 50em;
            font: 15px Montserrat;
            font-weight: 600;
            text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            padding: .5em;
        }
        .conteudo-cl-ti{
            margin-bottom: 5em;
        }
`
export { Container }