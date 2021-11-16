import perfilFoto from '../../../assets/img/mdm.jpg';
import coracao from '../../../assets/img/coracao.png';
import {Geral} from './styled';
import LinhaSep from '../../../assets/img/linha-comentario.png';

import { useEffect, useState} from 'react';

import Api from '../../../service/api';
const api = new Api();

export default function ComentariosTi(){
    const [comentario, setComentario] = useState([]);

    async function Listar(){
        let r = await api.ListarC()
        setComentario(r)
    }

    useEffect(() =>{
        Listar()
    },[])

    return(
        
        <Geral>  
            <div>
                <div className="usuario">
                    <div className="ft-perfil">
                        <img src={perfilFoto} alt="" />
                    </div>
                    <div className="nome">larisso</div>
                </div>

                <div className="comentario-txt">sdfsdfsfsfgdfgdddddddddddddddddddddddddddddddddddddddddddddd</div>

                <div className="pt3-b2">
                    <div className="tudo">
                        <div className="sobre">
                            <div className="tit-s">Sobre: </div>
                            <div className="filme-c"></div>
                        </div>
                        <div className="dif">
                            <div className="data">sdfgsdfgsdfsdfg</div>
                            <div className="like"> <button><img src={coracao} alt="" /></button> </div>
                        </div>
                    </div>
                </div>
                <div className="linha"><img src={LinhaSep} alt=""  /></div>  
            </div>
        </Geral>
    )
}