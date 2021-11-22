import express from 'express'
import db from "../db.js";

const app = express.Router();


app.get('/listar', async(req, resp) => {
    try {
        let a = await db.infob_mw_filmes.findAll({
            include:[{
                model: db.infob_mw_tbatores,
                as: 'infob_mw_tbatores',
                require: true
            }]
        });
        console.log('Console: ' + a);
        resp.send(a);
    } catch(e) {
        resp.send({erro: e.toString()})
    }
})

app.get('/box', async(req, resp) => {
    try {
        let a = await db.infob_mw_filmes.findAll({});
        resp.send(a);
    } catch(e) {
        resp.send({erro: e.toString()})
    }
})

app.post('/inserir', async(req, resp) => {
    try {
        let { nome, genero, lancamento, diretor, sinopse, avaliacao, descricao, plataforma, img_maior, img_menor, likes, atores} = req.body;

        if(nome == "" && nome.length < 2 || genero == "" || genero <= 3 || lancamento == "" && lancamento.length < 2 || diretor == "" && diretor.length <= 0 || sinopse == "" && sinopse.length <= 0 || avaliacao == "" && avaliacao.length <= 0 || descricao == "" && descricao.length <= 0 || avaliacao.length <= 0 || descricao == "" && descricao.length <= 0 || plataforma == "" && plataforma.length <= 0 || img_menor == "" && img_menor.length <= 0 || img_maior == "" && img_maior.length <= 0) {
            resp.send({erro: '❌ Campos inválidos!'})
        } else {
            let film = await db.infob_mw_filmes.create({
                nm_filme: nome,
                ds_genero: genero,
                ano_lancamento: lancamento,
                nm_diretor: diretor, 
                ds_sinopse: sinopse,
                ds_avaliacao: avaliacao,
                ds_descricao: descricao,
                ds_plataforma: plataforma,
                img_capa_maior: img_maior,
                img_capa_menor: img_menor,
                qtd_likes: likes,
            })
            for (var ator of atores){
                let {nmator, image} = ator
                let ator_item = await db.infob_mw_tbatores.create({
                    id_filme: film.id_filme,
                    nm_ator: nmator,
                    img_autor: image,
                })
            }
            resp.send("Filme inserido!");
        }
    } catch(e) {
        resp.send({erro: e.toString()})
    }
})




app.put('/:id', async(req, resp) => {
    try {
        let { nome, genero, lancamento, diretor, sinopse, avaliacao, descricao, plataforma, img_maior, img_menor, likes } = req.body;
        let { id } = req.params;

            let a = await db.infob_mw_filmes.update(
            {
                nm_filme: nome,
                ds_genero: genero,
                ano_lancamento: lancamento,
                nm_diretor: diretor, 
                ds_sinopse: sinopse,
                ds_avaliacao: avaliacao,
                ds_descricao: descricao,
                ds_plataforma: plataforma,
                img_capa_maior: img_maior,
                img_capa_menor: img_menor,
                qtd_likes: likes,
            },
            {
                where: {id_filme: id}
            })
            resp.send("Filme alterado!");
    } catch(e) {
        resp.send({ erro: e.toString() })
    }
})

app.put('alt/:id' , async(req, resp) =>{
    try{
        let {nmator, image} = req.body;
        let { id } = req.params;
        let a = await db.infob_mw_tbatores.update(
            {
                id_filme: filme,
                nm_ator: nmator,
                img_autor: image,
            },
            {
                where: {id_ator: id}
            }
        )
    } catch(e){
        resp.send({ erro: e.toString() })
    }
})

app.delete('/:id', async(req, resp) => {
    try {
        let { id } = req.params;
        let d = db.infob_mw_filmes.destroy({ where: {id_filme: id}})
        resp.send("Filme removido!");
    } catch(e) {
        resp.send({ erro: e.toString()});
    }
})




export default app