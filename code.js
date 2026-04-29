//let CurrentArea = document.querySelector("#Start");


function GoRuinedTower()
{
    document.querySelector("#RuinedTower").classList.remove("hidden");
    document.querySelector("#StartLakeside").classList.remove("hidden");
}

function GoCampsite()
{
    document.querySelector("#Campsite").classList.remove("hidden");
    document.querySelector("#StartLakeside").classList.remove("hidden");
}

function OpenTowerChest()
{
    document.querySelector("#OpenTowerChest").classList.remove("hidden");
    document.querySelector("#RuinedTower").classList.remove("hidden");
}


function LeaveTower()
{
    document.querySelector("#LeaveTower").classList.remove("hidden");
    document.querySelector("#RuinedTower").classList.toggle("hidden");
}

function CampRelax()
{
    document.querySelector("#CampRelax").classList.remove("hidden");
    document.querySelector("#Campsite").classList.remove("hidden");
}


function GoForest()
{
    document.querySelector("#GoForest").classList.remove("hidden");
    document.querySelector("#Campsite").classList.remove("hidden");
}

function ContinueForward()
{
    document.querySelector("#ContinueForward").classList.remove("hidden");
}

function firstMove(){
    
    let correctMove = "3";
    let move = String(document.querySelector("#first-move").value);

    if(move === correctMove){
        document.querySelector("#first-move").textContent = "Somehow the dumbest option worked! You sucessfully steal a sword from a bandit.";
    }
    else if(move === "1"){
        document.querySelector("#first-move").textContent = "You run very fast until an arrow pierces your back and you die."
    }
    else if(move === "2"){
        document.querySelector("#first-move").textContent = "You give the bandits your money and they let you go, until one of them runs up to you can stabs you in the back, no witnesses."
    }
    else if(move === "4"){
        document.querySelector("#first-move").textContent = "Your talking makes the bandits so bored that one of them eventually just shoots you in the face with an arrow."
    }
}

function secondMove(){
let correct2ndMove = "8";
let move = String(document.querySelector("#second-move").value);

if(move === correct2ndMove){
    document.querySelector("#second-move").textContent = "Your dodging skills throw the bandits off, allowing you to land a few strikes. You manage to kill 2 out of the 4"
}
else if(move === "5"){
    document.querySelector("#second-move").textContent = "Your mindless swinging get you killed instantly, idiot."
}
else if(move === "6"){
    document.querySelector("#second-move").textContent = "You sucessfully fend off many hits, however you eventually become too tired and eventually you get disarmed."
}
else if(move === "7"){
    document.querySelector("#second-move").textContent = "As charming as you can be, intimidation just isn't your thing. Oh, you died by the way."
}
}

function thirdMove(){
    let correct3rdMove = "12";
    let move = String(document.querySelector("#third-move").value);

    if(move === correct3rdMove){
        document.querySelector("#third-move").textContent = "You somehow hit the archer in the face, making the final bandit shocked and speechless, giving you a chance to escape."
    }
    else if(move === "9"){
        document.querySelector("#third-move").textContent = "Eventually the bandits get used to your dodging pattern, they trip you and kill you instantly"
    }
    else if(move === "10"){
        document.querySelector("#third-move").textContent = "Your aggresive styles manages to land you one more kill, until the last guy catches you off guard and stabs you in the back."
    }
    else if(move === "11"){
        document.querySelector("#third-move").textContent = "You miss, you can tell what happens next."
    }
}


function ContinueForward()
{
    document.querySelector("#ContinueForward");
}



