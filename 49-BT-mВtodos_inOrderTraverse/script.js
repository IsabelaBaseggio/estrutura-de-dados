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
        // Imprime os valores da árvore ordanadamente (do menor para o maior)

        inOrderTraverseNode(root, callback);// chama a função "inOrderTraverseNode" e passa como argumento a raiz da árvore (11) e uma função (printNode)
        

    }

    var inOrderTraverseNode = function(node, callback) {
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

        10, printNode

        15, printNode
        13, printNode
        12, printNode
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
            (3.left)node = null (false) -> não atende a condicional, sai do recursivo
            (3.right)node = null (true) -> não atende a condicional, sai do recursivo

            node = 6 (true)
            (6.left)node = null (false) -> não atende a condicional, sai do recursivo
            (6.right)node = null (false) -> não atende a condicional, sai do recursivo

            node = 9 (true)
            node = 8 (true)
            (8.left)node = null (false) -> não atende a condicional, sai do recursivo

            node = 10 (true)
            (10.left)node = null (false) -> não atende a condicional, sai do recursivo
            (10.right)node = null (false) -> não atende a condicional, sai do recursivo

            node = 15 (true)
            node = 13 (true)
            node = 12 (true)
            (12.left)node = null (false) -> não atende a condicional, sai do recursivo
            (12.right)node = null (false) -> não atende a condicional, sai do recursivo
            ...
            */

            inOrderTraverseNode(node.left, callback);
            /*
            11.left = 7, printNode -> 11 espera sair de 7, printNode
            7.left = 5, printNode -> 7 espera sair de 5, printNode
            5.left = 3, printNode -> 5 espera sair de 3, printNode
            3.left = null, printNode -> 3 espera sair de null, printNode

            null, printNode = não atende a condicional, sai da execução
            node = 3 -> como já passou por "inOrderTraverseNode(node.left, callback)" vai direto pro "callback"

            node = 5 -> como já passou por "inOrderTraverseNode(node.left, callback)" vai direto pro "callback"

            6.left = null, printNode -> 6 espera sair de null, printNode
            null, printNode = não atende a condicional, sai da execução
            node = 6 -> como já passou por "inOrderTraverseNode(node.left, callback)" vai direto pro "callback"

            node = 7 -> como já passou por "inOrderTraverseNode(node.left, callback)" vai direto pro "callback"

            9.left = 8, printNode -> 9 espera sair de 8, printNode
            8.left = null, printNode -> 8 espera sair de null, printNode
            null, printNode = não atende a condicional, sai da execução
            node = 8 -> como já passou por "inOrderTraverseNode(node.left, callback)" vai direto pro "callback"

            node = 9 -> como já passou por "inOrderTraverseNode(node.left, callback)" vai direto pro "callback"

            10.left = null, printNode -> 10 espera sair de null, printNode
            null, printNode = não atende a condicional, sai da execução
            node = 10 -> como já passou por "inOrderTraverseNode(node.left, callback)" vai direto pro "callback"

            node = 11 -> como já passou por "inOrderTraverseNode(node.left, callback)" vai direto pro "callback"

            15.left = 13, printNode -> 15 espera sair de 13, printNode
            13.left = 12, printNode -> 13 espera sair de 12, printNode
            12.left = null, printNode -> 13 espera sair de null, printNode
            null, printNode = não atende a condicional, sai da execução
            node = 12 -> como já passou por "inOrderTraverseNode(node.left, callback)" vai direto pro "callback"

            node = 13 -> como já passou por "inOrderTraverseNode(node.left, callback)" vai direto pro "callback"
            ...
            */
            callback(node.key);
            /*
            3
            5
            6
            7
            8
            9
            10
            11
            12
            13
            ...
            */
            inOrderTraverseNode(node.right, callback);
            /*
            3.right = null, printNode -> 3 espera sair de null, printNode
            null, printNode = não atende a condicional, sai da execução

            5.right = 6, printNode -> 5 espera sair de 6, printNode

            6.right = null, printNode -> 6 espera sair de null, printNode
            null, printNode = não atende a condicional, sai da execução

            7.right = 9, printNode -> 7 espera sair de 9, printNode

            8.right = null, printNode -> 8 espera sair de null, printNode
            null, printNode = não atende a condicional, sai da execução

            9.right = 10, printNode -> 9 espera sair de 10, printNode

            6.right = null, printNode -> 6 espera sair de null, printNode
            null, printNode = não atende a condicional, sai da execução

            7.right = 9, printNode -> 7 espera sair de 9, printNode (já saiu)

            11.right = 15, printNode -> 11 espera sair de 15, printNode

            12.right = null, printNode -> 12 espera sair de null, printNode
            null, printNode = não atende a condicional, sai da execução

            13.right = 14, printNode -> 13 espera sair de 14, printNode
            ...
            */

        }

    }

    this.preOrderTraverse = function() {

        // Visita todos os nós da árvore usando um percurso pré ordem

    }

    this.postOrderTraverse = function() {

        // Visita todos os nós da árvore usando um percurso pós ordem

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

// método "inOrderTraverse()" que percore os valores da árvore em ordem crescente, e passando como argumento a função de imprimir valor, ou seja, serão imprimidos os valores da árvore em ordem crescente
tree.inOrderTraverse(printNode);

// callback é quando é passada uma função como argumento de outra função, onde em algum momento essa função será chamada