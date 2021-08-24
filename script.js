var displayDiv = document.querySelector('#display');
console.log(displayDiv);

var equation = [];
var storedNum = '';
function press(val){
    displayDiv.innerText = val;
    equation.push(val);
}

function clr(){
    displayDiv.innerText = " ";
    equation = [];
}

function setOP(val){
    equation.push(val);
    displayDiv.innerText = val;
}

function calculate(){
    equation.toString()
    eval(equation);
    displayDiv.innerText = equation;
    console.log(equation);
}