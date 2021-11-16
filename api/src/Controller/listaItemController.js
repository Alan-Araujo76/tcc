import express from 'express'
import db from "../db.js";

const app = express.Router();

app.get('/item', async(req, resp) => {
    try {
        let x = await db.infob_mw_tblistaitem.findAll();
        resp.send(x);
    } catch(e) {
        resp.send({ erro: e.toString() })
    }
})


app.post('/lista_item', async (req, resp) => {
    try{
        let {nome, descricao, lista } = req.body;

        let x = await db.infob_mw_tblistaitem.create({
            id_filme: descricao,
            id_lista: lista
        })
         resp.send('filme adicionado!')  
    } catch(e) {
         resp.send({erro: e.toString() })
    }
})


export default app