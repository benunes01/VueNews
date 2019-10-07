<template>

  <div>
    
    <meu-menu/>
    
    <h1 class="centralizado subTitulo bordaLetra">Cadastro</h1>

    <form @submit.prevent="grava()">

      <div class="controle">
        <label class="tituloForm" for="titulo">Título</label>
        <input name="titulo" v-validate data-vv-rules="required" v-model="noticia.titulo" id="titulo" autocomplete="off" @input="noticia.titulo = $event.target.value">
        <span style="color:red;" v-show="errors.has('titulo')">ESSE CAMPO DEVE SER PREENCHIDO</span>
      </div>

      <div class="controle" >
        <label class="tituloForm" for="descricao">Descrição</label>
        <textarea name="descricao" v-validate data-vv-rules="required" v-model="noticia.descricao" id="descricao" autocomplete="off" @input="noticia.descricao = $event.target.value"></textarea>
        <span style="color:red;" v-show="errors.has('descricao')">ESSE CAMPO DEVE SER PREENCHIDO</span>
      </div>

      <div class="centralizado">
        <meu-botao rotulo="Salvar" tipo="submit"/>
        <router-link :to="{ name: 'home' }"><meu-botao rotulo="Voltar" tipo="button"/></router-link>
      </div>

    </form>
  </div>
</template>

<script>

import Botao from '../shared/botao/Botao.vue';
import Noticia from '../../domain/noticia/Noticia.js';
import NoticiaService from '../../domain/noticia/NoticiaService.js';
import Menu from '../shared/menu/Menu.vue'


export default {

  components: { 
    'meu-botao': Botao,
    'meu-menu' : Menu
  },

  data() {
    return {

      noticia: new Noticia(),
      id: this.$route.params.id
    }
  },

  methods: {

  grava() {
    // Validando para não poder salvar em branco
      this.$validator
      .validateAll()
      .then(success => {
        if(success){
            this.service
              .cadastra(this.noticia)
              .then(res=>{
                //trata sucesso aqui
                  this.noticia = new Noticia()
                  this.$router.push({ name: 'home' })
          })
          .catch(res=>{
          //trata error aqui
          alert("Não foi possivel salvar a noticia")
          })
        }
      });
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

body.home .page-header {
    margin-bottom: 0!important;
} 

.centralizado {
  text-align: center;
}

.bordaLetra{
  text-shadow: 2px 2px black;
}

.controle {
  font-size: 1.2em;
  margin-bottom: 20px;
  margin-left: 30px;
  margin-right: 30px;
}

.controle label {
  display: block;
  font-weight: bold;
}

.controle label + input, .controle textarea {
  width: 100%;
  font-size: arial;
  border-radius: 5px
}

.tituloForm {
  color: white;
}

#descricao {
  height: 200px;
}

.subTitulo {
  color: white;
  margin-bottom: 10px;
  font-family: Garamond;
  font-size: 60px;
  margin-top: 20px;
}
  

</style>