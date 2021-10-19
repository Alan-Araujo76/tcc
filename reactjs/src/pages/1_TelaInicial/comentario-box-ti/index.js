import perfilFoto from '../../../assets/img/mdm.jpg';
import coracao from '../../../assets/img/coracao.png';
import {Comentario} from './styled';

export default function ComentariosTi(){
    return(
        <Comentario>
            <div className="box-comentario">
                <img src={perfilFoto} width="35" height="53" alt="" />
                <div>
                    <div className="nome-cl-ti">  
                        Gabriel Melo 
                    </div>
                    <div className="comentarioTXT-ti">
                        Há muita coisa acontecendo para este tempo de execução e os setpieces são um pouco desanimadores em comparação com as entradas anteriores. Eles poderiam ter pelo menos, feito com que John Cena vencesse aquele grandalhão no final.
                    </div>
                    <div className="sobre-coracao-ti">
                    <div className="sobre-ti">
                        Sobre: 
                    </div>
                    <div className="coracao-ti">
                        <img src={coracao} width="43" height="33" alt="" />
                    </div>
                    </div>
                </div>
            </div>
        </Comentario>
    )
}