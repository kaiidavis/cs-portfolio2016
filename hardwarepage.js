// JavaScript File

var span1 = document.getElementById("span1");
var span2 = document.getElementById("span2");
var span3 = document.getElementById("span3");
var span4 = document.getElementById("span4");
var span5 = document.getElementById("span5");
var span6 = document.getElementById("span6");
var span7 = document.getElementById("span7");
var span8 = document.getElementById("span8");
var span9 = document.getElementById("span9");
var img1 = document.getElementById("img1");
img1.addEventListener("mouseover", img1function);
img1.addEventListener("mouseout", img1outfunction);

function img1function() {
span1.innerHTML = "The motherboard is the main component needed for a computer. It is the base of the computer and each motherboard affects the computer's capabilities and the upgrades that it can have. The way the motherboard is laid out is based on its form factor. Form factor is the action of choosing where everything will go and how the shape of the computer case turns out. All motherboards have a chipset, which is a motherboard logic system that has a northbridge and a southbridge. The computer uses the bridges to connect everything together. The BIOS (Basic Input/Output System) chip makes basic functions and does a self test every time it turns on and maintains the basic settings and the system time. There are many slots and ports in a motherboard. There is a PCI (Peripheral Component Interconnect) connector that works with sound, video, video capture cards, and network cards. Second, AGP (Accelerated Graphics Port) is a port for video cards. Third, IDE (Integrated Drive Electronics) is an interface for hard drives. Then there is either a universal serial bus or a FireWire for external peripherals. Finally there are memory slots to increase the amount of temporary data storage needed to make computers process faster.";
}
function img1outfunction() {
span1.innerHTML = "";
}

var img2 = document.getElementById("img2");
img2.addEventListener("mouseover", img2function);
img2.addEventListener("mouseout", img2outfunction);

function img2function() {
span2.innerHTML = "CPU (Central Processing Unit) is the processor of the computer and is vital component to a computer. The CPU is connected to the motherboard by the PGA (Pin Grid Array) that fits into a socket layout that is on the motherboard. The CPU is connected to the northbridge from the FSB (Front Side Bus) and the northbridge has the memory controller on it, giving the CPU a quick access to the memory.";
}
function img2outfunction() {
span2.innerHTML = "";
}

var img3 = document.getElementById("img3");
img3.addEventListener("mouseover", img3function);
img3.addEventListener("mouseout", img3outfunction);

function img3function() {
span3.innerHTML = "Ram is random access memory which means it can be accessed at any time. Ram is used as memory for programs who need it for only a limited time that the program is running. The amount of ram decides the speed of accessing instructions and data transmitted.";
}
function img3outfunction() {
span3.innerHTML = "";
}

var img4 = document.getElementById("img4");
img4.addEventListener("mouseover", img4function);
img4.addEventListener("mouseout", img4outfunction);

function img4function() {
span4.innerHTML = "A hard drive is a set of 1’s and 0’s that correspond to stored memory. The entire use of a hard drive is to store memory. It uses a large-circular plate made of aluminum or glass that is called platter. The platter is split up into billions of small areas and each tiny area is selected to be magnetized or not magnetized. When it magnetizes, it is a 1 and if it’s not magnetized, it’s a 0. They made it this way so that it can store info even when it’s turned off. A hard drive has an arm mechanism to move a small magnet for each area needed. The data on the hard drive is first arranged on tracks and even smaller into sectors so that it can read and write on the hard drive well. To find free sectors on a hard drive it uses a map of information to understand what to do.";
}
function img4outfunction() {
span4.innerHTML = "";
}

var img5 = document.getElementById("img5");
img5.addEventListener("mouseover", img5function);
img5.addEventListener("mouseout", img5outfunction);

function img5function() {
span5.innerHTML = "The chipset takes information from different components and then transmits it to the CPU. The chipset has a north and south bridge and each bridge is connected to parts in a computer. The northbridge is connected to the CPU, the memory, and the AGP (Accelerated Graphics Port) and has the memory controller on it. The southbridge is connected to the PCI (Peripheral Component Interconnect) bus, the USB ports, and the IDE (Integrated Development Environment)/SATA (Integrated Drive Electronics) hard disk connections.";
}
function img5outfunction() {
span5.innerHTML = "";
}

var img6 = document.getElementById("img6");
img6.addEventListener("mouseover", img6function);
img6.addEventListener("mouseout", img6outfunction);

function img6function() {
span6.innerHTML = "Bus is a circuit that connects each piece of the motherboard. The speed of the these circuits can move data are measured in MHz(Megahertz). First, the back side bus connects the CPU with the external cache. Second, the memory bus connects the northbridge to the memory. Third, the IDE (Integrated Development Environment) bus connects the southbridge to the disk drives. Also, the AGP (Accelerated Graphics Port) bus connects the video card to the CPU and the memory. Finally, the PCI (Peripheral Component Interconnect) bus connects the southbridge to the PCI slots.";
}
function img6outfunction() {
span6.innerHTML = "";
}
var img7 = document.getElementById("img7");
img7.addEventListener("mouseover", img7function);
img7.addEventListener("mouseout", img7outfunction);

function img7function() {
span7.innerHTML = "Keyboards are essential for using the computer. Keyboards are rows of letters, numbers, and commands that are needed to type a document, to use shortcuts, and is needed for almost anything you do on a computer. The keyboard have most keys that are the same size, shape and distance from each key. A keyboard has it’s own processor to understand the information sent from the keys and also circuitry needed to get the keyboard to work. There are circuits underneath keys and whenever you press a key, it selects a switch, making a flowing current that the processor then understands.";
}
function img7outfunction() {
span7.innerHTML = "";
}

var img8 = document.getElementById("img8");
img8.addEventListener("mouseover", img8function);
img8.addEventListener("mouseout", img8outfunction);

function img8function() {
span8.innerHTML = "The computer mouse is also essential for navigating on a computer. The most common type of mouse today is an optical mouse. A mouse senses your motion and the clicks and sends it to the computer to understand. The mouse works by having a tiny camera on the bottom, taking 1000’s of pictures each second with conjunction with a red LED light that bounces the light off the surface to the CMOS (Complementary Metal Oxide Semiconductor) sensor. The CMOS then sends the images to the DSP (Digital Signal Processor) which finds patterns in the images and notices the change in patterns from the previous images and tells the computer where to move the mouse.";
}
function img8outfunction() {
span8.innerHTML = "";
}
var img9 = document.getElementById("img9");
img9.addEventListener("mouseover", img9function);
img9.addEventListener("mouseout", img9outfunction);

function img9function() {
span9.innerHTML = "Finally, to observe why it’s been doing all these processes, you need a monitor. It outputs all the images and text the computer is showing you. Monitors today use LCD (liquid crystal display) and most have a VGA (Visual Graphics Array) connection. VGA has 15 pins in 3 rows with red, green, and blue color signals and two lines for horizontal and vertical sync signals. Since VGA doesn’t support digital form, monitors use DVI (Digital Visual Interface). DVI keep data in its digital form from the computer to the monitor. The display modes on the graphics adapter and the color capability of the monitor is what determines how much color will be displayed.";
}
function img9outfunction() {
span9.innerHTML = "";
}
