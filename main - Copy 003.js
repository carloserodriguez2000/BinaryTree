
'use strict'; 

//=========================================
// unbalance tree
//for (var index = 0; index < dataSet.length ; index++) {
    //var element = dataSet[index];
//    console.log( "value:", dataSet[index]);
//}


function TreeNode(value){
    this.left=null;
    this.right=null;
    this.value = value;
}

function AddNode(pTheRoot,PNode,pValue){
    if(PNode === null){
        PNode = new TreeNode(pValue);
        return pTheRoot;
    }
    else{ 
        return PNode;
    }
}

function StoreValue( pTheRoot, pValue){
    var currentNode = pTheRoot;
    do{                                         // navigate left OR right and add node on a new leave.
        if(pValue<= currentNode.value){
                currentNode = AddNode(pTheRoot, currentNode.left, pValue);
            }
            else{
                currentNode = AddNode(pTheRoot, currentNode.right, pValue);
            }  
    }while (currentNode !=pTheRoot); 
        
}

function buildBinaryTree( dataSet){
    var theRoot = new TreeNode();
    var currentNode= theRoot;
    var index =0;

    currentNode.value = dataSet[index];     // seed the root with the first data value.
    for (var index = 0; index < dataSet.length; index++) {
        console.log( "index:", index,"nextostore:",dataSet[index+1]);
        StoreValue( theRoot, dataSet[index+1]);
    }
    return theRoot;
}


var binaryTree = buildBinaryTree([1,4,7,3,9,25,99,34,6,2]);
//var anotherTree = buildBinaryTree([7,44,33,3.4,2]);
//console.log("end of unbalanced program");


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
