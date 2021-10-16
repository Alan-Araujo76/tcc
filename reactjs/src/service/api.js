import Axios from 'axios';
const api = Axios.create({
    baseURL: ('https://movies-world.netlify.app')
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
}