import express from 'express'
import db from "../db.js";

const app = express.Router();

app.get('/listar', async(req, resp) => {
    try {
        let l = await db.infob_mw_tblista.findAll({
            include:[
                {
                    model: db.infob_mw_tblistaitem,
                    as:'infob_mw_tblistaitem',
                    required : true
                }
            ]
        });
        resp.send(l);
    } catch(e) {
        resp.send({ erro: e.toString() })
    }
})

app.post('/inserir', async(req, resp) => {
    try {
        let { lista, descricao, usu} = req.body;       
        let l = await db.infob_mw_tblista.create({
            id_usuario: usu,
            nm_lista: lista,
            ds_descricao: descricao
        })
            resp.send('lista criada')
    } catch(e) {
        resp.send({ erro: e.toString()})
    }
})

app.put('/alterar/:id', async(req, resp) => {
    try {
        let { lista, descricao, usu} = req.body;
        let { id } = req.params;
        let consulta = await db.infob_mw_tblista.findOne({ where: {nm_lista: lista} })
            let l = await db.infob_mw_tblista.update({
                id_usuario: usu,
                nm_lista: nome,
                ds_descricao: descricao
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