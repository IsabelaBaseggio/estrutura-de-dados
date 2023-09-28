    // LISTAS LIGADAS - LINKED LISTS

// Coleção sequencial de elementos
// Os elementos não são alocados de forma contínua da mémória, ou seja, não possuem índice de posição (endereço na memória)
// Cadas elemento possui um nó
// O nó é um objeto que armazena 2 coisas:
    // O valor do elemento
    // Referência ao próximo elemento (ponteiro)

// se usa no formato de Classe, no caso de JS é em Objetos


// estrutura da Classe de Lista Ligada
function LinkedList() {

    var Node = function(element) {

        this.element = element;
        this.next = null;

    }

    var length = 0;
    var head = null;

    this.append = function(element) {

        // adiciona um elemento no final da lista

    }

    this.insert = function(position, element) {

        // adiciona um elemento em uma posição específica

    }

    this.removeAt = function(position) {

        // remove o elemento de uma posição específica

    }

    this.remove = function(element) {

        // remove o elemento element

    }

    this.indexOf = function(element) {

        // retorna a posição do elemento

    }

    this.isEmpty = function() {

        // retorna se está vazia ou não a instância

    }

    this.size = function() {

        // retorna o tamanho da instância

    }

    this.toString = function() {

        // converte em string

    }

    this.print = function() {

        // imprime no console

    }

}