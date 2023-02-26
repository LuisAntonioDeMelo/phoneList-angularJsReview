angular.module("listaTelefonica").config([
  "$routeProvider",
  function ($routeProvider) {
    $routeProvider.when("/contatos", {
      templateUrl: "view/contatos.html",
      controller: "listaTelefonicaCtrl",
      resolve: {
        contatos: function (contatosAPI) {
          return contatosAPI.getContatos();
        },
        operadoras: function (operadorasAPI) {
          return operadorasAPI.getOperadoras();
        },
      },
    });

    $routeProvider.when("/novoContato", {
      templateUrl: "view/novoContato.html",
      controller: "novoContatoCtrl",
      resolve: {
        operadoras: function (operadorasAPI) {
          return operadorasAPI.getOperadoras();
        },
      },
    });

    $routeProvider.when("/detalhesContato/:id", {
      templateUrl: "view/detalhesContato.html",
      controller: "detalhesContatoCtrl",
      resolve: {
        contato: (contatosAPI, $route) =>
          contatosAPI.getContato($route.current.params.id),
      },
    });

    $routeProvider.when("/error", {
      templateUrl: "view/error.html",
    });

    $routeProvider.otherwise({ redirectTo: "/contatos" });
  },
]);
