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

        return maxNode(root);

    }

    var maxNode = function(node) {

        if(node) {

          while(node && node.right !== null) {

            node = node.right

          }

          return node.key;

        }

        return null;

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

    this.preOrderTraverse = function(callback) {

        // Visita todos os nós da árvore usando um percurso pré ordem
        // Imprime os nós da árvore e seus descendentes logo após o nó

        preOrderTraverseNode(root, callback); // chama a função "preOrderTraverseNode" e passa como argumento a raiz da árvore (11) e uma função (printNode)

    }

    var preOrderTraverseNode = function(node, callback) {
        /*
        11, printNode
        7, printNode
        5, printNode
        3, printNode
        null, printNode
        null, printNode

        6, printNode
        null, printNode
        null, printNode

        9, printNode
        */

        if(node !== null) {
            /*
            node = 11 (true)
            node = 7 (true)
            node = 5 (true)
            node = 3 (true)
            (3.left)node = null (false) -> não atende a condicional, sai do recursivo
            (3.right)node = null (false) -> não atende a condicional, sai do recursivo

            node = 6 (true)
            (6.left)node = null (false) -> não atende a condicional, sai do recursivo
            (6.right)node = null (false) -> não atende a condicional, sai do recursivo

            node = 9 (true)
            ...
            */

            callback(node.key);
            /*
            11
            7
            5
            3
            6
            9
            ...
            */
            preOrderTraverseNode(node.left, callback);
            /*
            11.left = 7, printNode -> 11 espera sair de 7, printNode
            7.left = 5, printNode -> 7 espera sair de 5, printNode
            5.left = 3, printNode -> 5 espera sair de 3, printNode
            3.left = null, printNode -> 3 espera sair de null, printNode

            3.left = sai da saiu da recursiva -> vai para "preOrderTraverseNode(node.right, callback)"

            5.left já foi executado -> vai para "preOrderTraverseNode(node.right, callback)"

            6.left = null, printNode -> 6 espera sair de null, printNode

            6.left = sai da saiu da recursiva -> vai para "preOrderTraverseNode(node.right, callback)"

            5.left já foi executado -> vai para "preOrderTraverseNode(node.right, callback)"

            7.left já foi executado -> vai para "preOrderTraverseNode(node.right, callback)"

            9.left = 8, printNode -> 9 espera sair de 8, printNode
            ...
            */
            preOrderTraverseNode(node.right, callback);
            /*
            3.right = null, printNode -> 3 espera sair de null, printNode
            3.right = sai da saiu da recursiva -> vai para retorna para o nó anterior (5)

            5.right = 6, printNode5 -> 5 espera sair de 6, printNode

            6.right = null, printNode -> 3 espera sair de null, printNode
            6.right = sai da saiu da recursiva -> vai para retorna para o nó anterior (5)

            5.right também já foi executado -> vai para retorna para o nó anterior (7)

            7.right = 9, printNode5 -> 7 espera sair de 9, printNode
            ...
            */

        }

    }

    this.postOrderTraverse = function(callback) {

        // Visita todos os nós da árvore usando um percurso pós ordem
        // Imprime os descendentes de cada nó da árvore e depois o nó ascendente

        postOrderTraverseNode(root, callback); // chama a função "preOrderTraverseNode" e passa como argumento a raiz da árvore (11) e uma função (printNode)

    }

    var postOrderTraverseNode = function(node, callback) {
        /*
        11, printNode
        7, printNode
        5, printNode
        3, printNode
        null, printNode
        null, printNode

        6, printNode
        null, printNode
        null, printNode

        9, printNode
        8, printNode
        null, printNode
        null, printNode

        10, printNode
        null, printNode
        null, printNode
        ...
        */

        if(node !== null) {
            /*
            node = 11 (true)
            node = 7 (true)
            node = 5 (true)
            node = 3 (true)
            (3.left)node = null (false) -> não atende a condicional, sai da recursividade
            (3.right)node = null (false) -> não atende a condicional, sai da recursividade

            node = 6 (true)
            (6.left)node = null (false) -> não atende a condicional, sai da recursividade
            (6.right)node = null (false) -> não atende a condicional, sai da recursividade

            node = 9 (true)
            node = 8 (true)
            (8.left)node = null (false) -> não atende a condicional, sai da recursividade
            (8.right)node = null (false) -> não atende a condicional, sai da recursividade

            node = 10 (true)
            (10.left)node = null (false) -> não atende a condicional, sai da recursividade
            (10.right)node = null (false) -> não atende a condicional, sai da recursividade
            ...
            */

            postOrderTraverseNode(node.left, callback);
            /*
            11.left = 7, printNode -> 11 espera sair de 7, printNode
            7.left = 5, printNode -> 7 espera sair de 5, printNode
            5.left = 3, printNode -> 5 espera sair de 3, printNode
            3.left = null, printNode -> 3 espera sair de null, printNode

            3.left retorna = 3 vai para "postOrderTraverseNode(node.right, callback)"

            5.left retorna = 5 vai para "postOrderTraverseNode(node.right, callback)"

            6.left = null, printNode -> 6 espera sair de null, printNode

            6.left retorna = 6 vai para "postOrderTraverseNode(node.right, callback)"

            7.left retorna = 7 vai para "postOrderTraverseNode(node.right, callback)"

            9.left = 8, printNode -> 9 espera sair de 8, printNode
            8.left = null, printNode -> 8 espera sair de null, printNode

            8.left retorna = 8 vai para "postOrderTraverseNode(node.right, callback)"

            9.left retorna = 9 vai para "postOrderTraverseNode(node.right, callback)"

            10.left = null, printNode -> 10 espera sair de null, printNode

            10.left retorna = 10 vai para "postOrderTraverseNode(node.right, callback)"

            11.left retorna = 11 vai para "postOrderTraverseNode(node.right, callback)"
            ...
            */
            postOrderTraverseNode(node.right, callback);
            /*
            3.right = null, printNode -> 3 espera sair de null, printNode

            3.right retorna = 3 vai para "callback(node.key)"

            5.right = 6, printNode -> 5 espera sair de 6, printNode

            6.right = null, printNode -> 6 espera sair de null, printNode

            6.right retorna = 6 vai para "callback(node.key)"

            5.right retorna = 5 vai para "callback(node.key)"

            7.right = 9, printNode -> 7 espera sair de 9, printNode

            8.right = null, printNode -> 6 espera sair de null, printNode

            8.right retorna = 6 vai para "callback(node.key)"

            9.right = 10, printNode -> 9 espera sair de 10, printNode

            10.right = null, printNode -> 10 espera sair de null, printNode

            10.right retorna = 10 vai para "callback(node.key)"

            9.right retorna = 9 vai para "callback(node.key)"

            7.right retorna = 7 vai para "callback(node.key)"

            11.right = 15, printNode -> 11 espera sair de 15, printNode
            ...
            */
            callback(node.key);
            /*
            3 -> imprime 3 e volta para o nó anterior (5)
            6 -> imprime 6 e volta para o nó anterior (5)
            5 -> imprime 5 e volta para o nó anterior (7)
            8 -> imprime 8 e volta para o nó anterior (9)
            10 -> imprime 10 e volta para o nó anterior (9)
            9 -> imprime 9 e volta para o nó anterior (7)
            7 -> imprime 7 e volta para o nó anterior (11)
            ...
            */

        }

    }
}

// função que imprime o valor do node
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

// método "preOrderTraverse" que percore os nós da árvore e depois os descendentes, e passando como argumento a função de imprimir valor, que imprimirá o valor de cada nó
tree.preOrderTraverse(printNode);

// método "postOrderTraverse" que percore os descendentes de cada nó e depois o nó em si, e passando como argumento a função de imprimir valor, que imprimirá o valor de cada nó
tree.postOrderTraverse(printNode);