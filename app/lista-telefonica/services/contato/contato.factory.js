angular
.module("listaTelefonica")
.factory("contatosAPI", function ($http, config) {
  var _getContatos = function () {
    return $http.get(config.baseUrl + "/contatos")
  }

  var _salvarContato = function (contato) {
    return $http.post(config.baseUrl + "/contatos", contato)
  }

  var _getContato = function (id) {
    return $http.get(config.baseUrl + "/contatos/" + id)
  }

  return {
    getContatos: _getContatos,
    salvarContato: _salvarContato,
    getContato: _getContato
  }
})