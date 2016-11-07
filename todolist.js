var input1 = document.getElementById("input1");
var button = document.getElementById("button");
var regularoutput = document.getElementById("regularoutput");
var dropdown = document.getElementById("dropdown");
var goldborderoutput = document.getElementById("goldborderoutput");
var redoutput = document.getElementById("redoutput");
var boldoutput = document.getElementById("boldoutput");
var underlineoutput = document.getElementById("underlineoutput");


button.addEventListener("click", buttonfunction);

function buttonfunction() {
 
    if (dropdown.value === "regular"){
       regularoutput.appendChild(document.createElement('div')).innerHTML = input1.value;
    }
 
    else if (dropdown.value === "gb") {
      goldborderoutput.appendChild(document.createElement('div')).innerHTML = input1.value;
       input1.value = goldborderoutput.style.borderColor;
       goldborderoutput.style.borderColor = "#998200";
       input1.value = "";
    }
    else if (dropdown.value === "red") {
      redoutput.appendChild(document.createElement('div')).innerHTML = input1.value;
       input1.value = redoutput.style.color;
       redoutput.style.color = "red";
       input1.value = "";
    }
    else if (dropdown.value === "b"){
         boldoutput.appendChild(document.createElement('div')).innerHTML = input1.value;
         input1.value = boldoutput.style.fontWeight;
        boldoutput.style.fontWeight = "bold";
        input1.value = "";
    }
  else if (dropdown.value === "underline"){
        underlineoutput.appendChild(document.createElement('div')).innerHTML = input1.value;
     input1.value = underlineoutput.style.textDecoration;
     underlineoutput.style.textDecoration = "underline";
     input1.value = "";
    }
}

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