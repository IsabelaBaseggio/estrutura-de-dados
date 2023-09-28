    // Acessando elementos do Array com Iteração

var seasons = ["Summer", "Fall", "Winter", "Spring"];

for(var i = 0; i < seasons.length; i++){
    console.log(seasons[i]);// Summer
                            // Fall
                            // Winter
                            // Spring
}

    // Exemplo : Fibonacci

var fibonacci = []
fibonacci[0] = 0
fibonacci[1] = 1
fibonacci[2] = 1

for(var i = 3; i < 20; i++){

    fibonacci[i] = fibonacci[i - 1] + fibonacci[i -2];

}

console.log(fibonacci); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181]