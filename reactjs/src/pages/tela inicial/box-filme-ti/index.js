import capaFilme from '../../../assets/img/capa-filme.png';
import play from '../../../assets/img/play.png';
import {Conteiner} from './styled'

export default function BoxFilme(){
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
            <div className="filme-ti">
                <img src={capaFilme} alt="" />
            </div>
            <div className="filme-ti">
                <img src={capaFilme} alt="" />
            </div>
            <div className="botao-ti">
                <button className="botao2-ti"><img src={play} alt=""/></button>
                <div>
                    ver mais
                </div>
            </div>
        </Conteiner>
    )
}