<template>

<div class="principal">

    <div class="titulo"> <p> {{titulo}} </p> </div>
    <div class="descricao"> <p> {{descricao}} </p> </div>
    
    <div class="botoes"> 
      
      <slot></slot>
       </div>

</div>


</template>

<script>

export default {

    props: ['titulo', 'descricao']
}

</script>

<style>

.principal{
  width: 90%;
  background-color: #F2F2F2;
  border: solid 2px #A4A4A4;
  margin: 50px auto 50px auto;
  border-radius: 20px;
}

.titulo{
  border-bottom: solid 2px #E6E6E6;
  padding: 20px;
  text-align: center;
  font-family: Cambria;
  font-weight: bold;
  font-size: 40px;
}

.descricao{
  border-bottom: solid 2px #E6E6E6;
  padding: 20px;
  font-size: 20px;
  text-align: justify;
}

.botoes{
  padding: 20px;
  text-align: right;
}

</style>