    // Árvore Binária (Binary Tree)

// - cada nó se divide em 2
// - não há uma sequência de acesso de algum valor
// - o valor menor vai para o nó da esquerda e o valor maior vai para o nó da direita

//  // se usa no formato de Classe, no caso de JS é em Objetos

// Estrutura de Árvores Binárias

function BinarySearchTree() {

    var Node = function (key) {

        this.key = key;
        this.left = null;
        this.right = null;

    }

    var root = null;

    this.insert = function(key) {

        // Insere uma chave

    }

    this.search = function(key) {

        // Busca uma chave

    }

    this.remove = function(key) {

        // Remove uma chave

    }

    this.min = function() {

        // Retorna a menor chave

    }

    this.max = function() {

        // Retorna a maior chave

    }

    this.inOrderTraverse = function() {

        // Visita todos os nós da árvore usando um percurso em ordem

    }

    this.preOrderTraverse = function() {

        // Visita todos os nós da árvore usando um percurso pré ordem

    }

    this.postOrderTraverse = function() {

        // Visita todos os nós da árvore usando um percurso pós ordem

    }

}