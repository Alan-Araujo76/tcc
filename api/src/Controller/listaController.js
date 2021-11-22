import express from 'express'
import db from "../db.js";

const app = express.Router();

app.get('/listar', async(req, resp) => {
    try {
        let l = await db.infob_mw_tblista.findAll({
            include:[{
                model: db.infob_mw_tblistaitem,
                as: 'infob_mw_tblistaitems',
                required: true,
                include:[{
                    model: db.infob_mw_filmes,
                    as: 'id_filme_infob_mw_filme',
                    required: true
                }]
            },
            {
                model: db.infob_mw_usuario,
                as: 'id_usuario_infob_mw_usuario',
                required: true
            }]
        });
        resp.send(l);
    } catch(e) {
        resp.send({ erro: e.toString() })
    }
})

app.post('/inserir', async(req, resp) => {
    try {
        let { lista, descricao, usu, item} = req.body;

        let list = await db.infob_mw_tblista.create({
            id_usuario: usu,
            nm_lista: lista,
            ds_descricao: descricao,
        })
        for(var it of item){
            let {filme} = it;
            let x = await db.infob_mw_tblistaitem.create({
                id_filme: filme,
                id_lista: list.id_lista,
            })
        }
        resp.send('lista criada')
    } catch(e) {
        resp.send({ erro: e.toString()})
    }
})

app.put('/alterar/:id', async(req, resp) => {
    try {
        let { lista, descricao, usu} = req.body;
        let { id } = req.params;
        let l = await db.infob_mw_tblista.update({
            id_usuario: usu,
            nm_lista: lista,
            ds_descricao: descricao,
        },
        {
            where: {id_lista: id}
        })
        resp.send('lista alterada');
    } catch(e) {
        resp.send({ erro: e.toString() })
    }
})

app.delete('/deletar/:id', async(req, resp) => {
    try {
        let { id } = req.params;
        let l = await db.infob_mw_tblista.destroy({ where: { id_lista: id }})
        resp.send('lista removida')
    } catch(e) {
        resp.send({erro: e.toString()})
    }
})



export default app