angular
.module("listaTelefonica")
.config(function ($routeProvider){
  $routeProvider
    .when("/contatos", {
      templateUrl: "app/lista-telefonica/lista-telefonica.template.html",
      controller: "listaTelefonicaCtrl"
    })
    .when("/novocontato", {
      templateUrl: "app/lista-telefonica/novo-contato/novo-contato.template.html",
      controller: "novoContatoCtrl",
      resolve: {
        operadoras: function (operadorasAPI) {
          return operadorasAPI.getOperadoras()
        }
      }
    })
    .when("/contato/:id", {
      templateUrl: "app/lista-telefonica/detalhes-contato/detalhes-contato.template.html",
      controller: "detalhesContatoCtrl",
      resolve: {
        contato: function (contatosAPI, $route) {
          return contatosAPI.getContato($route.current.params.id)
        }
      }
    })
    .when("/erro", {
      templateUrl: "app/views/erro.html"
    })
    .otherwise('/contatos')
})