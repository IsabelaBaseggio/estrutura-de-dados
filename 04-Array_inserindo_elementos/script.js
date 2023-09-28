// Inserindo elementos no Array

var numbers = [0,1,2,3,4,5,6,7,8,9]


    // inserindo manualmente por indice;
numbers[10] = 10;
// ou 
// numbers[numbers.length] = 10;
console.log(numbers); // [0,1,2,3,4,5,6,7,8,9, 10]

    // inserindo por métodos

    // push()
numbers.push(11); // insere mais um elemento no final do Array com o valor passado entre ()
console.log(numbers); // [0,1,2,3,4,5,6,7,8,9, 10, 11]



    // unshift
numbers.unshift(-1) // insere mais um elemento no começo do Array com o valor passado entre ()
console.log(numbers); // [-1, 0,1,2,3,4,5,6,7,8,9, 10, 11]
