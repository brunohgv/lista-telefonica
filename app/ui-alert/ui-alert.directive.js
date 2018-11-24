angular
.module("listaTelefonica")
.directive("uiAlert", function () {
  return {
    templateUrl: "js/ui-alert/ui-alert.template.html",
    scope: {
      title: "@",
    },
    transclude: true
  }
})