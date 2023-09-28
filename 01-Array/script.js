// armazena valores sequencialmente
// por padrão são valores do mesmo tipo (array tipado), mas pode ter mais de um tipo no mesmo array

// exemplo: array de temperaturas nos meses

    // SEM Array

    // uma variável para cada valor
var avgTempJan = 31.9;
var avgTempFev = 35.3;
var avgTempMar = 42;
var avgTempAbr = 38;
var avgTempMai = 25.5;

    // acesso pelo nome de cada variável
console.log(avgTempFev); // 35.3


    // COM Array

    // uma variavel genérica que conterá todos os valores
    // [] (conchetes vazios) - significa que a variável foi incializada vazia ou esvaziada caso ela já possuísse valores no código;
    // o array começa no índice 0
var avgTemp = [];

    // dentro do [] informa a posição que ficará aquele emento no array
avgTemp[0] = 31.9;
avgTemp[1] = 35.3;
avgTemp[2] = 42;
avgTemp[3] = 38;
avgTemp[4] = 25.5

    // acesso pela posição do array
console.log(avgTemp[1]) // 35.3

    // avgTempo tem 5 posições, ou seja, seu tamanho é 5, começa do 0 e vai ao 4