    // Ordenação - Bubble Sort

    // - método de ordenação mais simples
    // - performance ruim
    // - compara itens adjacentes / consecutivos
    // - se o elemento alocado é maior que o segundo / próximo, é feita troca, então é feita a verificação com o próximo elemento, assim até o fim do array


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
        // [5, 4, 3, 2, 1]

        for(var i = 0; i < array.length - 1; i++) {
            // "i" -> informa a quantidade de vezes que troca os elementos
            // [5, 4, 3, 2, 1].lenght - 1 = 4, serão realizadas no máximo 4 trocas a cada ciclo completo do FOR -> J

            /*
            i = 0 -> [5, 4, 3, 2, 1] -> [4, 3, 2, 1, 5]
            incrementa i

            i = 1 -> [4, 3, 2, 1, 5] -> ...
            */

            for(var j = 0; j < array.length - 1; j++) {
                // "J" -> elemento alocado
                /*
                (i = 0) - [5, 4, 3, 2, 1]

                (i = 0) - [4, 5, 3, 2, 1]

                (i = 0) - [4, 3, 5, 2, 1]

                (i = 0) - [4, 3, 2, 5, 1]

                (i = 1) - [4, 3, 2, 1, 5]

                ...
                */

                if(array[j] > array[j + 1]) {
                    /*
                    5 > 4 (true)

                    5 > 3 (true)

                    5 > 2 (true)

                    5 > 1 (true)

                    4 > 3 (true)

                    ...
                    */

                    swap(array, j, j + 1);
                    /*
                    [5, 4, 3, 2, 1], 0, 1
                    retorna -> [4, 5, 3, 2, 1] -> incrementa J

                    [4, 5, 3, 2, 1], 1, 2
                    retorna -> [4, 3, 5, 2, 1] -> incrementa J

                    [4, 3, 5, 2, 1], 2, 3
                    retorna -> [4, 3, 2, 5, 1] -> incrementa J

                    [4, 3, 2, 5, 1], 3, 4
                    retorna -> [4, 3, 2, 1, 5] -> encerra o for J

                    [4, 3, 2, 5, 1], 0, 1
                    retorna -> [3, 4, 2, 1, 5] -> incrementa J

                    ...
                    */

                }

            }

        }

    }

    var swap = function(array, index1, index2) {
        /*
        [5, 4, 3, 2, 1], 0, 1

        [4, 5, 3, 2, 1], 1, 2

        [4, 3, 5, 2, 1], 2, 3

        [4, 3, 2, 5, 1], 3, 4

        [4, 3, 2, 5, 1], 0, 1

        ...
        */

        var aux = array[index1];
        /*
        aux = array[0] -> 5

        aux = array[1] -> 5

        aux = array[2] -> 5

        aux = array[3] -> 5

        aux = array[0] -> 4

        ...
        */
        array[index1] = array[index2];
        /*
        array[0] -> 5 = array[1] -> 4

        array[1] -> 5 = array[2] -> 3

        array[2] -> 5 = array[3] -> 2

        array[3] -> 5 = array[4] -> 1

        array[0] -> 4 = array[1] -> 3

        ...
        */
        array[index2] = aux;
        /*
        array[1] -> 4 = 5

        array[2] -> 3 = 5

        array[3] -> 2 = 5

        array[4] -> 1 = 5

        array[1] -> 3 = 4

        ...
        */

        /*
        [4, 5, 3, 2, 1]

        [4, 3, 5, 2, 1]

        [4, 3, 2, 5, 1]

        [4, 3, 2, 1, 5]

        [3, 4, 2, 1, 5]

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
al.bubbleSort(); // [1, 2, 3, 4, 5]

console.log(al.toString());