/* ========================================
   DADOS DO CARDÁPIO
======================================== */

const produtos = [

  // ==============================
  // ENTRADAS
  // ==============================

  {
    id: 1,
    nome: "Casquinha de Aratu na Brasa",
    categoria: "Entradas",
    descricao:
      "Carne de aratu fresco salteada no azeite de coco artesanal, servida sobre emulsão de coentro selvagem e coberta com uma fina telha crocante de farinha de mandioca de Neópolis.",
    preco: 36
  },

  {
    id: 2,
    nome: "Pastel de Vento de Queijo Coalho e Mel de Urucu",
    categoria: "Entradas",
    descricao:
      "Minipastéis de massa finíssima recheados com queijo coalho sergipano derretido, acompanhados de mel de abelha urucu nativa e pimenta-de-cheiro defumada.",
    preco: 32
  },

  {
    id: 3,
    nome: "Caldo Clarificado de Caranguejo",
    categoria: "Entradas",
    descricao:
      "Consommé denso e translúcido de caranguejo com infusão de capim-santo, servido com delicadas esferas de leite de coco e brotos locais.",
    preco: 29
  },


  // ==============================
  // PRATOS PRINCIPAIS
  // ==============================

  {
    id: 4,
    nome: "Xaréu Selado com Pirão de Parati",
    categoria: "Pratos Principais",
    descricao:
      "Posta alta de peixe xaréu grelhada na chapa com crosta de sal, servida sobre pirão aveludado de peixe parati e legumes da estação glaceados na manteiga de garrafa.",
    preco: 58
  },

  {
    id: 5,
    nome: "Arroz de Pato com Jerimum Assado",
    categoria: "Pratos Principais",
    descricao:
      "Arroz caldoso de pato desfiado, cozido no próprio caldo da ave com especiarias, acompanhado de cubos de abóbora de leite assada e finalizado com agrião fresco.",
    preco: 62
  },

  {
    id: 6,
    nome: "Carne de Sol de Filé com Aligot de Macaxeira",
    categoria: "Pratos Principais",
    descricao:
      "Medalhão de filé mignon curado na casa ao estilo de Campo do Brito, servido ao ponto sobre purê de macaxeira com queijo de manta sergipano e redução de rapadura preta.",
    preco: 69
  },

  {
    id: 7,
    nome: "Gnocchi de Inhame ao Molho de Moqueca",
    categoria: "Pratos Principais",
    descricao:
      "Massa leve de inhame regional salteada, servida com redução concentrada de moqueca sem proteína animal, castanhas de Propriá tostadas e óleo de coentro.",
    preco: 49
  },


  // ==============================
  // SOBREMESAS
  // ==============================

  {
    id: 8,
    nome: "Ninho de Macasaba e Sorbet de Mangaba",
    categoria: "Sobremesas",
    descricao:
      "Fios crocantes de macasaba artesanal servidos sobre um aveludado creme de confeiteiro de baunilha e finalizados com sorbet refrescante de mangaba.",
    preco: 28
  },

  {
    id: 9,
    nome: "Panna Cotta de Jenipapo",
    categoria: "Sobremesas",
    descricao:
      "Sobremesa clássica de nata infusionada com jenipapo sergipano, coberta por uma calda espessa da própria fruta e cristais de açúcar.",
    preco: 26
  },

  {
    id: 10,
    nome: "Texturas de Caju de Propriá",
    categoria: "Sobremesas",
    descricao:
      "Caju em calda artesanal, farofa crocante de castanha-de-caju tostada e gelato de cajuína caseira.",
    preco: 27
  },


  // ==============================
  // BEBIDAS
  // ==============================

  {
    id: 11,
    nome: "Amendoeira",
    categoria: "Bebidas",
    descricao:
      "Drink sem álcool de umbu-cajá, limão-galego, gengibre fresco e hortelã, criado como bebida assinatura da casa.",
    preco: 16
  },

  {
    id: 12,
    nome: "Uva do Vale do São Francisco",
    categoria: "Bebidas",
    descricao:
      "Bebida refrescante à base de uvas do Vale do São Francisco, servida bem gelada e pensada para acompanhar pratos de sabores intensos.",
    preco: 15
  },

  {
    id: 13,
    nome: "Soda Artesanal de Mangaba",
    categoria: "Bebidas",
    descricao:
      "Bebida gaseificada artesanal de mangaba, leve, refrescante e inspirada nos sabores das frutas sergipanas.",
    preco: 18
  },

  {
    id: 14,
    nome: "Infusão de Capim-Santo e Pitaya",
    categoria: "Bebidas",
    descricao:
      "Bebida refrescante de capim-santo com xarope de pitaya vermelha, servida com bastante gelo e água tônica.",
    preco: 17
  }

];


