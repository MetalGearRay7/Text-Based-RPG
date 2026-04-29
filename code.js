const scene = document.getElementById("scene");

function show(id) {
  const sections = document.querySelectorAll(".scene");
  sections.forEach(section => section.style.display = "none");
  document.getElementById(id).style.display = "block";
}

function firstMove() {
  const move = document.getElementById("m1").value;
  show(move === "3" ? "fight1" : "lose1");
}

function secondMove() {
  const move = document.getElementById("m2").value;
  show(move === "8" ? "fight2" : "lose2");
}

function thirdMove() {
  const move = document.getElementById("m3").value;
  show(move === "12" ? "win" : "lose3");
}

show("start");