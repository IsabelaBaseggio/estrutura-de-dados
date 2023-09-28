// Fila de Prioridades

// Quando o item é adicionado a fila ele recebe um valor de prioridade

function PriorityQueue() {
  var items = [];

  // Classe que cria o elemento da fila
  function QueueElement(element, priority) {
    this.element = element;
    this.priority = priority;
  }

  //  Adiciona o elemento na fila
  this.enqueue = function (element, priority) {

    // Instância a Classe que cria o elemento da fila
    var queueElement = new QueueElement(element, priority);
    
    // caso não entre na condicional de maior prioridade o elemento contianua false e é adicionado no final da fila
    var added = false;

    // para comparar a prioridade do elemento adicionado com os que já estão na fila
    for (var i = 0; i < items.length; i++) {

        // se a prioridade do elemento é maior (no caso quanto menor o número maior é a prioridade)
      if (queueElement.priority < items[i].priority) {

        // items.splice() - adicionando o elemento da posição específica na fila "items"
        // 1º parâmetro - em qual indice o elemento será adicionado na fila
        // 2º parâmetro = 0 - porque não se está cortando nenhum elemento da fila
        // 3º parâmetro - o elemento que está sendo adicionado no índice informado no 1º parâmetro
        // como consequência empurra uma posição todos os elementos após esse índice
        items.splice(i, 0, queueElement);

        // altera o added, pois seu valor padrão está como "false" e entraria na próxima condicional para ser adicionado no final da fila
        added = true;
        break;
      }
    }

    // condicional que verifica se added "false" caso não tenha foi alterado na condicional anterior caso tenha tido alguma prioridade com os elementos já existentes na fila
    if (!added) {

        // se continua "false", ou seja, não tem maior prioridade, é adicionado no final da fila
      items.push(queueElement);
    }
  };

  // Elimina o primeiro elemento da fila
  this.dequeue = function() {
    return items.shift();
  }

  // Imprime os elemento da fila e sua prioridade
  this.print = function() {
    for(var i = 0; i < items.length; i++){
        console.log(items[i].element + " " + items[i].priority)
    }
  }
}


var pqueue = new PriorityQueue();
pqueue.enqueue("Carlos", 3)
pqueue.enqueue("Ana", 1);
pqueue.enqueue("Lucas", 1);

pqueue.print(); // Ana 1
                // Lucas 1
                // Carlos 3
//  Lucas está depois de Ana, pois mesmo tendo o mesmo valor de prioridade, entrou na fila depois de Ana