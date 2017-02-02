var vindhtml1 = document.getElementById("vindhtml1");
var divvindhtml1 = document.getElementById("divvindhtml1");
var vindhtml2 = document.getElementById("vindhtml2");
var divvindhtml2 = document.getElementById("divvindhtml2");
var vindhtml3 = document.getElementById("vindhtml3");
var divvindhtml3 = document.getElementById("divvindhtml3");
var vindhtml4 = document.getElementById("vindhtml4");
var divvindhtml4 = document.getElementById("divvindhtml4");
var vindhtml5 = document.getElementById("vindhtml5");
var divvindhtml5 = document.getElementById("divvindhtml5");
var vindhtml6 = document.getElementById("vindhtml6");
var divvindhtml6 = document.getElementById("divvindhtml6");
var vindhtml7 = document.getElementById("vindhtml7");
var divvindhtml7 = document.getElementById("divvindhtml7");


vindhtml1.addEventListener("mouseover", functionvindhtml1);
function functionvindhtml1() {
   divvindhtml1.innerHTML =  "<textarea class='thinner-black-border imgvind' rows='8' cols='125'> var Bot = require('bot'); \n \
var PF = require('pathfinding'); \n \
//var bot = new Bot('enter_bot_key', 'training', 'http://vindinium.org'); //Put your bot's code here and change training to Arena when you want to fight others. \n \
var bot = new Bot('enter_bot_key', 'arena', 'http://52.39.33.197:9000'); //Put your bot's code here and change training to Arena when you want to fight others. \n \
var goDir; \n \
var Promise = require('bluebird'); \n \
Bot.prototype.botBrain = function() { \n \
    return new Promise(function(resolve, reject) { \n \
        _this = bot;</textarea>";
}
divvindhtml1.addEventListener("mouseout", functionoutvindhtml1);
function functionoutvindhtml1() {
  divvindhtml1.innerHTML = "";
}
vindhtml2.addEventListener("mouseover", functionvindhtml2);
function functionvindhtml2() {
   divvindhtml2.innerHTML = "<textarea class='thinner-black-border imgvind' rows='8' cols='92'>var myDir; \n \
        var myPos = [bot.yourBot.pos.x, bot.yourBot.pos.y]; //This gives you your position \n \
//This looks through each bot and organizes them for the command enemyBots. \n \
        var enemyBots = []; \n \
        if (bot.yourBot.id != 1) enemyBots.push(bot.bot1); \n \
        if (bot.yourBot.id != 2) enemyBots.push(bot.bot2); \n \
        if (bot.yourBot.id != 3) enemyBots.push(bot.bot3); \n \
        if (bot.yourBot.id != 4) enemyBots.push(bot.bot4); \n \
\n \
//This looks through each bots mines and contains information on all the different bots mines except your bot. \n \
        var enemyMines = []; \n \
        if (bot.yourBot.id != 1) enemyMines = enemyMines.concat(bot.bot1mines); \n \
        if (bot.yourBot.id != 2) enemyMines = enemyMines.concat(bot.bot2mines); \n \
        if (bot.yourBot.id != 3) enemyMines = enemyMines.concat(bot.bot3mines); \n \
        if (bot.yourBot.id != 4) enemyMines = enemyMines.concat(bot.bot4mines); \n \
\n \
//This takes the freemines coordinates and adds the enemy mines list to make a list of all mines except your mines. \n \
        var allMines = enemyMines.concat(bot.freeMines); </textarea>";
}

divvindhtml2.addEventListener("mouseout", functionoutvindhtml2);
function functionoutvindhtml2() {
  divvindhtml2.innerHTML = "";
}

vindhtml3.addEventListener("mouseover", functionvindhtml3);
function functionvindhtml3() {
    divvindhtml3.innerHTML = "<textarea class='thinner-black-border imgvind' rows='8' cols='110'>var task; \n \
//This finds enemyBots, looks through each one through the for loop.\n \
//Then it finds the distance between me and each bot and looks for the one that is closest, running the if statement. \n \
//This is placed here to make it global and usable through the variable findbots. \n \
        var findbots = enemyBots[0]; \n \
        for (i = 0; i < enemyBots.length; i++) { \n \
            if (bot.findDistance(myPos, [findbots.pos.x, findbots.pos.y]) > bot.findDistance(myPos, [enemyBots[i].pos.x, enemyBots[i].pos.y])) { \n \
                findbots = enemyBots[i]; \n \
            } \n \
        } \n \
//I have already make the allMines command to hold all the coordinates. \n \
//Then it finds the closest mine by looking through each of the distances between all the mines to find the closest one.  \n \
//Then is sets it to the varaible Mines to be used later. \n \
        var Mines = allMines[0]; \n \
        for (i = 0; i < allMines.length; i++) { \n \
            if (bot.findDistance(myPos, Mines) > bot.findDistance(myPos, allMines[i])) { \n \
                Mines = allMines[i]; \n \
            } \n \
        } </textarea>";
}
divvindhtml3.addEventListener("mouseout", functionoutvindhtml3);
function functionoutvindhtml3() {
  divvindhtml3.innerHTML = "";
}

