import Axios from 'axios';
const api = Axios.create({
    baseURL: ('http://localhost:3030')
})



export default class Api {
    async ListarF(){
        let r = await api.get('/filme');
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
    
    async ListarU(){
        let r = await api.get('/usuario');
        return r.data;
    }
    async InserirU(nome, sobrenome, username, email, senha, genero, localizacao, redes, fotoperfil) {
        let r = await api.post('/usuario', { nome, sobrenome, username, email, senha, genero, localizacao, redes, fotoperfil });
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

    async ListarAT (){
        let r = await api.get('/listaAssistirT');
        return r.data;
    }

    async AlterarAT (){
        let r = await api.post('/listaAssistirT1');
        return r.data;
    }

    async RemoverAT (id){
        let r = await api.delete('/listaAssistirT1/' + id);
        return r.data;
    }

    async ListarC (){
        let r = await api.get('/comentario');
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

    async ListarLP (){
        let r = await api.get('/lista_popular');
        return r.data;
    }

    async AlterarLP( id, nome_lista,descricao ) {
        let r = await api.put('/lista_popular/' + id, { nome_lista, descricao })
        return r.data;
    }
     async ListarJS (){
        let r = await api.get('/MeusF_Ja');
        return r.data;
    }


    async AlterarJS (){
        let r = await api.post('/MeusF_Ja');
        return r.data;
    }
}


