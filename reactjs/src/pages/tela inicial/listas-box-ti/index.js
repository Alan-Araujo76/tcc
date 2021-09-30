import {Lista} from './styled'
import capaFilme from '../../../assets/img/capa-filme.png';
import perfil from '../../../assets/img/foto.png';

export default function ListaTi(){
    return(
        <Lista>
            <div className="box-lista-ti">
                <div className="lista-filmes-ti">
                    <img src={capaFilme} alt="" />
                    <img src={capaFilme} alt="" />
                    <img src={capaFilme} alt="" />
                    <img src={capaFilme} alt="" />
                </div>
                <div className="nome-lista-ti">
                    <img src={perfil} alt="" />
                    <div>filmes legais</div> 
                </div>
            </div>
        </Lista>
    )
}