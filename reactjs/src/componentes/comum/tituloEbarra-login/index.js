import Barra from '../../../assets/img/barra-login.png'
import Barra1 from '../../../assets/img/linha-login-dei.png'

import { Parte1 } from './styled'

export default function Logo() {
    return(
        <Parte1>
            <div className="txt" data-animacao="letf"><span style={{color: "#FF005C",  fontweight: "none"}}>Movies</span> World</div>
            <div className="barra"><img src={Barra} alt="Barra" /></div>
            <div className="barra1"><img src={Barra1} alt="Barra" /></div>
        </Parte1>
    )
}