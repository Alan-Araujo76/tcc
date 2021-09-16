import FotoUsu from '../../assets/img/foto.png'
import Lupa from '../../assets/img/lupa.png'

import { Container } from "./styled"


export default function Cabecalho() {
    return(
        <Container>
            <div className="logo">
                Movies<span style={{color: "#FF005C",  fontweight: "none"}}> World</span>
            </div>

            <div className="parte2">
                <div className="usuario">
                    <div className="foto"><img src={FotoUsu} alt="" /></div>
                    <div className="nome-usu">gabrielmelo</div>
                </div>
                <div className="tr"><a> Trocar conta </a></div>
                <div className="sair"><a> Sair </a></div>
                <div className="barra-pesq">
                    <div className="inp">
                      <input type="text"/>
                    </div>
                </div>
            </div>
        </Container>
    )
}