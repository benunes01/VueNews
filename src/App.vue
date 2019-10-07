<template>
  <div>
    
    <div class="corpo"></div>

    <transition name="pagina">
      <router-view></router-view>
    </transition>

  </div>
</template>

<script>

import { routes }  from './routes';
import Menu from './components/shared/menu/Menu.vue';

export default {

  components: {
    'meu-menu' : Menu
  },

  data() {

    return {

      routes
    }

  }

}
</script>

<style>



   body{
    background-image: url("./assets/imgs/2.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    }

  .corpo {
    font-family: Helvetica, sans-serif;
    margin: 0 auto;
    width: 96%;
  }

  .pagina-enter-active, .pagina-leave-active {
    transition: opacity .3s
  }
  .pagina-enter, .pagina-leave-active {
    opacity: 0
  }

</style>
