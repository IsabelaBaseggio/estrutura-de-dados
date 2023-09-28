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

    var current = head,
          /*
      head = João {José {Maria {Mariana {Isabela}}}}
      current = head é igual a current = head.element
      logo
      current = João {José {Maria {Mariana {Isabela}}}}
      */
    index = 0;

    // element = Maria

    while(current) { // enquanto current não for nulo (current.element) // João José Maria

      if(element === current.element){
        // verirfica se o elemento atual da list é o elemento passado
        // false false true

        //se for retorna o index dele
        return index; // 2

      }// caso não seja sai do if
      

      // incrementa o index
      index++; // 1 2

      // pega o próximo elemento da lista
      current = current.next; // José Maria

    }

    // se não existir o elemento retorna -1 = false
    return -1;

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

console.log(ll.indexOf("Maria")); // 2

console.log(ll.indexOf("Bianca")); // -1