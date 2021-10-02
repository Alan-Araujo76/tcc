import FotoUsu from '../../../assets/img/foto.png';
import Lupa from '../../../assets/img/lupa.png';

import { Container } from "./styled"

export default function Cabecalho() {
    return(
        <Container>
            <div className="logo">
                <span style={{fontweight: "none"}}>Movies</span><span style={{color: "#FF005C", fontweight: "bolder"}}> World</span>
            </div>

            <div className="parte2">
                <div className="usuario">
                    <div className="foto"><img src={FotoUsu} alt="" /></div>
                    <div className="nome-usu">gabrielmelo</div>
                </div>
                
                <div className="tr">Meus filmes</div>
                <div className="sair"> Minhas listas </div>
                <div className="barra-pesq">
                      <input type="text"/>
                      <button><img src={Lupa} alt="" /></button>
                </div>
            </div>






            <div className="logo-celular">
                    <div className="tt"><span style={{fontweight: "none"}}>Movies</span><span style={{color: "#FF005C", fontweight: "bolder"}}> World</span></div>
                    <div className="barra-pesq"><input type="text"/><img src={Lupa} alt="" /></div>
            </div>

            <div className="parte-celular">
                <div className="per"> Meu perfil </div>
                <div className="troco"> Trocar conta </div>
                <div className="sair"> Sair </div>
            </div>
        </Container>
    )
}