
'use strict'; 

//=========================================
// unbalance tree
//for (var index = 0; index < dataSet.length ; index++) {
    //var element = dataSet[index];
//    console.log( "value:", dataSet[index]);
//}


function TreeNode(value){
    this.parent=null;
    this.left=null;
    this.right=null;
    this.value = value;
}

function valIsLessThan (toInsertVal, nodeVal ){
    if(toInsertVal <= nodeVal) { return true;}
    else {return false;}
}
function addNode(PNode,pValue){
    var newNode = new TreeNode(pValue);
    if(valIsLessThan(pValue,PNode.value )){ 
        PNode.left = newNode;
        console.log( "Left: ", pValue); 
    }
    else{ 
        PNode.right = newNode;
        console.log( "Right: ", pValue); 
    }
    return newNode;
}

function findLeafNode(pTheRoot, pValue)
{
    var currentNode = pTheRoot;
    var previousNode = null;
    do{                             // navigate left OR right and add node on a new leave.
        previousNode = currentNode; // SAVE THE NODE POINTER
        if(valIsLessThan(pValue,currentNode.value )){
            currentNode = currentNode.left ;
        }
        else{
            currentNode = currentNode.right; 
        }  
    }while (currentNode !== null); 

    return previousNode;
}

function buildBinaryTree( dataSet){
    var theRoot = new TreeNode();
    var leafNode = null;
    var newNode = null;
    var index =0;

    theRoot.value = dataSet[index];     // seed the root with the first data value.
    for (var index = 0; index < (dataSet.length-1); index++) {
        leafNode = findLeafNode(theRoot,dataSet[index+1]);
        newNode = addNode(leafNode, dataSet[index+1]);
        newNode.parent = leafNode;
    }
    return theRoot;
}

function printBinaryTreeInOrder( node){
    if(node === null){
        return;
    }
    else{
        printBinaryTreeInOrder(node.left);
        console.log("value: ",node.value);
        printBinaryTreeInOrder(node.right);
    }
}



function Flatten( node, numberList ,index){
    if(node === null){
        return index;
    }
    else{
        index= Flatten(node.left,numberList,index);
        numberList[index] = node.value;
        index++;
        console.log("value: ",node.value);
        index =Flatten(node.right, numberList, index);
        return index;
    }
}

//==============================================================

//==============================================================
// BUILD THE TREE
//==============================================================
var binaryTree = buildBinaryTree([1,4,7,3,9,25,99,34,6,2]);
//==============================================================
//  PRINT THE TREE IN ORDER
//==============================================================
printBinaryTreeInOrder(binaryTree);
//==============================================================
// PUT THE DATA IN A LIST IN ORDER
var listy = [];
Flatten(binaryTree, listy, 0);

for (var index = 0; index < listy.length ; index++) {
    console.log( "value:", listy[index]);
}
/*

var balancedTree = LoadBalanced(treeList);

console.log("end of program");
*/

/*
//=========================================
// balance tree
var sortedDataSet = [];
var dataLenght = dataSet.length;
var index =0;
var currentNode = theRoot;
var currentVal= currentNode.value;  // start with the root number 
while (index <  dataSet.length) {
    if(currentNode.left == undefined){
        if(sortedDataSet[index]<currentNode.value) {
            sortedDataSet[index]= currentNode.value;
            index++;
            if(currentNode.right != undefined){
                currentNode=currentNode.right;
            }    
            else{
                currentNode = theRoot;
            } 
        }
        else{
            sortedDataSet[index]= currentNode.value;
            index++;
        }
    }
    else{
        if(currentNode.right == undefined){
        sortedDataSet[index]= currentNode.value;
        index++;
        }
    }
}

 function sortNode(TreeNode , dataVal, dataArray){

}
*/

//==============================
// tree concept
/*
var dataSet = [1,4,7,3,9,25,99,34,6,2];
theRoot = new TreeNode;
var currentNode= theRoot;

theRoot.value = dataSet[0];
if(dataSet[1]< currentNode.value){
    currentNode.left = new TreeNode;
    currentNode.left.value= dataSet[1];
}
else{
    currentNode.right = new TreeNode;
    currentNode.right. value = dataSet[1];
}
*/