vindhtml4.addEventListener("mouseover", functionvindhtml4);
function functionvindhtml4() {
    divvindhtml4.innerHTML = '<textarea class="thinner-black-border imgvind" rows="8" cols="140">//This task tavern runs if my bots health goes below 50. \n \
        if (bot.yourBot.life < 50) { \n \
            task = "tavern"; \n \
        } \n \
//The task attack runs under very certain reasons. \n \
//It needs to make my health between 100 and 30, and the distance to a bot is less than or equal to 2.  \n \
//It finds my bots distance to each bot through findbots and pos.x and pos.y gets a single set from each bot. \n \
        else if (bot.yourBot.life < 100 && bot.yourBot.life > 30 && bot.findDistance(myPos, [findbots.pos.x, findbots.pos.y]) <= 2) { \n \
            task = "attack"; \n \
        } \n \
//This task of going to taverns runs if my minecount divided by (allMines and my mines) every mine to see if I own 0.875 of the mines to go chill at a tavern. \n \
        else if (bot.yourBot.mineCount / (allMines.length + bot.yourBot.mineCount) >= 0.875) { \n \
            task = "tavern"; \n \
        } \n \
//This runs if my health is inbetween 95 and 65, and bot1 has the most amount of mines and has 1/2 of the mines or more and not be my bot. \n \
        else if (bot.yourBot.life < 95 && bot.yourBot.life > 65 && bot.bot1.mineCount > bot.bot2.mineCount && bot.bot1.mineCount > bot.bot3.mineCount && bot.bot1.mineCount > bot.bot4.mineCount && bot.yourBot.mineCount < bot.bot1.mineCount && bot.bot1.mineCount / allMines.length >= 1 / 2 && bot.yourBot != bot.bot1) { \n \
\n \
            task = "attack 1"; \n \
        } \n \
//This is the same thing as the above function except for attacking bot 2. \n \
        else if (bot.yourBot.life < 95 && bot.yourBot.life > 65 && bot.bot2.mineCount > bot.bot1.mineCount && bot.bot2.mineCount > bot.bot3.mineCount && bot.bot2.mineCount > bot.bot4.mineCount && bot.yourBot.mineCount < bot.bot2.mineCount && bot.bot2.mineCount / allMines.length >= 1 / 2 && bot.yourBot != bot.bot2) { \n \
\n \
            task = "attack 2"; \n \
        } \n \
//Same as above except for bot 3. \n \
        else if (bot.yourBot.life < 95 && bot.yourBot.life > 65 && bot.bot3.mineCount > bot.bot1.mineCount && bot.bot3.mineCount > bot.bot2.mineCount && bot.bot3.mineCount > bot.bot4.mineCount && bot.yourBot.mineCount < bot.bot3.mineCount && bot.bot3.mineCount / allMines.length >= 1 / 2 && bot.yourBot != bot.bot3) { \n \
\n \
            task = "attack 3"; \n \
        } \n \
//Same except for bot 4. \n \
        else if (bot.yourBot.life < 95 && bot.yourBot.life > 65 && bot.bot4.mineCount > bot.bot1.mineCount && bot.bot4.mineCount > bot.bot2.mineCount && bot.bot4.mineCount > bot.bot3.mineCount && bot.yourBot.mineCount < bot.bot4.mineCount && bot.bot4.mineCount / allMines.length >= 1 / 2 && bot.yourBot != bot.bot4) { \n \
\n \
            task = "attack 4"; \n \
        } \n \
//This runs if none of the if statements run. \n \
        else { \n \
            task = "allmines"; \n \
        }</textarea>';
}

divvindhtml4.addEventListener("mouseout", functionoutvindhtml4);
function functionoutvindhtml4() {
  divvindhtml4.innerHTML = "";
}

