    // Binary Tree - Métodos - insert()

// Estrutura de Árvores Binárias

function BinarySearchTree() {

    var Node = function (key) {

        this.key = key;
        this.left = null;
        this.right = null;

    }

    var root = null;

    // 11 7 15 5 3 9 8 10 13 12 14 20 18 25 6

    this.insert = function(key) {

        // Insere uma chave

        var newNode = new Node(key);  // cria no nó com o valor passado, e mais seus ramos "right" e "left" com valores "null"

        // a partir do 11, root é igual a 11, logo não entra mais nessa condicional
        if(root === null) {
            /*
            11 = true
            */

            root = newNode; // root = 11

        } else {

            insertNode(root, newNode); // chama função "insertNode" passando como argumento a raiz e o novo nó
            /*
            11, 7
            11, 15
            11, 5
            11, 3
            11, 9
            11, 8
            11, 10
            11, 13
            11, 12
            11, 14
            11, 20
            11, 18
            11, 25
            11, 6
            */

        }

    }

    // 7 15 5 3 9 8 10 13 12 14 20 18 25 6

    var insertNode = function(node, newNode) {
            /*
            11, 7
            
            11, 15
            
            11, 5
            7, 5
            
            11, 3
            7, 3
            5, 3
            
            11, 9
            7, 9

            11, 8
            7, 8
            9, 8

            11, 10
            7, 10
            9, 10

            11, 13
            15, 13

            ...
            */

        if(newNode.key < node.key) {
            /*
            11, 7 = true

            11, 5 = true
            7, 5 = true

            11, 3 = true
            7, 3 = true
            5, 3 = true

            11, 9 = true
            7, 9 = false

            11, 8 = true
            7, 8 = false
            9, 8 = true

            11, 10 = true
            7, 10 = false
            9, 10 = false

            11, 13 = false
            15, 13 = true

            ...
            */

            if(node.left === null) { // (11 - 7) (11 - 5) (7 - 5) (11 - 3) (7 - 3) (5 - 3) (11 - 9) (11 - 8) (9 - 8) (11 - 10) (15 - 13)
                /*
                (7) 11.left = null (true)

                (5) 11.left = 7 (false)
                (5) 7.left = null (true)

                (3) 11.left = 7 (false)
                (3) 7.left = 5 (false)
                (3) 5.left = null (true)

                (9) 11.left = 7 (false)

                (8) 11.left = 7 (false)
                (8) 9.left = null (false)

                (10) 11.left = 7 (false)

                (13) 15.left = null (true)

                ...
                */

                node.left = newNode; 
                /*
                11 left = 7
                7 left = 5   
                5 left = 3
                9 left = 8
                15 left = 13

                ...
                */

            } else {


                insertNode(node.left, newNode); // recursividade = uma função que fica se auto executando até atingir determinada condição
                /*
                7, 5

                7, 3
                5, 3
                
                7, 9

                7, 8

                7, 10

                ...
                */

            }
            
        } else {

            if(node.right == null) {
                /*
                (15) 11.right = null (true)

                (9) 7.right = null (true)

                (8) 7.right = 9 (false)

                (10) 7.right = 9 (false)
                (10) 9.right = null (true)

                (13) 11.right = 15 (false)

                ...
                */

                node.right = newNode;
                /*
                11 right = 15
                7 right = 9
                9 right = 10

                ...
                */

            } else {

                insertNode(node.right, newNode); // recursividade = uma função que fica se auto executando até atingir determinada condição
                /*
                9, 8

                9, 10

                15, 13

                ...
                */ 

            }

        }

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