angular
.module("listaTelefonica")
.factory("errorInterceptor", function ($q, $location) {
  return {
    responseError: function (rejection) {
      if (rejection.status === 404) {
        $location.path('/erro')
      }
      return $q.reject(rejection)
    }
  }
})