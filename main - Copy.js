var fs = require("fs");
//var data = fs.readFileSync('input.txt');

//console.log(data.toString());
//console.log("Program ended");

/*
fs.readFile('input.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});
*/

/*
function toRead(err, data) {
    if(err){
        return console.error(err);
    } 
    console.log(data.toString());
};


fs.readFile("input.txt",toRead);
console.log("Program ended");
*/

var dataSet = [1,4,7,3,9,25,99,34,6,2];
console.log("Program ended",dataSet);

//============================

for (var index = 0; index < dataSet.length ; index++) {
    //var element = dataSet[index];
    console.log( "value:", dataSet[index]);
}



//=========================================
// unbalance tree

function TreeNode(){
    this.left;
    this.right;
    this.value;
}

var dataSet = [1,4,7,3,9,25,99,34,6,2];
theRoot = new TreeNode;
var currentNode= theRoot;
var index =0;
currentNode.value = dataSet[0];     // seed the root with the first data value.
while(index <  dataSet.length){
     console.log( "nodevalue:", currentNode.value,"  ", "index:", index);
    if(dataSet[index+1]< currentNode.value){
        if(currentNode.left == undefined){
            currentNode.left = new TreeNode;
            currentNode.left.value= dataSet[index+1];
            currentNode= theRoot;
            index++;
            }
        else{
            currentNode= currentNode.left;
        }
    }
    else{
        if(currentNode.right == undefined){
            currentNode.right = new TreeNode;
            currentNode.right.value= dataSet[index+1];
            currentNode= theRoot;
            index++;
        }
        else{
        currentNode = currentNode.right;
        }
    }  
}
console.log("end of program");
/*
for (var index = 0; index < dataSet.length ; index++) {
    console.log( "nodevalue:", currentNode.value,"  ", "index:", index)
    if(dataSet[index+1]< currentNode.value){
        if(currentNode.left == undefined){
            currentNode.left = new TreeNode;
            currentNode.left.value= dataSet[index+1];
            currentNode= theRoot;

            }
        else{
            currentNode= currentNode.left;
        }
    }
    else{
        if(currentNode.right == undefined){
            currentNode.right = new TreeNode;
            currentNode.right.value= dataSet[index+1];
            currentNode= theRoot;
        }
        else{
        currentNode = currentNode.right;
        }
    }
}
*/

//==============================================
// balanced tree
/*
theRoot = new TreeNode;
var currentNode= theRoot;
for (var index = 0; index < dataSet.length ; index++) {
    currentNode.value = dataSet[index];
    if(dataSet[index+1]< currentNode.value){
        currentNode.left = new TreeNode;
        currentNode.left.value= dataSet[index+1];
    }
    else{
        currentNode.right = new TreeNode;
        currentNode.right. value = dataSet[index+1];
    }
}
*/



//==============================
// tree concept
/*
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
