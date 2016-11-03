// JavaScript File
// Each of these variables use document.getElementById to connect each html section to the javascript. Also I had solution variable to find the answer compared to the output in html 
var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
var functions = document.getElementById("dropdown");
var output = document.getElementById("output");
var button = document.getElementById("equal");
var solution;
//The event listener listens for something specific, in this case a click and it is connected when the button is activated which is why its button.addEventListener. I put comma then buttonfunction so when it registers the click, it runs the function buttonfunction.
button.addEventListener("click", buttonfunction);

function buttonfunction() {
//Each if is used for each possible option in the dropdown called functions. It states that if the dropdown funcion value is minus, it will subtract input 1 by input 2. ParseInt analyzes a string and makes it into an integer so that it answers in values. 
    if (functions.value == "-"){
        solution = parseInt(input1.value) - parseInt(input2.value);
        output.innerHTML = solution;
    }
//The else if's are for the other options in the dropdown menu and are the same as the first if value except different functions. 
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
//You do not need to define Math as an object and Math.sqrt is the function to squareroot using javascript which is why I used this. 
    else if  (functions.value == "√"){
        solution = Math.sqrt(parseInt(input2.value));
        output.innerHTML = solution;
    }
//To activate the exponent function you need to use Math.pow which is the command that javascript understand for the exponent command. By using Math.pow javascript understands to exponent input1 to the power of the value input2 is. 
    else if  (functions.value == "^"){
        solution = Math.pow(parseInt(input1.value), parseInt(input2.value));
        output.innerHTML = solution;
}
}

