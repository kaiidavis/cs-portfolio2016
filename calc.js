// JavaScript File
// Each of these variables use document.getElementById to connect each html section to the javascript and making each of them a variable.
var firstvalue = document.getElementById("firstvalue");
var secondvalue = document.getElementById("secondvalue");
var functiondropdown = document.getElementById("functiondropdown");
var answeroutput = document.getElementById("answeroutput");
var equalsbutton = document.getElementById("equalsbutton");

//The event listener listens for something specific, in this case a click and it is connected when the button is activated which is why its equalsbutton.addEventListener. I put comma then buttonfunction so when it registers the click, it runs the function buttonfunction.
equalsbutton.addEventListener("click", buttonfunction);

function buttonfunction() {
//ParseInt analyzes a string and makes it into an integer so that it answers in values and it is set to variable value1 and value2 which will be used for the commands.
    var value1 = parseInt(firstvalue.value);
    var value2 = parseInt(secondvalue.value);
//Each if is used for each possible option in the dropdown called functions. It states that if the dropdown funcion value is minus, it will subtract value 1 by value 2.  
    if (functiondropdown.value == "-"){
        answeroutput.innerHTML = value1 - value2;
    }
//The else if's are for the other options in the dropdown menu and are the same as the first if value except different functions. 
    else if  (functiondropdown.value == "+"){
        answeroutput.innerHTML = value1 + value2;
    }
    else if  (functiondropdown.value == "/"){
        answeroutput.innerHTML = value1 / value2;
    }
    else if  (functiondropdown.value == "x"){
        answeroutput.innerHTML = value1 * value2;
    }
//You do not need to define Math as an object and Math.sqrt is the function to squareroot using javascript which is Math.sqrt and Math.pow. 
    else if  (functiondropdown.value == "√"){
        answeroutput.innerHTML = Math.sqrt(value2);
    }
//To activate the exponent function you need to use Math.pow which is the command that javascript understand for the exponent command. By using Math.pow javascript understands to exponent firstvalue to the power of the value secondvalue is. 
    else if  (functiondropdown.value == "^"){
        answeroutput.innerHTML = Math.pow(value1, value2);
}
}

