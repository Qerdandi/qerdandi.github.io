const moreToolsBtn = document.querySelector("#moreToolsBtn");
moreToolsBtn.addEventListener("click", showMoreTools);

const moreTools = document.querySelector("#more-tools"); 
moreTools.style.display = "none";

function showMoreTools() {
    moreTools.style.display = moreTools.style.display === "none" ? "block" : "none";
}

const moreLangBtn = document.querySelector("#moreLangBtn");
moreLangBtn.addEventListener("click", showMoreLang);

const moreLang = document.querySelector("#more-lang");
moreLang.style.display = "none";

function showMoreLang() {
    moreLang.style.display = moreLang.style.display === "none" ? "block" : "none";
}

const moreSoftwaresBtn = document.querySelector("#moreSoftwaresBtn");
moreSoftwaresBtn.addEventListener("click", showMoreSoftwares);

const moreSoftwares = document.querySelector("#more-softwares"); 
moreSoftwares.style.display = "none";

function showMoreSoftwares() {
    moreSoftwares.style.display = moreSoftwares.style.display === "none" ? "block" : "none";
}