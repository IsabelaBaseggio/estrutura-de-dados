// DLL - Métodos - removeAt

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
      tail = node;
    } else {
      current = head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
      tail = node;
      tail.prev = current;
    }

    length++;
  };

  this.insert = function (position, element) {
    // DLL
    // adiciona um elemento em uma posição específica
    if (position >= 0 && position <= length) {
      var node = new Node(element),
        current = head,
        previous,
        index = 0;

      if (position === 0) {
        if (!head) {
          head = node;
          tail = node;
        } else {
          node.next = current;

          current.prev = node;

          head = node;
        }
      } else if (position === length) {
        current = tail;

        current.next = node;

        node.prev = current;

        tail = node;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }

        node.next = current;

        previous.next = node;

        current.prev = node;

        node.prev = previous;
      }

      length++;

      return true;
    } else {
      return false;
    }
  };

  this.removeAt = function (position) {
    // DLL
    // remove o elemento da posição passada

    if(position > -1 && position < length){

      var current = head, //João... José Maria Carlos Lucas Ana
      // José... Maria Carlos Lucas Ana
      // José... Maria carlos Lucas
      previous, // undefined
      index = 0;


    // 1° removeAt
    // position = 0 = João
      if(position === 0) { // true

        head = current.next; // José

        if(length === 1) { // no caso length é 6, então sai dessa condição

          tail = null

        } else {

          head.prev = null // {null} Jose...

        }
        
      // 2° removeAt
      // position = 4 = Ana
      // length = 5
      } else if(position === length - 1) { // 4 = 5 - 1, executa código
        // current = José... Maria Carlos Lucas Ana
        // tail = Ana

        current = tail; // Ana

        tail = current.prev; // Lucas

        tail.next = null; // Ana {null}


        // 3° removeAt
        // position = 2 = Carlos
        // length = 4
      } else {
        // current = José... Maria Carlos Lucas

        while(index++ < position) { // 0 1 2(sai do WHILE)

          previous = current; // José... Maria...

          current = current.next; // Maria ... Carlos...
      
        }

        previous.next = current.next;
        /*
        ... Maria {Lucas}
        */

        current.next.prev = previous;
        /*
        {Maria} Lucas {null}
        */

      }

      // decrementa o tamanho da lista
      length--;

      // retorna o elemento removido
      return current.element;

    } else {

      // retorna null, pois a posição não existe
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

var dll = new DoublyLinkedList();

dll.append("João");
dll.append("José");
dll.append("Maria");
dll.append("Carlos");
dll.append("Lucas");
dll.append("Ana");

dll.print(); // João José Maria Carlos Lucas Ana

dll.removeAt(0); // João

dll.print(); // José Maria Carlos Lucas Ana

dll.removeAt(4); // Ana

dll.print(); // José Maria Carlos Lucas

dll.removeAt(2); // Carlos

dll.print(); // José Maria Lucas