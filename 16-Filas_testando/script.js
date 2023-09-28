    // FILA - Métodos

    function Queue() {

        var items = [];
    
        this.enqueue = function(element) {
    
            // adiciona um novo item
            items.push(element);
    
        }
    
        this.dequeue = function() {
    
            // remove um item
            items.shift();
        }
    
        this.front = function() {
    
            // retorna o primeiro elemento da fila
            return items[0];
    
        }
    
        this.isEmpty = function() {
    
            // verifica se a fila está vazio ou não
            return items.length === 0;
        }
    
        this.size = function() {
    
            // retorna o tamanho da fila
            return items.length;
    
        }
    
        this.print = function() {
    
            // imprime a fila no console
            console.log(items.toString());
        }
    }

var fila = new Queue();

fila.enqueue("Carlos"); // adicionar "Carlos" à fila
fila.enqueue("Ana"); // adicionar "Ana" à fila
fila.enqueue("Lucas"); // adicionar "Lucas" à fila

fila.print(); // Carlos,Ana,Lucas

fila.dequeue(); // tira o primeiro da fila

fila.print(); // Ana,Lucas

console.log(fila.front()); // Ana

console.log(fila.size()); // 2

console.log(fila.isEmpty()); // false