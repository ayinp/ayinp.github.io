const MyScene = class {
    constructor(art,question,options, effects){
        this.art = art;
        this.question = question;
        this.options = options;
    }
}

const MyOption = class {
    constructor(text, effects){
        this.text = text;
        this.effects = effects;
    }
}

const Assignment = class {
    constructor(text,effect,timer,amtDone){
        this.text = text;
        this.effects = effect;
        this.timer = timer;
        this.amtDone = amtDone;
        this.completed = false;
    }
}

let assignments = [
    new Assignment("Math HW",[20,0,0],12,10),
    new Assignment("English essay",[0,20,0],7,10),
    new Assignment("Chemistry HW",[0,0,20],4,10),
    new Assignment("Chemistry HW",[0,0,20],10,10),
    new Assignment("English Write Up",[0,15,0],14,5),
    new Assignment("Math test studying", [30,0,0],20,10)
]

function doAssignment(ind){
    console.log("DO ASSIGMNET");
    for(let i=0; i<assignments[ind].effects.length; i++){
        if(assignments[ind].effects[i] != 0){
            assignments[ind].effects[i] -= assignments[ind].amtDone;
        }
    }
    if(assignments[ind].effects[0] <= 0 && assignments[ind].effects[1] <= 0 && assignments[ind].effects[2] <= 0){
        assignments[ind].completed=true;
    }
    Round(-1);
}
function timersRunOut(assignment){
    console.log("TIMER RAN OUT: " + assignment.effects);
    for(let i = 0; i < 3; i++){
        grades[i] = grades[i]-assignment.effects[i];
    }
}
function assignmentComplete(assignment){
    console.log("ASSIGNMENT COMPLETE");
    for(let i = 0; i < 3; i++){
        grades[i] = grades[i]+assignment.effects[i];
    }
}
function displayBadness(assignment){
    console.log("DISPLAY BAD");
   let d = document.getElementById("updates") 
   let p = document.createElement('p');
   p.innerHTML = "OH NO! you failed to complete your " + assignment.text + "!";
   d.appendChild(p);
}
function displayGoodness(assignment){
    console.log("DISPLAY GOOD");
   let d = document.getElementById("updates") 
   let p = document.createElement('p');
   p.innerHTML = "good work! you completed your " + assignment.text + "!";
   d.appendChild(p);
}
function CheckTimers(){
    console.log("CHECKING TiMERS");
    for(let i = 0; i < assignments.length; i++){
        if(assignments[i] != undefined)
        {
            assignments[i].timer -= 1;
            if(assignments[i].timer <= 0){
                timersRunOut(assignments[i]);
                a = assignments[i];
                delete assignments[i];
                displayBadness(a);
            }
        }
        if(assignments[i] != undefined){
            if(assignments[i].completed){
                assignmentComplete(assignments[i]);
                a = assignments[i];
                delete assignments[i];
                displayGoodness(a);
            }
        
        }
    }
}

var grades;
var health;
var social;
var sleep;
var index;

var poemMon = 
"My expectations for today <br>" + 
"are not complete without <br>"+
"the dread awaiting my week";
var poemTues = 
"By the end of today <br>" + 
"my bones will hurt, <br>" + 
"with all of my energy depleated. <br>" +
"Despite the exhaustion, <br>" + 
"I won't forget to make an effort. <br>" +
"Like always.";
var poemWed = 
"Waking up today is always <br>" +
"harder than I expect. <br>"+
"I sleep in despite knowing that <br>"+
"I should not. <br>"+
"Although the week is half over, <br>"+
"I still need to make it to the weekend. <br>"+
"I have so much left to do <br>"+
"on my list. <br>";
var poemThurs = 
"This is the hardest day of the week. <br>"+
"This is the day I underestimate. <br>"+
"And I realize how tired I am. <br>";
var poemFri = 
"My obligations <br>"+
"are not yet complete, <br>"+
"Even though I long <br>"+
"To do nothing <br>";
var poemSat = 
"Today I focus on my hobbies. <br>"+
"Today I focus on my self care. <br>"+
"Today I focus on all the little things <br>"+
"That make me human. <br>"+
"Today I focus on me. <br>";
var poemSun = 
"The week is over, <br>"+
"time to breathe. <br>"+
" <br>"+
"For now. <br>";

