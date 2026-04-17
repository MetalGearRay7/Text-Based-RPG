//let CurrentArea = document.querySelector("#Start");
let GoldCoins;

function GoRuinedTower()
{
    document.querySelector("#RuinedTower").classList.toggle("hidden");
    document.querySelector("#StartLakeside").classList.toggle("hidden");
}

function GoCampsite()
{
    document.querySelector("#Campsite").classList.toggle("hidden");
    document.querySelector("#StartLakeside").classList.toggle("hidden");
}

function OpenTowerChest()
{
    document.querySelector("#OpenTowerChest").classList.toggle("hidden");
    document.querySelector("#RuinedTower").classList.toggle("hidden");
}


function LeaveTower()
{
    document.querySelector("#LeaveTower").classList.toggle("hidden");
    document.querySelector("#RuinedTower").classList.toggle("hidden");
}

function CampRelax()
{
    document.querySelector("#CampRelax").classList.toggle("hidden");
    document.querySelector("#Campsite").classList.toggle("hidden");
}

function StealCampSupplies()
{
    document.querySelector("#StealCampSupplies").classList.toggle("hidden");
    document.querySelector("#Campsite").classList.toggle("hidden");
    document.querySelector("#CampRelax").classList.toggle("hidden");
}

function LeaveCampsite()
{
    document.querySelector("#LeaveCampsite").classList.toggle("hidden");
    document.querySelector("#Campsite").classList.toggle("hidden");
}