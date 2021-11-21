import express from 'express'
import db from "../db.js";

const app = express.Router();

app.get('/', async(req, resp) => {
    try {
        let c = await db.infob_mw_tbatores.findAll();
        resp.send(c);
    } catch(e) {
        resp.send({ erro: e.toString() })
    }
})

app.post('/', async(req, resp) =>{
    try{
        let { filme, nome, imagem} = req.body;
        let i = await db.infob_mw_tbatores.create({
            id_filme: filme,
            nm_ator: nome,
            img_ator: imagem 
        })
        resp.send("foi")
    } catch(e){
        resp.send({ erro: e.toString() })
    }
})

export default app;