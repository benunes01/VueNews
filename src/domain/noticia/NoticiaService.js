//Isolar a manipulação
export default class NoticiaService {

    constructor(resource) {
        this._resource = resource('noticias{/id}');
    }

    lista() {

        return this._resource
            .query()
            .then(res => res.json());
    }

    cadastra(noticia) {

        if (noticia._id) {

            return this._resource
                .update({ id: noticia._id }, noticia);

        } else {
            return this._resource
                .save(noticia);
        }

    }

    apaga(id) {

        return this._resource.delete({ id });
    }

    busca(id) {

        return this._resource
            .get({ id })
            .then(res => res.json());
    }
}