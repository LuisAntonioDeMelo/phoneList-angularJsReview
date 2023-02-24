//formatar Nome
angular.module("listaTelefonica").filter("formatName", function () {
  return function (input) {
    // console.log(input);
    const listaDeNomes = input.split(" ");
    //console.log(listaDeNomes);
    const listaDeNomesFormatada = listaDeNomes.map((nome) => {
      if (/(da|de)/.test(nome)) return nome;
      return nome.charAt(0).toUpperCase() + nome.substring(1).toLowerCase();
    });
    //console.log(listaDeNomesFormatada);
    return listaDeNomesFormatada.join(" ");
  };
});
