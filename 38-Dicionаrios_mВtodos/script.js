    // Dicioários - Métodos

function Dictionary(){

    var items = {};

    this.set = function(key, value) {

        // adiciona um novo valor ao dicionário

        items[key] = value; // dentro de [] é o nome da chave que recebe o value como valor

    };

    this.delete = function(key){

        // remove o valor do dicionário usando a chave

        if(this.has(key)){ // chama a função para verificar se possui a chave para ser excluida

            delete items[key]; // se existe a chave ela é excluída

            return true; // retorna "true", pois foi possível excluir

        }

            return false; // retorna "false", pois a chave não existe, logo não excluiu nenhum valor

    };

    this.has = function(key){

        // verifica se a chave esciste e retorna um booleano

        return items.hasOwnProperty(key); // chama a função hasOwnProperty, nativa do JS para verificar se existe a chave passada como argumento

    };

    this.get = function(key){

        // devolve um valor específico a partir da chave

        return this.has(key) ? items[key] : undefined; // ternário que verifica se a chave existe para então devolver o valor da chave, se não existe devolve "undefined"

    };

    this.clear = function(){

        // remove todos os items do dicionário

        items = {}; // esvazia "items"

    };


    this.size = function() {

        // retorna a quantidade de elementos contidos no dicioário

        return Object.keys(items).length; // chama a função nativa de Object, keys, passando como argumento o objeto, essa função retorna um array com todos as chaves do objeto, e length informa o tamanho do array, logo a quantidade de chaves do objeto

    };


    this.keys = function(){

        // devolve um array com todas as chaves do dicionário

        return Object.keys(items); // chama a função nativa de Object, keys, passando como argumento o objeto, essa função retorna um array com todos as chaves do objeto
        
    };

    this.values = function(){

        // devolve um arrau com todos os valores do dicionário

        var values = [], // inicia um array vazio dos valores
        keys = Object.keys(items); // recebe um array com todas as chaves do objeto

        for(var i = 0; i < keys.length; i++){ // itera o array com as chaves

            values.push(items[keys[i]]); // adiciona em "values" os valores de "items", conforme a chave iterada

        }

        return values; // retornar o array com os valores do objeto

    };

    this.getItems = function() {

        // retorna objeto inteiro (chaves e valores)

        return items; // retorna o objeto com chaves e valores

    }

};

var dictionary = new Dictionary();


// adicionando valores no objeto
dictionary.set("Maria", "maria@email.com");
dictionary.set("Jane", "jane@email.com");
dictionary.set("Bela", "bela@email.com");



// retornar objeto
console.log(dictionary.getItems()); /* {
                                         Maria: 'maria@email.com',
                                         Jane: 'jane@email.com',
                                         Bela: 'bela@email.com'
                                        } */



// retorna array com as chaves do objeto
console.log(dictionary.keys()); // [ 'Maria', 'Jane', 'Bela' ]



// retorna array com os valores do objeto
console.log(dictionary.values()); // [ 'maria@email.com', 'jane@email.com', 'bela@email.com' ]



// verificando se existe tal chave
console.log(dictionary.has("Bela")); // true

console.log(dictionary.has("Rafa")); // false



// retorna tamanho do objeto
console.log(dictionary.size()); // 3



// retorna um valor específico confome a chave
console.log(dictionary.get("Maria")); // maria@email.com

console.log(dictionary.get("Joe")); // undefined



// deleta um valor específico usando a chave
dictionary.delete("Bela");

console.log(dictionary.getItems()); /*
{ Maria: 'maria@email.com', Jane: 'jane@email.com' }
*/

console.log(dictionary.keys()); // [ 'Maria', 'Jane' ]

console.log(dictionary.values()); // [ 'maria@email.com', 'jane@email.com' ]

console.log(dictionary.has("Bela")); // false

console.log(dictionary.get("Bela")); // undefined

console.log(dictionary.size()); // 2



// esvazia o objeto
dictionary.clear();

console.log(dictionary.getItems()); // {}

console.log(dictionary.keys()); // []

console.log(dictionary.values()); // []

console.log(dictionary.has("Maria")); // false

console.log(dictionary.has("Jane")); // false

console.log(dictionary.get("Maria")); // undefined

console.log(dictionary.get("Jane")); // undefined

console.log(dictionary.size()); // 0