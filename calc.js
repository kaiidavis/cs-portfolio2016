// JavaScript File
// Each of these variables use document.getElementById to connect each html section to the javascript and making each of them a variable.
var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
var functions = document.getElementById("dropdown");
var output = document.getElementById("output");
var button = document.getElementById("equal");

//The event listener listens for something specific, in this case a click and it is connected when the button is activated which is why its button.addEventListener. I put comma then buttonfunction so when it registers the click, it runs the function buttonfunction.
button.addEventListener("click", buttonfunction);

function buttonfunction() {
//ParseInt analyzes a string and makes it into an integer so that it answers in values and it is set to variable value1 and value2 which will be used for the commands.
    var value1 = parseInt(input1.value)
    var value2 = parseInt(input2.value)
//Each if is used for each possible option in the dropdown called functions. It states that if the dropdown funcion value is minus, it will subtract input 1 by input 2.  
    if (functions.value == "-"){
        output.innerHTML = value1 - value2;
    }
//The else if's are for the other options in the dropdown menu and are the same as the first if value except different functions. 
    else if  (functions.value == "+"){
        output.innerHTML = value1 + value2;
    }
    else if  (functions.value == "/"){
        output.innerHTML = value1 / value2;
    }
    else if  (functions.value == "x"){
        output.innerHTML = value1 * value2;
    }
//You do not need to define Math as an object and Math.sqrt is the function to squareroot using javascript which is why I used this. 
    else if  (functions.value == "√"){
        output.innerHTML = Math.sqrt(value2);
    }
//To activate the exponent function you need to use Math.pow which is the command that javascript understand for the exponent command. By using Math.pow javascript understands to exponent input1 to the power of the value input2 is. 
    else if  (functions.value == "^"){
        output.innerHTML = Math.pow(value1, value2);
}
}

