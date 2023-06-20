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
    console.warn('In the shadow: https://cybertorii.github.io/Portfolio/index')
    for (let i = 0; i < 100; i++) {
        if (i%2 === 0) {
            console.error('Error: 404 Not Found')
        }else{
            console.error('Error: Corrupt Files')
        }
    }  
}

error()