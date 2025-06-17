const score1 = document.querySelector('#player1 .score');
  const score2 = document.querySelector('#player2 .score');
  const btn1 = document.querySelector('#player1 button');
  const btn2 = document.querySelector('#player2 button');
  const resetBtn = document.querySelector('#reset');

function checkWinner() {
    if (parseInt(score1.textContent) >= 10 || parseInt(score2.textContent) >= 10) {
      btn1.disabled = true;
      btn2.disabled = true;
    }
  }

  
  btn1.addEventListener('click', () => {
    let current = parseInt(score1.textContent);
    if (current >10);
    score1.textContent = current+ 1;
    checkWinner();
  });

  btn2.addEventListener('click', () => {
     let current = parseInt(score2.textContent);
    if (current >10);
    score2.textContent = current+ 1;
        checkWinner();

  });

  resetBtn.addEventListener('click', () => {
    score1.textContent = 0;
    score2.textContent = 0;
    btn1.disabled = false;
    btn2.disabled = false;
  });