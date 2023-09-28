// RECURSIVIDDADE

// exemplo: Fatorial

function fatorial(n){ // 6 // 5 // 4 // 3 // 2 // 1

    if(n === 1) { // se o valor de "n" for igual a 1 retorna o valor de n
    // 6 = false
    // 5 = false
    // 4 = false
    // 3 = false
    // 2 = false
    // 1 = true

        return n;

    } else {

        return n * fatorial(n - 1);
        /*
        
        retorna o valor de "n" multiplicado pelo valor do resultado da função "fatorial(n - 1)

        ou seja, a própria função se chama até atingir determinada condição, ou seja, ela só parará de se auto chamar quando entrar na condição de "(n === 1)"

        execução
        1° (fatorial de 6) = 6 * falorial(5)
        2° (fatorial de 5) = 5 * fatorial(4)
        3° (fatorial de 4) = 4 * fatorial(3)
        4° (fatorial de 3) = 3 * fatorial(2)
        5° (fatorial de 2) = 2 * fatorial(1), a partir daqui começa a retornar número, pois entra na condição (n === 1), e não a chamada da própria função

        fatorial(1) = 1
        logo (fatorial de 2) -> 2 * 1 = 2

        fatorial(2) = 2
        logo (fatorial de 3) -> 3 * 2 = 6

        fatorial(3) = 6
        logo (fatorial de 4) -> 4 * 6 = 24

        fatorial(4) = 24
        logo (fatorial de 5) -> 5 * 24 = 120

        fatorial(5) = 120
        logo (fatorial de 6) -> 6 * 120 = 720
        
        */

    }

}

console.log(fatorial(6));