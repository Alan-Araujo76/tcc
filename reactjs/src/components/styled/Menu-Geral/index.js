
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

import Api from '../../../service/api';
const api = new Api();

export default function App() {
    const [ usuario, setUsuario ] = useState([]);
    console.log(usuario)
    async function Listar() {
        let r = await api.ListarU();
        setUsuario(r);
    }

    useEffect(() => {
      Listar();
    }, []);

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

      <MenuItem><Link to="/perfil">Meu perfil</Link></MenuItem>
      <MenuItem><Link to="/editperfil">Editar perfil</Link></MenuItem>
      <MenuItem><Link to="/meusfilmes/comfP">Filmes por gosto</Link></MenuItem>
      <MenuItem><img src={Br} alt="" /></MenuItem>
      <MenuItem>Trocar de conta</MenuItem>
      <MenuItem>Sair</MenuItem>
    </Menu>

    </Contaier>
  );
}