/* ========================================
   PEDIDO
======================================== */

let pedido = [];


/* ========================================
   ELEMENTOS DA PÁGINA
======================================== */

const app = document.querySelector("#app");

const botoesMenu =
  document.querySelectorAll("nav button");


/* ========================================
   MENU ATIVO
======================================== */

function marcarMenuAtivo(rota) {

  botoesMenu.forEach(botao => {

    botao.classList.toggle(
      "ativo",
      botao.dataset.rota === rota
    );

  });

}


/* ========================================
   NAVEGAÇÃO
======================================== */

function irPara(rota) {

  marcarMenuAtivo(rota);

  if (rota === "inicio") {
    mostrarInicio();
  }

  if (rota === "cardapio") {
    mostrarCardapio();
  }

  if (rota === "localizacao") {
    mostrarLocalizacao();
  }

  if (rota === "reservas") {
    mostrarReservas();
  }

  if (rota === "pedidos") {
    mostrarPedidos();
  }

  if (rota === "sobre") {
    mostrarSobre();
  }

}


/* ========================================
   INÍCIO
======================================== */

function mostrarInicio() {

  app.innerHTML = `

    <section class="hero">

      <p class="destaque-texto">
        Gastronomia sergipana com identidade,
        memória e elegância.
      </p>

      <h1>
        Angico & Manta
      </h1>

      <p>
        Bem-vindo ao Restaurante Angico & Manta.
        Uma experiência inspirada nos sabores,
        ingredientes e histórias de Sergipe.
      </p>

      <p>
        Da mandioca ao queijo de coalho,
        dos frutos do mar às frutas do sertão,
        nossa cozinha valoriza ingredientes
        que carregam identidade e memória.
      </p>

      <div class="contador">
        Itens atualmente no seu pedido:
        <strong>${pedido.length}</strong>
      </div>

      <div class="acoes">

        <button
          class="botao"
          id="btnCardapio"
        >
          Conhecer o cardápio
        </button>

        <button
          class="botao secundario"
          id="btnReserva"
        >
          Fazer uma reserva
        </button>

      </div>

    </section>

  `;


  document
    .querySelector("#btnCardapio")
    .addEventListener(
      "click",
      () => irPara("cardapio")
    );


  document
    .querySelector("#btnReserva")
    .addEventListener(
      "click",
      () => irPara("reservas")
    );

}


/* ========================================
   CARDÁPIO
======================================== */

function mostrarCardapio() {

  app.innerHTML = `

    <h1>Cardápio</h1>

    <p>
      Sabores sergipanos apresentados com
      técnica, respeito e identidade.
    </p>

    <div id="conteudoCardapio"></div>

  `;

  renderizarCardapio();

}


/* ========================================
   RENDERIZAR CARDÁPIO
======================================== */

function renderizarCardapio() {

  const conteudo =
    document.querySelector("#conteudoCardapio");


  const categorias = [

    "Entradas",
    "Pratos Principais",
    "Sobremesas",
    "Bebidas"

  ];


  categorias.forEach(categoria => {

    const produtosCategoria =
      produtos.filter(
        produto =>
          produto.categoria === categoria
      );


    let cards = "";


    produtosCategoria.forEach(produto => {

      cards += `

        <article class="prato">

          <span class="etiqueta">
            ${produto.categoria}
          </span>

          <h3>
            ${produto.nome}
          </h3>

          <p>
            ${produto.descricao}
          </p>

          <div class="preco">
            R$ ${produto.preco.toFixed(2).replace(".", ",")}
          </div>

          <button
            class="botao pedido"
            data-id="${produto.id}"
          >
            Adicionar ao pedido
          </button>

        </article>

      `;

    });


    conteudo.innerHTML += `

      <section class="categoria">

        <h2 class="categoria-titulo">
          ${categoria}
        </h2>

        <div class="cardapio">

          ${cards}

        </div>

      </section>

    `;

  });


  document
    .querySelectorAll(".pedido")
    .forEach(botao => {

      botao.addEventListener(
        "click",
        function() {

          const id =
            Number(this.dataset.id);

          adicionarPedido(id);

        }
      );

    });

}


