import express from 'express'
import db from "../db.js";

const app = express.Router();

app.get('/', async(req, resp) => {
    try {
        let x = await db.infob_mw_tblistaitem.findAll({
            include:{
                model: db.infob_mw_filmes,
                as: 'id_filme_infob_mw_filme',
                required: true
            }
        });
        resp.send(x);
    } catch(e) {
        resp.send({ erro: e.toString() })
    }
})


app.post('/', async (req, resp) => {
    try{
        let {filme, lista } = req.body;

        let x = await db.infob_mw_tblistaitem.create({
            id_filme: filme,
            id_lista: lista
        })
         resp.send('filme adicionado!')  
    } catch(e) {
         resp.send({erro: e.toString() })
    }
})


export default app