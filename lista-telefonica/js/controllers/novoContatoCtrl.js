angular
  .module("listaTelefonica")
  .controller(
    "novoContatoCtrl",
    function ($scope, contatosAPI, serialGenerator, $location, operadoras) {
      // console.log(operadoras.data);
      $scope.operadoras = operadoras.data;
      //fica na rota
      // var carregarOperadoras = function () {
      //   operadorasAPI.getOperadoras().then(function (response) {
      //     $scope.operadoras = response.data;
      //   });
      // };

      $scope.adicionarContato = function (contato) {
        contato.data = new Date();

        contato.serial = serialGenerator.generate();
        contatosAPI
          .saveContato(contato)
          .then((data) => {
            delete $scope.contato;
            $scope.contatoForm.$setPristine();
            $location.path("/contatos");
          })
          .catch((error) => {
            $scope.message = "Erro ao incluir";
          });
      };

      //      carregarOperadoras();
    }
  );
