const symbols = ['+', '*', '/', '.'];
const minus = '-';


function newInput(element) {
    let previousResult = document.getElementById("result").value;
    
    if(symbols.includes(element.value) && symbols.includes(previousResult.slice(-1))) {
        alert("Some wrong imput!");
    } else if(previousResult.slice(-1) == minus && previousResult.slice(-2).slice(0,1) == minus && (symbols.includes(element.value) || element.value == minus)) {
        alert("Some wrong imput!");
    } else {
        document.getElementById("result").value += element.value;
    }
}

function solve() {
    let result = ""

    try {
        result = eval(document.getElementById("result").value);
        document.getElementById("result").value = result;
    } catch(error) {
        alert("Some wrong input!")
    }
}

function backspace(){
    let elementValue = document.getElementById("result").value;
    elementValue = elementValue.slice(0, -1);
    document.getElementById("result").value = elementValue;
}

function clearResult() {
    document.getElementById("result").value = '';
}