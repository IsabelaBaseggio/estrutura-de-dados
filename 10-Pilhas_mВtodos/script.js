    // PILHA - Métodos

function Stack(){

    var items = []

    this.push = function(element){

        // adiciona um novo item à pilha
        items.push(element);

    }

    this.pop = function(){

        // remove o item do topo da pilha
        return items.pop();

    }

    this.peek = function(){

        // retorna o elemento qu está no topo da pinha
        return items[items.length - 1];

    }

    this.isEmpty = function() {

        // informa se a pilha está vazia ou não
        return items.length === 0;

    }

   this.clear = function(){

    // limpa a pinha
        items = [];

   } 

   this.size = function(){

    // limpa a pilha
    return items.length;

   }

   this.print = function(){

    // imprimi a pilha no console
    console.log(items.toString()); // imprime items como uma string

   }

}