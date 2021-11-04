import { Geral } from "./styled"

import LinhaSep from '../../../assets/img/linha-comentario.png';
import UsuSemFoto from '../../../assets/img/usu-semfoto.png';
import Coracao from '../../../assets/img/coracao.png';
import { useEffect, useState } from "react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Api from '../../../1_service/api';
const api = new Api();


export default function ComenC(props) {
    const [comentario, setComentario] = useState();

    async function Listar() {
        let r = await api.ListarCU();
        setComentario(r);
        console.log(r);
    }

    const Remove = async (id) => {
        const r = await api.RemoverC(id);
        toast.dark('🗑️ Filme Removido!');
        
        Listar();
    }

    useEffect(() => {
        Listar();
    }, []);



    return(
        <Geral>
                <div className="usuario">
                    <div className="ft-perfil"><img src={UsuSemFoto} alt="" /></div>
                    <div className="nome">jjjjj</div>
                </div>

                <div className="comentario-txt">jjjjj</div>

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