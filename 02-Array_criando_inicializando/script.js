    // iniciarlizar Array com [] vazio -> melhor prática e recomendado

var idades = []


    // inicializar Array com new Array() -> não é a melhor prática e não recomendado
    
    // inicializar Array com new Array() - sem tamanho e valores
var daysOfWeek = new Array();

daysOfWeek[0] = 'Sunday'

console.log(daysOfWeek[0]) // Sunday

    // saber tamanho do array
console.log(daysOfWeek.length) // 1



    // inicializando o Array com new Array() - com tamanho definido
var months = new Array(12);

console.log(months.length) // 12



    //  inicializando o Array com new Array() - já com valores
var seasons = new Array("Summer", "Fall", "Winter", "Spring");

console.log(seasons.length) // 4
console.log(seasons[2]) // Winter
