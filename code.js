// Rays work starts here. 
let combatState = {
    active: false,
    playerHP: 75,
    playerMaxHP: 75,
    enemyHP: 40,
    enemyName: "Giant Ananconda",
    turn: "player"
};

function GoBOTW() {
document.querySelector("#Menu-Start").classList.toggle("hidden");
document.querySelector("#Adam-Start").classList.remove("hidden");
}
function GoSB() {
document.querySelector("#Menu-Start").classList.toggle("hidden");
document.querySelector("#Jacob-Start").classList.remove("hidden");
}

function GoRITJ() {
document.querySelector("#Menu-Start").classList.toggle("hidden");
document.querySelector("#Ray-Start").classList.remove("hidden");
}

function FollowTheMap1() {
document.querySelector("#Start").classList.toggle("hidden");
document.querySelector("#Follow-Map").classList.remove("hidden");
}

function StayPut() {
document.querySelector("#Start").classList.toggle("hidden");
document.querySelector("#Stay-Put").classList.remove("hidden");

}
function StayLonger() {
document.querySelector("#Stay-Put").classList.remove("hidden");
}
function FollowTheMap2() {
document.querySelector("#Stay-Put").classList.toggle("hidden");
document.querySelector("#Follow-Map").classList.remove("hidden");
}
function Continue1() {
document.querySelector("#Continue1-Button").classList.toggle("hidden");
document.querySelector("#Continue2").classList.remove("hidden");
}
function Continue2() {
document.querySelector("#Continue2-Button").classList.add("hidden");
document.querySelector("#Continue3").classList.remove("hidden");
}
function StartLakeFight() {
    startCombat('Giant Anaconda', 40, '#Continue3', '#Combat', '#Right-Path', 'You slay the serpent and make your way backto the map trail!');
}
function TakeRightPath() {
    document.querySelector("#Follow-Map").classList.toggle("hidden");
    document.querySelector("#Right-Path").classList.remove("hidden");
}
function Continue4() {
    document.querySelector("#Continue4-Button").classList.toggle("hidden");
    document.querySelector("#Continue5").classList.remove("hidden");
}
function Continue5() {
    document.querySelector("#Continue5-Button").classList.toggle("hidden");
    document.querySelector("#Continue6").classList.remove("hidden");
}
function Continue6() {
    document.querySelector("#Continue6-Button").classList.toggle("hidden");
    document.querySelector("#Continue7").classList.remove("hidden");
}
function StartBoneDevilFight() {

    startCombat2('Bone Devil', 80, '#Continue7', '#Combat2', '#Up-Path', 'You banish the Bone Devil back to hell and make your way up the stairs!');
}
function TakeStairsUp() {
    document.querySelector("#Right-Path").classList.toggle("hidden");
    document.querySelector("#Up-Path").classList.remove("hidden");
}
function Continue8() {
    document.querySelector("#Continue8-Button").classList.toggle("hidden");
    document.querySelector("#Continue9").classList.remove("hidden");
}
function Continue9() {
    document.querySelector("#Continue9-Button").classList.toggle("hidden");
    document.querySelector("#Continue10").classList.remove("hidden");
}
function Continue10() {
    document.querySelector("#Continue10-Button").classList.toggle("hidden");
    document.querySelector("#Continue11").classList.remove("hidden");
}
function StartBlackDragonFight() {

    startCombat3('Black Dragon', 100, '#Continue11', '#Combat3', '#EndingA', 'You slay the dragon and the treasure is all yours!');
}
function GoHome()
{
    document.querySelector("#Up-Path").classList.toggle("hidden");
    document.querySelector("#EndingB").classList.remove("hidden");
}

