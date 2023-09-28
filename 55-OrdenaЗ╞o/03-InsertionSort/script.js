    // Ordenação - Insertion Sort

    // - algoritmo de ordenação por inserção, o Array é construido aos poucos e retorna ele ordenado no final
    // - pressupoem que o 1° elemento já esteja ordenado e faz a comparação como 2° elemento para verificar se é necessário fazer a troca ou não


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

        var indexMin;

        for(var i = 0; i < array.length - 1; i++) {

            indexMin = i;

            for(var j = i; j < array.length; j++){

                if(array[indexMin] > array[j]) {

                    indexMin = j;

                }

            }

            if(i !== indexMin) {

                swap(array, i, indexMin);

            }

        }


    }

    this.insertionSort = function() {

        // como se a cada loop no for o item menor fosse colocado no começo e "empurrasse" os outro elemento pra frente

        // [5, 4, 3, 2, 1]

        var j, temp; // apenas inicializa as variáveis "j" e "temp"

        // [5, 4, 3, 2, 1].length = 5
        for(var i = 1; i < array.length; i++) {

            j = i;
            /*
            j = 1 retorna -> [4, 5, 3, 2, 1]

            j = 2 retorna -> [3, 4, 5, 2, 1]

            j = 3 retorna -> [2, 3, 4, 5, 1]

            j = 4 termina o código -> [1, 2, 3, 4, 5]


            */

            temp = array[i];
            /*
            temp = 4

            temp = 3

            temp = 2

            temp = 1
            
            */

            while(j > 0 && array[j - 1] > temp) {
                /*
                1 > 0 && 5 > 4 (true)
                0 > 0 && undefined > 4 (false) -> sai do WHILE

                2 > 0 && 5 > 3 (true)
                1 > 0 && 4 > 3 (true)
                0 > 0 && undefined > 3 (false) -> sai do WHILE

                3 > 0 && 5 > 2 (true)
                2 > 0 && 4 > 2 (true)
                1 > 0 && 3 > 2 (true)
                0 > 0 && undefined > 2 (false) -> sai do WHILE

                4 > 0 && 5 > 1 (true)
                3 > 0 && 4 > 1 (true)
                2 > 0 && 3 > 1 (true)
                1 > 0 && 2 > 1 (true)
                0 > 0 && undefined > 1 (false) -> sai do WHILE
                
                */

                array[j] = array[j - 1];
                /*
                j = 1 -> [5, 5, 3, 2, 1]

                j = 2 -> [4, 5, 5, 2, 1]
                j = 1 -> [4, 4, 5, 2, 1]

                j = 3 -> [3, 4, 5, 5, 1]
                j = 2 -> [3, 4, 4, 5, 1]
                j = 1 -> [3, 3, 4, 5, 1]

                j = 4 -> [2, 3, 4, 5, 5]
                j = 3 -> [2, 3, 4, 4, 5]
                j = 2 -> [2, 3, 3, 4, 5]
                j = 1 -> [2, 2, 3, 4, 5]
                
                */

                j--;
                /*
                j = 1 - 1 -> 0

                j = 2 - 1 -> 1
                j = 1 - 1 -> 0

                j = 3 - 1 -> 2
                j = 2 - 1 -> 1
                j = 1 - 1 -> 0

                j = 4 - 1 -> 3
                j = 3 - 1 -> 2
                j = 2 - 1 -> 1
                j = 1 - 1 -> 0

                */
            }

            array[j] = temp;
            /*
            j = 0 && temp = 4 -> [4, 5, 3, 2, 1] -> incrementa i

            j = 0 && temp = 3 -> [3, 4, 5, 2, 1] -> incrementa i

            j = 0 && temp = 2 -> [2, 3, 4, 5, 1] -> incrementa i

            j = 0 && temp = 2 -> [1, 2, 3, 4, 5] -> sai do for e termina o código pois i = 4 < 5(array.length)
            
            */

        }

    }

    var swap = function(array, index1, index2) {

        var aux = array[index1];

        array[index1] = array[index2];

        array[index2] = aux;

    }

}

var al = new ArrayList();
al.insert(5);
al.insert(4);
al.insert(3);
al.insert(2);
al.insert(1);

// [5, 4, 3, 2, 1]
al.insertionSort(); // [1, 2, 3, 4, 5]

console.log(al.toString());