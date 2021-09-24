import FotoUsu from '../../assets/img/foto.png';
import Lupa from '../../assets/img/lupa.png';

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
                <div className="tr"> Trocar conta </div>
                <div className="sair"> Sair </div>
                <div className="barra-pesq">
                      <input type="text"/>
                      <img src={Lupa} alt="" />
                </div>
            </div>
        </Container>
    )
}