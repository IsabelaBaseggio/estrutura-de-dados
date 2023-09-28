    // Binary Tree - Métodos - search()

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

        var newNode = new Node(key);

        if(root === null) {

            root = newNode;

        } else {

            insertNode(root, newNode); // recursividade = uma função que fica se auto executando até atingir determinada condição 

        }

    }

    var insertNode = function(node, newNode) {

        if(newNode.key < node.key) {

            if(node.left === null) {

                node.left = newNode;

            } else {

                insertNode(node.left, newNode);

            }
            
        } else {

            if(node.right == null) {

                node.right = newNode;

            } else {

                insertNode(node.right, newNode);

            }

        }

    }

    this.search = function(key) {

        // Busca uma chave / Verifica se há a chave na árvore

        return searchNode(root, key); // chama função "searchNode" passando como argumento a raiz e o nó a ser achado
        /*
        11, 13

        11, 16
        */

    }

    var searchNode = function(node, key) {
        /*
        11, 13
        15, 13

        11, 16
        15, 16
        20, 16
        18, 16
        null, 16
        */
        
        // verifica se o "node" é "null"
        if(node === null) {
            /* 
            node = 11 (false)
            node = 15 (false)
            node = 13 (false)

            node = 11 (false)
            node = 15 (false)
            node = 20 (false)
            node = 18 (false)
            node = null (true)
            */

            return false;
            // returna "true", pois foi percorrido a árvore onde o valor 16 deveria estar e não extá, logo não existe

        }

        // verifica se o valor a ser achado é menor que o nó em questão
        if(key < node.key) {
            /*
            13 > 11 (false)
            13 < 15 (true)
            13 === 13 (false)

            16 > 11 (false)
            16 > 15 (false)
            16 < 20 (true)
            16 < 18 (true)
            */

            return searchNode(node.left, key);
            /*
            13, 13

            18, 16
            null, 16
            */

        } else if(key > node.key) {
            /*
            13 > 11 (true)
            13 === 13 (false)

            16 > 11 (true)
            16 > 15 (true)
            */

            return searchNode(node.right, key);
            /*
            15, 13

            15, 16
            20, 16
            */

        } else { // se não atender nenhuma das outras condições vem para esse "else"

            /*
            13 === 13 (false)
            */

            return true;
            /*
            13 = retorna "true", pois existe o elemento
            */

        }

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

var tree = new BinarySearchTree();

tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18)
tree.insert(25);
tree.insert(6);

// usar método "searh()" para verificar se a árvore possui o valor passado como argumento
console.log(tree.search(13)); // true

console.log(tree.search(16)); // false