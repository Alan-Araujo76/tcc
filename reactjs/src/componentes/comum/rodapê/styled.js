import styled from "styled-components";


const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #000;
    color: #fff;
    align-items: center;

    .barra img {
        width: 100%;
        margin-top: 3em;
    }

    .barra {
        width: 100%;
    }

    .qlq-coisa {
        display: flex;
        flex-direction: row;
        padding: 2.3em 8em;
    }

    .parte1 {
        font-family: Montserrat;
        font-size: 3em;
        font-weight: bolder;
        line-height: 1em;
        width: 100px;
        margin-right: 5em;
        margin-top: .8em;
    }

    .parte2 {
        display: flex;
        flex-direction: row;
    }

    .titulo-g {
        font-size: 20px;
        margin-bottom: 30px;
    }

    .parte-p1 {
        display: flex;
        flex-direction: column;
    }

    .titulo-p2 {
        font-size: 14px;
        font-weight: bold;
        margin-bottom: 10px;
    }

    .subtitulo {
        font-size: 12px;
        font-weight: bold;
        margin: 15px 0px;
    }

    .e1 {
        font-size: 10px; 
    }

    .titulo-d {
        font-size: 14px;
        font-weight: bold;
        margin: 57px 0px 10px 0px;
    }


    .parte-p2 {
        margin: 0px 100px;
    }

    .img-b1 {
        display: flex;
        flex-direction: row;
        margin-left: 18px;
    }

    .redes-s {
        margin-top: 18px;
    }

    .redes-s1 {
        margin: 0px 18px;
    }

    .redes-s2 {
        margin-top: 12px;
    }

    .titulo-p2d {
        font-size: 14px;
        font-weight: bold;
        margin-top: 50px;   
    }

    .titulo-p2di {
        font-size: 14px;
        font-weight: bold; 
    }

    .mobile {
        display: none;
    }




    @media (max-width: 800px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    

        .qlq-coisa { display: none; }

        .mobile { display: flex; flex-direction: column; padding: 40px 0px;}
        .parte1 {  margin: 0px; display: flex; flex-direction: row; justify-content: space-between; width: auto;}
        .tit { margin: 0px; font-size: 23px; line-height: 20px; width: 85px;}
        .redes { display: flex; flex-direction: column; margin: -15px 0px 0px 0px; }
        .titulo-d { margin: 0px; font-size: 10px; }
        .titulo-p2d { margin: 0px; font-size: 8px; line-height: 15px;width: 150px; margin-top: 15px; }
        .titulo-p2di { font-size: 8px; line-height: 15px;width: 150px; margin:-3px 0px; }
        .redes-s { margin-top: -8px; } 
        .redes-s img { width: 13px;  height: 13px; } 
        .redes-s1 { margin: 0px 5px; }
        .redes-s1 img { width: 28px;  height: 28px; }
        .redes-s2 { margin-top: -5px; } 
        .redes-s2 img { width: 18px;  height: 18px;  } 
        .img-b1 { margin-top: -30px; }
        .subtitulos { margin: 0px; width: 100px; }

        .parte2 { display: flex; flex-direction: column; margin: 35px 0px 0px 20px; align-items: center; }
        .titulo-p2 { font-size: 13px; font-weight: 300;  margin-left: -12em}
        .subtitulo { font-size: 11px; margin: 0px; margin: 0px 0px 10px -11em;  }
        .sub-subtitulo { font-size: 9px; font-weight: bolder; margin-bottom: 5px; }
        .b-p2 { margin-left: 10px }
        .email { font-size: 8px; }
        .conteudo { display: flex; flex-direction: row;  }
        .sla { display: flex; flex-direction: column; margin-left: 60px; }

        @media (min-width: 500px) {
            .parte1 {  width: 450px;}
            .titulo-p2 { margin-left: -15em; }
            .subtitulo { margin-left: -15em;  }
        }
    }

    
`;



export { Container }