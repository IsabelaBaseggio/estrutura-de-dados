// Removendo elementos no Array - de forma epecífica

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]


    // splice() - corta uma fatia do Array
numbers.splice(2, 4); // remove 4 elementos começando pelo índice 2
// 1º parametro = onde começa a remoção (índice)
// 2° parâmentro = quantos elementos serão removidos
console.log(numbers); // [0, 1, 6, 7, 8, 9, 10, 11]


// Inserindo elementos no Array - de forma epecífica
numbers.splice(2, 0, 2, 3, 4, 5); // insere 4 elementos começando no índice 2
// 1º parâmetro = onde começa a inserção (índice)
// 2° parâmentro = quantos elementos serão removidos (no caso 0)
//  após o 2º parâmetros se passo os elementros que serão insersidos na ordem que deseja que sejam inseridos (NÃO tem limite de elementos)
console.log(numbers); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
