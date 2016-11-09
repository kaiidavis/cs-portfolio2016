var todolistinputbox = document.getElementById("todolistinputbox");
var submitbutton = document.getElementById("submitbutton");
var regularoutput = document.getElementById("regularoutput");
var dropdown = document.getElementById("dropdown");
var goldborderoutput = document.getElementById("goldborderoutput");
var redoutput = document.getElementById("redoutput");
var boldoutput = document.getElementById("boldoutput");
var underlineoutput = document.getElementById("underlineoutput");
var removingbutton = document.createElement('button');
var underlinebtn = document.createElement('button');




submitbutton.addEventListener("click", buttonfunction);

function buttonfunction() {

    if (dropdown.value === "regular") {
        regularoutput.appendChild(document.createElement('div')).innerHTML = todolistinputbox.value;
        regularoutput.style.backgroundColor = "white";
        todolistinputbox.value = "";
regularoutput.appendChild(removingbutton).innerHTML = "Click button to take delete safety off";
regularoutput.appendChild(underlinebtn).innerHTML = "Click button to underline and remove safety";
        /*
        var removingbutton = document.createElement("button")
        removingbutton.setAttribute("id", removingbuttons)
        regularoutput.appendChild(document.createElement(removingbutton)).innerHTML = "remove";*/
        
    }

    else if (dropdown.value === "gb") {
        goldborderoutput.appendChild(document.createElement('div')).innerHTML = todolistinputbox.value;
        todolistinputbox.value = goldborderoutput.style.borderColor;
        goldborderoutput.style.borderColor = "#998200";
        goldborderoutput.style.backgroundColor = "white";
        todolistinputbox.value = "";
    }
    else if (dropdown.value === "red") {
        redoutput.appendChild(document.createElement('div')).innerHTML = todolistinputbox.value;
        todolistinputbox.value = redoutput.style.color;
        redoutput.style.color = "red";
        redoutput.style.backgroundColor = "white";
        todolistinputbox.value = "";
    }
    else if (dropdown.value === "b") {
        boldoutput.appendChild(document.createElement('div')).innerHTML = todolistinputbox.value;
        todolistinputbox.value = boldoutput.style.fontWeight;
        boldoutput.style.fontWeight = "bold";
        boldoutput.style.backgroundColor = "white";
        todolistinputbox.value = "";
    }
    else if (dropdown.value === "underline") {
        underlineoutput.appendChild(document.createElement('div')).innerHTML = todolistinputbox.value;
        todolistinputbox.value = underlineoutput.style.textDecoration;
        underlineoutput.style.textDecoration = "underline";
        underlineoutput.style.backgroundColor = "white";
        todolistinputbox.value = "";
    }
}

underlinebtn.addEventListener("click", strikefunction);
function strikefunction (evt) {
regularoutput.style.textDecoration = "line-through";
var removes = evt.target;
removes.parentNode.removeChild(removes) in regularoutput.addEventListener("click", strikefunction);

}
removingbutton.addEventListener("click", removefunction);
function removefunction (evt){
    var remove = evt.target;
remove.parentNode.removeChild(remove) in regularoutput.addEventListener("click", removefunction);
}









/*
removebutton.addEventListener("click", removefunction);

function removefunction(evt) {
    var remove = evt.target;
   remove.parentNode.removeChild(remove);

}

goldborderoutput.addEventListener("click", removegoldborderfunction);

function removegoldborderfunction(evt) {
    var remove = evt.target;
    remove.parentNode.removeChild(remove);
}
redoutput.addEventListener("click", removeredfunction);

function removeredfunction(evt) {
    var remove = evt.target;
    remove.parentNode.removeChild(remove);
}
boldoutput.addEventListener("click", removeboldfunction);

function removeboldfunction(evt) {
    var remove = evt.target;
    remove.parentNode.removeChild(remove);
}
underlineoutput.addEventListener("click", removeunderlinefunction);

function removeunderlinefunction(evt) {
    var remove = evt.target;
    remove.parentNode.removeChild(remove);
}
*/