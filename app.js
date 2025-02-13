let baconTimer = document.getElementById('baconTimer');
let eggsTimer = document.getElementById('eggsTimer');
let pancakesTimer = document.getElementById('pancakesTimer');

let baconCountdown;
let eggsCountdown;
let pancakesCountdown;

let baconTime = 180;  
let eggsTime = 120;  
let pancakesTime = 150;  

let baconPaused = false;
let eggsPaused = false;
let pancakesPaused = false;

let canPressBacon = true;
let canPressEggs = true;
let canPressPancakes = true;

let sizzlingSound = new Audio('BreakfastTimer/Audio/Wait.mp3'); 
let beepSound = new Audio('BreakfastTimer/Audio/Bell.mp3'); 

document.getElementById('startBacon').onclick = function() { startBacon(); };
document.getElementById('pauseBacon').onclick = function() { pauseBacon(); };
document.getElementById('resetBacon').onclick = function() { resetBacon(); };

document.getElementById('startEggs').onclick = function() { startEggs(); };
document.getElementById('pauseEggs').onclick = function() { pauseEggs(); };
document.getElementById('resetEggs').onclick = function() { resetEggs(); };

document.getElementById('startPancakes').onclick = function() { startPancakes(); };
document.getElementById('pausePancakes').onclick = function() { pausePancakes(); };
document.getElementById('resetPancakes').onclick = function() { resetPancakes(); };

document.getElementById('eggType').onchange = function() {
  let eggCountDropdown = document.getElementById('eggCount');
  eggCountDropdown.style.display = this.value === 'sunnySideUp' ? 'none' : 'block';
};

function startBacon() {
  if (canPressBacon) {
    canPressBacon = false;
    baconPaused = false;
    baconTimer.innerText = formatTime(baconTime);
    sizzlingSound.loop = true;
    sizzlingSound.play();
    
    baconCountdown = setInterval(function() {
      if (!baconPaused) {
        if (baconTime > 0) {
          baconTime--;
          baconTimer.innerText = formatTime(baconTime);
        } else {
          clearInterval(baconCountdown);
          sizzlingSound.pause();
          sizzlingSound.currentTime = 0;
          alert('Bacon done!');
          beepBeep();
        }
      }
    }, 1000);
  }
}

function pauseBacon() { canPressBacon = true; baconPaused = true; }
function resetBacon() {
  canPressBacon = true;
  baconTime = 180;
  baconTimer.innerText = '';
  clearInterval(baconCountdown);
  sizzlingSound.pause();
  sizzlingSound.currentTime = 0;
}

function startEggs() {
  if (canPressEggs) {
    canPressEggs = false;
    const eggCount = parseInt(document.getElementById('eggCount').value);
    const eggType = document.getElementById('eggType').value;
    
    eggsTime = eggType === 'scrambled' ? (eggCount === 1 ? 120 : eggCount === 2 ? 150 : eggCount === 3 ? 180 : 270) : 120;
    
    eggsPaused = false;
    eggsTimer.innerText = formatTime(eggsTime);
    sizzlingSound.loop = true;
    sizzlingSound.play();

    eggsCountdown = setInterval(function() {
      if (!eggsPaused) {
        if (eggsTime > 0) {
          eggsTime--;
          eggsTimer.innerText = formatTime(eggsTime);
        } else {
          clearInterval(eggsCountdown);
          sizzlingSound.pause();
          sizzlingSound.currentTime = 0;
          alert('Eggs done!');
          beepBeep();
        }
      }
    }, 1000);
  }
}

function pauseEggs() { canPressEggs = true; eggsPaused = true; }
function resetEggs() {
  canPressEggs = true;
  eggsTime = 120;
  eggsTimer.innerText = '';
  clearInterval(eggsCountdown);
  sizzlingSound.pause();
  sizzlingSound.currentTime = 0;
}

function startPancakes() {
  if (canPressPancakes) {
    canPressPancakes = false;
    pancakesPaused = false;
    pancakesTimer.innerText = formatTime(pancakesTime);
    sizzlingSound.loop = true;
    sizzlingSound.play();

    pancakesCountdown = setInterval(function() {
      if (!pancakesPaused) {
        if (pancakesTime > 0) {
          pancakesTime--;
          pancakesTimer.innerText = formatTime(pancakesTime);
        } else {
          clearInterval(pancakesCountdown);
          sizzlingSound.pause();
          sizzlingSound.currentTime = 0;
          alert('Pancakes done!');
          beepBeep();
        }
      }
    }, 1000);
  }
}

function pausePancakes() { canPressPancakes = true; pancakesPaused = true; }
function resetPancakes() {
  canPressPancakes = true;
  pancakesTime = 150;
  pancakesTimer.innerText = '';
  clearInterval(pancakesCountdown);
  sizzlingSound.pause();
  sizzlingSound.currentTime = 0;
}

function formatTime(time) {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function beepBeep() {
  for (let i = 0; i < 3; i++) {
    setTimeout(() => { beepSound.play(); }, i * 1000);
  }
}
