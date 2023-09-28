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
      // head = João {José {Maria {Null}}}
      // logo
      // current = head é igual current = head.element (João)
      string = "";
    // inicia varia

    while (current) {
      /* 
      1° João
      2° José
      3° Maria
      4° Null = sai do WHILE
      */
      string += current.element + " ";
      /* 
      1° "João " 
      2° "João José "
      3° "João José Maria "
      */
      current = current.next;
      /*
      1° José
      2° Maria
      3° Null
      */
    }

    return string; // "João José Maria "
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

ll.print();
