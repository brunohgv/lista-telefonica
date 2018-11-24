angular
.module("listaTelefonica")
.controller("listaTelefonicaCtrl", function ($scope, contatosAPI) {
  $scope.titulo = "Lista Telefônica"

  $scope.contatos = []

  $scope.operadoras = []

  $scope.classeSelecionado = "selecionado"

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
      .catch(err => {
        // alert("Erro " + error.status + ": " + error.statusText)
        $scope.erroContatos = err.status + ": " + err.statusText
      })
  }

  carregarContatos();
})