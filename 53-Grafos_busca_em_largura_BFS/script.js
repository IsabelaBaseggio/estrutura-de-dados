    // Grafos - Busca em Largura (BFS)

// - Também utiliza a Classe Fila (Queue)

function Queue() {

    var items = [];

    this.enqueue = function(element) {

        // adiciona um novo item
        items.push(element);

    }

    this.dequeue = function() {

        // remove um item
        return items.shift();
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

function Dictionary(){

    var items = {};

    this.set = function(key, value) {

        items[key] = value;

    };

    this.delete = function(key){

        if(this.has(key)){

            delete items[key];

            return true;

        }

            return false;

    };

    this.has = function(key){

        return items.hasOwnProperty(key);

    };

    this.get = function(key){

        return this.has(key) ? items[key] : undefined;

    };

    this.clear = function(){

        items = {};

    };


    this.size = function() {

        return Object.keys(items).length;

    };


    this.keys = function(){

        return Object.keys(items);
        
    };

    this.values = function(){

        var values = [],
        keys = Object.keys(items);

        for(var i = 0; i < keys.length; i++){

            values.push(items[keys[i]]);

        }

        return values;

    };

    this.getItems = function() {

        return items;

    }

};

// Estrutura de Grafos

function Graph(){

    var vertices = [];

    var adjList = new Dictionary();

    this.addVertex = function(v) {

        // Adiciona o vértice

        vertices.push(v);

        adjList.set(v, []);

    }

    this.addEdge = function(v, w) {

        // Adiciona a aresta ligando 2 vértices

        adjList.get(v).push(w);
        adjList.get(w).push(v);

    }

    this.toString = function() {

        // Imprime o Grafo

        var s = "";

        for( var i = 0; i < vertices.length; i++){

            s += vertices[i] + " -> ";

            var neighbors = adjList.get(vertices[i]);

            for(var j = 0; j < neighbors.length; j++){

                s += neighbors[j] + " ";

            }

            s += '\n';

        }

        return s;

    }

    var initializeColor = function() {

        // Seta uma cor padrão para cadra Vértice quando adicionados

        var color = [];

        // percorre o Array de vétices
        // vertices = ['A', 'B', 'C', 'D', 'E', 'F','G', 'H', 'I']
        for(var i = 0; i < vertices.length; i++){

            color[vertices[i]] = "white";

        }

        // color = ["A": "White", "B": "White", "C": "White", "D": "White", "E": "White", "F": "White", "G": "White", "H": "White", "I": "White"]
        return color; // retorna "color"

    }

    this.bfs = function(v, callback) {

        // Percorre todos os vértices sem repetir, começando do vértice passado, pegando toda a largura, até o mair longe dele (profundidade)

        // "A", printNode

        var color = initializeColor(), // color = ["A": "White", "B": "White", "C": "White", "D": "White", "E": "White", "F": "White", "G": "White", "H": "White", "I": "White"]
        queue = new Queue(); // instância fila

        queue.enqueue(v); // adiciona na fila o elemento passado -> queue = ["A"]

        while(!queue.isEmpty()){
            /*
            queue = ["A"] (true)
            
            queue = ["B", "C", "D"] (true)
            ...
            */

            var u = queue.dequeue(),
            /* 
            u = "A" & queue = null, pois foi tirado da lista, o único elemento que tinha, mas "u" recebe esse valor -> queue = []

            u = "B" -> queue = ["C", "D"]
            ...
            */

            neighbors = adjList.get(u); 
            /*
            "neighbors" recebe uma instância de "Dictonary"

            neightbors = ["B", "C", "D"] -> são os Vétices que são conectados com "A"

            neightbors = [ "A", "E", "F" ] -> são os Vétices que são conectados com "B"
            ...
            */
            color[u] = "grey";
            /*
            color = [~~~~~~~~"A": "grey"~~~~~~~~, "B": "White", "C": "White", "D": "White", "E": "White", "F": "White", "G": "White", "H": "White", "I": "White"]

            color = ["A": black", ~~~~~~~~"B": "grey"~~~~~~~~, "C": "White", "D": "White", "E": "White", "F": "White", "G": "White", "H": "White", "I": "White"]
            ...
            */

            /*
            neighbors = ["B", "C", "D"] -> length = 3

            neighbors = neightbors = [ "A", "E", "F" ] -> lenght = 3
            ...
            */
            for(var i = 0; i < neighbors.length; i++){

                var w = neighbors[i];
                /*
                "B"
                "C"
                "D"

                "A"
                "E"
                "F"
                ...
                */

                if(color[w] === "white") {
                    /*
                    "B" = "white" (true)
                    "C" = "white" (true)
                    "D" = "white" (true)

                    "A" = "black" (false) -> Sai do IF
                    "E" = "white" (true)
                    "F" = "white" (true)
                    ...
                    */

                    color[w] = "grey";
                    /*
                    "B" = "grey"
                    "C" = "grey"
                    "D" = "grey"

                    "E" = "grey"
                    "F" = "grey"
                    ...
                    */

                    queue.enqueue(w);
                    /*
                    queue = ["B"]
                    queue = ["B", "C"]
                    queue = ["B", "C", "D"] -> percorreu todo neighbors.length, sai do FOR

                    queue = ["C", "D", "E"]
                    queue = ["C", "D", "E", "F"]
                    ...
                    */

                }

            }

            color[u] = "black";
            /*
            color = [~~~~~~~~"A": "black"~~~~~~~~, "B": "White", "C": "White", "D": "White", "E": "White", "F": "White", "G": "White", "H": "White", "I": "White"]

            color = ["A": black", ~~~~~~~~"B": "black"~~~~~~~~, "C": "White", "D": "White", "E": "White", "F": "White", "G": "White", "H": "White", "I": "White"]
            ...
            */

            callback(u);
            /* 
            printNode("A")
            Visited vertex: A

            printNode("B")
            Visited vertex: B
            */


            /* 
            queue != null -> queue = queue = ["B", "C", "D"], continua no WHILE

            queue != null -> queue = queue = ["C", "D", "E", "F"], continua no WHILE

            ...
            */
        }

    }

};

function printNode(value) {

    console.log("Visited vertex: " + value);

}

var graph = new Graph();

var myVertices = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

for(var i = 0; i < myVertices.length; i++){

    graph.addVertex(myVertices[i]);

}

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("A", "D");
graph.addEdge("C", "D");
graph.addEdge("C", "G");
graph.addEdge("D", "G");
graph.addEdge("D", "H");
graph.addEdge("B", "E");
graph.addEdge("B", "F");
graph.addEdge("E", "I");

console.log(graph.toString());

graph.bfs(myVertices[0], printNode);
/*
Visited vertex: A
Visited vertex: B
Visited vertex: C
Visited vertex: D
Visited vertex: E
Visited vertex: F
Visited vertex: G
Visited vertex: H
Visited vertex: I
*/