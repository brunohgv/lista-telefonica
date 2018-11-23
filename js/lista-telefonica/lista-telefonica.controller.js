angular
.module("listaTelefonica")
.controller("listaTelefonicaCtrl", function ($scope) {
  $scope.titulo = "Lista Telefônica"

  $scope.contatos = [
    {nome: "Bruno", telefone: "99997777", data: new Date(), operadora: {nome: "Oi", codigo: 31, categoria: "Celular"}},
    {nome: "Adriana", telefone: "98984545", data: new Date(), operadora: {nome: "NET", codigo: 21, categoria: "Fixo"}},
    {nome: "Adalberto", telefone: "99887878", data: new Date(), operadora: {nome: "Tim", codigo: 41, categoria: "Celular"}},
    {nome: "Björn", telefone: "98698745", data: new Date(), operadora: {nome: "Oi", codigo: 31, categoria: "Celular"}},
  ]

  $scope.operadoras = [
    {nome: "Oi", codigo: 31, categoria: "Celular"},
    {nome: "Vivo", codigo: 15, categoria: "Celular"},
    {nome: "Tim", codigo: 41, categoria: "Celular"},
    {nome: "Claro", codigo: 21, categoria: "Celular"},
    {nome: "GVT", codigo: 15, categoria: "Fixo"},
    {nome: "NET", codigo: 21, categoria: "Fixo"},
  ]

  $scope.classeSelecionado = "selecionado"

  $scope.adicionarContato = function (contato) {
    $scope.contatos.push(angular.copy(contato))
    delete $scope.contato
    $scope.contatoForm.$setPristine()
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

})