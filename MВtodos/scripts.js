// Métodos JS

// fill() - preenche todo o Array com o que for passdo dentro
var arrayPreenchido = new Array(5);
arrayPreenchido.fill("Hello");
console.log(arrayPreenchido); // ['Hello', 'Hello', 'Hello', 'Hello', 'Hello']

// toString() - tranforma um Array em uma string separada por vírgula
var arrayToString = ["Hello", "World", "I", "am", "Isa!"];
console.log(arrayToString.toString()); // Hello,World,I,am,Isa!

// join() - transforma o Array em um string, porém, pode passar como parâmetro um delimitador entre os elementos
// se não passar nada como parâmetro e nem deixar espaço em branco, o delimitador é uma vírgula(,) por padrão
var arrayToString = ["Hello", "World,", "I", "am", "Isa!"];
console.log(arrayToString.join()); // Hello,World,,I,am,Isa! -> padrão

console.log(arrayToString.join("-")); // Hello-World,-I-am-Isa!

console.log(arrayToString.join(" ")); // Hello World, I am Isa!

// Referenciar um Array, ou seja, não é uma copia, pois se eu fazer uma mudança na referência o original também irá mudar
var animais = ["elefante", "macaco", "cobra", "leão"];
var animaisReferencia = animais;
animaisReferencia[1] = "formiga";
console.log(animais); // [ 'elefante', 'formiga', 'cobra', 'leão' ]
console.log(animaisReferencia); // [ 'elefante', 'formiga', 'cobra', 'leão' ]

// Copiar Array
var cidades = ["Uberlândia", "Natal", "Gramado", "Feliz"];
var cidadesCopia = Array.from(cidades);
cidadesCopia[2] = "Sorocaba";
console.log(cidades); // [ 'Uberlândia', 'Natal', 'Gramado', 'Feliz' ]
console.log(cidadesCopia); // [ 'Uberlândia', 'Natal', 'Sorocaba', 'Feliz' ]



// splice() - corta uma fatia do Array

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

numbers.splice(2, 4); // remove 4 elementos começando pelo índice 2
// 1º parametro = onde começa a remoção (índice)
// 2° parâmentro = quantos elementos serão removidos
console.log(numbers); // [0, 1, 6, 7, 8, 9, 10, 11]

// splice() - Inserindo elementos no Array - de forma epecífica
numbers.splice(2, 0, 2, 3, 4, 5); // insere 4 elementos começando no índice 2
// 1º parâmetro = onde começa a inserção (índice)
// 2° parâmentro = quantos elementos serão removidos (no caso 0)
//  após o 2º parâmetros se passo os elementros que serão insersidos na ordem que deseja que sejam inseridos (NÃO tem limite de elementos)
console.log(numbers); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
