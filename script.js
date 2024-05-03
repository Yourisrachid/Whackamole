/* Exercise 3 - Whack-A-Mole (bonus)

Let's create a simple Whack-A-Mole clone.

The goal of this traditional game is to prevent "moles" from coming out the ground with a hammer. Every second a new "mole" appears and you'll have to click on it to gently tell her to go back into the soil where it belongs. The game doesn't have to picture moles, or animal cruelty you can simply display circle <div>s to begin with. Everytime you click on a mole, your score increases.

If you'd like to spice things up, you can create an increasing difficulty by reducing the timeframe in which the mole appears.

Here is a badly drawn example to get you started. Let's do this!
*/


const zone = document.querySelector('.zone');
const scoreDisplay = document.getElementById('score');
const highestScoreDisplay = document.getElementById('highest-score');

let highestScore = localStorage.getItem('highestScore') || 0;
let removalDuration = 2000;
let score = 0;

highestScoreDisplay.textContent = highestScore;


function startGame() {
  let score = 0;
  scoreDisplay.textContent = score;

  function createMole() {
    const mole = document.createElement('div');
    mole.classList.add('mole');
    mole.addEventListener('click', whackMole);
    zone.appendChild(mole);
  
  
    const randomX = Math.floor(Math.random() * 5);
    const randomY = Math.floor(Math.random() * 5);
    mole.style.gridColumn = randomX + 1;
    mole.style.gridRow = randomY + 1;
  
  
    setTimeout(() => {
      mole.remove();
    }, removalDuration);
  }
  
  
  function whackMole() {
    this.remove();
    score++;
    scoreDisplay.textContent = score;
  
  
    if (score > highestScore) {
      highestScore = score;
      highestScoreDisplay.textContent = highestScore;
      localStorage.setItem('highestScore', highestScore);
    }
  
    if (score % 5 === 0) {
      removalDuration -= 200;
    }
  
    if (score === 0) {
      removalDuration = 2000;
    }
  
  }



  let interval = setInterval(createMole, 2000);

  function stopGame() {
    clearInterval(interval)
    let score = 0;
    scoreDisplay.textContent = score;
  }

  end.addEventListener('click', function() {

    stopGame();
    start.style.visibility = 'visible';
    end.style.visibility = 'collapse';
  
  })
}





const start = document.querySelector('.start')
const end = document.querySelector('.end')

end.style.visibility = 'collapse'


start.addEventListener('click', function() {

  startGame();
  start.style.visibility = 'collapse';
  end.style.visibility = 'visible';

})