angular
.module("listaTelefonica")
.controller("novoContatoCtrl", function ($scope, $location, contatosAPI, operadorasAPI, serialGenerator) {

  $scope.adicionarContato = function (contato) {
    contato.serial = serialGenerator.generate()
    contato.data = new Date()
    contatosAPI.salvarContato(contato)
      .then(() => {
        delete $scope.contato
        $scope.contatoForm.$setPristine()
        $location.path("/contatos")
      })
      .catch(err => {
        $scope.erro = err.status + ": " + err.statusText
      })
  }

  const carregarOperadoras = function () {
    operadorasAPI.getOperadoras()
      .then(response => {
        $scope.operadoras = response.data
      })
      .catch(err => {
        // alert("Erro " + error.status + ": " + error.statusText)
        $scope.erroOperadoras = err.status + ": " + err.statusText
      })
  }

  carregarOperadoras()

})