function startCombat(enemyName, enemyHP, fromSection, formId, winSection, winMessage) {
    
    combatState = {
    active: true,
    playerHP: combatState.playerHP,
    playerMaxHP: 75,   
    enemyHP: enemyHP,
    enemyName: enemyName,
    turn: "player",
    returnSection: fromSection,
    formId: formId,
    winSection: winSection,
    winMessage: winMessage

    };

     document.querySelector("#Follow-Map").classList.toggle("hidden"); 
     document.querySelector(formId).classList.remove("hidden");

    updateCombatUI();
}
function startCombat2(enemyName, enemyHP, fromSection, formId, winSection, winMessage) {
    
    combatState = {
    active: true,
    playerHP: combatState.playerHP,
    playerMaxHP: 75,   
    enemyHP: enemyHP,
    enemyName: enemyName,
    turn: "player",
    returnSection: fromSection,
    formId: formId,
    winSection: winSection,
    winMessage: winMessage
    };

     document.querySelector("#Right-Path").classList.toggle("hidden");
     document.querySelector(formId).classList.remove("hidden");

    updateCombatUI();
}
function startCombat3(enemyName, enemyHP, fromSection, formId, winSection, winMessage) {
    
    combatState = {
    active: true,
    playerHP: combatState.playerHP,
    playerMaxHP: 75,   
    enemyHP: enemyHP,
    enemyName: enemyName,
    turn: "player",
    returnSection: fromSection,
    formId: formId,
    winSection: winSection,
    winMessage: winMessage
    };

     document.querySelector("#Up-Path").classList.toggle("hidden");
     document.querySelector(formId).classList.remove("hidden");

    updateCombatUI();
}
function playerAttack() {
    if (combatState.turn !== "player") return;

    let damage = Math.floor(Math.random() * 15) + 5;
    combatState.enemyHP -= damage;
    addCombatLog(`you attack for ${damage} damage!`);

    if(combatState.enemyHP <= 0)
    {
        endCombat(true);
        return;
    }

    combatState.turn = "enemy";
    updateCombatUI();
    setTimeout(enemyTurn, 800);
}
function enemyTurn() {
    let damage = Math.floor(Math.random() * 10) + 3;
    combatState.playerHP -= damage;
    addCombatLog(`${combatState.enemyName} hits you for ${damage} damage!`);

    if (combatState.playerHP <= 0) {
        endCombat(false);
        return;
    }

    combatState.turn= "player";
    updateCombatUI();
}
function playerFlee() {
    let escapes = Math.random() > 0.4;
    if (escapes) {
        addCombatLog("You managed to escape and continued to follow the map!");
        setTimeout(() => {
            document.querySelector(combatState.formId).classList.add("hidden");
            document.querySelector(combatState.winSection).classList.remove("hidden");
        }, 1000);
    }
    else {
        addCombatLog("You couldnt get away!");
        combatState.turn = "enemy";
        setTimeout(enemyTurn, 800);
    }
}

function updateCombatUI() {
    document.getElementById("player-hp").textContent = combatState.playerHP;
    document.getElementById("enemy-hp").textContent = Math.max(0, combatState.enemyHP);
    document.getElementById("enemy-name-display").textContent = combatState.enemyName;

    document.getElementById("player-hp2").textContent = combatState.playerHP;
    document.getElementById("enemy-hp2").textContent = Math.max(0, combatState.enemyHP);
    document.getElementById("enemy-name-display2").textContent = combatState.enemyName;

    document.getElementById("player-hp3").textContent = combatState.playerHP;
    document.getElementById("enemy-hp3").textContent = Math.max(0, combatState.enemyHP);
    document.getElementById("enemy-name-display3").textContent = combatState.enemyName;
}
function addCombatLog(msg) {
    let logId;
    if (combatState.formId === "#Combat3") {
        logId = "combat-log3";
    } 
    else if (combatState.formId === "#Combat2") {
        logId = "combat-log2";
    } 
    else {
        logId = "combat-log";
    }
    const log = document.getElementById(logId);
    const entry = document.createElement("p");
    entry.textContent = msg;
    log.appendChild(entry);
    log.scrollTop = log.scrollHeight;
}
function endCombat(playerWon) {
    combatState.active = false;
    let currentForm = combatState.formId;
    let winDest = combatState.winSection;
    if (playerWon) {
        addCombatLog(combatState.winMessage)
        setTimeout(() => { document.querySelector(currentForm).classList.toggle("hidden");
      document.querySelector(winDest).classList.remove("hidden")}, 1500);
    }
    else {
        addCombatLog("You are dead......");
        setTimeout(() => { document.querySelector(currentForm).classList.toggle("hidden");
      document.querySelector("#Game-Over").classList.remove("hidden")}, 1500);
    }
}
function showForm(id) {
    document.querySelectorAll("form").forEach(f => f.classList.add("hidden"));
    const target= document.getElementById(id);
    if (target) target.classList.remove("hidden");
}
// Rays work ends here.
