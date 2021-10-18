import { BlocoC } from "./styled"
import Capa from '../../../assets/img/capa-filme.png'

import { Link } from 'react-router-dom';

export default function BoxFil() {
    return(
        <BlocoC>
            <div className="filme">
                <Link to="/listafil">
                    <div className="img-fil">
                        <div className="img"><img src={Capa} alt="" /></div>
                        <div className="img"><img src={Capa} alt="" /></div>
                        <div className="img"><img src={Capa} alt="" /></div>
                    </div>
                    <div className="nome">Velozes e Furiosos 9</div>
                </Link>
            </div>

            <div className="filme">
                <div className="img-fil">
                    <div className="img"><img src={Capa} alt="" /></div>
                    <div className="img"><img src={Capa} alt="" /></div>
                    <div className="img"><img src={Capa} alt="" /></div>
                </div>
                <div className="nome">Velozes e Furiosos 9</div>
            </div>

            <div className="filme">
                <div className="img-fil">
                    <div className="img"><img src={Capa} alt="" /></div>
                    <div className="img"><img src={Capa} alt="" /></div>
                    <div className="img"><img src={Capa} alt="" /></div>
                </div>
                <div className="nome">Velozes e Furiosos 9</div>
            </div>
        </BlocoC>
    )
}