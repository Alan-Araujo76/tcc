import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #000;
    height: 100vh;
    color: #fff;
    align-items: center;
    justify-content: center;

    
    @media (max-width: 800px) {
        display: flex;
        flex-direction: column;   
        align-items: center;
        justify-content: center;
        align-items: center;
        height: 100vh;
        padding: 1.5em 0em;
    }
`;


const Parte2 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-right: -9em;

    .loginp {
        display: flex;
        flex-direction: row;
        color: #fff;
        background-color: transparent;
        border: 3px solid #FF005C;
        border-radius: 5px;
        width: 10em;
        height: 3em;
        font-family: Montserrat;
        padding: 0px 10px;
        cursor: pointer;
        text-align: center;
        align-items: center;
        justify-content: space-around;
    }
    .loginp:hover {
        background-color: #FF005C;
        color: #000;
        font-weight: bold;
    }

    .email {
        margin-bottom: 45px;
    }

    .txt-1 {
        font-size: 18px;
        font-family: Montserrat;
    }

    input {
        width: 30em;
        height: 3em;
        padding: 10px;
    }

    .leva-princ {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-end;
        margin-bottom: 80px;
    }

    .botoes {
        display: flex;
        flex-direction: row;
        margin: 20px 0px 1px 0px;
    }

    .dif {
        margin-right: 15px;
    }

    .txt {
        font-size: 18px;
        font-family: Montserrat;
        margin-bottom: 20px;
    }

  
   

    .botoes-1 {
        display: flex;
        flex-direction: row;
    }

    .botoes-1 img {
        margin-top: 1px;
        margin-right: 10px;
    }

    .bt-2 button {
        margin-left: 15px;
    }


    a:hover {
        text-decoration: underline;
        color: #FF005C;
    }


    [data-animacao] {
        opacity: 0;
    }
  


    @media (max-width: 800px) {
        display: flex;
        flex-direction: column;
        margin: 0px;
        
        justify-content: center;

        input {
            width: 300px;
        }

        button { 
            width: 100px;
            font-size: 10px;
            height: 35px;
        }

        .esq-senha {
            font-size: 12px;
        }

        img {
            width: 10px;
            height: 10px;
        }
    }
`;


export { Container, Parte2 }