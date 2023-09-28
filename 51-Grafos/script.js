    // Grafos

// - Grafo é um modelo abstrato de uma estrutura de rede
// - É um conjunto de nós(vértices) conectados por arestas(edges)
//  - Os vértices podem ser adjacentes (quando um vétice é conectado diretamente a outro. Ex.: AB = A - B) ou não-adjacentes (quando um vértice não está conectado diretamente a outro. Ex.: AE = A - B - E, mas é um caminho (path))
// - Pode ser cíclico (quando fecha um caminho, quando volta para o primeiro elemento. Ex.: AD, DC, CA) ou acíclico (quando não fecha um caminho, quando não volta para o primeiro elemento. Ex.: GD, DH)
// - Podem ser direcionados, quando um vértice aponta para outro ou é apontado por outro, quando o vértice só possui uma direção(só aponta ou só é apontado) = fracamente direcionado e quando o vértice possui ambas direções (aponta e é apondatado) = fortemente direcionados / fortemente conectados
// - Pode ter pesos, os pesos são definidos para as arestas
// - Pode ser representado por uma matriz (Matriz de Adjacâncias), quando há a conexão de vértice recebe 1 (verdadeiro), quando não há recebe 0 (falso)
// - Matriz de Adjacência pode não ter uma boa performance, pois todas as possibilidades devem ser verificadas, ou seja tada a matriz precisa ser percorrida
// - Pode ser representado por lista (Lista de Adjacências) / array, informa direto quais são os vértices que se conectam com tal vértice
// - Os vértices podem possuir graus dependendo de quantas conexões ele faz (Ex.: se A faz conexão com mais 3 vértices, ele possui grau 3)
// - Matriz de Incidência é para quando há mais arestas que vértices (nó)

// se usa no formato de Classe, no caso de JS é em Objetos

// Estrutura de Grafos

function Graph(){

    this.addVertex = function(v) {

        // Adiciona o vértice

    }

    this.addEdge = function(v, w) {

        // Adiciona a aresta ligando 2 vértices

    }

    this.toString = function() {

        // Imprime o Grafo

    }

};