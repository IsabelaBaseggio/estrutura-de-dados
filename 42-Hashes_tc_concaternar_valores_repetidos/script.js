    // Hashes - concatenar valores repetidos na mesma linha

// usar a classe Linked List também
// sobrescrever os metódos "put", "remove" e "get" da classe HashTable


function LinkedList() {
  var Node = function (element) {
    this.element = element;
    this.next = null;
  };

  var length = 0;
  var head = null;

  this.append = function (element) {
    // adiciona um elemento no final da lista
    var node = new Node(element),
      current;

    if (head === null) {
      head = node;
    } else {
      current = head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }

    length++;
  };

  this.insert = function (position, element) {
    // adiciona um elemento em uma posição específica

    if (position >= 0 && position <= length) {
      var node = new Node(element),
        current = head,
        previous,
        index = 0;

      if (position === 0) {
        node.next = current;
        head = node;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }

        node.next = current;

        previous.next = node;
      }

      length++;

      return true;
    } else {
      return false;
    }
  };

  this.removeAt = function (position) {
    // remove o elemento da posição passada
    if (position > -1 && position < length) {
      var current = head,
        previous,
        index = 0;

      if (position === 0) {
        head = current.next;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        previous.next = current.next;
      }

      length--;
      return current.element;
    } else {
      return null;
    }
  };

  this.remove = function (element) {
    // remove o elemento element

    var index = this.indexOf(element);
    
    return this.removeAt(index);

  };

  this.indexOf = function (element) {
    // retorna a posição do elemento

    var current = head,
      index = 0;

    while (current) {
      if (element === current.element) {
        return index;
      }

      index++;

      current = current.next;
    }

    return -1;
  };

  this.isEmpty = function () {
    // retorna se está vazia ou não a instância

    return length === 0;
  };

  this.size = function () {
    // retorna o tamanho da instância

    return length;
  };

  this.getHead = function() {
    // retornar o 1° elemento da lista

    return head;

  }

  this.toString = function () {
    // converte em string
    var current = head,
      string = "";

    while (current) {
      string += current.element + " ";
      current = current.next;
    }

    return string;
  };

  this.print = function () {
    // imprime no console
    console.log(this.toString());
  };
}

