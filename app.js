let baconTimer = document.getElementById('baconTimer');
let eggsTimer = document.getElementById('eggsTimer');
let pancakesTimer = document.getElementById('pancakesTimer');

let baconCountdown;
let eggsCountdown;
let pancakesCountdown;

let baconTime = 180;  // 3 minutes for bacon
let eggsTime = 120;  // 2 minutes for 1 scrambled egg
let pancakesTime = 150;  // 2.5 minutes for pancakes

let baconPaused = false;
let eggsPaused = false;
let pancakesPaused = false;

let sizzlingSound = new Audio('audio/Wait.mp3'); // Sizzling sound (looping)
let beepSound = new Audio('audio/Bell.mp3'); // Beep sound

document.getElementById('startBacon').onclick = function() {
  startBacon();
};

document.getElementById('pauseBacon').onclick = function() {
  pauseBacon();
};

document.getElementById('resetBacon').onclick = function() {
  resetBacon();
};

document.getElementById('startEggs').onclick = function() {
  startEggs();
};

document.getElementById('pauseEggs').onclick = function() {
  pauseEggs();
};

document.getElementById('resetEggs').onclick = function() {
  resetEggs();
};

document.getElementById('startPancakes').onclick = function() {
  startPancakes();
};

document.getElementById('pausePancakes').onclick = function() {
  pausePancakes();
};

document.getElementById('resetPancakes').onclick = function() {
  resetPancakes();
};

document.getElementById('eggType').onchange = function() {
  let eggCountDropdown = document.getElementById('eggCount');
  if (this.value === 'sunnySideUp') {
    eggCountDropdown.style.display = 'none';
  } else {
    eggCountDropdown.style.display = 'block';
  }
};

function startBacon() {
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

function pauseBacon() {
  baconPaused = true;
}

function resetBacon() {
  baconTime = 180;
  baconTimer.innerText = '';
  clearInterval(baconCountdown);
  sizzlingSound.pause();
  sizzlingSound.currentTime = 0;
}

function startEggs() {
  const eggCount = parseInt(document.getElementById('eggCount').value);
  const eggType = document.getElementById('eggType').value;
  
  if (eggType === 'scrambled') {
    if (eggCount === 1) {
      eggsTime = 120;
    } else if (eggCount === 2) {
      eggsTime = 150;
    }else if (eggCount === 3) {
      eggsTime = 180;
    } else {
      eggsTime = 270; // 4+ eggs = 4 minutes 30 seconds
    }
  } else if (eggType === 'sunnySideUp') {
    eggsTime = 120;
  }

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

function pauseEggs() {
  eggsPaused = true;
}

function resetEggs() {
  eggsTime = 120;
  eggsTimer.innerText = '';
  clearInterval(eggsCountdown);
  sizzlingSound.pause();
  sizzlingSound.currentTime = 0;
}

function startPancakes() {
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

function pausePancakes() {
  pancakesPaused = true;
}

function resetPancakes() {
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
    setTimeout(() => {
      beepSound.play();
    }, i * 1000);
  }
}
