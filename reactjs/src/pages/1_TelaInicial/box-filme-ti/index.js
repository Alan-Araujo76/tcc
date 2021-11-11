import { Link } from 'react-router-dom';
import play from '../../../assets/img/play.png';
import {Conteiner} from './styled'
import {useState, useEffect} from 'react'

import Api from '../../../service/api';
const api = new Api();

export default function BoxFilme(){
    const [filmes, setFilmes] = useState([]);
    
    async function Listar() {
        const r = await api.ListarBox();
        setFilmes(r);
    }

    useEffect(() => {
        Listar();
    });

    

    return(
        <Conteiner>
            <div className="filmes">
                {filmes.map(item => 
                        <div className="filme">
                            <div>
                            <Link to={{ pathname: '/detfilmes', state: item}}>
                                <div className="img"><img src={item.img_menor} alt="" /></div> 
                            </Link>
                            </div>
                        </div>
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