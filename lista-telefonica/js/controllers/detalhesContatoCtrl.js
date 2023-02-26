angular.module("listaTelefonica").controller(
  "detalhesContatoCtrl",
  function (
    $scope,
    // $routeParams,
    contato
    //contatosAPI
  ) {
    //
    $scope.contato = contato.data;
    //   contatosAPI.getContato($routeParams.id).then(function (response) {
    //     console.log(response.data);
    //     $scope.contato = response.data;
    //   });
  }
);
