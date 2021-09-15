import Barra from '../../assets/img/barra-login.png'

import { Parte1 } from './styled'

export default function Logo() {
    return(
        <Parte1>
            <div className="txt">
                <span style={{color: "#FF005C",  fontweight: "none"}}>Movies</span> World
            </div>
            <div className="barra"><img src={Barra} alt="Barra" /></div>
        </Parte1>
    )
}