const Scenes = [
    //MONDAY grades sanity social energy
    new MyScene(poemMon,
    "Happy Monday! \n You wake up to a blaring alarm. You have 3 classes this morning that you are dreading. Your friends are all studying together in a lounge. What would you like to do this morning?",
    [new MyOption("attend classes",[[5,5,5],-5,0,-5]),
    new MyOption("study with friends",[[2,2,2],-5,5,-5]), 
    new MyOption("sleep in and skip class",[[-2,-2,-2],5,0,5])]),
    
    new MyScene(poemMon,
    "Your friends want to meet up for lunch, but youre feeling a bit overwhelmed. What should you do?",
    [new MyOption("go see them!",[[0,0,0],-5,15,-5]),
    new MyOption("take a nap",[[0,0,0],5,-10,5]), 
    new MyOption("use the time to recharge alone",[[0,0,0],15,-10,0])]),

    new MyScene(poemMon,
    "You have been waiting to play a new video game for ages, but your friends want to party. what are the plans for tonight?",
    [new MyOption("Stay in and play video games",[[0,0,0],15,-5,-5]),
    new MyOption("go to bed early",[[0,0,0],5,-15,15]), 
    new MyOption("attend the party",[[0,0,0],-5,15,-5])]),

    //TUESDAY  grades health social sleep
    new MyScene(poemTues,
    "You have no classes until this afternoon, how would you like to start the day?",
    [new MyOption("go back to sleep",[[0,0,0],5,0,10]),
    new MyOption("meet up with friends",[[0,0,0],-5,15,0]), 
    new MyOption("review class notes",[[5,5,5],0,0,-5])]),

    new MyScene(poemTues,
    "Youve got 3 classes this afternoon, but your friends want to go to the redsocks game!",
    [new MyOption("go to classes",[[5,5,5],0,-10,0]),
    new MyOption("take a nap",[[0,0,0],5,-15,15]), 
    new MyOption("go to the redsocks game",[[-2,-2,-2],-5,15,0])]),

    new MyScene(poemTues,
    "you feel exhausted this evening, but luckily there isn't much going on.",
    [new MyOption("go to bed early",[[0,0,0],0,0,10]),
    new MyOption("recharge with some of your favorite hobbys",[[0,0,0],10,0,0]), 
    new MyOption("practice some self care",[[0,0,0],10,0,0])]),
 
    //WEDNESDAY  grades health social sleep
    new MyScene(poemWed,
    "you wake up today to the sounds of rain. You have three classes this morning, but getting outside will be particularly difficult.",
    [new MyOption("go to classes",[[5,5,5],-15,0,0]),
    new MyOption("study inside",[[2,2,2],0,0,-5]), 
    new MyOption("go back to sleep",[[-2,-2,-2],10,0,5])]),

    new MyScene(poemWed,
    "The rain has let up, and your friends want to go into the city. Are you joining?",
    [new MyOption("Stay home just in case",[[0,0,0],10,-10,0]),
    new MyOption("go out and enjoy the day",[[0,0,0],-10,10,0]), 
    new MyOption("take a nap",[[0,0,0],0,-10,10])]),

    new MyScene(poemWed,
    "You have date-night with your boyfriend planned, but you forgot about a very important Chem homework due tonight!",
    [new MyOption("cancel date night and do your work",[[0,15,0],0,-15,0]),
    new MyOption("forget about the work and just have fun",[[0,-15,0],-5,15,0]), 
    new MyOption("stay in and cry because you messed up",[[0,-15,0],10,-15,0])]),

    //THURSDAY  grades health social sleep
    new MyScene(poemThurs,
    "You have no classes until this afternoon, but you should probably study. What will you do?",
    [new MyOption("sleep in",[[0,0,0],0,0,10]),
    new MyOption("study",[[5,5,5],0,0,0]), 
    new MyOption("take a long shower",[[0,0,0],10,0,0])]),

    new MyScene(poemThurs,
    "You decided to go to classes this afternoon, but the T was packed on the way there, which made you very overwhelmed!",
    [new MyOption("try to go to classes anyway",[[5,5,5],-15,0,0]),
    new MyOption("go back home to recover",[[-2,-2,-2],19,0,0]), 
    new MyOption("go sit in the nearest building and do nothing until you feel better again",[[-2,-2,-2],5,0,0])]),

    new MyScene(poemThurs,
    "You're still overwhelmed from earlier, but your friends want you to attend thirsty thursday this week.",
    [new MyOption("Go to the party",[[0,0,0],-10,15,0]),
    new MyOption("go to bed early",[[0,0,0],5,-10,10]), 
    new MyOption("have a calm night at home",[[0,0,0],15,-10,0])]),

    //FRIDAY  grades health social sleep
    new MyScene(poemFri,
    "You have 3 classes this morning, and your boyfriend wants to get brunch. What will you do?",
    [new MyOption("go to brunch",[[-2,-2,-2],0,10,0]),
    new MyOption("go to class",[[5,5,5],0,0,0]), 
    new MyOption("go back to sleep",[[-2,-2,-2],5,-10,10])]),

    new MyScene(poemFri,
    "You feel like youre starting to come down with a cold, but it might just be allergies. You are very anxious about this.",
    [new MyOption("Spiral",[[0,0,0],-10,0,0]),
    new MyOption("take a nap",[[0,0,0],0,0,10]), 
    new MyOption("call a friend",[[0,0,0],5,5,0])]),

    new MyScene(poemFri,
    "You had a pretty bad afternoon, but you promised your friend you would be at his birthday party. What should you do?",
    [new MyOption("attend the party",[[0,0,0],0,10,0]),
    new MyOption("cancel and stay home",[[0,0,0],10,-10,0]), 
    new MyOption("go to bed early",[[0,0,0],0,-10,10])]),

    //SATURDAY  grades health social sleep
    new MyScene(poemSat,
    "A group of friends invited you to the froyo shop, but another group of friends invited you to watch a movie. What do you pick?",
    [new MyOption("go get froyo",[[0,0,0],-5,-5,0]),
    new MyOption("go to the movie",[[0,0,0],-5,-5,0]), 
    new MyOption("do nothing because this is too stressful :(",[[0,0,0],5,-10,0])]),

    new MyScene(poemSat,
    "You should get some studying done this afternoon, but you really don't feel like it.",
    [new MyOption("study anyway",[[5,5,5],-15,0,0]),
    new MyOption("take a nap",[[0,0,0],5,0,10]), 
    new MyOption("ignore your obligations",[[0,0,0],10,0,0])]),

    new MyScene(poemSat,
    "Your roomate wants to host a party at your dorm tonight on short notice. How will you deal with this?",
    [new MyOption("tell her not tonight",[[0,0,0],10,-15,0]),
    new MyOption("let her host, but stay in the lounge alone",[[0,0,0],5,-5,0]), 
    new MyOption("attend the event with everyone else",[[0,0,0],-10,10,0])]),

    //SUNDAY  grades health social sleep
    new MyScene(poemSun,
    "You wake up this morning with a splitting headache, but you agreed to get breakfast with people!",
    [new MyOption("go back to sleep",[[0,0,0],0,-10,10]),
    new MyOption("send a text canceling brunch",[[0,0,0],5,-5,0]), 
    new MyOption("attend anyway",[[0,0,0],-10,10,0])]),

    new MyScene(poemSun,
    "You still have a headache, and you really should study.",
    [new MyOption("Study anyway",[[5,5,5],0,0,0]),
    new MyOption("Take a shower",[[0,0,0],10,0,0]), 
    new MyOption("take a nap",[[0,0,0],0,0,10])]),

    new MyScene(poemSun,
    "Your friends want to see you tonight, but you are exhausted.",
    [new MyOption("get dinner with them",[[0,0,0],-5,10,0]),
    new MyOption("go to bed early",[[0,0,0],0,-5,10]), 
    new MyOption("stay in alone",[[0,0,0],10,-10,0])]),
    
];



