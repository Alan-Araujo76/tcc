import play from '../../../assets/img/play.png';
import {Conteiner} from './styled'
import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

import Api from '../../../service/api';
const api = new Api();

export default function BoxFilme(){
    const [filme, setFilme] = useState([]);
    
    async function Listar(){
        let r = await api.ListarBox()
        setFilme(r)
    }

    //async function verMais() {
        //
    //}

    useEffect(() => {
        Listar();
    }, []);

    return(
        <Conteiner>
            <div className="filme-ti">
                {filme.map(item =>
                   <img src={item.img_menor} alt="" /> 
                )}
                <Link to="/filmespopulares">
                    <button className="botao-ti" >
                        <div><img src={play}  alt=""/></div>
                        <div className="ver-mais">
                            ver mais
                        </div>
                    </button>
                </Link>
            </div> 
        </Conteiner>
    )
}