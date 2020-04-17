#Não foi pensado no design, é apenas para uso das funcionalidades
<h1>Teste</h1>
<p>Repositório do teste que consiste em um síte de notícias implementado em Vue, consumindo uma api em Node também criada por mim.</p>

<h3>Pegar a API em Node do outro repositório para testes<h3>
  <a href="https://github.com/benunes01/apiNews"> APINews </a>

<h1>Descrição</h1>
<h3>Home</h3>
<p>- Existe a página <strong>Home</strong>, onde lista as notícias cadastradas, mostrando em ordem do mais <strong>recente</strong> primeiro, há a o <strong>botão cadastrar</strong> , que direcionará para a página <strong>Cadastro</strong>, e também existe a barra de filtragem das notícias.
<br>
 <h3>Cadastro</h3>
 - Na página Cadastro, você deve colocar o <strong>titulo</strong> e a <strong>descrição</strong> da sua notícia(<strong>Há validação para que não deixe salvar em branco</strong>), depois de escrever você pode salvar(Listará e voltará para a página Home) ou voltar(Irá para a página Home sem salvar).
<br>
 <h3>Filtro</h3>
<p>Ná página Home existe um <strong>input</strong> para <strong>Filtragem</strong> das notícias, que atualiza as notícias a cada caracterer colocado ou apagado.</p>
<br>
<h3>Botões da notícia</h3>
  - Nas notícias listadas, existem as opções de <strong>Editar</strong>, <strong>Remover</strong> e <strong>Ler a notícia</strong>.
</p>
<ul>
 <li><strong>Editar</strong>: Quando clicada, ela vai para a página cadastro, já escritas com as suas informações, podendo alterar tal notícia.</li>
  <li><strong>Remover</strong>: Quando clicada, aparece a confirmação e se confirmada, deletará a notícia do banco de dados e da Home.</li>
  <li><strong>Ler a notícia</strong>: Irá para uma página separada com o título e a descrição da notícia clicada.</li>
</ul>
<br>
<h1>Ferramentas:</h1>
<ul>
<li>Inicializei o projeto com Vue-cli webpack simple.</li>
<li>Utiliza Bootstrap para melhoria visual do site.</li>
<li>Utiliza Vue-validate para ajudar na validação do formulário de cadastro.</li>
<li>Utiliza Vue-router para criar rotas no site, assim sendo realmente uma Single Page Aplication.</li>
 <li>Utiliza Babel para conseguir usar os novos padrões do JS.</li>
 <li>Utiliza cross-env para ter um único comando sem se preocupar em definir ou usar a variável de ambiente.</li>
 <li>Utiliza WebPack para empacotar códigos.</li>
</ul>

<h3>Utilizar o 'npm run dev' para rodar o site</h3>
