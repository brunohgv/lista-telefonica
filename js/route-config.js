angular
.module("listaTelefonica")
.config(function ($routeProvider){
  $routeProvider.when("/contatos", {
    templateUrl: "js/lista-telefonica/lista-telefonica.template.html",
    controller: "listaTelefonicaCtrl"
  })
  .when("/novocontato", {
    templateUrl: "js/lista-telefonica/novo-contato/novo-contato.template.html",
    controller: "novoContatoCtrl"
  })
  .otherwise('/contatos')
})