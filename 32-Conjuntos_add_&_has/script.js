    // CONJUNTOS

function Set() {

    var items = {};

    this.add = function(value) {
        // adiciona um novo item ao conjunto

        // verifica se o valor já não existe no conjunto
        if(!this.has(value)) {

            // cria uma chave / proprieades no conjunto com o próprio nome do valor e passa o valor no valor
            // o nome da chave fica no tipo string
            items[value] = value;

            // retorna true, pois adicionou o items
            return true;

        }

        // se o valor já existe no conjunto, ele não será adicionado novamente, então retorna false
        return false;

    }

    this.delete = function(value) {
        // remove um valor do conjunto

        // verifica se o item existe no conjunto
        if(this.has(value)) {

            // delete a propriedade que possui esse item
            // deleta a chave e o valor
            delete items[value];

            // retorna true, pois foi removido o item
            return true;

        }

        // retorna false, pois o item não existe, logo, ele não foi deletado
        return false;

    }

    this.has = function(value) {
        // devolve se o valor existe ou não

        // hasOwnProperty() - método nativo dos objetos - verifica se existe o valor passado dentro do objeto
        
        return items.hasOwnProperty(value);

    }

    this.clear = function() {
        // remove todos os items do conjunto

        // esvazia o objeto
        items = {};

    }

    this.size = function() {
        // retorna o tamanho do conjunto

        // método próprio dos objetos
        // keys() retorna em um Array todos as chaves que possui o objeto passado, e length pega o tamanho desse Array
        return Object.keys(items).length;

    }

    this.values = function() {
        // retorna um Array com todos os valores do conjunto

        var values = [], // inicia um Array
        keys =  Object.keys(items); // pega todas as chaves do conjunto, no caso todos os valores do conjunto

        // intera o Array das propriedades / chaves
        for(var i = 0; i < keys.length; i++){

            // adiciona os valores das propriedades no Array values
            values.push(items[keys[i]]);

        }

        // retorna um Array com os valores passados
        return values;

    }

}

var set = new Set();

set.add(1);
set.add(2);
set.add(3);
set.add(4);

console.log(set.size()); // 4

// não repete os valores
set.add(2); // já esxite
set.add(2); // já existe

console.log(set.size()); // 4, ou seja, não foram adicionados os valores repetidos

console.log(set.values()); // [ 1, 2, 3, 4 ]

set.delete(4);

console.log(set.values()); // [ 1, 2, 3 ]

console.log(set.size()); // 3

set.clear();

console.log(set.values()); // []

console.log(set.size()); // 0