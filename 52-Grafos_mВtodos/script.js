    // Grafos - Métodos

// - Utiliza a estrutura de Dicionários também

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

    // "A", "B", "C", "D", "E", "F", "G", "H", "I"

    this.addVertex = function(v) {

        // Adiciona o vértice

        /*
        "A"
        "B"
        "C"
        "D"
        "E"
        ...
        */

        vertices.push(v);
        /*
        vertices = ["A"]
        vertices = ["A", "B"]
        vertices = ["A", "B", "C"]
        vertices = ["A", "B", "C", "D"]
        vertices = ["A", "B", "C", "D", "E"]
        ...
        */

        adjList.set(v, []);
        /*
        adjList = {"A": [], }
        adjList = {"A": [], "B": []}
        adjList = {"A": [], "B": [], "C": []}
        adjList = {"A": [], "B": [], "C": [], "D": []}
        adjList = {"A": [], "B": [], "C": [], "D": [], "E": []}
        ...
        */

    }

    /*
    ("A", "B"), ("A", "C"), ("A", "D"), ("C", "D"), ("C", "G"), ("D", "G"), ("D", "H"), ("B", "E"), ("B", "F"), ("E", "I")
    */

    this.addEdge = function(v, w) {

        // Adiciona a aresta ligando 2 vértices

        /*
        "A", "B"
        "A", "C"
        "A", "D"
        "C", "D"
        "C", "G"
        "D", "G"
        "D", "H"
        "B", "E"
        "B", "F" 
        "E", "I"
        */

        adjList.get(v).push(w);
        /*
        "A": ["B"]
        "A": ["B", "C"]
        "A": ["B", "C", D]
        "C": ["A", "D"]
        "C": ["A", "D", "G"]
        "D": ["A", "C", "G"]
        "D": ["A", "C", "G", "H"]
        "B": ["A", "E"]
        "B": ["A", "E", "F"]
        "E": ["B", "I"]
        */
        adjList.get(w).push(v);
        /*
        "B": ["A"]
        "C": ["A"]
        "D": ["A"]
        "D": ["A", "C"]
        "G": ["C"]
        "G": ["C", "D"]
        "H": ["D"]
        "E": ["B"]
        "F": ["B"]
        "I": ["E"]
        */

    }

    this.toString = function() {

        // Imprime o Grafo

        var s = "";

        // percorre o Array de vértices
        for( var i = 0; i < vertices.length; i++){

            // a string concatena o vértice com uma seta
            s += vertices[i] + " -> ";

            // pega o vértice setado para percorrer sua chaves
            var neighbors = adjList.get(vertices[i]);

            // percorre os elementos do vértice setado
            for(var j = 0; j < neighbors.length; j++){

                // a string que estava com o vértice e uma seta concatena os elementos desse vértice (que significa os vértices que são conectados a ele)
                s += neighbors[j] + " ";

            }
            
            // após percorrer os elementos de cada vértice a string concatena uma linha em branco
            s += '\n';

        }

        // retornar a string
        return s;

    }

};

var graph = new Graph();

// Array de vétices
var myVertices = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

for(var i = 0; i < myVertices.length; i++){

    // Adicionado os vértices através do método "addVertex()"
    graph.addVertex(myVertices[i]);

}

// Ligando os vértices com outros vértices através do método "addEdge()"
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

// Imprimindo uma lista de adjacência através do método "toString()"
console.log(graph.toString());