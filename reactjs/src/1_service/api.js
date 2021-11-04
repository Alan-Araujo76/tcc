import Axios from 'axios';
const api = Axios.create({
    baseURL: ('http://localhost:3030')
})



export default class Api {


    async Logar(email, senha) {
        let r = await api.post('/login/login', {email, senha});
        return r.data;
    }



    async ListarF() {
        let r = await api.get('/filme/listar');
        return r.data;
    }

    async ListarBox() {
        let r = await api.get('/filme/boxFilme');
        return r.data;
    }
    async ListarCarrousel() {
        let r = await api.get('/filme/carrousel');
        return r.data;
    }
    async InserirF(nome, genero, lancamento, diretor, sinopse, avaliacao, descricao, plataforma, img_maior, img_menor) {
        let r = await api.post('/filme', { nome, genero, lancamento, diretor, sinopse, avaliacao, descricao, plataforma, img_maior, img_menor });
        return r.data;
    }

    async AlterarF(id, nome, genero, lancamento, diretor, sinopse, avaliacao, descricao, plataforma, img_maior, img_menor) {
        let r = await api.put('/filme/' + id, { nome, genero, lancamento, diretor, sinopse, avaliacao, descricao, plataforma, img_maior, img_menor })
        return r.data;
    }

    async RemoverF(id) {
        let r = await api.delete('/filme/' + id);
        return r.data;
    }

    async ListarFG(){
        let r = await api.get('/filmesgosto');
        return r.data;
    }

    async ListarJa(ordenacao){
        let r = await api.get('/filmeUsu/ja?ordenacao=' + ordenacao);
        return r.data;
    }

    async ListarFP(){
        let r = await api.get('/filmespops');
        return r.data;
    }
    
    async ListarU(){
        let r = await api.get('/usuario');
        return r.data;
    }
    async InserirU(nome, sobrenome, username, email, senha, genero, nascimento) {
        let r = await api.post('/usuario/cadastrar', { nome, sobrenome, username, email, senha, genero, nascimento});
        return r.data;
    }

    async AlterarU(id, nome, sobrenome, username, email, senha, genero, localizacao, redes, fotoperfil) {
        let r = await api.put('/usuario/' + id, { nome, sobrenome, username, email, senha, genero, localizacao, redes, fotoperfil })
        return r.data;
    }

    async RemoverU(id) {
        let r = await api.delete('/usuario/' + id);
        return r.data;
    }

    async ListarL(){
        let r = await api.get('/usuario');
        return r.data;
    }

    async InserirL(nome, sobrenome, username, email, senha, genero, localizacao, redes, fotoperfil) {
        let r = await api.post('/usuario', { nome, sobrenome, username, email, senha, genero, localizacao, redes, fotoperfil });
        return r.data;
    }

    async AlterarL(id, nome, sobrenome, username, email, senha, genero, localizacao, redes, fotoperfil) {
        let r = await api.put('/usuario/' + id, { nome, sobrenome, username, email, senha, genero, localizacao, redes, fotoperfil })
        return r.data;
    }

    async RemoverL(id) {
        let r = await api.delete('/usuario/' + id);
        return r.data;
    }


    //////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////


    async ListarCU() {
        let r = await api.get('/comentario/listaru');
        return r.data;
    }

    async ListarC(filme, usuario, mensagem, data, curtidas, id) {
        let r = await api.get('/comentario/' + id, { filme, usuario, mensagem, data, curtidas});
        return r.data;
    }

    async InserirC(filme, usuario, mensagem, data, curtidas) {
        let r = await api.post('/comentario', { filme, usuario, mensagem, data, curtidas});
        return r.data;
    }


    async AlterarC(id,filme, usuario, mensagem, curtidas) {
        let r = await api.put('/comentario/' + id, { filme, usuario, mensagem,  curtidas })
        return r.data;
    }

    async RemoverC(id) {
        let r = await api.delete('/comentario/' + id);
        return r.data;
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////

     async ListarAT(){
         let r = await api.get('/AssistirT');
         return r.data;
     }

     async InserirAT(filme, lista ){
        let r = await api.get('/AssistirT', { filme, lista });
        return r.data;
    }

    async RemoverAT(id) {
        let r = await api.delete('/AssistirT/' + id);
        return r.data;
    }

    ////////////////////////////////////////////////////////////////////////////////////


    async ListarLis(){
        let r = await api.get('/lista');
        return r.data;
    }
    async InserirLis(nome, descricao) {
        let r = await api.post('/lista', { nome, descricao });
        return r.data;
    }

    async AlterarLis(id, nome, descricao) {
        let r = await api.put('/lista/' + id, { nome, descricao })
        return r.data;
    }

    async RemoverLis(id) {
        let r = await api.delete('/lista/' + id);
        return r.data;
    }
}


