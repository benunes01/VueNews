<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light" style="background: transparent !important">
      <ul>       
          <li>
            <router-link :to="{ name: 'home' }"><button type="button" class="btn btn-warning">Home</button></router-link>
            <router-link :to="{ name: 'cadastro' }"><button type="button" class="btn btn-warning">Cadastro</button></router-link>
          </li>
      </ul>
    </nav>

</template>
<script>
export default {

}
</script>    

<style scoped>

button{
    margin-left: 20px; 
}

ul li {
    display: inline-block;
    
}

ul{
    padding: 50px;
    text-align: right;
}

li {
    margin-left: 40px;
    margin-top: 10px;
}

</style>