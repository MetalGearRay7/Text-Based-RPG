let combatState = {
    active: false,
    playerHP: 100,
    playerMaxHP: 100,
    enemyHP: 50,
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
document.querySelector("#Continue2-Button").classList.toggle("hidden");
document.querySelector("#Continue3").classList.remove("hidden");
}


function startCombat(enemyName, enemyHP) {
    combateState = {
    active: true,
    playerHP: combatState.playerHP,
    playerMaxHP: 100,   
    enemyHP: enemyHP,
    enemyName: enemyName,
    turn: "player"
    };

     document.querySelector("#Follow-Map").classList.toggle("hidden");
     document.querySelector("#Combat").classList.remove("hidden"); 

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
        addCombatLog("You managed to escape!");
        setTimeout(() => showForm("Ray-Start"), 1000);
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
}
function addCombatLog(msg) {
    const log = document.getElementById("combat-log");
    const entry = document.createElement("p");
    entry.textContent = msg;
    log.appendChild(entry);
    log.scrollTop = log.scrollHeight;
}
function endCombat(playerWon) {
    combatState.active = false;
    if (playerWon) {
        addCombatLog("Victory!.")
        setTimeout(() => { document.querySelector("#Combat").classList.toggle("hidden");
      document.querySelector("#Right-Path").classList.remove("hidden")}, 1500);
    }
    else {
        addCombatLog("You are dead......");
        setTimeout(() => { document.querySelector("#Combat").classList.toggle("hidden");
      document.querySelector("#Ray-Start").classList.remove("hidden")}, 1500);
    }
}
function showForm(id) {
    document.querySelectorAll("form").forEach(f => f.classList.add("hidden"));
    const target= document.getElementById(id);
    if (target) target.classList.remove("hidden");
}