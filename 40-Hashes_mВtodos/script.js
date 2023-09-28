    // Hashes

function HashTable(){

    var table = [];

    this.put = function(key, value) {

        // insere elemento com a chave passada

        var position = loseloseHashCode(key); // cria a posição númerica do elemento através da função "loseloseHashCode()"

        console.log(position + " " + key); 
        /*
        9 Maria
        12 Jane
        2 Bela
        */

        // insere no array "table" o valor no índice / posição passada
        table[position] = value;

    }

    this.remove = function(key) {

        // remove elemento da chave passada

        // coloca o valor "undefined" no array "table", na posição dentro de [], chamando a função "loseloseHashCode()"" que pega a posição numérica do elemento
        table[loseloseHashCode(key)] = undefined;

    }

    this.get = function(key){

        // retorna o valor da chave passada

        // retorna o valor no array "table", na posição passada dentro das [], que chama a função "loseloseHashCode()" que pega a posição numérica do elemento
        return table[loseloseHashCode(key)];

    }

    var loseloseHashCode = function(key) {

        // retorna hash (um valor numérico)

        var hash = 0;

        // percorre a chave(string)
        for(var i = 0; i < key.length; i++){

            // charCodeAt(), retorna o valor do caractere passado como argumeto
            hash += key.charCodeAt(i); // soma os caracteres da chave, cada caractere possui um valor conforme a tabela ascii(que é uma tabela de representação numérica de caracteres)

        }

        return hash % 37; // retorna o resto da soma dos caracteres dividido por 37

    }

};

var hash = new HashTable();

hash.put("Maria", "maria@email.com");
hash.put("Jane", "jane@email.com");
hash.put("Bela", "bela@email.com");

console.log(hash.get("Jane")); // jane@email.com

console.log(hash.get("José")); // undefined

hash.remove("Bela");

console.log(hash.get("Bela")); // undefined