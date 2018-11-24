angular
.module("listaTelefonica")
.controller("novoContatoCtrl", function ($scope, $location, contatosAPI, operadoras, serialGenerator) {

  $scope.operadoras = operadoras.data

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

})