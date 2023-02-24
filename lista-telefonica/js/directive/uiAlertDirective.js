angular.module("listaTelefonica").directive("uiAlert", function () {
  return {
    templateUrl: "view/ui-alert.html",
    replace: true,
    restrict: "AE",
    scope: {
      title: "@",
      //   message: "=",
    },
    transclude: true,
  };
  // A Diretiva restrita ao atributo
  // E Diretiva restrita ao elemento
  // C Diretiva restrita a classe do elemento
  // M Diretiva restrita ao cometário do elemento
});
