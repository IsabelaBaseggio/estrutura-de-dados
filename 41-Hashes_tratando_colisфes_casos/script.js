    // Hashes - Casos (valores repetidos)

function HashTable(){

    var table = [];

    this.put = function(key, value) {

        // insere elemento com a chave passada

        var position = loseloseHashCode(key);

        console.log(position + " " + key);

        table[position] = value;

    }

    this.remove = function(key) {

        // remove elemento da chave passada

        table[loseloseHashCode(key)] = undefined;

    }

    this.get = function(key){

        // retorna o valor da chave passada

        return table[loseloseHashCode(key)];

    }

    var loseloseHashCode = function(key) {

        // retorna hash (um valor numérico)

        var hash = 0;

        for(var i = 0; i < key.length; i++){

            hash += key.charCodeAt(i);

        }

        return hash % 37;

    }

    this.print = function() {

        for(var i = 0; i < table.length; i++) {

            if(table[i] !== undefined) {

                console.log(i + " " + table[i]);

            }

        }

    }

};

var hash = new HashTable();

hash.put("Maria", "maria@email.com");
hash.put("Jane", "jane@email.com");
hash.put("Bela", "bela@email.com");
hash.put("Rafa", "rafa@email.com");
hash.put("Moacir", "moacir@email.com");
hash.put("Vivi", "vivi@email.com");
hash.put("Vini", "vini@email.com");
hash.put("Carmem", "carmem@email.com");
hash.put("José", "jose@email.com");
hash.put("Carol", "carol@email.com");
hash.put("Day", "day@email.com");
hash.put("Vitor", "vitor@email.com");
hash.put("Maira", "maira@email.com");
hash.put("Salete", "salete@email.com");

console.log(hash);
/*
9 Maria - n° repetido (Maira)
12 Jane
2 Bela
8 Rafa
11 Moacir
7 Vivi
36 Vini
5 Carmem
15 José
16 Carol
27 Day
14 Vitor - n° repetido (Salete)
9 Maira - n° repetido (Maria)
14 Salete - n° repetido (Vitor)
*/

hash.print();
/*
2 bela@email.com
5 carmem@email.com
7 vivi@email.com
8 rafa@email.com
9 maira@email.com
11 moacir@email.com
12 jane@email.com
14 salete@email.com
15 jose@email.com
16 carol@email.com
27 day@email.com
36 vini@email.com

Como é um Array, ele imprime ordenado

Os que repetem os número, Maria / Maira e Vitor / Salete, só aparece o último adicionado no Array porque ele sobrescreve o valor que tinha antes, pois não tem como ter 2 valores no mesmo índice
*/