import capaFilme from '../../../assets/img/capa-filme.png';
import play from '../../../assets/img/play.png';
import {Conteiner} from './styled'
import {useState, useEffect} from 'react'

import Api from '../../../1_service/api';
const api = new Api();

export default function BoxFilme(){
    const [filme, setFilme] = useState([]);
    
    async function Listar(){
        let r = await api.ListarFP()
        setFilme(r)
    }

    useEffect(() => {
        Listar();
    }, []);
    return(
        <Conteiner>
            <div className="filme-ti">
                {filme.map(item =>
                   <img src={item.imagem} alt="" /> 
                )}
                <button className="botao-ti">
                    <div><img src={play}  alt=""/></div>
                    <div className="ver-mais">
                        ver mais
                    </div>
                </button>
            </div> 
        </Conteiner>
    )
}