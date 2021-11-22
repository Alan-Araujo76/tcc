import {Lista} from './styled'
import capaFilme from '../../../assets/img/capa-filme.png';
import perfil from '../../../assets/img/foto.png';
import salvar from '../../../assets/img/salvar.png';
import { useState, useEffect} from 'react';

import Api from '../../../service/api';
const api = new Api();

export default function ListaTi(){
    const [lista, setLista] = useState([]);

    async function Listar(){
        let a = await api.ListarLista();
        setLista(a)
    }

    useEffect(() => {
        Listar();
    });

    return(
        
        <Lista>
            {lista.map(item =>
                 <div>
                    <div className="box-lista-ti">
                        <div className="lista-filmes-ti">
                            <img src={item.infob_mw_tblistaitems[0].id_filme_infob_mw_filme.img_capa_menor} alt="" />
                            <img src={item.infob_mw_tblistaitems[1].id_filme_infob_mw_filme.img_capa_menor} alt="" />
                            <img src={item.infob_mw_tblistaitems[2].id_filme_infob_mw_filme.img_capa_menor} alt="" />
                        </div>
                        <div className="g">
                            <div className="nome-lista-ti">
                                <img src={item.id_usuario_infob_mw_usuario.ds_foto === null ? perfil : item.id_usuario_infob_mw_usuario.ds_foto} alt="" />
                                <div>{item.nm_lista}</div> 
                            </div>
                            <div className="s"><button><img src={salvar} alt="" /></button></div>
                        </div>
                    </div>
                    <hr/>
                </div>
            )}
        </Lista>
    )
}