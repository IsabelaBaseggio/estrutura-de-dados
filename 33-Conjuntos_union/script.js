    // CONJUNTOS

function Set() {

    var items = {};

    this.add = function(value) {
        // adiciona um novo item ao conjunto

        if(!this.has(value)) {

            items[value] = value;

            return true;

        }

        return false;

    }

    this.delete = function(value) {
        // remove um valor do conjunto

        if(this.has(value)) {

            delete items[value];

            return true;

        }

        return false;

    }

    this.has = function(value) {
        // devolve se o valor existe ou não

        return items.hasOwnProperty(value);

    }

    this.clear = function() {
        // remove todos os items do conjunto

        items = {};

    }

    this.size = function() {
        // retorna o tamanho do conjunto

        return Object.keys(items).length;

    }

    this.values = function() {
        // retorna um Array com todos os valores do conjunto

        var values = [],
        keys =  Object.keys(items);

        for(var i = 0; i < keys.length; i++){

            values.push(items[keys[i]]);

        }

        return values;

    }

    this.union = function(otherSet) {

        var unionSet = new Set(), // cria um novo conjunto vazio
        values = this.values(); // pega os valores inseridos no conjunto que está chamando o método union
        // this = setA {1, 2, 3} , length = 4

        for(var i = 0; i < values.length; i++){

            unionSet.add(values[i]); // adiciona os valores de setA no novo conjunto criado = unionSet

        }

        // otherSet = setB {3, 4, 5, 6} , length = 4
        values = otherSet.values();

        for(var i = 0; i < values.length; i++) {

            unionSet.add(values[i]); // adiciona os valores de setB no novo conjunto criado = unionSet

            // o setA possui o número 3, porém o método add, não adiciona número repetido, logo o 3 não irá repetir na união dos conjuntos

        }

        // unionSet = {"1": 1, "2": 2, "3": 3, "4": 4, "5": 5, "6": 6}

        return unionSet; // retorna a união dos conjuntos

    }

}


var setA = new Set();

setA.add(1);
setA.add(2);
setA.add(3);

var setB = new Set();

setB.add(3);
setB.add(4);
setB.add(5);
setB.add(6);

var unionAB = setA.union(setB); // união de setA com setB

console.log(unionAB.values()); // [ 1, 2, 3, 4, 5, 6 ]

// unionAB também possui acesso ao outros métodos, pois também é uma insância de Set, conforme instânciado dentro do método union