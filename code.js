//let CurrentArea = document.querySelector("#Start");
let GoldCoins = 0;

console.log(GoldCoins);

function GoCozyCabin()
{
    document.querySelector("#StartSnowMountain").classList.toggle("hidden");
    document.querySelector("#CozyCabin").classList.toggle("hidden");
}

function GoMountain()
{
    document.querySelector("#StartSnowMountain").classList.toggle("hidden");
    document.querySelector("#Mountain").classList.toggle("hidden");
}

function GoStartSnowMountain()
{
    document.querySelector("#StartSnowMountain").classList.toggle("hidden");
    document.querySelector("#CozyCabin").classList.toggle("hidden");
}

function GoRest()
{
    document.querySelector("#CozyBed").classList.toggle("hidden");
    // You were able to fully rest up but the bed suddenly no longer feels comfy enough to rest on anymore
}

function GoCozySearch()
{
    document.querySelector("#CozySearch").classList.toggle("hidden");
    GoldCoins = GoldCoins +7;
    console.log("gold coins collected " + GoldCoins);
    
    // You found
}

function GoMountainSideLeft()
{
    document.querySelector("#Mountain").classList.toggle("hidden");
    document.querySelector("#MountainSideLeft").classList.toggle("hidden");
}

function GoMountainSideRight()
{
    document.querySelector("#Mountain").classList.toggle("hidden");
    document.querySelector("#MountainSideRight").classList.toggle("hidden");
}

function GoSearchBodies()
{
    document.querySelector("#SearchBodies").classList.toggle("hidden");
    // You found
}

function GoMountainCave()
{
    //document.querySelector("#MountainCave").classList.toggle("hidden");
    document.querySelector("#MountainSideLeft").classList.toggle("hidden");
}

function GoMountainSideTop()
{
    //document.querySelector("#MountainSideTop").classList.toggle("hidden");
    document.querySelector("#MountainSideLeft").classList.toggle("hidden");
}

function GoMountainForestLeft()
{
    document.querySelector("#MountainSideRight").classList.toggle("hidden");
}

function GoMountainForestRight()
{
    document.querySelector("#MountainSideRight").classList.toggle("hidden");
}

// function startCombat(enemyName, enemyHP) {
//     combateState = {
//     active: true,
//     playerHP: combatState.playerHP,
//     playerMaxHP: 100,   
//     enemyHP: enemyHP,
//     enemyName: enemyName,
//     turn: "player"
//     };

//      document.querySelector("#Follow-Map").classList.toggle("hidden");
//      document.querySelector("#Combat").classList.remove("hidden"); 

//     updateCombatUI();
// }
// function playerAttack() {
//     if (combatState.turn !== "player") return;

//     let damage = Math.floor(Math.random() * 15) + 5;
//     combatState.enemyHP -= damage;
//     addCombatLog(`you attack for ${damage} damage!`);

//     if(combatState.enemyHP <= 0)
//     {
//         endCombat(true);
//         return;
//     }

//     combatState.turn = "enemy";
//     updateCombatUI();
//     setTimeout(enemyTurn, 800);
// }
// function enemyTurn() {
//     let damage = Math.floor(Math.random() * 10) + 3;
//     combatState.playerHP -= damage;
//     addCombatLog(`${combatState.enemyName} hits you for ${damage} damage!`);

//     if (combatState.playerHP <= 0) {
//         endCombat(false);
//         return;
//     }

//     combatState.turn= "player";
//     updateCombatUI();
// }
// function playerFlee() {
//     let escapes = Math.random() > 0.4;
//     if (escapes) {
//         addCombatLog("You managed to escape!");
//         setTimeout(() => showForm("Ray-Start"), 1000);
//     }
//     else {
//         addCombatLog("You couldnt get away!");
//         combatState.turn = "enemy";
//         setTimeout(enemyTurn, 800);
//     }
// }
// function updateCombatUI() {
//     document.getElementById("player-hp").textContent = combatState.playerHP;
//     document.getElementById("enemy-hp").textContent = Math.max(0, combatState.enemyHP);
//     document.getElementById("enemy-name-display").textContent = combatState.enemyName;
// }
// function addCombatLog(msg) {
//     const log = document.getElementById("combat-log");
//     const entry = document.createElement("p");
//     entry.textContent = msg;
//     log.appendChild(entry);
//     log.scrollTop = log.scrollHeight;
// }
// function endCombat(playerWon) {
//     combatState.active = false;
//     if (playerWon) {
//         addCombatLog("Victory!.")
//         setTimeout(() => { document.querySelector("#Combat").classList.toggle("hidden");
//       document.querySelector("#Right-Path").classList.remove("hidden")}, 1500);
//     }
//     else {
//         addCombatLog("You are dead......");
//         setTimeout(() => { document.querySelector("#Combat").classList.toggle("hidden");
//       document.querySelector("#Ray-Start").classList.remove("hidden")}, 1500);
//     }
// }
// function showForm(id) {
//     document.querySelectorAll("form").forEach(f => f.classList.add("hidden"));
//     const target= document.getElementById(id);
//     if (target) target.classList.remove("hidden");
// }

// let combatState = {
//     active: false,
//     playerHP: 100,
//     playerMaxHP: 100,
//     enemyHP: 50,
//     enemyName: "Giant Ananconda",
//     turn: "player"
// };

// function Go(el){
//     if(el.id == "Mountain");
// }