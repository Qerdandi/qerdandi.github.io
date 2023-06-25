// Disable right-click
document.addEventListener('contextmenu', (e) => e.preventDefault());

function ctrlShiftKey(e, keyCode) {
    return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
}

const forbiddenKeys = new Set(['F12', 'Control+Shift+I', 'Control+Shift+J', 'Control+C', 'Control+U']);

document.onkeydown = (e) => {
  const keyCombination = `${e.ctrlKey ? 'Control+' : ''}${e.shiftKey ? 'Shift+' : ''}${e.key}`;

    if (forbiddenKeys.has(keyCombination)) {
        return false;
    }
};

function error() {
    randomIndex = getRandomInt(99)
    for (let i = 0; i < 100; i++) {
        if(i != randomIndex){
            console.warn(`In the shadow ${i}: https://cybertorii.github.io/Shadow/shadow`)
        } else{
            console.warn(`In the shadow ${i}: https://cybertorii.github.io/Portfolio/index`)
        }
    }  
}

function getRandomInt(max) { return Math.floor(Math.random() * max); }

error()