function HashTable(){

    var table = [];

    var ValuePair = function(key, value) {

       this.key = key;
       this.value = value;
       this.toString = function() {

        return "[" + this.key + " - " + this.value + "]";

       }

    }

    this.put = function(key, value) {

      // insere elemento com a chave passada

      // elemento que possui a mesma chave de um já inserido, é inserido na mesma linha através da Lista Linkada (Linked List)

        var position = loseloseHashCode(key); // pega valor númerico da chave conforme a função "loseloseHashCode()"

        if(table[position] === undefined) { // verifica se já não existe nenhum valor nessa posição

          // caso não exista, cria uma instância de LinkedList
            table[position] = new LinkedList();

        }

        // caso já exista algum valor na posição, é adicionado um nó no último item na lista com o novo item apensado
        // como se posição virasse um Array e fosse dado um "push()"
        // o novo item possui a chave informada e o valor
        table[position].append(new ValuePair(key, value));

    }

    // this.put = function(key, value) {

    //     // insere elemento com a chave passada

    //     var position = loseloseHashCode(key);

    //     console.log(position + " " + key);

    //     table[position] = value;

    // }

    this.remove = function(key){

        var position = loseloseHashCode(key); // pega valor númerico da chave conforme a função "loseloseHashCode()"

        if(table[position] !== undefined) { // verifica se o valor da posição possui algum valor

            var current = table[position].getHead(); // caso possua, current recebe a cabeça da lista da posição (o 1° elemento da lista)

            while(current.next) { // enquanto existir "current.next" executa o "WHILE"

                if(current.element.key === key) { // verifica se a chave do "current" atual

                    table[position].remove(current.element); // caso a chave seja igual, remove o elemento através do método "remove(element)" da classe Linked List

                    if(table[position].isEmpty()) { // verifica se o elemento que foi removido, era o único elemento naquela posição da tabela, chamando o método "isEmpty()" da classe Linked List

                        table[position] = undefined; // caso seja verdade, ou seja, a posição ficou sem nenhum elemento, a posição recebe "undefined"

                    }

                    return true; // retorna true, pois foi eliminado o elemento

                }

                current = current.next; // caso não seja o current atual, pega o próximo da posição, no "WHILE"

            }

            if(current.element.key === key) { // se o elemento da posição não possua "next", não entra no "WHILE" e entra nessa verificação direta da chave do elemento com a chave passada

                table[position].remove(current.element); // caso seja a mesma chave, remove o elemento através do método "remove(element)" da classe Linked List


                if(table[position].isEmpty()) {  // caso seja verdade, ou seja, a posição ficou sem nenhum elemento, a posição recebe "undefined"

                    table[position] = undefined; // caso seja verdade, ou seja, a posição ficou sem nenhum elemento, a posição recebe "undefined"

                }

                return true; // retorna true, pois foi eliminado o elemento

            }

        }

        return false; // retorna false, pois não foi excluído o elemento

    }

    // this.remove = function(key) {

    //     // remove elemento da chave passada

    //     table[loseloseHashCode(key)] = undefined;

    // }

    this.get = function(key) {

      // retorna o valor da chave passada

        var position = loseloseHashCode(key); // pega valor númerico da chave conforme a função "loseloseHashCode()"

        if(table[position] !== undefined) { // verifica se o valor da posição possui algum valor

          // caso possua, current recebe a cabeça da lista da posição (o 1° elemento da lista)
            var current = table[position].getHead();

            while(current.next) { // while percorre a lista enquanto existir um próximo nó na lista da posição não for null

                if(current.element.key === key) { // se a chave passada for igual a chave do elemento selecionado no "while"

                  // retorna o valor do elemento
                    return current.element.value;

                }

                // se a chave não for igual, o current recebe o próximo nó para a verificação
                current = current.next;

            }

            // caso o current.next seja "null", não entra na condição do "while" e, sim, para essa
            // verifica se a chave do elemento for igual a chave passada
            if(current.element.key === key) {

              // se for igual retorna o valor do elemento
                return current.element.value;

            }

        }
        
        // se a não possui valor na chave passada retorna "undefined"
        return undefined;

    }    

    // this.get = function(key){

    //     // retorna o valor da chave passada

    //     return table[loseloseHashCode(key)];

    // }

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
hash.put("Carmem", "carmem@email.com");
hash.put("Vitor", "vitor@email.com");
hash.put("Maira", "maira@email.com");
hash.put("Salete", "salete@email.com");

hash.print();

/*

2 [Bela - bela@email.com] 
5 [Carmem - carmem@email.com] 
7 [Vivi - vivi@email.com] 
8 [Rafa - rafa@email.com] 
9 [Maria - maria@email.com] [Maira - maira@email.com] (possuem a mesma posição, logo fica uma lista na posição)
11 [Moacir - moacir@email.com] 
12 [Jane - jane@email.com] 
14 [Vitor - vitor@email.com] [Salete - salete@email.com] (possuem a mesma posição, logo fica uma lista na posição)
15 [José - jose@email.com] 
16 [Carol - carol@email.com] 
27 [Day - day@email.com] 
36 [Vini - vini@email.com] 

*/

console.log(hash.get("Marcos")); // undefined

console.log(hash.get("Maira")); // maira@email.com

console.log(hash.get("Bela")); // bela@email.com

console.log(hash.remove("João")); // false

console.log(hash.remove("Salete")); // true

console.log(hash.get("Salete")); // undefined

hash.print();
/*

2 [Bela - bela@email.com] 
5 [Carmem - carmem@email.com] 
8 [Rafa - rafa@email.com] 
9 [Maria - maria@email.com] [Maira - maira@email.com] 
12 [Jane - jane@email.com] 
14 [Vitor - vitor@email.com] 

*/