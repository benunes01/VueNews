<template>
  <div class="home">

    <meu-menu/>

    <div class="alinhaTituloEFiltro ">
    <h1 class="centralizado tituloPrincipal bordaLetra">{{ titulo }}</h1>
    </div>
    
    <h1 class="centralizado subTitulo bordaLetra">{{ subtitulo }}</h1>

    <p v-show="mensagem" class="mensagem">{{ mensagem }}</p>
  
    <input type="search" class="filtro form-control" v-on:input="filtro= $event.target.value" placeholder="Filtre pelo Titulo"/>
    
    <ul class="lista-noticia">
     
      <li class="lista-noticia-item" v-for="(noticia, i) of noticiasComFiltro.slice().reverse()" :key="i">

        <meu-painel  :titulo="noticia.titulo" :descricao="noticia.descricao">
          <router-link :to="{ name: 'noticia' ,params: { id: noticia._id }}"><button type="button" class="btn btn-info">Abrir Noticia</button></router-link>
          <router-link :to="{ name: 'editar' ,params: { id: noticia._id }}"><button type="button" class="btn btn-info">Editar</button></router-link>
          <button type="button" class="btn btn-danger" v-on:click="remove(noticia)">Remover</button>
        </meu-painel>

      </li>
      </ul>
  </div>
</template>

<script>
import Painel from '../shared/painel/Painel.vue';
import Botao from '../shared/botao/Botao.vue';
import NoticiaService from '../../domain/noticia/NoticiaService.js';
import Menu from '../shared/menu/Menu.vue';

export default {
  
  components: {
    'meu-painel': Painel,
    'meu-botao': Botao,
    'meu-menu' : Menu
  },

  methods: {

    remove(noticia) {
      
      if(confirm("Confirma Remoção?")){
        this.service.apaga(noticia._id)
        .then(()=> {
          let indice = this.noticias.indexOf(noticia);
          this.noticias.splice(indice, 1);
          this.mensagem = 'Notícia removida com sucesso';
        }, err=>{
          console.log(err);
          this.mensagem = 'Não foi possivel remover a notícia'
        });
      }  


    }
  },

  data () {
    return {
      
      titulo: 'NagroNews',
      subtitulo: 'Ultimas Notícias',
      noticias: [],  
      filtro: '',
      mensagem: '',
  }
  },

  computed: {

    //Barra de filtragem que atualiza automatico a cada input dado
    noticiasComFiltro() {

      if(this.filtro) {
        let exp = new RegExp(this.filtro.trim(), 'i');
        return this.noticias.filter(noticia => exp.test(noticia.titulo));
      }else {
        return this.noticias;
      }
    }

  },

  created() {

    this.service = new NoticiaService(this.$resource);

    this.service
        .lista()
        .then(noticias => this.noticias = noticias, err => console.log(err));
  }
}

</script>

<style>
 
.centralizado {
  text-align: center;
  margin:60px;
}

.mensagem{
  text-align: center;
  font-size: 20px;
  color: white;
}

.bordaLetra{
  text-shadow: 2px 2px black;
}

.subTitulo {
  color: white;
  font-family: Garamond;
  font-size: 60px;
}

.alinhaTituloEFiltro  {
  display: inline-block;
  margin-left: 45px;
}

.lista-noticia {
  list-style: none;
  }

.filtro{
  display: block;
  width: 90%;
  margin: auto;
}

</style>
