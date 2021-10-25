import { Geral } from "./styled"

import LinhaSep from '../../../assets/img/linha-comentario.png';
import UsuSemFoto from '../../../assets/img/usu-semfoto.png';
import Coracao from '../../../assets/img/coracao.png';


export default function ComenC(props) {
    return(
        <Geral>
                <div className="usuario">
                    <div className="ft-perfil"><img src={UsuSemFoto} alt="" /></div>
                    <div className="nome">{props.filmes.id_usuario}</div>
                </div>

                <div className="comentario-txt">{props.filmes.mensagem}</div>

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
                <div className="linha"><img src={LinhaSep} alt="" /></div>
        </Geral>
    )
}