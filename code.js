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

// function Go(el){
//     if(el.id == "Mountain");
// }