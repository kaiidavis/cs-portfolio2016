//html1 is used to connect to the first part of the html and divhtml1 is the first div for the html. These two are used to connect the text and the output of the div. 
var html1 = document.getElementById("html1");
var divhtml1 = document.getElementById("divhtml1");

var html2 = document.getElementById("html2");
var divhtml2 = document.getElementById("divhtml2");

var html3 = document.getElementById("html3");
var divhtml3 = document.getElementById("divhtml3");

var html4 = document.getElementById("html4");
var divhtml4 = document.getElementById("divhtml4");

var html5 = document.getElementById("html5");
var divhtml5 = document.getElementById("divhtml5");

var html6 = document.getElementById("html6");
var divhtml6 = document.getElementById("divhtml6");

var html7 = document.getElementById("html7");
var divhtml7 = document.getElementById("divhtml7");

var html8 = document.getElementById("html8");
var divhtml8 = document.getElementById("divhtml8");

var html9 = document.getElementById("html9");
var divhtml9 = document.getElementById("divhtml9");

var html10 = document.getElementById("html10");
var divhtml10 = document.getElementById("divhtml10");

var html11 = document.getElementById("html11");
var divhtml11 = document.getElementById("divhtml11");

var html12 = document.getElementById("html12");
var divhtml12 = document.getElementById("divhtml12");

var html13 = document.getElementById("html13");
var divhtml13 = document.getElementById("divhtml13");

var html14 = document.getElementById("html14");
var divhtml14 = document.getElementById("divhtml14");

var html15 = document.getElementById("html15");
var divhtml15 = document.getElementById("divhtml15");


//This states that when the mouse is over the html1 text, this function will happen by listening for the mouseover.
html1.addEventListener("mouseover", functionhtml1);
function functionhtml1() {
  //The textarea is equal to divhtml1.innerHTML because that is where it is outputting. THe textarea has classes to make a black border and choose the amount of rows and columns.
   divhtml1.innerHTML =  "<textarea class='thinner-black-border' rows='4' cols='120'>&lt;link rel=&quot;stylesheet&quot; href=&quot;https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css&quot; integrity=&quot;sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u&quot; crossorigin=&quot;anonymous&quot;&gt;  &#10;&lt;link rel=&quot;stylesheet&quot; href=&quot;mainstyle.css&quot; type=&quot;text/css&quot; /&gt; &#10;&lt;link href=&quot;https://fonts.googleapis.com/css?family=Faster+One&quot; rel=&quot;stylesheet&quot;&gt;</textarea>";
}
//This listens for a click on the text to get rid of the text which is why there is noting in the parenthesis in divhtml1.innerHTML.
html1.addEventListener("click", functionouthtml1);
function functionouthtml1() {
  divhtml1.innerHTML = "";
}
//Every one after is the same but for all the next sections of the explaination on the calculator with different text in the text area and the html1 and divhtml1 increasing each time.
html2.addEventListener("mouseover", functionhtml2);
function functionhtml2() {
   divhtml2.innerHTML =  "<textarea class='thinner-black-border' rows='3' cols='110'>.calculatorbackcolor { background: linear-gradient(315deg, transparent 75%, #d45d55 0)-10px 0, linear-gradient(45deg, transparent 75%, #d45d55 0)-10px 0, linear-gradient(135deg, #a7332b 50%, transparent 0) 0 0, linear-gradient(45deg, #6a201b 50%, #561a16 0) 0 0 #561a16; background-size: 20px 20px; }</textarea>";
}
html2.addEventListener("click", functionouthtml2);
function functionouthtml2() {
  divhtml2.innerHTML = "";
}

