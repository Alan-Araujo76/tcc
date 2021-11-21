

import express from 'express'
import db from "../db.js";

const app = express.Router();

import Sequelize from 'sequelize';
const { Op } = Sequelize;

app.get('/listarP', async(req, resp) => {
    try {
        let c = await db.infob_mw_tbcomentario.findAll({
            include: ['id_filme_infob_mw_filme','id_usuario_infob_mw_usuario'],
            order:[
                ['ds_curtidas' , 'desc']
            ],
            limit:4
        });
        resp.send(c);
    } catch(e) {
        resp.send({ erro: e.toString() })
    }
})

app.post('/inserir', async(req, resp) => {
    try {
        let { filme, usuario, mensagem, curtidas } = req.body;
        
        let i = await db.infob_mw_tbcomentario.create({
            id_filme: filme,
            id_usuario: usuario,
            ds_mensagem: mensagem,
            dt_comentario: new Date,
            ds_curtidas: curtidas

        })
        resp.send("Comentario inserido!");
    } catch(e) {
        resp.send({erro: e.toString()})
    }
})


app.put('/alterar/:id', async(req, resp) => {
    try {
        let { filme, usuario, mensagem, curtidas } = req.body;
        let { id } = req.params;

        let a = await db.infob_mw_tbcomentario.update({
            id_filme: filme,
            id_usuario: usuario,
            mensagem: mensagem,
            curtidas: curtidas

        },
        {
            where: {id_cometario: id}
        })
        resp.send("Comentario alterado!");
    } catch(e) {
        resp.send({erro: e.toString()})
    }
})





app.delete('/:id', async(req, resp) => {
    try {
        let {id} = req.params;
        let c = db.infob_mw_tbcomentario.destroy({ where: {id_cometario: id}})
        resp.send("Comentario removido!");
    } catch(e) {
        resp.send({erro: e.toString()});
    }
})


app.put('/alterarCurti/:id', async(req, resp) => {
    try {
        let { id } = req.params;
        let b = await db.infob_mw_tbcomentario.findOne({where: {id_cometariio : id}})
        let a = await db.infob_mw_tbcomentario.update({
            ds_curtidas: b.ds_curtidas + 1       
        },
        {
            where: {id_cometariio: id}
        })
        resp.send("Você curtiu esse comentário");
    } catch(e) {
        resp.send({erro: e.toString()})
    }
})


export default app