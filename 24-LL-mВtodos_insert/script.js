// Listas Ligadas (Linked List) - Métodos

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

    if (position >= 0 && position <= length) { // verifica se a posição passada é válida conforme o tamanho da lista

      var node = new Node(element), // instância um nó para o elemento passado
      current = head,
      /*
      head = João {José {Maria {Mariana {Isabela}}}}
      current = head é igual a current = head.element
      logo
      current = João {José {Maria {Mariana {Isabela}}}}
      */
        previous, // undefined
        index = 0;

      if (position === 0) { // caso seja para adicionar na 1° primeira posição, head recebe o seguinte encadeamento de elementos

        node.next = current; // node.next = João {José {Maria {Mariana {Isabela}}}}
        head = node; // head = Carmem {João {José {Maria {Mariana {Isabela}}}}}

      } else {
        while (index++ < position) { // 1 2

          previous = current; // João José
          current = current.next; // José Maria
        }

        node.next = current;
        /*
        current = Maria {Mariana {Isabela}}
        logo
        node.next = Maria {Mariana {Isabela}}
        logo
        */

        previous.next = node;
        /*
        node.element = Carmem
        node.next = Maria {Mariana {Isabela}}
        logo
        node = Carmem {Maria {Mariana {Isabela}}}
        e
        previous = João {José {}}
        previous.element = José
        previous.next = Carmem {Maria {Mariana {Isabela}}}

        logo

        previous = João{José {Carmem {Maria {Mariana {Isabela}}}}}

        */


      }

      // aumeta o tamanho da lista
      length++;

      // retorna true porque foi possível fazer o aumento
      return true;

    } else {

      // retorna false porque não foi possível fazer o aumento
      return false;
    }
  };

  this.removeAt = function (position) {
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
  };

  this.indexOf = function (element) {
    // retorna a posição do elemento
  };

  this.isEmpty = function () {
    // retorna se está vazia ou não a instância
  };

  this.size = function () {
    // retorna o tamanho da instância
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

var ll = new LinkedList();
ll.append("João");
ll.append("José");
ll.append("Maria");
ll.append("Mariana");
ll.append("Isabela");

ll.print();

ll.insert(2, "Carmem"); 

ll.print(); // João José Carmem Maria Mariana Isabela

ll.insert(0, "Jane");

ll.print(); // Jane João José Carmem Maria Mariana Isabela 