html3.addEventListener("mouseover", functionhtml3);
function functionhtml3() {
  divhtml3.innerHTML = "<textarea class='thinner-black-border' rows='6' cols='60'>&lt;ul id=&quot;navbar&quot;&gt; &#10; &lt;li&gt; &lt;a href=&quot;index.html&quot;&gt; About Me &lt;/a&gt;&lt;/li&gt; &#10;&lt;li&gt; &lt;a href=&quot;hardware.html&quot;&gt; Hardware &lt;/a&gt;&lt;/li&gt; &#10;&lt;li&gt; &lt;a href=&quot;howto.html&quot;&gt; How To Page &lt;/a&gt;&lt;/li&gt; &#10;&lt;li&gt; &lt;a href=&quot;calc.html&quot;&gt; Calculator &lt;/a&gt;&lt;/li&gt; &#10;&lt;li&gt; &lt;a href=&quot;todolist.html&quot;&gt; Todo List &lt;/a&gt;&lt;/li&gt; &#10; &lt;li&gt; &lt;a href=&quot;#&quot;&gt; Vindinium &lt;/a&gt;&lt;/li&gt; &#10;&lt;li&gt; &lt;a href=&quot;#&quot;&gt; Big Project &lt;/a&gt;&lt;/li&gt; &#10;&lt;/ul&gt;</textarea>";
}
html3.addEventListener("click", functionouthtml3);
function functionouthtml3() {
  divhtml3.innerHTML = "";
}
html4.addEventListener("mouseover", functionhtml4);
function functionhtml4() {
  divhtml4.innerHTML = "<textarea class='thinner-black-border' rows='6' cols='35'>.thin-red-border { &#10;border-color: #A93226; &#10;border-width: 10px; &#10;border-style: solid; &#10;border-radius: 10px; &#10;background-color: white; &#10;} &#10;.header { &#10;font-family: Faster One; &#10;color: darkblue; &#10;}</textarea>";
}
html4.addEventListener("click", functionouthtml4);
function functionouthtml4() {
  divhtml4.innerHTML = "";
}
html5.addEventListener("mouseover", functionhtml5);
function functionhtml5() {
  divhtml5.innerHTML = "<textarea class='thinner-black-border' rows='6' cols='25'>.thin-blue-border { &#10;border-color: #00264d; &#10;border-width: 10px; &#10;border-style: solid; &#10;border-radius: 10px; &#10;background-color: white; &#10;}</textarea>";
}
html5.addEventListener("click", functionouthtml5);
function functionouthtml5() {
  divhtml5.innerHTML = "";
}
html6.addEventListener("mouseover", functionhtml6);
function functionhtml6() {
  divhtml6.innerHTML = "<textarea class='thinner-black-border' rows='15' cols='25'>.inputcenter { &#10;position: relative; &#10;top: 40%; &#10;left: 40%; &#10;}&#10; .thinner-black-border { &#10;border-color: black; &#10;border-width: 3px; &#10;border-style: solid; &#10;border-radius: 3px; &#10;background-color: white; &#10;} &#10;.boldtext { &#10;font-weight: bolder; &#10;} &#10;.&#10;calculatorspan { &#10;width: 316px; &#10;display: block; &#10;height: 69px; &#10;} &#10;.textcalculator { &#10;font-size: 40px; &#10;} &#10;.center { &#10;text-align: center; &#10;} </textarea>";
}
html6.addEventListener("click", functionouthtml6);
function functionouthtml6() {
  divhtml6.innerHTML = "";
}
html7.addEventListener("mouseover", functionhtml7);
function functionhtml7() {
  divhtml7.innerHTML = "<textarea class='thinner-black-border' rows='6' cols='25'>.inputcenter1 { &#10;position: relative; &#10;top: 40%; &#10;left: 20%; &#10;{ &#10;.inputcenter3 { &#10;position: relative; &#10;top: 40%; &#10;left: 36%; &#10;} &#10;.inputsize { &#10;width: 200px; &#10;height: 100px; &#10;} &#10;.textcalculator { &#10;font-size: 40px; &#10;}</textarea>";
}
html7.addEventListener("click", functionouthtml7);
function functionouthtml7() {
  divhtml7.innerHTML = "";
}
html8.addEventListener("mouseover", functionhtml8);
function functionhtml8() {
  divhtml8.innerHTML = "<textarea class='thinner-black-border' rows='6' cols='60'>&lt;select class=&quot;inputcenter2 textcalculator&quot; id=&quot;functiondropdown&quot;&gt; &#10;&lt;option value=&quot;+&quot;&gt;Addition&lt;/option&gt; &#10;&lt;option value=&quot;-&quot;&gt;Subtraction&lt;/option&gt; &#10;&lt;option value=&quot;x&quot;&gt;Multiplication&lt;/option&gt; &#10;&lt;option value=&quot;/&quot;&gt;Division&lt;/option&gt; &#10;&lt;option value=&quot;^&quot;&gt;Exponent&lt;/option&gt; &#10;&lt;option value=&quot;&radic;&quot;&gt;Square Root&lt;/option&gt; &#10;&lt;/select&gt; </textarea>";
}
html8.addEventListener("click", functionouthtml8);
function functionouthtml8() {
  divhtml8.innerHTML = "";
}
html9.addEventListener("mouseover", functionhtml9);
function functionhtml9() {
  divhtml9.innerHTML = "<textarea class='thinner-black-border' rows='2' cols='70'>&lt;/br&gt; &#10;&lt;button class=&quot;btn-lg buttoncenter&quot; id=&quot;equalsbutton&quot;&gt;Answer&lt;/button&gt;</textarea>";
}
html9.addEventListener("click", functionouthtml9);
function functionouthtml9() {
  divhtml9.innerHTML = "";
}
html10.addEventListener("mouseover", functionhtml10);
function functionhtml10() {
  divhtml10.innerHTML = "<textarea class='thinner-black-border' rows='5' cols='60'>var firstvalue = document.getElementById(&quot;firstvalue&quot;); &#10;var secondvalue = document.getElementById(&quot;secondvalue&quot;); &#10;var functiondropdown = document.getElementById(&quot;functiondropdown&quot;); &#10;var answeroutput = document.getElementById(&quot;answeroutput&quot;); &#10;var equalsbutton = document.getElementById(&quot;equalsbutton&quot;);</textarea>";
}
html10.addEventListener("click", functionouthtml10);
function functionouthtml10() {
  divhtml10.innerHTML = "";
}
html11.addEventListener("mouseover", functionhtml11);
function functionhtml11() {
  divhtml11.innerHTML = "<textarea class='thinner-black-border' cols='50' rows='1'>equalsbutton.addEventListener(&quot;click&quot;, buttonfunction); </textarea>";
}
html11.addEventListener("click", functionouthtml11);
function functionouthtml11() {
  divhtml11.innerHTML = "";
}
html12.addEventListener("mouseover", functionhtml12);
function functionhtml12() {
  divhtml12.innerHTML = "<textarea class='thinner-black-border' rows='2' cols='40'>var value1 = parseInt(firstvalue.value); &#10;var value2 = parseInt(secondvalue.value);</textarea>";
}
html12.addEventListener("click", functionouthtml12);
function functionouthtml12() {
  divhtml12.innerHTML = "";
}
html13.addEventListener("mouseover", functionhtml13);
function functionhtml13() {
  divhtml13.innerHTML = "<textarea class='thinner-black-border' rows='3' cols='35'>if (functiondropdown.value == &quot;-&quot;){ answeroutput.innerHTML = value1 - value2; &#10;}</textarea>";
}
html13.addEventListener("click", functionouthtml13);
function functionouthtml13() {
  divhtml13.innerHTML = "";
}
html14.addEventListener("mouseover", functionhtml14);
function functionhtml14() {
  divhtml14.innerHTML = "<textarea class='thinner-black-border' rows='7' cols='40'>else if (functiondropdown.value == &quot;+&quot;){ &#10;answeroutput.innerHTML = value1 + value2; &#10;} &#10;else if (functiondropdown.value == &quot;/&quot;){ &#10;answeroutput.innerHTML = value1 / value2; &#10;} &#10;else if (functiondropdown.value == &quot;x&quot;){ &#10;answeroutput.innerHTML = value1 * value2; &#10;}</textarea>";
}
html14.addEventListener("click", functionouthtml14);
function functionouthtml14() {
  divhtml14.innerHTML = "";
}
html15.addEventListener("mouseover", functionhtml15);
function functionhtml15() {
  divhtml15.innerHTML = "<textarea class='thinner-black-border' rows='6' cols='50'>else if (functiondropdown.value == &quot;&radic;&quot;){ &#10;answeroutput.innerHTML = Math.sqrt(value2); &#10;} &#10;else if (functiondropdown.value == &quot;^&quot;){ &#10;answeroutput.innerHTML = Math.pow(value1, value2); &#10;}</textarea>";
}
html15.addEventListener("click", functionouthtml15);
function functionouthtml15() {
  divhtml15.innerHTML = "";
}
