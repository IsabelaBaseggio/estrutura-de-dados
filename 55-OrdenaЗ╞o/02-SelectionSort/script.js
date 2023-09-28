    // Ordenação - Selection Sort

    // - método de ordenação mais simples
    // - performance ruim
    // - Procura o menor item e coloca na 1° posição, depois procura o 2° menor item e coloca na 2° posição, e assim em diante


// Estrutura de Ordenação

function ArrayList() {

    var array = [];

    this.insert = function(item) {

        array.push(item);

    }

    this.toString = function() {

        return array.join();

    }


    this.bubbleSort = function() {

        for(var i = 0; i < array.length - 1; i++) {

            for(var j = 0; j < array.length - 1; j++) {

                if(array[j] > array[j + 1]) {

                    swap(array, j, j + 1);

                }

            }

        }

    }

    this.selectionSort = function() {

        // [5, 4, 3, 2, 1]

        var indexMin; // inicia a variável "indexMin" - o objetivo dessa variável é receber o menor valor do array nas conparações do FOR j

        // array = [5, 4, 3, 2, 1].length = 5
        for(var i = 0; i < array.length - 1; i++) {
            /*
            array.length - 1 = 4

            i = 0 -> [5, 4, 3, 2, 1] -> [1, 4, 3, 2, 5]

            i = 1 -> [1, 4, 3, 2, 5] -> [1, 2, 3, 4, 5]

            i = 2 -> [1, 2, 3, 4, 5]
            
            i = 3 -> [1, 2, 3, 4, 5]

            i = 4 -> [1, 2, 3, 4, 5]
            
            */

            indexMin = i;
            /*
            indexMin = 0

            indexMin = 1

            indexMin = 2

            indexMin = 3

            indexMin = 4
            */

            // array = [5, 4, 3, 2, 1].length = 5
            for(var j = i; j < array.length; j++){
                /*
                i = 0 -> j = 0

                j = 1

                j = 2

                j = 3

                j = 4

                i = 1 -> j = 1

                j = 2

                j = 3

                j = 4

                i = 2 -> j = 2

                j = 3

                j = 4

                i = 3 -> j = 3

                j = 4

                i = 4 -> j = 4
                */

                if(array[indexMin] > array[j]) {
                    /*
                    array[0] -> 5 > array[0] -> 5 (false)

                    array[0] -> 5 > array[1] -> 4 (true)

                    array[1] -> 4 > array[2] -> 3 (true)

                    array[2] -> 3 > array[3] -> 2 (true)

                    array[3] -> 2 > array[4] -> 1 (true)

                    array[1] -> 4 > array[1] -> 4 (false)

                    array[1] -> 4 > array[2] -> 3 (true)

                    array[2] -> 3 > array[3] -> 2 (true)

                    array[3] -> 2 > array[4] -> 5 (false)

                    array[2] -> 3 > array[2] -> 3 (false)

                    array[3] -> 4 > array[2] -> 4 (false)

                    array[4] -> 5 > array[4] -> 5 (false)

                    array[3] -> 4 > array[2] -> 4 (false)

                    array[4] -> 5 > array[4] -> 5 (false)

                    array[4] -> 5 > array[4] -> 5 (false)
                    */

                    indexMin = j;
                    /*
                    indexMin = 1

                    indexMin = 2

                    indexMin = 3

                    indexMin = 4

                    indexMin = 2

                    indexMin = 3
                    */

                }

            }

            if(i !== indexMin) {
                /*
                i -> 0 !== indexMin -> 4 (true)
                
                i -> 1 !== indexMin -> 3 (true)

                i -> 2 !== indexMin -> 2 (false) -> incrementa FOR i

                i -> 3 !== indexMin -> 3 (false) -> incrementa FOR i

                i -> 4 !== indexMin -> 4 (false) -> sai do FOR i
                */

                swap(array, i, indexMin);
                /*
                [5, 4, 3, 2, 1], 0, 4
                retorno = [1, 4, 3, 2, 5] -> incrementa FOR i

                [1, 4, 3, 2, 5], 1, 3
                retorno = [1, 2, 3, 4, 5] -> incrementa FOR i
                */

            }

        }

        /*
        array = [1, 2, 3, 4, 5]
        */

    }

    var swap = function(array, index1, index2) {
        /*
       [5, 4, 3, 2, 1], 0, 4

       [1, 4, 3, 2, 5], 1, 3

        ...
        */

        var aux = array[index1];
        /*
        aux = array[0] -> 5

        aux = array[1] -> 4

        ...
        */
        array[index1] = array[index2];
        /*
        array[0] -> 5 = array[4] -> 1

        array[1] -> 4 = array[3] -> 2

        ...
        */
        array[index2] = aux;
        /*
        array[4] -> 1 = 5

        array[3] -> 2 = 4

        ...
        */

        /*
        [1, 4, 3, 2, 5]

        [1, 2, 3, 4, 5]

        ...
        */

    }

}

var al = new ArrayList();
al.insert(5);
al.insert(4);
al.insert(3);
al.insert(2);
al.insert(1);

// [5, 4, 3, 2, 1]
al.selectionSort(); // [1, 2, 3, 4, 5]

console.log(al.toString());