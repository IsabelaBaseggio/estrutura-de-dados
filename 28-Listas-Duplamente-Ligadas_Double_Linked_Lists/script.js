// LISTAS DUPLAMENTE LIGADAS - DOUBLY LINKED LISTS (DLL)

// Coleção sequencial de elementos
// Os elementos não são alocados de forma contínua da mémória, ou seja, não possuem índice de posição (endereço na memória)
// Cadas elemento possui um nó
// O nó é um objeto que armazena 3 coisas:
// O valor do elemento
// Referência ao próximo elemento (ponteiro)
// Referência ao elemento anterior (ponteiro)

// Direfente do Linked List simples que só tem um ponteiro que aponta para o próximo elemento, o Doubly Linked List possui dois 2 ponteiros, onde um aponta para o próximo elemento e o outro aponta para o elemento anterior

// se usa no formato de Classe, no caso de JS é em Objetos

// estrutura da Classe de Lista Ligada
// Listas Ligadas (Linked List) - Métodos

function DoublyLinkedList() {
  var Node = function (element) {
    this.element = element;
    this.next = null; // próximo nó
    this.prev = null; // nó anterior
  };

  var length = 0;
  var head = null;
  var tail = null; // cauda

  this.append = function (element) {
    // adiciona um elemento no final da lista
    var node = new Node(element),
      current;

    if (head === null) {
      head = node;
      tail = node; // alterações no append // tail será o último elmento da lista
    } else {
      current = head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
      tail = node; // alterações no append // tail será o último elmento da lista
    }

    length++;
  };

  this.insert = function (position, element) {
    // DLL
    // adiciona um elemento em uma posição específica
  };

  this.removeAt = function (position) {
    // DLL
    // remove o elemento da posição passada
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

  this.getHead = function () {
    // retornar o 1° elemento da lista

    return head.element;
  };

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

