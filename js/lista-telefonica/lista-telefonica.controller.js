angular
.module("listaTelefonica")
.controller("listaTelefonicaCtrl", function ($scope, $http) {
  $scope.titulo = "Lista Telefônica"

  $scope.contatos = []

  $scope.operadoras = []

  $scope.classeSelecionado = "selecionado"

  $scope.adicionarContato = function (contato) {
    contato.data = new Date()
    $http.post("http://localhost:3412/contatos", contato)
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
    $http.get("http://localhost:3412/contatos")
      .then(response => {
        $scope.contatos = response.data
      })
      .catch(error => {
        alert("Erro " + error.status + ": " + error.statusText)
      })
  }

  const carregarOperadoras = function () {
    $http.get("http://localhost:3412/operadoras")
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