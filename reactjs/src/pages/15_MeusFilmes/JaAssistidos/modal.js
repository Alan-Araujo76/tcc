import Modal from '../../../components/comum/Modal-Filmes'

export default function Modal(props) {
    return(
        <Modal options={exibirModal}>
            <div className="geral-m">
                <div className="p1-m">
                    <div className="img-m"><img src={ item.img_menor } alt="" /></div>
                    <div className="nome-m" title={ item.nome != null && item.nome > 25? item.nome : null }>{ item.nome != null && item.nome >= 25 ? item.nome.substr(0, 25) + '..' : item.nome }</div>
                </div>
                <div className="sep"></div>
                <div className="p2">
                    <div className="sub-m"><b>Diretor:</b> {item.diretor}</div>
                    <div className="sub-m"><b>Descrição:</b> { item.descricao != null && item.descricao >= 105 ? item.descricao.substr(0, 105) + '...' : item.descricao }</div>
                    <div className="sub2-m"><b>Plataformas:</b> {item.plataforma}</div>
                    <Link to={{ pathname: '/detfilmes', state: props.item}}>
                        <div className="botao"><button>Ver mais</button></div>
                    </Link>
                </div>
            </div>
        </Modal>
    )
}