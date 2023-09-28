    // Binary Tree - Métodos - remove()

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

        return searchNode(root, key);

    }

    var searchNode = function(node, key) {

        if(node = null) {

            return false;

        }

        if(key < node.key) {

            return searchNode(node.left, key);

        } else if(key > node.key) {

            return searchNode(node.right, key);

        } else {

            return true;

        }

    }

    this.remove = function(key) {

        // Remove uma chave

        root = removeNode(root, key); // chama a função "removeNode" passando como argumento a raiz (11) e a chave que deseja remover (6)
        // chama a função "removeNode" passando como argumento a raiz (11) e a chave que deseja remover (5)
        // chama a função "removeNode" passando como argumento a raiz (11) e a chave que deseja remover (15)

    }

    var removeNode = function(node, key) {
        /*
        11, 6
        7, 6
        5, 6
        6, 6

        11, 5
        7, 5
        5, 5

        11, 15
        15, 15
        20, 18
        18, 18
        */

        if(node === null) {
            /*
            node = 11 (false) -> sai dessa condição
            node = 7 (false) -> sai dessa condição
            node = 5 (false) -> sai dessa condição
            node = 6 (false) -> sai dessa condição

            node = 11 (false) -> sai dessa condição
            node = 7 (false) -> sai dessa condição
            node = 5 (false) -> sai dessa condição

            node = 11 (false) -> sai dessa condição
            node = 15 (false) -> sai dessa condição
            node = 20 (false) -> sai dessa condição
            node = 18 (false) -> sai dessa condição
            */

            return null;

        }

        if(key < node.key) {
            /*
            6 < 11 (true)
            6 < 7 (true)
            6 > 5 (false) -> sai dessa condição
            6 = 6 (false) -> sai dessa condição

            5 < 11 (true)
            5 < 7 (true)
            5 = 5 (false) -> sai dessa condição

            15 > 11 (false) -> sai dessa condição
            15 = 15 (false) -> sai dessa condição
            18 < 20 (true)
            18 = 18 (false) -> sai dessa condição
            */

            node.left = removeNode(node.left, key);
            /*
            11.left = 7, 6 -> 11 espera retorno da função
            7.left = 5, 6 -> 7 espera retorno da função

            7 retorno -> node = null

            11 retorno -> node = null

            11.left = 7, 5 -> 11 espera retorno da função
            7.left = 5, 5 -> 7 espera retorno da função

            7 retorno -> node = 3

            11 retorno -> node = 3

            20.left = 18, 18 -> 20 espera retorno da função
            20 retorno -> node = null
            */
            return node;
            /*
            RETORNA 

            node = null

            node = null

            node = 3

            node = 3

            node = null
            */

        } else if(key > node.key) {
            /*
            6 > 5 (true)
            6 = 6 (false) -> sai dessa condição

            5 = 5 (false) -> sai dessa condição

            15 > 11 (true)
            15 = 15 (false) -> sai dessa condição
            18 = 18 (false) -> sai dessa condição
            */

            node.right = removeNode(node.right, key);
            /*
            5.right = 6, 6 -> 5 espera retorno da função
            5 retorno -> node = null

            11.right = 15, 15 -> 11 espera retorno da função
            */

            return node;
            /*
            RETORNA

            node = null
            */

        } else {
            /*
            6 = 6

            5 = 5

            15 = 15

            18 = 18
            */

            if(node.left === null && node.right === null) {
                /*
                6.left = null & 6.right = null (true)

                5.left = 3 & 5.right = null (false) -> sai dessa condição

                15.left = 13 & 15.right = 20 (false) -> sai dessa condição

                18.left = null & 18.right = null (true)
                */

                node = null;
                /*
                (6)node = null

                (18)node null
                */
                return node;
                /*
                RETORNA

                node = null

                node = null
                */

            }
            if(node.left === null) {
                /*
                5.left = 3 (false) -> sai dessa condição

                15.left = 13 (false) -> sai dessa condição
                */

                node = node.right;
                return node;

            } else if(node.right === null) {
                /*
                5.right = null (true)

                15.right = 20 (false) -> sai dessa condição
                */

                node = node.left;
                /*
                (5)node = 3
                */
                return node;
                /*
                RETORNA

                node = 3
                */

            }
            /*
            15.left = 13 & 15.right = 20
            */

            var aux = findMinNode(node.right);
            /*
            aux = "findMinNode(20)" -> aux espera retorno da função
            aux retorno -> aux = 18
            */
            node.key = aux.key;
            /*
            (15)node.key = 18
            */

            node.right = removeNode(node.right, aux.key);
            /*
            node.right = "removeNode(20, 18)" -> node.right espera retorno da função
            node.right retorno -> node = null
            */
            return node;
            /*
            RETORNA

            node = null
            */

        }
        
    }

    this.min = function() {

        // Retorna a menor chave

    }

    var findMinNode = function(node) {
        /*
        20
        */
        
        while(node && node.left !== null) {
            /*
            20, 20.left = 18 (true)
            */

            node = node.left;
            /*
            (20)node = 18
            */
            return node;
            /*
            RETORNA

            node = 18
            */

        }

    }

    this.max = function() {

        // Retorna a maior chave

    }

    this.inOrderTraverse = function(callback) {

        // Visita todos os nós da árvore usando um percurso em ordem

        inOrderTraverseNode(root, callback);

    }

    var inOrderTraverseNode = function(node, callback) {

        if(node !== null) {

            inOrderTraverseNode(node.left, callback);
            callback(node.key);
            inOrderTraverseNode(node.right, callback);

        }

    }

    this.preOrderTraverse = function() {

        // Visita todos os nós da árvore usando um percurso pré ordem

    }

    this.postOrderTraverse = function() {

        // Visita todos os nós da árvore usando um percurso pós ordem

    }

}

function printNode(value) {

    console.log(value);

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

tree.inOrderTraverse(printNode);

// Remoção de nó sem filho
tree.remove(6);

tree.inOrderTraverse(printNode);

// Remoção de nó com apenas 1 filho
tree.remove(5);

tree.inOrderTraverse(printNode);

// Remoção de nó com 2 filhos
tree.remove(15);

tree.inOrderTraverse(printNode);