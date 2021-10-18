import { Container } from './styled.js';

export default function Index() {
    return(
        <Container>
            <div className="bloco">
                <div className="p1">
                    <div className="txt">Código de Administrador:</div>
                    <div className="inp"><input /></div>
                </div>

                <div className="p2">
                    <div className="txt">Senha de Administrador:</div>
                    <div className="inp"><input /></div>
                    <div className="bt"><button>Entrar</button></div>
                </div>
            </div>
        </Container>
    )
}