vindhtml5.addEventListener("mouseover", functionvindhtml5);
function functionvindhtml5() {
    divvindhtml5.innerHTML = '<textarea class="thinner-black-border imgvind" rows="8" cols="95"> \
    if (task === "attack") { \n \
\n \
            console.log("Attacking"); \n \
//This takes my Dir to find a path from my bot to the bot found when activating this code above in the task = "attack". \n \
            myDir = bot.findPath(myPos, findbots.posArray); \n \
        }\n \
\n \
        if (task === "attack 1") { \n \
//This finds the path from my position to bot 1s position which is activated when task = "attack 1" \n \
                myDir = bot.findPath(myPos, [bot.bot1.pos.x, bot.bot1.pos.y]); \n \
            console.log("Attacking Bot 1"); \n \
        } \n \
        if (task === "attack 2") { \n \
//Same thing except for bot 2. \n \
                myDir = bot.findPath(myPos, [bot.bot2.pos.x, bot.bot2.pos.y]); \n \
            console.log("Attacking Bot 2"); \n \
        } \n \
        if (task === "attack 3") { \n \
//Same thing for bot 3. \n \
                myDir = bot.findPath(myPos, [bot.bot3.pos.x, bot.bot3.pos.y]); \n \
            console.log("Attacking Bot 3"); \n \
        } \n \
        if (task === "attack 4") { \n \
//Same thing for bot 4. \n \
                myDir = bot.findPath(myPos, [bot.bot4.pos.x, bot.bot4.pos.y]); \n \
            console.log("Attacking Bot 4"); \n \
        } \n \
\n \
        if (task === "tavern") { \n \
//This looks through each of the taverns in the game which is run by the for loop. \n \
//Then it finds the distance from my position to all the taverns and activates when it finds the closest tavern. \n \
                var findtaverns = bot.taverns[0]; \n \
            for (i = 0; i < bot.taverns.length; i++) { \n \
                if (bot.findDistance(myPos, findtaverns) > bot.findDistance(myPos, bot.taverns[i])) { \n \
                    findtaverns = bot.taverns[i]; \n \
                } \n \
            } \n \
            console.log("Getting Health!"); \n \
//This makes the bot take a path to the tavern found in the code above. \n \
            myDir = bot.findPath(myPos, findtaverns); \n \
        } \n \
                // This Code find the nearest freemine and sets myDir toward that direction // \n \
        if (task === "freemines") { \n \
            var closestMine = bot.freeMines[0]; \n \
            for (i = 0; i < bot.freeMines.length; i++) { \n \
                if (bot.findDistance(myPos, closestMine) > bot.findDistance(myPos, bot.freeMines[i])) { \n \
                    closestMine = bot.freeMines[i]; \n \
                } \n \
            } \n \
            console.log("Claiming a Free Mine!"); \n \
            myDir = bot.findPath(myPos, closestMine); \n \
        }</textarea>';
}

divvindhtml5.addEventListener("mouseout", functionoutvindhtml5);
function functionoutvindhtml5() {
  divvindhtml5.innerHTML = "";
}

vindhtml6.addEventListener("mouseover", functionvindhtml6);
function functionvindhtml6() {
    divvindhtml6.innerHTML = '<textarea class="thinner-black-border imgvind" rows="8" cols="105">if (task === "allmines") { \n \
\n \
            console.log("Claiming all Mines!");\n \
//This runs from the code above that combines enemy mines and free mines and get all the coordinates and finds the distance. \n \
//Here it finds the path to the closest mine from my position.\n \
            myDir = bot.findPath(myPos, Mines);\n \
        }\n \
\n \n \
        /*                                                                                                                              *\n \
         * This Code Sets your direction based on myDir.  If you are trying to go to a place that you cant reach, you move randomly.   *\n \
         * Otherwise you move in the direction set by your code.  Feel free to change this code if you want.                            */\n \
        if (myDir === "none") {\n \
\n \
            console.log("Going Random!"); \n \
           var rand = Math.floor(Math.random() * 4); \n \
            var dirs = ["north", "south", "east", "west"]; \n \
            bot.goDir = dirs[rand]; \n \
        }\n \
        else {\n \
            bot.goDir = myDir; \n \
        }</textarea>';
}

divvindhtml6.addEventListener("mouseout", functionoutvindhtml6);
function functionoutvindhtml6() {
  divvindhtml6.innerHTML = "";
}

vindhtml7.addEventListener("mouseover", functionvindhtml7);
function functionvindhtml7() {
    divvindhtml7.innerHTML = '<textarea class="thinner-black-border imgvind" rows="5" cols="52">///////////* DONT REMOVE ANTYTHING BELOW THIS LINE *////////////// \n \
        resolve(); \n \
    }); \n \
} \n \
bot.runGame();</textarea>';
}

divvindhtml7.addEventListener("mouseout", functionoutvindhtml7);
function functionoutvindhtml7() {
  divvindhtml7.innerHTML = "";
}