/* ========================================
   ADICIONAR AO PEDIDO
======================================== */

function adicionarPedido(id) {

  const produto =
    produtos.find(
      produto => produto.id === id
    );


  if (!produto) {
    return;
  }


  pedido.push(produto);


  alert(
    `${produto.nome} foi adicionado ao pedido!`
  );

}


/* ========================================
   LOCALIZAÇÃO
======================================== */

function mostrarLocalizacao() {

  app.innerHTML = `

    <h1>Localização</h1>

    <p>
      Venha conhecer o Angico & Manta
      e viver uma experiência inspirada
      nas raízes sergipanas.
    </p>


    <div class="informacao">

      <strong>📍 Endereço</strong>

      <p>
        Av. Santos Dumont, s/n — Orla de Atalaia
        <br>
        Aracaju — Sergipe
      </p>

    </div>


    <div class="informacao">

      <strong>🕐 Horário de funcionamento</strong>

      <p>
        Terça a quinta:
        18h às 23h
      </p>

      <p>
        Sexta e sábado:
        18h às 00h
      </p>

      <p>
        Domingo:
        12h às 17h
      </p>

    </div>


    <div class="informacao">

      <strong>Contato</strong>

      <p>
        (79) 99999-0000
      </p>

    </div>

  `;

}


/* ========================================
   RESERVAS
======================================== */

function mostrarReservas() {

  app.innerHTML = `

    <h1>Reservas</h1>

    <p>
      Reserve sua mesa para viver
      uma experiência gastronômica
      inspirada em Sergipe.
    </p>


    <form id="formReserva">

      <div class="campo">

        <label for="nomeReserva">
          Nome
        </label>

        <input
          id="nomeReserva"
          type="text"
          placeholder="Digite seu nome"
          required
        />

      </div>


      <div class="campo">

        <label for="dataReserva">
          Data
        </label>

        <input
          id="dataReserva"
          type="date"
          required
        />

      </div>


      <div class="campo">

        <label for="horarioReserva">
          Horário
        </label>

        <input
          id="horarioReserva"
          type="time"
          required
        />

      </div>


      <div class="campo">

        <label for="pessoasReserva">
          Número de pessoas
        </label>

        <input
          id="pessoasReserva"
          type="number"
          min="1"
          max="20"
          placeholder="Ex: 4"
          required
        />

      </div>


      <button
        class="botao"
        type="submit"
      >
        Solicitar reserva
      </button>


      <div id="mensagemReserva"></div>

    </form>

  `;


  document
    .querySelector("#formReserva")
    .addEventListener(
      "submit",
      function(evento) {

        evento.preventDefault();


        const nome =
          document
            .querySelector("#nomeReserva")
            .value;


        const pessoas =
          document
            .querySelector("#pessoasReserva")
            .value;


        document
          .querySelector("#mensagemReserva")
          .innerHTML = `

            <div class="mensagem">

              Reserva solicitada para
              <strong>${nome}</strong>,
              para ${pessoas} pessoa(s).

            </div>

          `;


        evento.target.reset();

      }
    );

}


/* ========================================
   PEDIDOS
======================================== */

function mostrarPedidos() {

  app.innerHTML = `

    <h1>Seu Pedido</h1>

    <p>
      Confira os itens escolhidos
      no seu pedido.
    </p>

    <div id="conteudoPedido"></div>

  `;


  renderizarPedido();

}


/* ========================================
   RENDERIZAR PEDIDO
======================================== */

