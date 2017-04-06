var firstcode = document.getElementById("1stcode");
var firstcodediv = document.getElementById("firstcodediv")
var secondcode = document.getElementById("2ndcode");
var secondcodediv = document.getElementById("secondcodediv")
var thirdcode = document.getElementById("3rdcode");
var thirdcodediv = document.getElementById("thirdcodediv")
var fourthcode = document.getElementById("4thcode");
var fourthcodediv = document.getElementById("fourthcodediv")
var fifthcode = document.getElementById("5thcode");
var fifthcodediv = document.getElementById("fifthcodediv")
var sixthcode = document.getElementById("6thcode");
var sixthcodediv = document.getElementById("sixthcodediv")
var seventhcode = document.getElementById("7thcode");
var seventhcodediv = document.getElementById("seventhcodediv")

firstcode.addEventListener("mouseover", functionfirstcode);
function functionfirstcode() {
   firstcodediv.innerHTML =  "<textarea class='thinner-black-border' rows='4' cols='100'>This code tells the function that it is on level 2. Also it tells it what to save. When you push escape while in the game you access the save menu where you can select either level 1 or 2 which is shown with commands levelSelectOne and levelSelectTwo. Then it takes it from className levelOptions to load that level up. It also makes startOptions to disapear when save is loaded.</textarea>";
}
firstcode.addEventListener("mouseout", functionoutfirstcode);
function functionoutfirstcode() {
  firstcodediv.innerHTML = "";
}

secondcode.addEventListener("mouseover", functionsecondcode);
function functionsecondcode() {
    secondcodediv.innerHTML = "<textarea class='thin-gold-border' rows='4' cols='100'>It loads each of these images onto the screen using startScreen.innerHTML to upload the images on. Each image is placed in with a class to move the image and adjust it and id's to connect it to functions. += is used to add on each image to the screen.</textarea>";
}
secondcode.addEventListener("mouseout", functionoutsecondcode);
function functionoutsecondcode() {
  secondcodediv.innerHTML = "";
}

thirdcode.addEventListener("mouseover", functionthirdcode);
function functionthirdcode() {
    thirdcodediv.innerHTML = "<textarea class='thinner-black-border' rows='4' cols='100'>The locks and keys are getting each of the images by their id using getElementById to be used as functions later. var nextlevel is to set the var that will be turned to true when the next level will start. var clicks is to set the command clicks to 0 for when you need to click multiple times to unlock the last lock.</textarea>";
}
thirdcode.addEventListener("mouseout", functionoutthirdcode);
function functionoutthirdcode() {
  thirdcodediv.innerHTML = "";
}

fourthcode.addEventListener("mouseover", functionfourthcode);
function functionfourthcode() {
    fourthcodediv.innerHTML = "<textarea class='thin-gold-border' rows='4' cols='100'>Each addEventListener listens for a click on each of the images shown by the var name placed before the addEventListener to activate each of their cooresponding functions.</textarea>";
}
fourthcode.addEventListener("mouseout", functionoutfourthcode);
function functionoutfourthcode() {
  fourthcodediv.innerHTML = "";
}

fifthcode.addEventListener("mouseover", functionfifthcode);
function functionfifthcode() {
    fifthcodediv.innerHTML = "<textarea class='thinner-black-border' rows='4' cols='100'>These functions are activated by a click on each of the keys. When this happens it console logs saying you obtained a key and also it makes their className as hide which makes the image disappear.</textarea>";
}
fifthcode.addEventListener("mouseout", functionoutfifthcode);
function functionoutfifthcode() {
  fifthcodediv.innerHTML = "";
}

sixthcode.addEventListener("mouseover", functionsixthcode);
function functionsixthcode() {
    sixthcodediv.innerHTML = "<textarea class='thin-gold-border' rows='4' cols='100'>The first two functions are to hide the locks. These two functions activate if each of their cooresponding keys are hidden and console logs that the lock is opened. The last function waits until all the keys are hidden to add 1 to the clicks which starts at 0. After you click on the lock 5 times, running the function, the next if statement looking for clicks to be 5 activates. This console logs that the hatch is open and it goes to the nextlevel by making var nextlevel true.</textarea>";
}
sixthcode.addEventListener("mouseout", functionoutsixthcode);
function functionoutsixthcode() {
  sixthcodediv.innerHTML = "";
}

seventhcode.addEventListener("mouseover", functionseventhcode);
function functionseventhcode() {
    seventhcodediv.innerHTML = "<textarea class='thinner-black-border' rows='4' cols='100'>The last function is to finish level 2. When you get the hatch open, nextlevel is set to true activating the if statement to run the function levelThree() to move on to level 3.</textarea>";
}
seventhcode.addEventListener("mouseout", functionoutseventhcode);
function functionoutseventhcode() {
  seventhcodediv.innerHTML = "";
}



