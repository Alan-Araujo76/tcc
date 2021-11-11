import styled from 'styled-components';

const Comentario = styled.div`
    .box-comentario{
        display: flex;
        flex-direction: row;
        padding: 1em 8.5em 1em 10.8em;
        align-self: left;
    }
    .box-comentario img{
        margin-right: 1em;
        width: 5em;
        height: 4em;
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
    .coracao-ti{
        color: white;
        display: flex;
        flex-direction: row;
    }
    .coracao-ti img{
        width: 4em;
        height: 3em;
    }
    @media(max-width: 1200px){
        .box-comentario{
            padding: 1% 20% 1% 20%;
        }
        .box-comentario img{
            width: 10%;
            height: 8%;
        }
        .nome-cl-ti{
            font-size: 70%;
        }
        .comentarioTXT-ti{
            font-size: 40%;
        }
        .sobre-ti{
            font-size: 50%;
        }
        .coracao-ti img{
            width: 45%;
            height: 60%;
        }
    }
`
export {Comentario}