function renderizarPedido() {

  const conteudo =
    document.querySelector("#conteudoPedido");


  if (pedido.length === 0) {

    conteudo.innerHTML = `

      <div class="vazio">

        <p>
          Seu pedido ainda está vazio.
        </p>

        <button
          class="botao"
          id="irCardapio"
        >
          Ver cardápio
        </button>

      </div>

    `;


    document
      .querySelector("#irCardapio")
      .addEventListener(
        "click",
        () => irPara("cardapio")
      );


    return;

  }


  let itens = "";


  pedido.forEach((produto, indice) => {

    itens += `

      <div class="item-pedido">

        <div>

          <strong>
            ${produto.nome}
          </strong>

          <p>
            R$ ${produto.preco
              .toFixed(2)
              .replace(".", ",")}
          </p>

        </div>


        <button
          class="excluir"
          data-indice="${indice}"
        >
          Remover
        </button>

      </div>

    `;

  });


  const total =
    pedido.reduce(
      (soma, produto) =>
        soma + produto.preco,
      0
    );


  conteudo.innerHTML = `

    ${itens}

    <div class="total">

      Total:
      R$ ${total
        .toFixed(2)
        .replace(".", ",")}

    </div>


    <div class="secao-pagamento">

      <h3>Forma de Pagamento</h3>

      <label class="opcao-pagamento">

        <input
          type="radio"
          name="formaPagamento"
          value="Pix"
          checked
        />

        <span>Pix</span>

      </label>

      <label class="opcao-pagamento">

        <input
          type="radio"
          name="formaPagamento"
          value="Cartão de Débito"
        />

        <span>Cartão de Débito</span>

      </label>

      <label class="opcao-pagamento">

        <input
          type="radio"
          name="formaPagamento"
          value="Cartão de Crédito"
        />

        <span>Cartão de Crédito</span>

      </label>

    </div>


    <div class="acoes">

      <button
        class="botao"
        id="finalizarPedido"
      >
        Pagar e Finalizar
      </button>

      <button
        class="botao secundario"
        id="voltarCardapio"
      >
        Voltar ao cardápio
      </button>

    </div>

    <div id="mensagemPagamento"></div>

  `;


  document
    .querySelectorAll(".excluir")
    .forEach(botao => {

      botao.addEventListener(
        "click",
        function() {

          const indice =
            Number(this.dataset.indice);

          pedido.splice(indice, 1);

          renderizarPedido();

        }
      );

    });


  document
    .querySelector("#voltarCardapio")
    .addEventListener(
      "click",
      () => irPara("cardapio")
    );


  document
    .querySelector("#finalizarPedido")
    .addEventListener(
      "click",
      () => {

        const opcaoSelecionada =
          document.querySelector('input[name="formaPagamento"]:checked');

        const forma = opcaoSelecionada ? opcaoSelecionada.value : "Pix";

        document.querySelector("#mensagemPagamento").innerHTML = `
          <div class="mensagem">
            Pedido confirmado! Forma de pagamento escolhida: <strong>${forma}</strong>.<br>
            Obrigado por escolher o Angico & Manta.
          </div>
        `;

        pedido = [];

      }
    );

}


/* ========================================
   SOBRE
======================================== */

function mostrarSobre() {

  app.innerHTML = `

    <h1>Sobre o Angico & Manta</h1>

    <div class="informacao">

      <p class="destaque-texto">
        Há lugares que alimentam. E há lugares que permanecem na memória.
      </p>

      <p>
        O Angico & Manta nasceu do desejo de transformar a riqueza de Sergipe em uma experiência que vai além do prato. Aqui, ingredientes, histórias, paisagens e memórias do Nordeste encontram uma nova forma de ser contados — com respeito às suas origens e liberdade para criar.
      </p>

      <p>
        Nossa cozinha parte daquilo que é nosso: sabores, ingredientes e saberes que atravessam gerações. Mas não queremos apenas reproduzir o passado. Queremos conversar com ele.
      </p>

      <p>
        Em cada prato, buscamos equilíbrio entre memória e descoberta; entre o familiar e o inesperado. Uma cozinha sergipana contemporânea, feita para despertar lembranças em quem conhece a nossa terra e curiosidade em quem está chegando pela primeira vez.
      </p>

      <p>
        O Angico representa nossas raízes. A manta, aquilo que acolhe e acompanha.
      </p>

      <p>
        <strong>Entre os dois, existe uma mesa.</strong>
      </p>

      <p>
        E é nela que a nossa história continua.
      </p>

    </div>

  `;

}


/* ========================================
   CLIQUES DO MENU
======================================== */

botoesMenu.forEach(botao => {

  botao.addEventListener(
    "click",
    () => {

      irPara(
        botao.dataset.rota
      );

    }
  );

});


/* ========================================
   INICIAR A APLICAÇÃO
======================================== */

mostrarInicio();