    // Array bidimensional = Array de 2 dimensões

    // exemplo: Temperaturas médias semanais

    // sem Array bidimensional
var avgTempWeek1 = [33, 25.2, 19, 27, 23.4, 41.6, 25];
var avgTempWeek2 = [41, 29, 33, 21.2, 19.5, 17, 33.8];

    //  com Array bidimensional

var avgTempWeek = [];
avgTempWeek[0] = avgTempWeek1;
avgTempWeek[1] = avgTempWeek2;

console.log(avgTempWeek); // [[33, 25.2, 19, 27, 23.4, 41.6, 25], [41, 29, 33, 21.2, 19.5, 17, 33.8]]

    // Acessar valores de um Array bidimensional
console.log(avgTempWeek[0][3]); // 27
//acessa o elemento no índice 3 do Array no índice 0

console.log(avgTempWeek[1][5]); // 17
//acessa o elemento no índice 5 do Array no índice 1

    // iterando Array bidimensional

for(var i = 0; i < avgTempWeek.length; i++){ // acessa os Arrays de avgTempWeek
    
    for(var j = 0; j < avgTempWeek[i].length; j++){ // Acessa os elementos do Array acessado
        console.log(avgTempWeek[i][j])
    }

}