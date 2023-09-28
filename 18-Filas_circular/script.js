// Fila circular

// Pega o primeiro termo da fila e coloca no final

function Queue() {
  var items = [];

  this.enqueue = function (element) {
    // adiciona um novo item
    items.push(element);
  };

  this.dequeue = function () {
    // remove um item
    return items.shift();
  };

  this.front = function () {
    // retorna o primeiro elemento da fila
    return items[0];
  };

  this.isEmpty = function () {
    // verifica se a fila está vazio ou não
    return items.length === 0;
  };

  this.size = function () {
    // retorna o tamanho da fila
    return items.length;
  };

  this.print = function () {
    // imprime a fila no console
    console.log(items.toString());
  };
}

// Exemplo jogo da Batata Quente

function hotPopato(nameList, num) { // names, 7
  // nameList = array de termos
  // num = número de "passes" da "batata quente"

  // cria uma nova instância de Queue (fila)
  var queue = new Queue();

  // adciciona os elementos de "nameList" na fila instanciada "queue"
  for (var i = 0; i < nameList.length; i++) {
    queue.enqueue(nameList[i]);
  }


  // variável declarada vazia padrão
  var eliminated = "";

  // enquanto o tamanho da fila é maior que 1 executa o código
  while (queue.size() > 1) {
    // enquanto "i" for menor que o número passado "num" executa o código
    for (var i = 0; i < num; i++) {
      // pega o primeiro elemento da fila e coloca no final da fila até chegar ao "num" de "passes" passado
      queue.enqueue(queue.dequeue());
    }

    // quando "i" for igual ou maior que "num" sai do "for"

    // "eliminated" recebe o primeiro elemento da fila, pois é o elemento que ficou com a "batata quente"
    eliminated = queue.dequeue();

    // mensagem de eliminado
    console.log(eliminated + " was eliminated from the hot potato game"); 
    /* 

    Maria was eliminated from the hot potato game - 1º volta do while
    José was eliminated from the hot potato game - 2º volta do while
    Lucas was eliminated from the hot potato game - 3º volta do while
    Ana was eliminated from the hot potato game - 4º volta do while

    */

    // se o tamanho da fila é maior que 1 ainda retorna ao começo do "while"
  }

  // quando sair do "while" restará apenas 1 termo, o vencedor do jogo

  // retorna o termo que sobrou, o vencedor
  return queue.dequeue();
}

var names = ["João", "José", "Maria", "Ana", "Lucas"];

var winner = hotPopato(names, 7);

console.log("The winner is: " + winner); // The winner is: João
