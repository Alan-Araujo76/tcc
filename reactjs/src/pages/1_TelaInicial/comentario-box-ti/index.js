import coracao from '../../../assets/img/coracao.png';
import {Geral} from './styled';
import LinhaSep from '../../../assets/img/linha-comentario.png';

import { useEffect, useState} from 'react';

import Api from '../../../service/api';
const api = new Api();

export default function ComentariosTi(){
    const [comentario, setComentario] = useState([]);

    async function Listar(){
        let r = await api.ListarComentario()
        setComentario(r)
    }

    useEffect(() =>{
        Listar()
    },[])

    return(
        
        <Geral>
            {comentario.map(item =>
                <div>
                    <div className="usuario">
                        <div className="ft-perfil">
                            <img src="" alt="" />
                        </div>
                        <div className="nome">{item.id_usuario_infob_mw_usuario.nm_username}</div>
                    </div>

                    <div className="comentario-txt">{item.ds_mensagem}</div>

                    <div className="pt3-b2">
                        <div className="tudo">
                            <div className="sobre">
                                <div className="tit-s">Sobre: </div>
                                <div className="filme-c">{item.id_filme_infob_mw_filme.nm_filme}</div>
                            </div>
                            <div className="dif">
                                <div className="data">{item.dt_comentario}</div>
                                <div className="like"> <button><img src={coracao} alt="" /></button> </div>
                            </div>
                        </div>
                    </div>
                    <div className="linha"><img src={LinhaSep} alt=""  /></div>  
                </div>
            )}
        </Geral>
    )
}