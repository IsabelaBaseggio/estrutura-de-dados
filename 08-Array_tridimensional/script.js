    // Array tridimensionais = Array de 3 dimensões

    // exemplo: Temperaturas médias semanais

var month = [];

var firstWeeks = [];
var lastWeeks = [];

var avgTempWeek1 = [33, 25.2, 19, 27, 23.4, 41.6, 25];
var avgTempWeek2 = [41, 29, 33, 21.2, 19.5, 17, 33.8];

var avgTempWeek3 = [13, 45.7, 18, 16, 13.4, 21.5, 15];
var avgTempWeek4 = [51, 9, 23, 26.2, 9.4, 17.4, 31.8];

firstWeeks = [avgTempWeek1, avgTempWeek2];
lastWeeks = [avgTempWeek3, avgTempWeek4];

month = [firstWeeks, lastWeeks];

console.log(month); // [
                    //   [ 
                    //    [33, 25.2, 19, 27, 23.4, 41.6, 25],
                    //    [41, 29, 33, 21.2, 19.5, 17, 33.8]
                    //   ],
                    //   [ 
                    //    [13, 45.7, 18, 16, 13.4, 21.5, 15], 
                    //    [51, 9, 23, 26.2, 9.4, 17.4, 31.8]
                    //   ]
                    // ]

    // Acessando elementos no Array tridimensional
console.log(month[1][1][4]); // 9.4
// acessa o Array no índice 1 de month, acessa o Array índice 1 desse Array acessado e o seu 4 índice

    // Iterando Array tridimensional

for(var i = 0; i < month.length; i++){ // acessa os Arrays primários de month
// acessa o tipo das semanas: as primeiras ou últimas semanas

    for(var j = 0; j < month[i].length; j++){ // acessa os Arrays dentro do Array acessado
    // acessa a semana específica conforme a tipo no último for

        for(var k = 0; k < month[i][j].length; k++){ // acessa os elementos de cada Array acessado no último for
        // acessa as temperaturas da semana acessada

            console.log(month[i][j][k]);

        }

    }

}