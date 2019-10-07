<template>
    <button class="botao botao-padrao" :type="tipo">{{rotulo}}</button>
</template>
<script>
export default {

   props: {
       tipo: {
           type: String, 
           required: true
       },

       rotulo: {
           type: String, 
           required: true
       },

       confirmacao: Boolean,
       estilo: String
   },


   methods: {

       disparaAcao() {
           
            this.$router.push('/');
       }
   }
}
</script>    

<style scoped>
    .botao {
        display: inline-block;
        padding: 10px;
        border-radius: 3px;
        margin: 10px;
        font-size: 1.2em;
    }

    .botao-perigo {
        background: firebrick;
        color: white;
    }

    .botao-padrao {
	font-family: Arial, Helvetica, sans-serif;
	font-size: 14px;
	color: black;
	padding: 10px 20px;
	background: -webkit-gradient(
		linear, left top, left bottom,
		from(rgb(219, 243, 112)),
		to(#d6ee6b));
	background: linear-gradient(
		top,
		#b1e5f5 0%,
		#1baeb8);
	border-radius: 10px;
	border: 1px solid #a6d2f0;
	box-shadow:
		0px 1px 3px rgba(153,218,242,0.5),
		inset 0px 0px 2px rgba(112,220,224,1);
	text-shadow:
		0px -1px 0px rgba(114,232,118,0.4),
		0px 1px 0px rgba(59,204,30,0.3);

    }

</style>