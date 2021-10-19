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
        .conteiner-ti > img{
            width: 76em;
            height: 36em;
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
        .titulo-cl-ti{
            color: #ffff;
            font: 20px Montserrat;
            margin: 0em 8.5em 1em;
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
        .listas-box-ti button{
            background-color: rgba(196, 196, 196, 0.2);
            color: white;
            border:  3px solid #FFB800;  
            border-radius: 50em;
            font: 15px Montserrat;
            font-weight: 600;
            text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            padding: .5em;
            margin-top: 1em;
        }
        .conteudo-cl-ti{
            margin-bottom: 5em;
            color: #ffff;
        }
        @media(max-width: 1200px){
            .conteiner-ti{
                margin-top: 1em;
            }            

            .conteiner-ti > img{
                width: 90%;
                height: 90%;
            }
            .titulo-ti{
                font-size: 130%;
            }
    
            .subTitulo-ti{
                font-size: 90%;
            }
            
            .titulo-box-ti{
                margin-left: 5%;
                font-size: 100%;
            }
            
            .conteudo-cl-ti{
                flex-direction: column;
            }
        }
`
export { Container }