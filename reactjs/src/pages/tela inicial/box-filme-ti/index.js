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
                <img src={capaFilme} alt="" />
            </div>
            <div className="filme-ti">
                <img src={capaFilme} alt="" />
            </div>
            <div className="filme-ti">
                <img src={capaFilme} alt="" />
            </div>
            <div className="filme-ti">
                <img src={capaFilme} alt="" />
            </div>
            <div className="filme-ti">
                <img src={capaFilme} alt="" />
            </div>
            <div className="filme-ti">
                <img src={capaFilme} alt="" />
            </div>
            <div className="filme-ti">
                <img src={capaFilme} alt="" />
            </div>
            <div className="filme2-ti">
                <img src={capaFilme} alt="" />
            </div>
            <div className="filme1-ti">
                <img src={capaFilme} alt="" />
            </div>
            <div className="botao-ti">
                <button className="botao2-ti"><img src={play}  alt=""/></button>
                <div>
                    ver mais
                </div>
            </div>
        </Conteiner>
    )
}