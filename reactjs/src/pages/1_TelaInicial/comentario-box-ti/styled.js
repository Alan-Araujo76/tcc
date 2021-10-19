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
`
export {Comentario}