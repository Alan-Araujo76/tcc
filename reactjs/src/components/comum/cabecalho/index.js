import FotoUsu from '../../../assets/img/foto.png';
import Lupa from '../../../assets/img/lupa.png';
import Seta from '../../../assets/img/seta-baixo.png';

import { Container } from "./styled"
import { Link } from 'react-router-dom';

export default function Cabecalho() {
    return(
        <Container>
            <div className="logo">
                <Link to="telainicial"><span style={{fontweight: "none"}}>Movies</span><span style={{color: "#FF005C", fontweight: "bolder"}}> World</span></Link>
            </div>

            <div className="parte2">
                <div className="usuario">
                            <div className="foto"><img src={FotoUsu} alt="" /></div>
                            <div className="nome-usu">gabrielmelo</div>
                    <select>
                        <div className="seta"><img src={Seta} alt="" /></div>
                    </select>
                </div>
                
                <div className="tr"><Link to="meusfilmes">Meus filmes</Link></div>
                <div className="sair"><Link to="listasgc"> Minhas listas </Link></div>
                <div className="barra-pesq">
                      <input type="text"/>
                      <button><img src={Lupa} alt="" /></button>
                </div>
            </div>






            <div className="logo-celular">
                    <div className="tt"><span style={{fontweight: "none"}}>Movies</span><span style={{color: "#FF005C", fontweight: "bolder"}}> World</span></div>
                    
                    <div className="usuario-m">
                        <div className="foto"><img src={FotoUsu} alt="" /></div>
                        <div className="nome-usu">gabrielmelo</div>
                        <select>
                            <div className="seta"><img src={Seta} alt="" /></div>
                        </select>
                    </div>
                    
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