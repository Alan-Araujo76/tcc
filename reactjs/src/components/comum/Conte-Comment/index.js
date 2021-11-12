import { Geral } from "./styled"
import LinhaSep from '../../../assets/img/linha-comentario.png';
import Coracao from '../../../assets/img/coracao.png';
import UsuSemFoto from '../../../assets/img/usu-semfoto.png'

import { useEffect, useState } from "react";

import Api from '../../../service/api';
const api = new Api();

export default function ComenC() {
    const [filme, setFilme] = useState([]);

    async function ListarU() {
        let r = await api.ListarC();
        console.log(r);
        setFilme(r);
    }

    useEffect(() => {
        ListarU();
    }, []);

    return(
    
        <Geral>  
            {filme.map(item => 
                <div>
                <div className="usuario">
                    <div className="ft-perfil">
                        <img src={UsuSemFoto} alt="" />
                    </div>
                    <div className="nome">larisso</div>
                </div>

                <div className="comentario-txt">{item.mensagem}</div>

                <div className="pt3-b2">
                    <div className="tudo">
                        <div className="sobre">
                            <div className="tit-s">Sobre: </div>
                            <div className="filme-c"></div>
                        </div>
                        <div className="dif">
                            <div className="data">{item.dt_comentario}</div>
                            <div className="like"> <button><img src={Coracao} alt="" /></button> </div>
                        </div>
                    </div>
                </div>
                <div className="linha"><img src={LinhaSep} alt="" /></div>  
                </div>
            )
            }
        </Geral>
        
    )
}