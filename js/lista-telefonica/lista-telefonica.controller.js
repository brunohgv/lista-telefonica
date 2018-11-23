angular
.module("listaTelefonica")
.controller("listaTelefonicaCtrl", function ($scope) {
  $scope.titulo = "Lista Telefônica"

  $scope.contatos = [
    {nome: "Bruno", telefone: "99997777"},
    {nome: "Adriana", telefone: "98984545"},
    {nome: "Adalberto", telefone: "99887878"},
    {nome: "Björn", telefone: "98698745"},
  ]
})