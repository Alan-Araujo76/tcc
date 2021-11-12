import perfilFoto from '../../../assets/img/mdm.jpg';
import coracao from '../../../assets/img/coracao.png';
import {Container} from './styled';


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
        <Container>
            {comentario.map(item =>
            <div className="box-comentario">
                <img src={perfilFoto} alt="" />
                <div>
                    <div className="nome-cl-ti">  
                        {item.id_usuario} 
                    </div>
                    <div className="comentarioTXT-ti">
                        {item.mensagem}
                    </div>
                    <div className="sobre-coracao-ti">
                        <div className="sobre-ti">
                            Sobre: 
                        </div>
                        <div className="coracao-ti">
                            {item.ds_curtidas}
                            <img src={coracao} alt="" />
                        </div>
                    </div>
               </div>
            </div> 
            )}
        </Container>
    )
}