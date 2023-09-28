    // Ordenação - Merge Sort

    // - algoritmo de ordenação por intercalação ou mistura
    // - segue a dinâmica do "dividir e conquistar"
    // - pega um array grande e quebra-o em partes menores, até restar um elemento em cada parte, então pega esse elementos e ordena-os, logo em seguida insere essa ordenação em um array único novamente


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

        var j, temp;
        
        for(var i = 1; i < array.length; i++) {

            j = i;

            temp = array[i];

            while(j > 0 && array[j - 1] > temp) {

                array[j] = array[j - 1];

                j--;
            }

            array[j] = temp;

        }

    }

    this.mergeSort = function() {

        // array = [8, 7, 6, 5, 4, 3, 2, 1]

        array = mergeSortRec(array);
        // array vai receber o resultado da função mergeSortRec

        // retorna array = [1, 2, 3, 4, 5, 6, 7, 8]

    }

    var mergeSortRec = function(array) {
        /* 
        [8, 7, 6, 5, 4, 3, 2, 1] -> retorna [8, 7, 6, 5][4, 3, 2, 1]

        [8, 7, 6, 5] -> retorna [8, 7][6, 5]

        [8, 7] -> retorna [8][7]

        [8] -> retorna [8]

        [7] -> retorna [7]

        [6, 5] -> retorna [6][5]

        [6] -> retorna [6]

        [5] -> retorna [7]

        [4, 3, 2, 1] -> retorna [4, 3][2, 1]

        [4, 3] -> retorna [4][3]

        [4] -> retorna [4]

        [3] -> retorna [3]

        [2, 1] -> retorna [2][1]

        [2] -> retorna [2]

        [1] -> retorna [1]
        */

        var length = array.length;
        /*
        8

        4

        2

        1

        1

        2

        1

        1

        4

        2

        1

        1

        2

        1

        1
        */

        if(length === 1) {
            /* 
            length = 8 (false)

            length = 4 (false)

            length = 2 (false)

            length = 1 (true)

            length = 1 (true)

            length = 2 (false)

            length = 1 (true)

            length = 1 (true)

            length = 4 (false)

            length = 2 (false)

            length = 1 (true)

            length = 1 (true)

            length = 2 (false)

            length = 1 (true)

            length = 1 (true)
            */

            return array
            /*
            Retorna 

            [8]

            [7]

            [6]

            [5]
            
            [4]

            [3]

            [2]

            [1]
            */

        }

        var mid = Math.floor(length / 2),
        /*
        8 / 2 = 4

        4 / 2 = 2

        2 / 2 = 1

        2 / 2 = 1

        4 / 2 = 2

        2 / 2 = 1

        2 / 2 = 1
        */
        left = array.slice(0, mid),
        /*
        [8, 7, 6, 5]

        [8, 7]

        [8]

        [6]

        [4 , 3]

        [4]

        [2]
        */
        right = array.slice(mid, length);
        /*
        [4, 3, 2, 1]

        [6, 5]

        [7]

        [5]

        [2, 1]

        [3]

        [1]
        */

        return merge(mergeSortRec(left), mergeSortRec(right));
        /*
        retorna o resultado da função "merge", porém, ela para como argumento a chamada da função "mergeSortRec", então 1°, executa a função "mergeSortRec", e quando o retorno de "left" e "right" tiverem ambas retorno executa "merge"

        mergeSortRec(left) -> vem antes de mergeSortRec(right)
        ou seja
        mergeSortRec(right) espera mergeSortRec(left) retornar antes de ser executada

        mergeSortRec([8, 7, 6, 5]), mergeSortRec([4, 3, 2, 1])
        mergeSortRec([4, 3, 2, 1]) -> espera

        mergeSortRec([8, 7]), mergeSortRec([6, 5])
        mergeSortRec([6, 5]) -> espera

        mergeSortRec([8]), mergeSortRec([7])
        mergeSortRec([7]) -> espera
        mergeSortRec([8]) -> retorna 8 do IF -> mergeSortRec([7]) 

        mergeSortRec([7]) -> retorna 7 do IF -> mergeSortRec([8,7])

        mergeSortRec([8,7]) -> retorna [8][7] -> merge([8], [7])
        
        merge([8], [7]) -> retorna [7, 8] -> mergeSortRec([8,7])
        mergeSortRec([8, 7]) = [7, 8] -> mergeSortRec([6, 5])

        mergeSortRec([6]), mergeSortRec([5])
        mergeSortRec([5]) -> espera
        mergeSortRec([6]) -> retorna 6 do IF -> mergeSortRec([5])

        mergeSortRec([5]) -> retorna 5 do IF -> mergeSortRec([6, 5])

        mergeSortRec([6, 5]) -> retorna [6][5] -> merge([6], [5])
        
        merge([6], [5]) - > retorna [5, 6] -> mergeSortRec([6,5])
        mergeSortRec([6, 5]) = [5, 6] -> merge([7, 8], [5, 6])

        merge([7, 8], [5, 6]) -> retorna [5, 6, 7, 8] -> mergeSortRec([4, 3, 2, 1])

        mergeSortRec([4, 3]), mergeSortRec([2, 1])
        mergeSortRec([2, 1]) -> espera

        mergeSortRec([4]), mergeSortRec([3])
        mergeSortRec([3]) -> espera
        mergeSortRec([4]) -> retorna 4 do IF -> mergeSortRec([3])

        mergeSortRec([3]) -> retorna 3 do IF -> mergeSortRec([4, 3])

        mergeSortRec([4, 3]) -> retorna [4][3] -> merge([4], 3)
        
        merge([4], [3]) -> retorna [3, 4] -> mergeSortRec([4, 3])

        mergeSortRec([4, 3]) = [3, 4] -> mergeSortRec([2, 1])

        mergeSortRec([2]), mergeSortRec([1])
        mergeSortRec([1]) -> espera
        mergeSortRec([2]) -> retorna 2 do IF -> mergeSortRec([1])

        mergeSortRec([1]) -> retorna 1 do IF -> mergeSortRec([2, 1])

        mergeSortRec([2, 1]) -> retorna [2][1] -> merge([2], [1])

        merge([2], [1]) -> retorna [1, 2] -> mergeSortRec([2, 1])

        mergeSortRec([2, 1]) = [1, 2] -> merge([3, 4], [1, 2])

        merge([3, 4], [1, 2]) -> retorna [1, 2, 3, 4] -> merge([5, 6, 7, 8], [1, 2, 3, 4])

        merge([5, 6, 7, 8], [1, 2, 3, 4]) -> sai da recursividade e retorna [1, 2, 3, 4, 5, 6, 7, 8] para "mergeSort()"

        */

    }

    var merge = function(left, right) {
        /*
        [8], [7]

        [6], [5]

        [7, 8], [5, 6]

        [4], [3]

        [2], [1]

        [3, 4], [1, 2]

        [5, 6, 7, 8], [1, 2, 3, 4]
        */

        var result = [],
        il = 0;
        ir = 0;

        while(il < left.length && ir < right.length) {
            /*
            0 < [8].length -> 1 && 0 < [7].length -> 1 (true)
            0 < [8].length -> 1 && 1 < [7].length -> 1 (false)

            0 < [6].length -> 1 && 0 < [5].length -> 1 (true)
            0 < [6].length -> 1 && 1 < [5].length -> 1 (false)

            0 < [7, 8].length -> 2 && 0 < [5, 6].length -> 2 (true)
            0 < [7, 8].length -> 2 && 1 < [5, 6].length -> 2 (true)
            0 < [7, 8].length -> 2 && 2 < [5, 6].length -> 2 (false)

            0 < [4].length -> 1 && 0 < [3].length -> 1 (true)
            0 < [4].length -> 1 && 1 < [3].length -> 1 (false)

            0 < [2].length -> 1 && 0 < [1].length -> 1 (true)
            0 < [2].length -> 1 && 1 < [1].length -> 1 (false)

            0 < [3, 4].length -> 2 && 0 < [1, 2].length -> 2 (true)
            0 < [3, 4].length -> 2 && 1 < [1, 2].length -> 2 (true)
            0 < [3, 4].length -> 2 && 2 < [1, 2].length -> 2 (false)

            0 < [5, 6, 7, 8].length -> 4 && 0 < [1, 2, 3, 4].length -> 4 (true)
            0 < [5, 6, 7, 8].length -> 4 && 1 < [1, 2, 3, 4].length -> 4 (true)
            0 < [5, 6, 7, 8].length -> 4 && 2 < [1, 2, 3, 4].length -> 4 (true)
            0 < [5, 6, 7, 8].length -> 4 && 3 < [1, 2, 3, 4].length -> 4 (true)
            0 < [5, 6, 7, 8].length -> 4 && 4 < [1, 2, 3, 4].length -> 4 (false)
            */

            if(left[il] < right[ir]) {
                /*
                8 < 7 (false)

                6 < 5 (false)

                7 < 5 (false)
                7 < 6 (false)

                4 < 3 (false)

                2 < 1 (false)

                3 < 1 (false)
                2 < 3 (false)

                5 < 1 (false)
                5 < 2 (false)
                5 < 3 (false)
                5 < 4 (false)
                */

                result.push(left[li++]);

            } else {
                /*
                8 < 7

                6 < 5

                7 < 5 
                7 < 6

                4 < 3

                2 < 1

                3 < 1
                2 < 3

                5 < 1
                5 < 2
                5 < 3
                5 < 4
                */

                result.push(right[ir++]);
                /*
                result = [7] e incrementa ir(0) -> 1

                result = [5] e incrementa ir(0) -> 1

                result = [5] e incrementa ir(0) -> 1
                result = [5, 6] e incrementa ir(1) -> 2

                result = [3] e incrementa ir(0) -> 1

                result = [1] e incrementa ir(0) -> 1

                result = [1] e incrementa ir(0) -> 1
                result = [1, 2] e incrementa ir(1) -> 2

                result = [1] e incrementa ir(0) -> 1
                result = [1, 2] e incrementa ir(1) -> 2
                result = [1, 2, 3] e incrementa ir(2) -> 3
                result = [1, 2, 3, 4] e incrementa ir(3) -> 4
                
                */

            }
            
        }

        while(il < left.length) {
            /*
            0 < [8].lenft -> 1 (true)
            1 < [8].lenft -> 1 (false)

            0 < [6].lenft -> 1 (true)
            1 < [6].lenft -> 1 (false)

            0 < [7, 8].lenft -> 2 (true)
            1 < [7, 8].lenft -> 2 (true)
            2 < [7, 8].lenft -> 2 (false)

            0 < [4].lenft -> 1 (true)
            1 < [4].lenft -> 1 (false)

            0 < [2].lenft -> 1 (true)
            1 < [2].lenft -> 1 (false)

            0 < [3, 4].lenft -> 2 (true)
            1 < [3, 4].lenft -> 2 (true)
            2 < [3, 4].lenft -> 2 (false)

            0 < [5, 6, 7, 8].length -> 4 (true)
            1 < [5, 6, 7, 8].length -> 4 (true)
            2 < [5, 6, 7, 8].length -> 4 (true)
            3 < [5, 6, 7, 8].length -> 4 (true)
            4 < [5, 6, 7, 8].length -> 4 (false)
            */

            result.push(left[il++]);
            /*
            result = [7, 8] e incrementa il(0) -> 1

            result = [5, 6] e incrementa il(0) -> 1

            result = [5, 6, 7] e incrementa il(0) -> 1
            result = [5, 6, 7, 8] e incrementa il(1) -> 2

            result = [3, 4] e incrementa il(0) -> 1

            result = [1, 2] e incrementa il(0) -> 1

            result = [1, 2, 3] e incrementa il(0) -> 1
            result = [1, 2, 3, 4] e incrementa il(1) -> 2

            result = [1, 2, 3, 4, 5] e incrementa il(0) -> 1
            result = [1, 2, 3, 4, 5, 6] e incrementa il(1) -> 2
            result = [1, 2, 3, 4, 5, 6, 7] e incrementa il(2) -> 3
            result = [1, 2, 3, 4, 5, 6, 7, 8] e incrementa il(3) -> 4
            */

        }

        while(ir < right.left) {
            /*
            1 < [7].length -> 1 (false)

            1 < [5].length -> 1 (false)

            2 < [5, 6].length -> 2 (false)

            1 < [3].length -> 1 (false)

            1 < [1].length -> 1 (false)

            2 < [1, 2].length -> 2 (false)

            4 < [1, 2, 3, 4].length -> 4 (false)
            */

            result.push(right[ir++]);

        }

        return result;
        /*
        result = [7, 8]

        result = [5, 6]

        result = [5, 6, 7, 8]

        result = [3, 4]

        result = [1, 2]

        result = [1, 2, 3, 4]

        result = [1, 2, 3, 4, 5, 6, 7, 8]

        */

    }

    var swap = function(array, index1, index2) {

        var aux = array[index1];

        array[index1] = array[index2];

        array[index2] = aux;

    }

}

var al = new ArrayList();
al.insert(8);
al.insert(7);
al.insert(6);
al.insert(5);
al.insert(4);
al.insert(3);
al.insert(2);
al.insert(1);

// [8, 7, 6, 5, 4, 3, 2, 1]
al.mergeSort(); // [1, 2, 3, 4, 5, 6, 7, 8]

console.log(al.toString());