function UpdateStats(){
    console.log("UPDATE STATS");
    document.getElementById("g1").innerHTML = "Math: " + grades[0] + " ";
    document.getElementById("g2").innerHTML = "English: " + grades[1]+ " ";
    document.getElementById("g3").innerHTML = "Chemistry: " + grades[2]+ " ";
    document.getElementById("health").innerHTML = "Sanity: " + health + " ";
    document.getElementById("social").innerHTML = "Social: " + social + " ";
    document.getElementById("sleep").innerHTML = "Energy: " + sleep + " ";
}
function UpdateOptions(scene){
    console.log("UPDATE OPTIONS");
    document.getElementById("op1").innerText = scene.options[0].text;
    document.getElementById("op2").innerText = scene.options[1].text;
    document.getElementById("op3").innerText = scene.options[2].text;
    updateAssignments();
}
function updateAssignments(){
    console.log("UPDATE ASSIGNMENTS");
    document.getElementById("assignments").innerHTML = "";
    for(let i = 0; i < assignments.length; i++){
        if(assignments[i] != undefined){
            b = document.createElement('button');
            b.textContent = ("work on " + assignments[i].text + " due in " + assignments[i].timer + " events");
            b.setAttribute('onclick', "doAssignment("+i+")");
            document.getElementById("assignments").appendChild(b);
        }
    }
}
function UpdateScene(scene){
    console.log("UPDATE SCENE");
    UpdateStats();
    document.getElementById("art").innerHTML = scene.art;
    document.getElementById("question").innerHTML = scene.question;
    document.getElementById("day").innerHTML = calcDay();
    UpdateOptions(scene);
}
function calcDay(){
    let a = index/3;
    if(a < 1){
        return "Monday";
    }
    else if(a < 2){
        return "Tuesday";
    }
    else if(a < 3){
        return "Wednesday";
    }
    else if(a < 4){
        return "Thursday";
    }
    else if(a < 5){
        return "Friday";
    }
    else if(a < 6){
        return "Saturday";
    }
    else if(a < 7){
        return "Sunday";
    }
    else{
        return "you broke the game :(";
    }
}
function Setup(){
    console.log("SETUP");
    grades = [85,85,85];
    health = 85;
    social = 85;
    sleep = 85;
    index = 0;
}
function AdjustStats(adj){
    console.log("ADJUST STATS");
    grades[0] = grades[0]+adj[0][0];
    grades[1] = grades[1]+adj[0][1];
    grades[2] = grades[2]+adj[0][2];
    health = health+adj[1];
    social = social+adj[2];
    sleep = sleep+adj[3];
}
function RandInt(max){
    return Math.floor(Math.random()*max);
}

function Round(choice){
    console.log("ROUND");
    if(index > Scenes.length){
        End();
        return;
    }

    let s = Scenes[index];
    switch(choice){
        case 1:
            AdjustStats(Scenes[index-1].options[0].effects);
            console.log("button = 1");
            break;
        case 2:
            AdjustStats(Scenes[index-1].options[1].effects);
            console.log("button = 2");
            break;
        case 3:
            AdjustStats(Scenes[index-1].options[2].effects);
            console.log("button = 3");
            break;
        default:
            AdjustStats([[0,0,0],-RandInt(10),-RandInt(10),-RandInt(10)]);
            break;
    }

    if(choice!=0){
        CheckTimers();
        UpdateScene(Scenes[index]);
    }
    index++;

}
    


function GameStart(){
    Setup();
    Round(-1);
}

function End(){

}

GameStart();
