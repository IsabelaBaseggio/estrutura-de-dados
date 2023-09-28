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
  };

  this.removeAt = function (position) {
    // remove o elemento de uma posição específica

    // verificando se a posição é válida para executar o código de removeAt
    if(position > -1 && position < length){

      var current = head,
      /*
      head = João {José {Maria {Mariana {Isabela}}}}
      current = head é igual a current = head.element
      logo
      current = João {José {Maria {Mariana {Isabela}}}}
      */
      previous,
      // iniciar undefined
      index = 0;

      if(position === 0){ // caso seja para excluir o 1° elemento, head recebe o seguinte encadeamento de elementos

        head = current.next // José {Maria {Mariana {Isabela}}}

      } else {

        // o index é incrementado antes de verificar se é menor que position
        while(index++ < position){ // 1 2 3(sair do WHILE)

          previous = current; // João José
          current = current.next; // José Maria

        }

        // current = current.element = Maria {Mariana {Isabela}}
        // current.next = Mariana {Isabela}
        previous.next = current.next // Mariana {Isabela}

        /*

        como previous.elment = João {José {}}
        e previous.next = Mariana {Isabela}
        logo 
        previous = João {José {Mariana {Isabela}}}
        consequentemente eleminando current.element = Maria

        */
      
      }

      length-- // como elelimina 1 elemento, o tamanho da lista diminui

      // current.element = Maria
      return current.element // retorna o elemento eliminado

    } else {
      //retorna null caso o position passado não exista
      return null

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

ll.removeAt(2);

ll.print()
