
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


export default function App() {
  return (
    <Contaier>
    <Menu style={{display: 'flex', flexDirection: 'row', backgroundColor: 'transparent', }} menuButton={<MenuButton>
      <div className="foto"><img src={FotoUsu} alt="" /></div>
      <div className="nome-usu">gabrielmelo</div>
      <div className="seta"><img src={Seta} alt="" /></div>
    </MenuButton>}>

      <MenuItem><Link to="/perfil">Meu perfil</Link></MenuItem>
      <MenuItem><Link to="/editperfil">Editar perfil</Link></MenuItem>
      <MenuItem><Link to="/filmespgosto">Filmes por gosto</Link></MenuItem>
      <MenuItem><img src={Br} alt="" /></MenuItem>
      <MenuItem>Trocar de conta</MenuItem>
      <MenuItem>Sair</MenuItem>
    </Menu>
    </Contaier>
  );
}