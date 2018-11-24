angular
.module("listaTelefonica")
.controller("novoContatoCtrl", function ($scope, contatosAPI, serialGenerator) {

  $scope.adicionarContato = function (contato) {
    contato.serial = serialGenerator.generate()
    contato.data = new Date()
    contatosAPI.salvarContato(contato)
      .then(() => {
        carregarContatos()
        delete $scope.contato
        $scope.contatoForm.$setPristine()
      })
      .catch(err => {
        $scope.erro = err.status + ": " + err.statusText
      })
  }

})