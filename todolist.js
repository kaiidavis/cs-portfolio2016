//This var makes the input area
var todolistinputbox = document.getElementById("todolistinputbox");
//This is the button from the html that is clicked to add whatever in the input in a div 
var submitbutton = document.getElementById("submitbutton");
//This is the select class that is used to make the dropdown
var dropdown = document.getElementById("dropdown");
//Each of these outputs are from each div made for each dropdown effect
var regularoutput = document.getElementById("regularoutput");
var goldborderoutput = document.getElementById("goldborderoutput");
var redoutput = document.getElementById("redoutput");
var boldoutput = document.getElementById("boldoutput");
var underlineoutput = document.getElementById("underlineoutput");
//These two make button elements for removing things from the list and to make a strikethrough and it is used for each dropdown selection
var regularremovingbutton = document.createElement('button');
var regularstrikebtn = document.createElement('button');

var goldborderremovingbutton = document.createElement('button');
var goldborderstrikebtn = document.createElement('button');

var redremovingbutton = document.createElement('button');
var redstrikebtn = document.createElement('button');

var boldremovingbutton = document.createElement('button');
var boldstrikebtn = document.createElement('button');

var underlineremovingbutton = document.createElement('button');
var underlinestrikebtn = document.createElement('button');



//This listens for a click on the sumbitbutton and activates the buttonfunction. 
submitbutton.addEventListener("click", buttonfunction);

function buttonfunction() {
//The first part of this if statement is when the dropdown is set on regular. It uses the regularoutput, which is the div, and uses append Child, adding something on, a element div, which is a HTML element. It is equal to the input, todolistinputbox, so that whatever is in the input and it has regular selected, which output what was put in.
    if (dropdown.value === "regular") {
        regularoutput.appendChild(document.createElement('div')).innerHTML = todolistinputbox.value;
//This says that the output will have a style change on the background color to make it white so that you can see the text being outputted. Also it sets the text decoration to nothing to reset the strikethrough actions after deleting it on the to do list. 
        regularoutput.style.backgroundColor = "white";
        regularoutput.style.textDecoration = "";
//This line is used to make the inputbox go back to empty after hitting the sumbitbutton and putting the text into the list. 
        todolistinputbox.value = "";
//These two lines are putting the button add on using appendChild in the output area. The parenthesis is from the var for each button when it was creating elements written in the var section. The button is a html aspect which is why it has .innerHTML. After that it equals to whatever you want the text to be.
regularoutput.appendChild(regularremovingbutton).innerHTML = "Click button to take safety off";
regularoutput.appendChild(regularstrikebtn).innerHTML = "Click button to make the list strikethrough and remove safety";
    }
//These are the same except for the different dropdown selections making different features. They all use style to add a certain style to the text in the list being made. Using border color or background color or fontWeigt or textDecoration for each of the features that each dropdown section do.
    else if (dropdown.value === "gb") {
        goldborderoutput.appendChild(document.createElement('div')).innerHTML = todolistinputbox.value;
        todolistinputbox.value = goldborderoutput.style.borderColor;
        goldborderoutput.style.borderColor = "#998200";
        goldborderoutput.style.backgroundColor = "white";
        goldborderoutput.style.textDecoration = "";
        todolistinputbox.value = "";
goldborderoutput.appendChild(goldborderremovingbutton).innerHTML = "Click button to take safety off";
goldborderoutput.appendChild(goldborderstrikebtn).innerHTML = "Click button to make the list strikethrough and remove safety";
    }
    else if (dropdown.value === "red") {
        redoutput.appendChild(document.createElement('div')).innerHTML = todolistinputbox.value;
        todolistinputbox.value = redoutput.style.color;
        redoutput.style.color = "red";
        redoutput.style.backgroundColor = "white";
        redoutput.style.textDecoration = "";
        todolistinputbox.value = "";
redoutput.appendChild(redremovingbutton).innerHTML = "Click button to take safety off";
redoutput.appendChild(redstrikebtn).innerHTML = "Click button to make the list strikethrough and remove safety";
    }
    else if (dropdown.value === "b") {
        boldoutput.appendChild(document.createElement('div')).innerHTML = todolistinputbox.value;
        todolistinputbox.value = boldoutput.style.fontWeight;
        boldoutput.style.fontWeight = "bold";
        boldoutput.style.backgroundColor = "white";
        boldoutput.style.textDecoration ="";
        todolistinputbox.value = "";
boldoutput.appendChild(boldremovingbutton).innerHTML = "Click button to take safety off";
boldoutput.appendChild(boldstrikebtn).innerHTML = "Click button to make the list strikethrough and remove safety";
    }
    else if (dropdown.value === "underline") {
        underlineoutput.appendChild(document.createElement('div')).innerHTML = todolistinputbox.value;
        todolistinputbox.value = underlineoutput.style.textDecoration;
        underlineoutput.style.textDecoration = "underline";
        underlineoutput.style.backgroundColor = "white";
        todolistinputbox.value = "";
underlineoutput.appendChild(underlineremovingbutton).innerHTML = "Click button to take safety off";
underlineoutput.appendChild(underlinestrikebtn).innerHTML = "Click button to make the list strikethrough and remove safety";
    }
}
//This listens for when the strike button is clicked and it runs the regularstrikefunction. The evt.target gives back a element to get rid of the child, the button add on function. It uses the first addEventListener as a way to make a safety so that you can't remove something from the list without pushing the button.
regularstrikebtn.addEventListener("click", regularstrikefunction);
function regularstrikefunction (evt) {
regularoutput.style.textDecoration = "line-through";
var removes = evt.target;
//This part uses the evt.target to remove stuff from the to do list when you click in the regular output div.
removes.parentNode.removeChild(removes) in regularoutput.addEventListener("click", regularstrikefunction);

}
//This is the same thing as the strike button although it takes the safety away without making a strikethrough, while strike button uses text decoration to make these actions. 
regularremovingbutton.addEventListener("click", regularremovefunction);
function regularremovefunction (evt){
    var remove = evt.target;
    //This is the same as the previous in waiting for a click in the output div, after the safety is removed by using the button.
remove.parentNode.removeChild(remove) in regularoutput.addEventListener("click", regularremovefunction);
}

