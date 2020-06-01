// Binary search tree in JS.
/*
                              50
                 17                                      72
        12                 23                       54        76
    9       14                  19                      67
*/

// This class represents each node in the tree
// It will have 3 data properties:
// Data which will store the data that we want to save
// left and right will point to the left and right nodes.
        // The left and right start as null

class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

// This class represents the BST

class BST {
    // The constructor creates the root node, which is the top of the tree,
    // And it starts as null.
    constructor() {
        this.root = null;
    }
    // The add function, to add something to the tree
    // pass the data as a parameter
    add(data) {
        // We are refering to the first node, using this.root
        const node = this.root;
        // so if this.root = null, it means this is the top of the tree
        if(node === null) {
            // so without further ado, create a new Node, using node class
            this.root = new Node(data);
            // return to close function
            return;
        } else {
            // so its not the first node, then we have to figure where to put this node
            // on the tree.
                // To do this we are going to use a recursive function.
            const searchTree = function(node) {
                // if the data we are trying to add is less than the data that exists
                // check to the left:
                if(data < node.data) {
                    if(node.left === null) {
                        //if the left is null, ie does not exist, just create the node there.
                        node.left = new Node(data);
                        return;
                    } else if (node.left !== null){
                        // if it does exist then do again the function with said node.
                        // this means we are going to continue searching and this is where the recursive
                        // behaviour appears.
                        return searchTree(node.left);
                    }
                    // So if the Data is more than the node.data, the node will be put to the right!
                } else if ( data > node.data ) {
                    if(node.right === null) {
                        // if node.right is null, just assign it
                        node.right = new Node(data);
                        return;
                        // if not, just continue searching.
                    } else if( node.right !== null) {
                        return searchTree(node.right);
                    } 
                } else {
                    // so if data is not less or more than node.data they must be equal
                    // we are just going to return null
                    return null;
                }

            }
            return searchTree(node);
        }
    }
    // function to find minimum node
    findMin() {
        // if you check the example up top, the minimum is all the way on the left side.
        // the max is always all the way to the right.
        let current = this.root;
        // so while the left exists, ie not null, we are going to continue going to the left
        // until we reach the last one which will be the minimum value of the tree.
        while(this.left !== null) {
            current = current.left;
        }
        return current.data;
    }
    //function to find the max node
    findMax() {
        // the same happens here, but with max and to right
        let current = this.root;
        while(this.right !== null) {
            current = current.right;
        }
        return current.data;
    }

    //find function - to find a specific node.
    find(data) {
        let current = this.node;
        while(current.data !== data) {
            if (data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
            if (current === null) {
                return null;
            }
        }
        return current;
    }
    //similar to find, but returns bool.
    isPresent(data) {
        
    }

}
