
import FotoUsu from '../../../../src/assets/img/foto.png';
import Seta from '../../../assets/img/seta-baixo.png';
import Br from '../../../assets/img/br-menu.png';
import { Contaier } from './styled';

import {
  Menu,
  MenuItem,
  MenuButton,
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Cookies from 'js-cookie';
import { useHistory } from 'react-router';

//import Api from '../../../service/api';
//const api = new Api();

function lerUsuarioLogado(nav) {
  let logado = Cookies.get('usuario-logado');
  if(logado == null) {
      nav.push('/login');
      return null;
  }

  let usuarioLogado = JSON.parse(logado);
  return usuarioLogado;
}

export default function App() {
    const nav = useHistory(); 
    let usuarioLog = lerUsuarioLogado(nav);
    const [ usuario, setUsuario ] = useState(usuarioLog ? usuarioLog.data.usuario : '');

    const logoff = () => {
      Cookies.remove('usuario-logado');
      nav.push('/login');
    }

  return (
    <Contaier>

    <Menu style={{display: 'flex', flexDirection: 'row', backgroundColor: 'transparent', }} menuButton={<MenuButton>
      <div className="foto">
        { usuario.ds_foto == null
            ? <img src={FotoUsu} alt="" />

            : <img src={usuario.ds_foto} alt="" />
        }
      </div>

      <div className="nome-usu">{usuario.nm_username}</div>
      <div className="seta"><img src={Seta} alt="" /></div>
    </MenuButton>}>

      <MenuItem><Link to={{ pathname: '/perfil', state: usuario}}>Meu perfil</Link></MenuItem>
      <MenuItem><Link to={{ pathname: '/editperfil', state: usuario}}>Editar perfil</Link></MenuItem>
      <MenuItem><Link to="/meusfilmes/comfP">Filmes por gosto</Link></MenuItem>
      <MenuItem><img src={Br} alt="" /></MenuItem>
      <MenuItem onClick={logoff}>Trocar de conta</MenuItem>
      <MenuItem onClick={logoff}>Sair</MenuItem>
    </Menu>

    </Contaier>
  );
}