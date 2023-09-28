// Listas Ligadas (Linked List) - Métodos

function LinkedList() {
  var Node = function (element) {
    this.element = element;
    this.next = null;
  };

  var length = 0;
  /*
  1° append = 1

  2° append = 2

  3° append = 3
  */
  var head = null;
  /* 
  1° append:
  head = node (João, null)

  2° append:
  nead = (João, José, null)

  3° append:
  head = (João, José, Maria, null)
  */

  this.append = function (element) {
    /*
  1º append - João, null

  2° append - José, null

  3° append - Maira, null
  */
    // adiciona um elemento no final da lista
    var node = new Node(element) /*
    1º append - João, null

    2° append - José, null

    3° append - Maira, null
    */,
      current;
    /* como ele é declarado a cada append, sempre será Undefined
     */

    if (head === null) {
      head = node; /*
        head começa setado como null
        1º append -  é null então recebe node (João, null)

        2° append - head não é null (vai para o ELSE)

        3° append - head não é null (vai para o ELSE)
        */
    } else {
      /* A partir do 2° append head não está mais null */

      // head = node (João, null)
      current = head;
      /*
        2° append - current vira uma referência de head = node (João, null)
        current.element = João
        current.next = null

        3° append - current é uma referência de head = (João, José, null)
        current.element = João
        current.next = José, null

        */

      while (current.next) {
        // enquanto não for null
        /*
          2° append - null (não executa o WHILE)

          3° append - José, null
          */
        current = current.next;
        /*
            3° append - 
            current.element = João
            current.next = José, null
            logo current recebe o seu next
            current.element = José
            current.next = null (agora current.next é null - Sair do WHILE)
            */
      }

      current.next = node;
      /*
        2° append - José, null
        current.element = João
        current.next = José, null
        Altera o head, pois current é uma referência dele, logo:
        head.element = João
        head.next = José, { null }

        3° append - Maria, null
        current.element = José
        current.next = Maria, null
        Altera o head, pois current é uma referência dele, logo:
        head.element = João
        head.next = José, { Maria { null } }
        */
    }

    // por padrão inicia no 0
    length++;
    /*
    1° append = 1

    2° append = 2

    3° append = 3
    */
  };

  this.insert = function (position, element) {
    // adiciona um elemento em uma posição específica
  };

  this.removeAt = function (position) {
    // remove o elemento de uma posição específica
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

ll.print();

/*

Como se fosse

ll = {

  João,
  {
    José,
    {
      Maria,
      {
        null
      }
    }
  }

}

*/

// Explicando o porquê do head não permanecer o mesmo mesmo sendo declarado fora do append

var node1 = { element: "João", next: null };
var node2 = node1; // node2 é uma referência do node1, logo se eu alterar o node2, altero o node1 também, pois não é uma cópia

node2.next = { element: "José", next: null };

console.log(node1);
