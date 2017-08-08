class Tree {
    constructor(compareFunc) {
        this.root = null;
        this.compareFunc = compareFunc;

        Object.defineProperty(this, 'height', {
            enumerable: false,
            configurable: true,
            get: function() {
                return height(this.root);
            }
        });
    }

    insert(data) {
        if (this.root === null) {
            this.root = new NodeTree(data);
        } else {
            var start = this.root;
            while (true) {
                if (this.compareFunc(start.data, data) < 0) {
                    if (!start.left) {
                        start.left = new NodeTree(data);
                        break;
                    } else {
                        start = start.left;
                    }
                } else if (this.compareFunc(start.data, data) > 0) {
                    if (!start.right) {
                        start.right = new NodeTree(data);
                        break;
                    } else {
                        start = start.right;
                    }
                }
            }
        }
    }

    find(data) {
        var current = this.root;
        while (current.data != data) {
            if (this.compareFunc(current.data, data) < 0) {
                current = current.left;
            } else if (this.compareFunc(current.data, data) > 0) {
                current = current.right;
            }
            if (current == null) {
                return null;
            }
        }
        return current;
    }

    getallData(current) {
        if (current == null) {
            return;
        }
        return getallData(current.left) + getallData(current.right) + console.log(current.data);
    }

    toString() { //returns string
        getallData(this.root);

        function getallData(current) {
            if (current == null) {
                return;
            }
            return getallData(current.left) + getallData(current.right) + console.log(current.data);
        }
    }

}


function height(tree) {
    if (!tree) return 0;
    var leftHeight = height(tree.left);
    var rightHeight = height(tree.right);

    return Math.max(leftHeight, rightHeight) + 1;
}


class NodeTree {
    constructor(data) {
        this.data = data;
        this.left = this.right = null;
    }
}

// Tree.prototype.sum = function sum(root) {
//     if (this.root === null) {
//         return;
//     }
//     return sum(this.root.right) + sum(this.root.left) + this.root.data;
// }





// Tree prototype function
var myTree = new Tree(compareFunc);
myTree.insert(5);
myTree.insert(4);
myTree.insert(2);
myTree.insert(1);
myTree.insert(6);
myTree.insert(9);
myTree.insert(8);
//myTree.height(myTree.root);
//console.log(myTree);
console.log("sum:" + sum(myTree.root));

function sum(node) {
    if (node === null) {
        return 0;
    }
    return sum(node.right) + sum(node.left) + node.data;
}




console.log(myTree.find(8));



// Tree.prototype.toString = function() { //returns string
//     getallData(this.root);
// }

// function getallData(current) {
//     if (current == null) {
//         return;
//     }
//     return getallData(current.left) + getallData(current.right) + console.log(current.data);
// }




myTree.toString(); // ttttttttttttttttttto string
//console.log(JSON.stringify(myTree.toString()));
Tree.prototype.forEach = function(action, context, traverseMode) { //traverseMode: pre / in /post / bfs


}




/////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////********************//////////////////////////////////////
//////////**************//////////////////////////////////****************///////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
function compareFunc(a, b) {
    if (a < b) {
        return 1;
    } else if (a > b) {
        return -1;
    }
}


console.log("\n")
console.log(myTree.height);
//console.log(myTree);

console.log(compareFunc.value);