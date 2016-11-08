var todolistinputbox = document.getElementById("todolistinputbox");
var submitbutton = document.getElementById("submitbutton");
var regularoutput = document.getElementById("regularoutput");
var dropdown = document.getElementById("dropdown");
var goldborderoutput = document.getElementById("goldborderoutput");
var redoutput = document.getElementById("redoutput");
var boldoutput = document.getElementById("boldoutput");
var underlineoutput = document.getElementById("underlineoutput");



submitbutton.addEventListener("click", buttonfunction);

function buttonfunction() {
 
    if (dropdown.value === "regular"){
       regularoutput.appendChild(document.createElement('div')).innerHTML = todolistinputbox.value;
       regularoutput.style.backgroundColor = "white";
       todolistinputbox.value = "";
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
    else if (dropdown.value === "b"){
         boldoutput.appendChild(document.createElement('div')).innerHTML = todolistinputbox.value;
         todolistinputbox.value = boldoutput.style.fontWeight;
        boldoutput.style.fontWeight = "bold";
        boldoutput.style.backgroundColor = "white";
        todolistinputbox.value = "";
    }
  else if (dropdown.value === "underline"){
        underlineoutput.appendChild(document.createElement('div')).innerHTML = todolistinputbox.value;
     todolistinputbox.value = underlineoutput.style.textDecoration;
     underlineoutput.style.textDecoration = "underline";
     underlineoutput.style.backgroundColor = "white";
     todolistinputbox.value = "";
    }
}
/*
regularoutput.addEventListener("click", strikeremovefunction);
function strikeremovefunction () {
if (regularoutput.value === "") {
regularoutput.style.textDecoration = "line-through";


}

else if (regularoutput.value === "") {
    var remove = event.target;
    remove.parentNode.removeChild(remove);

}
}
*/

regularoutput.addEventListener("click", removefunction);
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
