    // Binary Tree - Métodos - min()

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

        root = removeNode(root, key);

    }

    var removeNode = function(node, key) {

        if(node === null) {

            return null;

        }

        if(key < node.key) {

            node.left = removeNode(node.left, key);
            return node;

        } else if(key > node.key) {

            node.right = removeNode(node.right, key);
            return node;

        } else {

            if(node.left === null && node.right === null) {

                node = null;
                return node;

            }
            if(node.left === null) {

                node = node.right;
                return node;

            } else if(node.right === null) {

                node = node.left;
                return node;

            }
            var aux = findMinNode(node.right);
            node.key = aux.key;
            node.right = removeNode(node.right, aux.key);
            return node;

        }
        
    }

    this.min = function() {

        // Retorna a menor chave

        return minNode(root);

    }

    var minNode = function(node) {

        if(node) {

            while(node && node.left !== null) {

                node = node.left;

            }
            return node.key

        }
        return null;

    }

    var findMinNode = function(node) {

        while(node && node.left !== null) {

            node = node.left;
            return node;

        }

    }

    this.max = function() {

        // Retorna a maior chave

        return maxNode(root); // chama a função "maxNode" passando como argumento a raiz da árvore (11)

    }

    var maxNode = function(node) {
        // 11

        if(node) {
            // node = 11 (true)

          while(node && node.right !== null) {
            /*
            11 e 11.right = 15 (true)
            15 e 15.right = 20 (true)
            20 e 20.right = 25 (true)
            25 e 25.right = null (false) -> sai do WHILE como "node = 25"
            */

            node = node.right;
            /*
            node = 15
            node = 20
            node = 25
            */

          }

          return node.key; // retorna 25

        }

        return null; // se não existe a raiz, é porque a árvore está vazia, logo não existe menor número, portanto "null"

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


// método "max()" retorna o maior valor da árvore
console.log(tree.max()); // 25


var treeNull = new BinarySearchTree();

console.log(treeNull.max()); // null