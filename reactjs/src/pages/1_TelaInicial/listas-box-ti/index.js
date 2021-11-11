import {Lista} from './styled'
import capaFilme from '../../../assets/img/capa-filme.png';
import perfil from '../../../assets/img/foto.png';
import salvar from '../../../assets/img/salvar.png';

import Api from '../../../service/api';
const api = new Api();

export default function ListaTi(){
    return(
        <Lista>
            <div className="box-lista-ti">
                <div className="lista-filmes-ti">
                    <img src={capaFilme} alt="" />
                    <img src={capaFilme} alt="" />
                    <img src={capaFilme} alt="" />
                </div>
                <div className="g">
                    <div className="nome-lista-ti">
                        <img src={perfil} alt="" />
                        <div>filmes legais</div> 
                    </div>
                    <div className="s"><button><img src={salvar} alt="" /></button></div>
                </div>
            </div>
        </Lista>
    )
}