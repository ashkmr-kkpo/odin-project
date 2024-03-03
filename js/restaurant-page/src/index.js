console.log("what is gonig on")

let content = document.getElementById("content");
let home = document.getElementById("home");
let menu = document.getElementById("menu");

let homeContent = document.createElement("div");
homeContent.textContent = "this is my home";

let menuContent = document.createElement("div");
menuContent.textContent = "this is my menu";

function moveToHome()
{
    content.replaceChildren(homeContent);
}

function moveToMenu()
{
    console.log("hahsh");
    content.replaceChildren(menuContent);
}

home.addEventListener("click", moveToHome);
menu.addEventListener("click", moveToMenu);



