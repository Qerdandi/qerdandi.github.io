const moreToolsBtn = document.querySelector("#moreToolsBtn");
moreToolsBtn.addEventListener("click", showMorSoftwares);

const moreTools = document.querySelector("#more-tools"); 
moreTools.style.display = "none";

const moreLangBtn = document.querySelector("#moreLangBtn");
moreLangBtn.addEventListener("click", showMorTools);

const moreLang = document.querySelector("#more-lang"); 
moreLang.style.display = "none";

function showMorSoftwares() {
    moreTools.style.display = moreTools.style.display === "none" ? "block" : "none";
}

function showMorTools() {
    moreLang.style.display = moreLang.style.display === "none" ? "block" : "none";
}