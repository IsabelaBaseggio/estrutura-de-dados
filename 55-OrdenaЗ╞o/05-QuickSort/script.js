    // Ordenação - Quick Sort

    // - parecido com Merge Sort
    // - segue a dinâmica do "dividir e conquistar"


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

        array = mergeSortRec(array);

    }

    var mergeSortRec = function(array) {

        var length = array.length;

        if(length === 1) {

            return array;

        }

        var mid = Math.floor(length / 2),
        left = array.slice(0, mid),
        right = array.slice(mid, length);

        return merge(mergeSortRec(left), mergeSortRec(right));

    }

    var merge = function(left, right) {

        var result = [],
        il = 0;
        ir = 0;

        while(il < left.length && ir < right.length) {

            if(left[il] < right[ir]) {

                result.push(left[li++]);

            } else {

                result.push(right[ir++]);

            }
            
        }

        while(il < left.length) {

            result.push(left[il++]);

        }

        while(ir < right.left) {

            result.push(right[ir++]);

        }

        return result;

    }

    this.quickSort = function() {
        // array = [8, 7, 6, 5, 4, 3, 2, 1]
        // array.length = 8 - 1 = 7

        quick(array, 0, array.length - 1);
        // array = [8, 7, 6, 5, 4, 3, 2, 1], 0, 7
        // 0 = 1° index do array
        // 7 = último index do array

    }

    var quick = function(array, left, right) {
        /*
        [8, 7, 6, 5, 4, 3, 2, 1], 0, 7

        [1, 2, 3, 4, 5, 6, 7, 8], 0, 3

        [1, 2, 3, 4, 5, 6, 7, 8], 0, 1
        
        */

        var index;
        // inicia a variável "index"
        
        if(array.length > 1) {
            // array.length = 8 > 1 (true)

            index = partition(array, left, right);
            /*
            index recebe o retorno da função "partition"

            partition([8, 7, 6, 5, 4, 3, 2, 1], 0, 7) -> i = 4
            index = 4

            partition([1, 2, 3, 4, 5, 6, 7, 8], 0, 3) -> i = 2
            index = 2

            partition([1, 2, 3, 4, 5, 6, 7, 8], 0, 1) -> i = 1
            index = 1
            
            
            */

            if(left < index - 1) {
                /*
                0 < 3 = 4 - 1 (true)

                0 < 1 = 2 - 1 (true)

                0 < 0 = 1 - 1 (false)
                
                */

                quick(array, left, index - 1);
                /*
                [1, 2, 3, 4, 5, 6, 7, 8], 0, 3

                [1, 2, 3, 4, 5, 6, 7, 8], 0, 1
                
                */

            }

            if(index < right) {
                /*
                1 < 1 (false) -> termina algoritmo
                array = [1, 2, 3, 4, 5, 6, 7, 8]
                
                */

                quick(array, index, right);

            }

        }

    }

    var partition = function(array, left, right) {
        /*
        [8, 7, 6, 5, 4, 3, 2, 1], 0, 7

        [1, 2, 3, 4, 5, 6, 7, 8], 0, 3

        [1, 2, 3, 4, 5, 6, 7, 8], 0, 1
        
        */

        var pivot = array[Math.floor((right + left) / 2)],
        /*
        pivot = 7 / 2 -> 3 -> array[3] = 5

        pivot = 3 / 2 -> 1 -> array[1] = 2

        pivot = 1 / 2 -> 0 -> array[0] = 1
        
        */
        i = left,
        /*
        i = 0

        i = 0

        i = 0
        
        */
        j = right;
        /*
        j = 7

        j = 3

        j = 1
        
        */

        while(i <= j) {
            /*
            0 <= 7 (true)
            1 <= 6 (true)
            2 <= 5 (true)
            3 <= 4 (true)
            4 <= 3 (false)

            0 <= 3 (true)
            2 <= 0 (false)

            0 <= 1 (true)
            1 <= 0 (false)

            */

            while(array[i] < pivot) {
                /*
                8 < 5 (false)
                7 < 5 (false)
                6 < 5 (false)
                5 < 5 (false)

                1 < 2 (true)
                2 < 2 (false)

                1 < 1 (false)
                
                */

                i++;
                /*
                i = 0 + 1 = 1

                */

            }

            while(array[j] > pivot) {
                /*
                1 > 5 (false)
                2 > 5 (false)
                3 > 5 (false)
                4 > 5 (false)

                4 > 2 (true)
                3 > 2 (true)
                2 > 2 (false)

                2 > 1 (true)

                */

                j--;
                /*
                j = 3 - 1 = 2
                j = 2 - 1 = 1

                j = 1 - 1 = 0
                
                */

            }

            if(i <= j) {
                /*
                0 <= 7 (true)
                1 <= 6 (true)
                2 <= 5 (true)
                3 <= 4 (true)

                1 <= 1 (true)

                1 <= 1 (true)

                1 <= 0 (false)
                
                */

                swap(array, i, j);
                /*
                [8, 7, 6, 5, 4, 3, 2, 1], 0, 7 -> retorna [1, 7, 6, 5, 4, 3, 2, 8]

                [1, 7, 6, 5, 4, 3, 2, 8], 1, 6 -> retorna [1, 2, 6, 5, 4, 3, 7, 8]
                
                [1, 2, 6, 5, 4, 3, 7, 8], 2, 5 -> retorna [1, 2, 3, 5, 4, 6, 7, 8]

                [1, 2, 3, 5, 4, 6, 7, 8], 3, 4 -> retorna [1, 2, 3, 4, 5, 6, 7, 8]

                [1, 2, 3, 4, 5, 6, 7, 8], 1, 1 -> retorna [1, 2, 3, 4, 5, 6, 7, 8]

                [1, 2, 3, 4, 5, 6, 7, 8], 1, 1 -> retorna [1, 2, 3, 4, 5, 6, 7, 8]

                */
                i++;
                /*
                i = 0 + 1 = 1
                i = 1 + 1 = 2
                i = 2 + 1 = 3
                i = 3 + 1 = 4

                i = 1 + 1 = 2

                i = 1 + 1 = 2
                
                */
                j--;
                /*
                j = 7 - 1 = 6
                j = 6 - 1 = 5
                j = 5 - 1 = 4
                j = 4 - 1 = 3

                j = 1 - 1 = 0

                j = 1 - 1 = 0
                
                */
    
            }

        }        

        return i;
        /*
        i = 4

        i = 2

        i = 2

        i = 1
        
        */

    }

    var swap = function(array, index1, index2) {
        /*
        [8, 7, 6, 5, 4, 3, 2, 1], 0, 7

        [1, 7, 6, 5, 4, 3, 2, 8], 1, 6

        [1, 2, 6, 5, 4, 3, 7, 8], 2, 5

        [1, 2, 3, 5, 4, 6, 7, 8], 3, 4

        [1, 2, 3, 4, 5, 6, 7, 8], 1, 1

        [1, 2, 3, 4, 5, 6, 7, 8], 1, 1
        
        */

        var aux = array[index1];
        /*
        aux = 8

        aux = 7

        aux = 6

        aux = 5

        aux = 2

        aux = 2
        
        */

        array[index1] = array[index2];
        /*
        array[0] = 1(array[7])

        array[1] = 2(array[6])

        array[2] = 3(array[5])

        array[3] = 4(array[4])

        array[1] = 2(array[1])

        array[1] = 2(array[1])

        */

        array[index2] = aux;
        /*
        array[7] = 8

        array[6] = 7

        array[5] = 6

        array[4] = 5

        array[1] = 2

        array[1] = 2
        
        */

        /*
        [1, 7, 6, 5, 4, 3, 2, 8]

        [1, 2, 6, 5, 4, 3, 7, 8]

        [1, 2, 3, 5, 4, 6, 7, 8]

        [1, 2, 3, 4, 5, 6, 7, 8]

        [1, 2, 3, 4, 5, 6, 7, 8]

        [1, 2, 3, 4, 5, 6, 7, 8]
        
        */

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

// colocar outros números e totalmente fora de ordem, até fora da ordem decrescente para redescrever como funciona o algoritmo
// [8, 7, 6, 5, 4, 3, 2, 1]
al.quickSort(); // [1, 2, 3, 4, 5, 6, 7, 8]

console.log(al.toString());