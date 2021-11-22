import express from 'express'
import db from "../db.js";

const app = express.Router();

app.get('/', async(req, resp) => {
    try {
        let c = await db.infob_mw_tbatores.findAll({
        });
        resp.send(c);
    } catch(e) {
        resp.send({ erro: e.toString() })
    }
})

app.post('/', async(req, resp) =>{
    try{
        let { filme, nmator, imagem} = req.body;
        let i = await db.infob_mw_tbatores.create({
            id_filme: filme,
            nm_ator: nmator,
            img_autor: imagem
        })
        resp.send("foi")
    } catch(e){
        resp.send({ erro: e.toString() })
    }
})

app.put('/:id', async(req, resp) =>{
    try{
        let { filme, nmator, imagem} = req.body;
        let { id } = req.params;
        let i = await db.infob_mw_tbatores.update({
            id_filme: filme,
            nm_ator: nmator,
            img_autor: imagem 
        },
        {
            where: {id_ator: id}
        })
        resp.send('ator alterado')
    } catch(e){
        resp.send({ erro: e.toString() })
    }
})

app.delete('/:id', async(req,resp)=>{
    try{
        let { id } = req.params;
        let d = db.infob_mw_tbatores.destroy({ where: {id_ator: id}})
        resp.send("ator removido!");
    } catch(e){
        resp.send({ erro: e.toString() })
    }
})

export default app;