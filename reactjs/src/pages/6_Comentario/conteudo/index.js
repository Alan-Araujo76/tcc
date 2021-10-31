import { Geral } from "./styled"
import LinhaSep from '../../../assets/img/linha-comentario.png';
import Coracao from '../../../assets/img/coracao.png';
import UsuSemFoto from '../../../assets/img/usu-semfoto.png'
import { useState } from "react";


export default function ComenC(props) {
    return(
        <Geral>
                <div className="usuario">
                    <div className="ft-perfil">
                    { props.filmes.infob_mw_usuario[0].ds_foto == null
                        ? <img src={UsuSemFoto} alt="" />

                        : <img src={props.filmes.infob_mw_usuario[0].ds_foto} alt="" />
                    }
                    </div>
                    <div className="nome">{props.filmes.infob_mw_usuario[0].nm_username}</div>
                </div>

                <div className="comentario-txt">{props.filmes.ds_mensagem}</div>

                <div className="pt3-b2">
                    <div className="tudo">
                        <div className="sobre">
                            <div className="tit-s">Sobre: </div>
                            <div className="filme-c"></div>
                        </div>
                        <div className="dif">
                            <div className="data">{props.filmes.dt_comentario}</div>
                            <div className="like"> <button><img src={Coracao} alt="" /></button> </div>
                        </div>
                    </div>
                </div>
                <div className="linha"><img src={LinhaSep} alt="" /></div>
        </Geral>
    )
}