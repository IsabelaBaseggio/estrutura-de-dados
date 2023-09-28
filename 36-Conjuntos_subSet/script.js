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

        var differenceSet = new Set(),
        values = this.values();

        for(var i = 0; i < values.length; i++){

            if(!otherSet.has(values[i])){

                differenceSet.add(values[i]);

            }

        }

        return differenceSet;

    }

    this.subSet = function(otherSet){

        // verifica se o conjunto que chama a função tem o tamanho maior que o conjunto em comparação

        // 1º
        // this = setA = {1, 2} / size = 2
        // otherSet = setB = {1, 2, 3} / size = 3

        // 2º
        // this = setA = {1, 2} / size = 2
        // otherSet = setc = {2, 3, 4} / size = 3
        if(this.size() > otherSet.size()){
            // se o conjunto que chama a função for maior que o conjunto em comparação, retorna "false", pois não tem como set um subconjunto se o tamanho é maior

            return false

        } else { // caso o tamnhao de this não seja maior

            var values = this.values(); // pega em um Array todos os valos de this
            // this = setA = {1, 2}

            // length = 2
            for(var i = 0; i < values.length; i++){
                // itera todos oitens do setA

                // verifica se o outro conjunto em comparação possui o itens que está na iteração
                if(!otherSet.has(values[i])){

                    // assim que ele não possuir um item sai retorna "false", pois não tem como ser um subconjunto se o conjunto em comparação não possui o elemento que o setA possui
                    return false;

                }

            }
            // caso não retorna nada dentro do IF quer dizer que todos os itens do setA estão presentes dentro do conjunto em comparação
            // então retorna "true"
            return true;

        }

    }

}


var setA = new Set();

setA.add(1);
setA.add(2);


var setB = new Set();

setB.add(1);
setB.add(2);
setB.add(3);

var setC = new Set();

setC.add(2);
setC.add(3);
setC.add(4);

console.log(setA.subSet(setB)); // verifica se o setA é subconjunto de setB = true

console.log(setA.subSet(setC));  // verifica se o setA é subconjunto de setc = false