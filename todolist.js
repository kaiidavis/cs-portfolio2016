var input1 = document.getElementById("input1");
var button = document.getElementById("button");
var outputarea = document.getElementById("tasks");
var dropdown = document.getElementById("dropdown");


button.addEventListener("click", buttonfunction);

function buttonfunction() {
    if (dropdown.value === "regular"){
        outputarea.innerHTML = input1.value;
    }
    
   else if (dropdown.value === "underline"){
        outputarea.innerHTML = input1.value;
     input1.value = outputarea.style.textDecoration;
     outputarea.style.textDecoration = "underline";
    }
    else if (dropdown.value === "gb") {
       outputarea.innerHTML = input1.value;
       input1.value = outputarea.style.borderColor;
       outputarea.style.borderColor = "#998200";
    }
    else if (dropdown.value === "red") {
       outputarea.innerHTML = input1.value;
       input1.value = outputarea.style.color;
       outputarea.style.color = "red";
    }
    else if (dropdown.value === "b"){
         outputarea.innerHTML = input1.value;
         input1.value = outputarea.style.fontWeight;
        outputarea.style.fontWeight = "bold";
    }
}

