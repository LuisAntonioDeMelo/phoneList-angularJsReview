angular
  .module("listaTelefonica")
  .controller(
    "listaTelefonicaCtrl",
    function ($scope, contatosAPI, operadorasAPI, serialGenerator) {
      $scope.app = "Lista Telefonica";
      $scope.operadoras = [];
      $scope.contatos = [];
      console.log(serialGenerator.generate());

      var carregarOperadoras = function () {
        operadorasAPI.getOperadoras().then(function (response) {
          $scope.operadoras = response.data;
        });
      };

      var carregarContatos = function () {
        contatosAPI
          .getContatos()
          .then(function (response) {
            $scope.contatos = response.data;
          })
          .catch(function (error) {
            $scope.error = "Não foi possivel carregar os dados";
          });
      };

      carregarOperadoras();
      carregarContatos();

      $scope.adicionarContato = function (contato) {
        contato.data = new Date();

        contato.serial = serialGenerator.generate();
        contatosAPI
          .saveContato(contato)
          .then((data) => {
            delete $scope.contato;
            $scope.contatoForm.$setPristine();
            carregarContatos();
          })
          .catch((error) => {
            $scope.message = "Erro ao incluir";
          });
      };

      $scope.apagarContatos = function (contatos) {
        $scope.contatos = contatos.filter(function (contato) {
          if (!contato.selecionado) return contato;
        });
      };

      $scope.isContatoSelecionado = function (contatos) {
        return contatos.some(function (contato) {
          return contato.selecionado;
        });
      };

      $scope.ordenarPor = function (field) {
        $scope.criterioDeOrdenacao = field;
      };
    }
  );

//.controller("listaTelefonicaCtrl", function ($scope, uppercaseFilter) {

//   $scope.cores = [
//     { cor: "blue" },
//     { cor: "black" },
//     { cor: "green" },
//     { cor: "gray" },
//     { cor: "magenta" },
//   ];

//  $scope.contatos.push(contato);
// $http({
//    method: 'POST',
//    url:"http://localhost:3000/contatos",
//    data: contato,
//   { headers: {} }
//})
//   .then(function (data) {
//     delete $scope.contato;
//     $scope.contatoForm.$setPristine();
//     carregarContatos();
//   });

// $scope.apagarContatos = (contatos) =>
//   contatos.filter((contato) => {
//     if (!contato.selecionado) return contato;
//   });

// $scope.contatos = [
//   {
//     nome: uppercaseFilter("Pedro"),
//     telefone: "99998888",
//     cor: "blue",
//     operadora: { nome: "Oi", codigo: 14, categoria: "Celular" },
//     data: new Date(),
//   },
//   {
//     nome: "Ana",
//     telefone: "9999877",
//     cor: "yellow",
//     operadora: { nome: "Vivo", codigo: 15, categoria: "Celular" },
//     data: new Date(),
//   },
//   {
//     nome: "Maria",
//     telefone: "999983123",
//     cor: "red",
//     operadora: { nome: "Tim", codigo: 41, categoria: "Celular" },
//     data: new Date(),
//   },
//   {
//     nome: "João",
//     telefone: "99998812",
//     cor: "orange",
//     operadora: { nome: "Tim", codigo: 41, categoria: "Celular" },
//     data: new Date(),
//   },
// ];

//3 formas de passar esse parametro
// a ruim .. está quebrando o mantra:::

//evitar o maxima ler o scope estando dentro do controller...
// $scope.adicionarContato = function() {
//     $scope.contatos.push({nome: $scope.nome, telefone: $scope.telefone})
// }

//jeito medio
//  $scope.adicionarContato = function(nome, telefone) {
//  $scope.contatos.push({nome: nome, telefone: telefone})
// }

//jeito bom
