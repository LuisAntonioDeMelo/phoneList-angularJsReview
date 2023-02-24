const luis = {
    nome: "Luis",
    idade: 15
};

console.log(luis);

// Factory Function 

const criarPessoa = function(nome, idade) {
    return {
        nome: nome,
        idade: idade
    }
}


const maria = criarPessoa("Maria",20);
console.log(maria);

// Constructor Function 

const Pessoa = function(nome, idade) {
    this.nome = nome,
    this.idade = idade;
}

const luisAnt =  new Pessoa("Luis Ant", 25);
console.log(luisAnt);
//Pessoa.call(luisAnt, "")