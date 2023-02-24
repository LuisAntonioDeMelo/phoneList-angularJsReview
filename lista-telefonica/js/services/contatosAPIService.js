//injeta a função
angular.module("listaTelefonica").factory("contatosAPI" , function($http, config) {
    const _getContatos = function () {
        return $http.get(`${config.baseUrl}/contatos`);
    };

    const _saveContato = function(contato) {
        console.log(contato);
        return $http.post(`${config.baseUrl}/contatos`, contato);
    }

    return  {
        getContatos: _getContatos,
        saveContato: _saveContato
    }
});