/*var canvas = document.getElementById('canvas')
setUpCanvas();
var context = canvas.getContext("2d");
const bkgColor = '#002ae0'
context.fillStyle = bkgColor;
context.fillRect(0, 0, canvas.width, canvas.height);

var tokenList = [];

var col = []
for(let i = 0; i < 7; i++){
	col.push(false);
}

const radius = 30;
const offset = 20;
const xO =  radius + offset;
const yO =  radius + offset;
const freeSpace = 2*radius + offset;

var xPos = xO;
var yPos = -radius;
var ySpeed = 10;
var endTurn = true;
var yellow = true;
var rgb;

drawGrid();

function setUpCanvas(){
	canvas.width = 580;
	canvas.height = 500;
}

function drawGrid(){
	for(let i = 0; i < 7; i++){
		for(let j = 0; j < 6; j++){
			drawCircle('rgb(255, 255, 255)', radius, xO + i*freeSpace, yO + j*freeSpace);
		}
	}

	for(let j = 0; j < tokenList.length; j++){
		drawCircle(tokenList[j][0], tokenList[j][1], tokenList[j][2], tokenList[j][3]);
	}
}

function setUpValues(i){
	if(yellow){
		rgb = 'rgb(255, 255, 0)';
	}else{
		rgb ='rgb(255, 0, 0)';
	}

	xPos = xO + 80*i;
	yPos = -radius;
	endTurn = false;
}

function dropCircle(){
	if(!endTurn){
		canvasAniId = requestAnimationFrame(dropCircle);
	}

	clearCanvas();
	drawCircle(rgb, radius, xPos, yPos);

	yPos += ySpeed;

	if(yPos == canvas.height - (radius + offset)){
		console.log("End");
		endTurn = true;
		yellow = !yellow;

		var circle = [rgb, radius, xPos, yPos];
		tokenList.push(circle);
	}

	for(let i = 0; i < tokenList.length; i++){
		if(yPos == tokenList[i][3] - (2*radius + offset) && xPos == tokenList[i][2]){ 
			console.log("End");
			endTurn = true;
			yellow = !yellow;
	
			var circle = [rgb, radius, xPos, yPos];
			tokenList.push(circle);

			
			if(yPos == yO){
				col[(xPos-xO)/80] = true;
			}
		}
	}
}

function drawCircle(rgb, radius, xPos, yPos){
	context.fillStyle = rgb;
	context.beginPath();
	context.arc(xPos, yPos, radius, 0, Math.PI * 2);
	context.fill();
}

function clearCanvas(){
	context.fillStyle = bkgColor;
	context.fillRect(0, 0, canvas.width, canvas.height);
	drawGrid();
}

function rand(min, max){ return Math.floor(Math.random() * max+1) + min; }

function changeText(id, text){
	document.getElementById(id).innerHTML = text; // "document" means that the script affect all HTML file
}

document.addEventListener('keydown', (event) => {
	if(event.key.toLowerCase() == 'r'){
		tokenList = [];
		
		for(let i = 0; i < 7; i++){
			col[i] = false;
		}		
		
		endTurn = true;
		yellow = true;
		clearCanvas();
	}
}, false);

for (let i = 0; i < 7; i++) {
	document.getElementById("btn"+(i+1)).onclick = function(){
		if(endTurn && !col[i]){
			console.log("Inserted");
			setUpValues(i);
			dropCircle();
		}
	};
}*/

var width = window.innerWidth;
var height = window.innerHeight; 
var translateBtn = false;
var captchaSize = 5;

// -----------------------------------------MOVING-BUTTON-------------------------------------------

var movingBtn = document.getElementById("movingBtn");

movingBtn.onmouseover = function(){
	fleeMouse(movingBtn);
};

function fleeMouse(element) {
	translateBtn = !translateBtn;

	if(translateBtn){
		element.style.left = document.getElementById("main").clientWidth - element.clientWidth - 15 + 'px';
	}else{
		element.style.left = 0 + 15 + 'px';
	}
}

// -----------------------------------------ADS-------------------------------------------

function openPopupAds(){
	openPopup('popupCB', 'popupCbTitle', 'Ads based on your data', 'popupCbText', 'See more ads of this type ?');
}

// -----------------------------------------POPUP-------------------------------------------

function openPopup(id, titleId, title, textId, text){
	if(title != null && text != null){
		document.getElementById(titleId).textContent = title;
		document.getElementById(textId).textContent = text;
	}
	document.getElementById(id).classList.toggle("active");
}

function closePopup(id){
	document.getElementById(id).classList.toggle("active");
	loadPage();
}

// ---------------------------------CHECK-BOX-POPUP-------------------------------------------

document.getElementById("confirmPopupCB").onclick = function(){
	if(document.getElementById("confirmCB").checked){
		document.getElementById("popupCB").classList.toggle("active");
		document.getElementById("confirmCB").checked = false;
	}
	loadPage();
}

// ---------------------------------COOKIES-POPUP-------------------------------------------

window.onload = (event) => {
	document.getElementById("cookiePopup").classList.toggle("active");
};

function openCookies(){
	document.getElementById("cookiePopup").classList.add("active");
}

document.getElementById("confirmCookies").onclick = function(){
	if(document.getElementById("noCookies").checked){
		window.location.href = "error.html";
	}else{
		document.getElementById("cookiePopup").classList.toggle("active");
		loadPage();
	}
}

// ---------------------------------CAPTCHA-POPUP-------------------------------------------

function openCaptcha(){
	var captchaText = randomizeText(captchaSize)
	document.getElementById("captcha").classList.toggle("active");
	
	document.addEventListener('keydown', (event) => {
		if(event.key.toLowerCase() == 'enter'){
			if(document.getElementById("textField").value == captchaText){
				document.getElementById("textField").value = "Enter to verify";
				document.getElementById("captcha").classList.toggle("active");
				document.getElementById("textField").style.color = 'grey';
				loadPage();
			}else{
				document.getElementById("textField").style.color = 'red';
			}
		}
	}, false);
}

document.getElementById("refreshCaptcha").onclick = function(){
	if(captchaSize < 20){
		captchaSize++;
	}
	randomizeText(captchaSize);
}

function randomizeText(size){
	var captchaText = "";
	var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	for (let i = 0; i < size; i++) {
		captchaText += characters.charAt(Math.random() * characters.length);
	}
	document.getElementById("randomText").textContent = captchaText;
	return captchaText;
}

// ---------------------------------CURSOR-------------------------------------------

document.addEventListener("mousemove", function(){
	document.getElementById("cursor").style.left = event.clientX - 15 + 'px';
	document.getElementById("cursor").style.top = event.clientY - 15 + 'px';
}); 

document.addEventListener("click", function(){
	playAudio();
});

function playAudio() { 
	document.getElementById("cursorClick").play(); 
}

// ---------------------------------LOADING-PAGE---------------------------------------

/*document.addEventListener("click", function(){
	loadPage();
});*/

function loadPage(){
	document.getElementById("loadingPage").style.display = "block";

	setTimeout(function(){
		document.getElementById("loadingPage").style.display = "none";
	}, Math.random() * 4000); 
}

// -----------------------------------DATE-------------------------------------------

setInterval(function(){
	document.getElementById("dateTime").textContent = new Date();
}, 1000);

// -----------------------------------OTHER-------------------------------------------

function print(text){ console.log(text); }