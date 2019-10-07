<template>

  <div>
    
    <h1 class="centralizado subTitulo bordaLetra"> Noticia {{ noticia.titulo }} </h1>

    <meu-painel  :titulo="noticia.titulo" :descricao="noticia.descricao">
          <router-link :to="{ name: 'home'}"><button type="button" class="btn btn-info">Voltar</button></router-link>
    </meu-painel>

  </div>
</template>

<script>

import Noticia from '../../domain/noticia/Noticia.js';
import NoticiaService from '../../domain/noticia/NoticiaService.js';
import Painel from '../shared/painel/Painel.vue'

export default {

  components: { 
    'meu-painel' : Painel
  },

  data() {
    return {

      noticia: new Noticia(),
      id: this.$route.params.id
    }
  },

  created(){

    this.service = new NoticiaService(this.$resource); 

    if(this.id) {
      this.service
        .busca(this.id)
        .then(noticia => this.noticia = noticia);
    }

  }

}
</script>

<style scoped>

.centralizado {
  text-align: center;
  color: white;
}

.bordaLetra{
  text-shadow: 2px 2px black;
}

.subTitulo {
  color: white;
  margin-bottom: 10px;
  font-family: Garamond;
  font-size: 60px;
  margin-top: 20px;
}

</style>