//These are all the same expect they are made for each possible feature.
goldborderstrikebtn.addEventListener("click", goldborderstrikefunction);
function goldborderstrikefunction (evt) {
goldborderoutput.style.textDecoration = "line-through";
var removes = evt.target;
removes.parentNode.removeChild(removes) in goldborderoutput.addEventListener("click", goldborderstrikefunction);

}
goldborderremovingbutton.addEventListener("click", goldborderremovefunction);
function goldborderremovefunction (evt){
    var remove = evt.target;
remove.parentNode.removeChild(remove) in goldborderoutput.addEventListener("click", goldborderremovefunction);
}

redstrikebtn.addEventListener("click", redstrikefunction);
function redstrikefunction (evt) {
redoutput.style.textDecoration = "line-through";
var removes = evt.target;
removes.parentNode.removeChild(removes) in redoutput.addEventListener("click", redstrikefunction);

}
redremovingbutton.addEventListener("click", redremovefunction);
function redremovefunction (evt){
    var remove = evt.target;
remove.parentNode.removeChild(remove) in redoutput.addEventListener("click", redremovefunction);
}

boldstrikebtn.addEventListener("click", boldstrikefunction);
function boldstrikefunction (evt) {
boldoutput.style.textDecoration = "line-through";
var removes = evt.target;
removes.parentNode.removeChild(removes) in boldoutput.addEventListener("click", boldstrikefunction);

}
boldremovingbutton.addEventListener("click", boldremovefunction);
function boldremovefunction (evt){
    var remove = evt.target;
remove.parentNode.removeChild(remove) in boldoutput.addEventListener("click", boldremovefunction);
}

underlinestrikebtn.addEventListener("click", underlinestrikefunction);
function underlinestrikefunction (evt) {
underlineoutput.style.textDecoration = "line-through";
var removes = evt.target;
removes.parentNode.removeChild(removes) in underlineoutput.addEventListener("click", underlinestrikefunction);

}
underlineremovingbutton.addEventListener("click", underlineremovefunction);
function underlineremovefunction (evt){
    var remove = evt.target;
remove.parentNode.removeChild(remove) in underlineoutput.addEventListener("click", underlineremovefunction);
}
//This function listens for when the mouse is over the output div and waits for when there is no text content so that the background color of white being made when things are being added to the list go away when the mouse goes over it when the text is all deleted.
regularoutput.addEventListener("mouseover", regularinvisibleborderfunction);
function regularinvisibleborderfunction () {
    if (regularoutput.textContent === "") {
        regularoutput.style.backgroundColor = "transparent";
        regularoutput.style.borderColor = "transparent";
}
}
goldborderoutput.addEventListener("mouseover", goldborderinvisibleborderfunction);
function goldborderinvisibleborderfunction () {
    if (goldborderoutput.textContent === "") {
        goldborderoutput.style.backgroundColor = "transparent";
        goldborderoutput.style.borderColor = "transparent";
}
}
redoutput.addEventListener("mouseover", redinvisibleborderfunction);
function redinvisibleborderfunction () {
    if (redoutput.textContent === "") {
        redoutput.style.backgroundColor = "transparent";
        redoutput.style.borderColor = "transparent";
}
}
boldoutput.addEventListener("mouseover", boldinvisibleborderfunction);
function boldinvisibleborderfunction () {
    if (boldoutput.textContent === "") {
        boldoutput.style.backgroundColor = "transparent";
        boldoutput.style.borderColor = "transparent";
}
}
underlineoutput.addEventListener("mouseover", underlineinvisibleborderfunction);
function underlineinvisibleborderfunction () {
    if (underlineoutput.textContent === "") {
        underlineoutput.style.backgroundColor = "transparent";
        underlineoutput.style.borderColor = "transparent";
}
}
