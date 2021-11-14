import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _infob_mw_filmes from  "./infob_mw_filmes.js";
import _infob_mw_tbatores from  "./infob_mw_tbatores.js";
import _infob_mw_tbcomentarios from  "./infob_mw_tbcomentarios.js";
import _infob_mw_tbfilmeusu from  "./infob_mw_tbfilmeusu.js";
import _infob_mw_tblista from  "./infob_mw_tblista.js";
import _infob_mw_tblistaitem from  "./infob_mw_tblistaitem.js";
import _infob_mw_usuario from  "./infob_mw_usuario.js";


export default function initModels(sequelize) {
  var infob_mw_filmes = _infob_mw_filmes.init(sequelize, DataTypes);
  var infob_mw_tbatores = _infob_mw_tbatores.init(sequelize, DataTypes);
  var infob_mw_tbcomentarios = _infob_mw_tbcomentarios.init(sequelize, DataTypes);
  var infob_mw_tbfilmeusu = _infob_mw_tbfilmeusu.init(sequelize, DataTypes);
  var infob_mw_tblista = _infob_mw_tblista.init(sequelize, DataTypes);
  var infob_mw_tblistaitem = _infob_mw_tblistaitem.init(sequelize, DataTypes);
  var infob_mw_usuario = _infob_mw_usuario.init(sequelize, DataTypes);

  infob_mw_tblistaitem.belongsTo(infob_mw_filmes, { as: "id_filme_infob_mw_filme", foreignKey: "id_filme"});
  infob_mw_filmes.hasMany(infob_mw_tblistaitem, { as: "infob_mw_tblistaitems", foreignKey: "id_filme"});
  infob_mw_tblistaitem.belongsTo(infob_mw_tblista, { as: "id_lista_infob_mw_tblistum", foreignKey: "id_lista"});
  infob_mw_tblista.hasMany(infob_mw_tblistaitem, { as: "infob_mw_tblistaitems", foreignKey: "id_lista"});
  infob_mw_tblista.belongsTo(infob_mw_usuario, { as: "id_usuario_infob_mw_usuario", foreignKey: "id_usuario"});
  infob_mw_usuario.hasMany(infob_mw_tblista, { as: "infob_mw_tblista", foreignKey: "id_usuario"});
  
  return {
    infob_mw_filmes,
    infob_mw_tbatores,
    infob_mw_tbcomentarios,
    infob_mw_tbfilmeusu,
    infob_mw_tblista,
    infob_mw_tblistaitem,
    infob_mw_usuario,
  };
}
