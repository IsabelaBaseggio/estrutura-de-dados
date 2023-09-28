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

        var unionSet = new Set(),
        values = this.values();

        for(var i = 0; i < values.length; i++){

            unionSet.add(values[i]);

        }

        values = otherSet.values();

        for(var i = 0; i < values.length; i++) {

            unionSet.add(values[i]);

        }


        return unionSet;

    }

    this.intersection = function(otherSet){

        var intersectionSet = new Set(),
        values = this.values();

        for(var i = 0; i < values.length; i++) {

            if(otherSet.has(values[i])){

                intersectionSet.add(values[i]);

            }

        }

        return intersectionSet;

    }

    this.difference = function(otherSet) {

        var differenceSet = new Set(), // cria um novo conjunto para receber os valores diferentes do conjuntos em verificação
        values = this.values(); // pega um Array com todos os valores do cunjunto que chama a função
        // this = setA = {1, 2, 3, 4}

        // length = 4
        for(var i = 0; i < values.length; i++){
            // intera todos os itens do setA

            // otherSet = setB = {3, 4, 5, 6}

            // verifica se o ohterSet possui aquele valor do setA que está selecionado na iteração
            if(!otherSet.has(values[i])){

                // caso não tenha, ele é adicionado no conjunto criado para os itens que setA tem de diferente de setB
                differenceSet.add(values[i]); // 1, 2

            }

        }

        // retorna o conjunto com os itens diferentes
        return differenceSet; // {1, 2}

    }

}


var setA = new Set();

setA.add(1);
setA.add(2);
setA.add(3);
setA.add(4);

var setB = new Set();

setB.add(3);
setB.add(4);
setB.add(5);
setB.add(6);

var intersectionAB = setA.difference(setB); // chama a função de diferenciação, informa os elementos que o setA tem de diferente do setB

console.log(intersectionAB.values()); // [ 1, 2 ]