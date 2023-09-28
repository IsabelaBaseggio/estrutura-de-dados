    // DLL - Métodos - Inster


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
  
    this.insert = function (position, element) { // DLL
      // adiciona um elemento em uma posição específica
      if(position >= 0 && position <= length){
        var node = new Node(element),
        current = head,
        /*
        1° insert head = João {José {Maria {}}}

        2° insert head = Carlos {João {José {Maria {}}}}

        3° inset head = Carlos {João {José {Maria {Lucas {}}}}}
        
        */
        previous, // undefined
        index = 0;

        // 1° insert
        // position = 0, element = {} -Calos- {}
        if(position === 0) {

          if(!head) { // head = João... (sai dessa condicional)

            head = node;
            tail = node;

          } else {
            // node = Carlos

            node.next = current;
            // Carlos {João ...}

            current.prev = node;
            /*
            {Calos} João... 
            */

            head = node;
            /*
            Carlos {João...}
            */

          }

          // 2° insert
          // position = 4, element = Lucas
        } else if(position === length) {
          // current = Carlos...
          // tail = ...Maria
          // node = Lucas

          current = tail;
          /*
          ...Maria {}
          */ 

          current.next = node;
          /*
          ...Maria {Lucas}
          */

          node.prev = current;
          /*
          {...Maria} Lucas
          */

          tail = node;
          /*
          ...Lucas
          */

        } else {
          // 3° insert
          // position = 2, element = Ana

          // current = Carlos...

          while(index++ < position) { // 1 2 

            previous = current; // Carlos 
            current = current.next; // João

          }

          // node = Ana

          node.next = current;
          /*
          Ana {João...}
          */

          previous.next = node;
          /*
          Carlos {Ana...}
          */
          
          current.prev = node;
          /*
          {Ana} João...
          */

          node.prev = previous;
          /*
          {Carlos} Ana...
          */

        }

        // incrementa o tamanho da lista
        length++;

        // retonra true pois foi possível fazer o insert
        return true;

      } else {

        // retorna false pois não foi possível fazer o insert
        return false;

      }
  
    };
  
    this.removeAt = function (position) { // DLL
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
  
    this.getHead = function() {
      // retornar o 1° elemento da lista
  
      return head.element;
  
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
  

var dll = new DoublyLinkedList();

dll.append("João");
dll.append("José");
dll.append("Maria");

dll.print(); // João José Maria 

dll.insert(0, "Carlos");

dll.print(); // Carlos João José Maria 

dll.insert(4, "Lucas");

dll.print(); // Carlos João José Maria Lucas

dll.insert(2, "Ana");

dll.print(); // Carlos João Ana José Maria Lucas