// JavaScript File
var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
var functions = document.getElementById("dropdown");
var output = document.getElementById("output");
var button = document.getElementById("equal");
var solution;

button.addEventListener("click", buttonfunction);

function buttonfunction() {
    if (functions.value == "-"){
        solution = parseInt(input1.value) - parseInt(input2.value);
        output.innerHTML = solution;
    }

    else if  (functions.value == "+"){
        solution = parseInt(input1.value) + parseInt(input2.value);
        output.innerHTML = solution;
    }
    else if  (functions.value == "/"){
        solution = parseInt(input1.value) / parseInt(input2.value);
        output.innerHTML = solution;
    }
    else if  (functions.value == "x"){
        solution = parseInt(input1.value) * parseInt(input2.value);
        output.innerHTML = solution;
    }
    else if  (functions.value == "√"){
        solution = Math.sqrt(parseInt(input2.value));
        output.innerHTML = solution;
    }
    else if  (functions.value == "^"){
        solution = Math.pow(parseInt(input1.value), parseInt(input2.value));
        output.innerHTML = solution;
}
}

