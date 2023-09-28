    // Grafos - Busca em Profundidade (DFS)

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

        for(var i = 0; i < vertices.length; i++){

            color[vertices[i]] = "white";

        }

        return color;

    }

    this.bfs = function(v, callback) {
        
        // Percorre todos os vértices sem repetir, começando do vértice passado, pegando toda a largura, até o mair longe dele (profundidade)


        var color = initializeColor(),
        queue = new Queue();

        queue.enqueue(v);

        while(!queue.isEmpty()){

            var u = queue.dequeue(),
            neighbors = adjList.get(u);

            color[u] = "grey";

            for(var i = 0; i < neighbors.length; i++){

                var w = neighbors[i];

                if(color[w] === "white") {

                    color[w] = "grey";

                    queue.enqueue(w);

                }

            }

            color[u] = "black";

            callback(u);
            
        }

    }

    this.dfs = function(callback) {

    // Percorre todos os vértices sem repetir, começando do vértice passado, pegando toda a profundidade dele e aos poucos a largura do Grafo

    // printNode

    var color = initializeColor(); // color = ["A": "White", "B": "White", "C": "White", "D": "White", "E": "White", "F": "White", "G": "White", "H": "White", "I": "White"]

    // vertices = ["A", "B", "C", "D", "E", "F", "G", "H", "I"]

    for(var i = 0; i < vertices.length; i++) {

        if(color[vertices[i]] === "white") {
            /*
            "A" = "white" (true)            
            */

            dfsVisit(vertices[i], color, callback);
            /*
            "A", ["A": "White", "B": "White", "C": "White", "D": "White", "E": "White", "F": "White", "G": "White", "H": "White", "I": "White"], printNode
            */

        }

    }

    }

    var dfsVisit = function(u, color, callback) {
        /*
        "A", ["A": "White", "B": "White", "C": "White", "D": "White", "E": "White", "F": "White", "G": "White", "H": "White", "I": "White"], printNode

        "B", ["A": "grey", "B": "White", "C": "White", "D": "White", "E": "White", "F": "White", "G": "White", "H": "White", "I": "White"], printNode

        "E", ["A": "grey", "B": "grey", "C": "White", "D": "White", "E": "White", "F": "White", "G": "White", "H": "White", "I": "White"], printNode

        "I", ["A": "grey", "B": "grey", "C": "White", "D": "White", "E": "grey", "F": "White", "G": "White", "H": "White", "I": "White"], printNode

        "F", ["A": "grey", "B": "grey", "C": "White", "D": "White", "E": "black", "F": "White", "G": "White", "H": "White", "I": "black"], printNode

        ...
        */

        color[u] = "grey";
        /*
        "A" = "grey"

        "B" = "grey"

        "E" = "grey"

        "I" = "grey"

        "F" = "grey"

        ...
        */

        callback(u);
        /*
        "A"
        Visited vertex: A

        "B"
        Visited vertex: B

        "E"
        Visited vertex: E

        "I"
        Visited vertex: I

        "F"
        Visited vertex: F

        ...
        */

        var neighbors = adjList.get(u);
        /*
        "neighbors" recebe uma instância de "Dictonary"

        neightbors = ["B", "C", "D"] -> são os Vétices que são conectados com "A"

        neightbors = ["A", "E", "F"] -> são os Vétices que são conectados com "B"

        neightbors = ["B", "I"] -> são os Vétices que são conectados com "E"

        neightbors = ["E"] -> são os Vétices que são conectados com "I"

        neightbors = ["B"] -> são os Vétices que são conectados com "F"

        ...
        */

        for(var i = 0; i < neighbors.length; i++) {
            /*
            (A)neightbors = ["B", "C", "D"].length = 3

            (B)neightbors = ["A", "E", "F"].length = 3

            (E)neightbors = ["B", "I"].length = 2

            (I)neightbors = ["E"].length = 1

            "E" -> saiu do recursivo, com já percorreu todos os elementos sai do FOR

            "B" -> saiu do recursivo e já percorreu "A" e "E", agora seta "F"

            (F)neightbors = ["B"].length = 1

            ...
            */

            var w = neighbors[i];
            /*
            w = "B"

            w = "A"
            w = "E"

            w = "B"
            w = "I"

            w = "E"

            w = "F"

            w = "B"

            ...
            */

            if(color[w] === "white") {
                /*
                "B" = "white" (true)

                "A" = "grey" (false) -> sai do IF, mas continua no FOR
                "E" = "white" (true)

                "B" = "grey" (false) -> sai do IF, mas continua no FOR
                "I" = "white" (true)

                "E" = "grey" (false) -> sai do IF e sai do FOR, pois não tem mais elementos a percorrer

                "F" = "white" (true)

                "B" = "grey" (false) -> sai do IF e sai do FOR, pois não tem mais elementos a percorrer

                ...
                */

                dfsVisit(w, color, callback);
                /*
                "B", ["A": "grey", "B": "White", "C": "White", "D": "White", "E": "White", "F": "White", "G": "White", "H": "White", "I": "White"], printNode -> "B" espera sair do recursivo

                "E", ["A": "grey", "B": "grey", "C": "White", "D": "White", "E": "White", "F": "White", "G": "White", "H": "White", "I": "White"], printNode -> "E" espera sair do recursivo

                "I", ["A": "grey", "B": "grey", "C": "White", "D": "White", "E": "grey", "F": "White", "G": "White", "H": "White", "I": "White"], printNode -> "I" espera sair do recursivo

                "I" = black -> sai do recursivo, retorna para o recursivo anterior -> "E"

                "E" = black -> sai do recursivo, retorna para o recursivo anterior -> "B"

                "F", ["A": "grey", "B": "grey", "C": "White", "D": "White", "E": "black", "F": "White", "G": "White", "H": "White", "I": "black"], printNode -> "F" espera sair do recursivo

                ...
                */

            }

        }

        color[u] = "black";
        /*
        "I" = "black" -> resposta do recursivo de "I"

        "E" = "black" -> resposta do recursivo de "E"

        "F" = "black" -> resposta do recursivo de "B"

        ...
        */

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

graph.dfs(printNode);
/*
Visited vertex: A
Visited vertex: B
Visited vertex: E
Visited vertex: I
Visited vertex: F
Visited vertex: C
Visited vertex: D
Visited vertex: G
Visited vertex: H
*/