angular
.module("listaTelefonica")
.controller("listaTelefonicaCtrl", function ($scope, contatosAPI, operadorasAPI, serialGenerator) {
  $scope.titulo = "Lista Telefônica"

  $scope.contatos = []

  $scope.operadoras = []

  $scope.classeSelecionado = "selecionado"

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
        alert("Erro " + err.status + ": " + err.statusText)
      })
  }

  $scope.deletarContato = function (contatos) {
    $scope.contatos = contatos.filter(contato => {
      if (!contato.selecionado)
        return contato
    })
  }

  $scope.isContatoSelecionado = function (contatos) {
    return contatos.some(contato => {
      return contato.selecionado
    })
  }

  $scope.ordenarPor = function(campo) {
    $scope.criterioDeOrdenacao = campo
    $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao
  }

  const carregarContatos = function () {
    contatosAPI.getContatos()
      .then(response => {
        $scope.contatos = response.data
      })
      .catch(error => {
        alert("Erro " + error.status + ": " + error.statusText)
      })
  }

  const carregarOperadoras = function () {
    operadorasAPI.getOperadoras()
      .then(response => {
        $scope.operadoras = response.data
      })
      .catch(error => {
        alert("Erro " + error.status + ": " + error.statusText)
      })
  }

  carregarContatos();
  carregarOperadoras();

})