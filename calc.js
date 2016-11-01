//JavaScript File

var buttonpar = document.getElementById("buttonpar");
var buttonpar2 = document.getElementById("buttonpar2");
var buttonpercent = document.getElementById("buttonpercent");
var buttonAC = document.getElementById("buttonAC");
var button0 = document.getElementById("button0");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var button4 = document.getElementById("button4");
var button5 = document.getElementById("button5");
var button6 = document.getElementById("button6");
var button7 = document.getElementById("button7");
var button8 = document.getElementById("button8");
var button9 = document.getElementById("button9");
var buttondot = document.getElementById("buttondot");
var buttonequals = document.getElementById("buttonequals");
var buttondivide = document.getElementById("buttondivide");
var buttonx = document.getElementById("buttonx");
var buttonminus = document.getElementById("buttonminus");
var buttonplus = document.getElementById("buttonplus");
var answerbox = document.getElementById("answerbox");

button1.addEventListener("click", button1function);

function button1function () {
    answerbox.innerHTML = "1";
}

button2.addEventListener("click", button2function);

function button2function () {
    answerbox.innerHTML = "2";
}

buttonplus.addEventListener("click", buttonplusfunction);

function buttonplusfunction () {
    answerbox.innerHTML = '+=';
}

buttonequals.addEventListener("click", buttonequalsfunction);

function buttonequalsfunction () {
    answerbox.innerHTML = "=";
}


