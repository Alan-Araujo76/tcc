import { Geral } from "./styled"

import UsuSemFoto from '../../../assets/img/usu-semfoto.png';
import Coracao from '../../../assets/img/coracao.png';

export default function ComenC() {
    return(
        <Geral>
            <div className="usuario">
                <div className="ft-perfil"><img src={UsuSemFoto} alt="" /></div>
                <div className="nome">Júlio Cabeçudo</div>
            </div>

            <div className="comentario-txt">Há muita coisa acontecendo para este tempo de execução e os setpieces são um pouco desanimadores em comparação com as entradas anteriores. Eles poderiam ter pelo menos, feito com que John Cena vencesse aquele grandalhão no final.</div>

            <div className="pt3-b2">
                <div className="tudo">
                    <div className="sobre">
                        <div className="tit-s">Sobre: </div>
                        <div className="filme-c"> Filme</div>
                    </div>
                    <div className="dif">
                        <div className="data">09.08.2010</div>
                        <div className="like"> <button><img src={Coracao} alt="" /></button> </div>
                    </div>
                </div>
            </div>
        </Geral>
    )
}