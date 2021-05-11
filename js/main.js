function $(selector){
  return document.querySelector(selector)
}



var elResultScore = $('.score')
var elButtonPapper = $('.button-paper')
var elButtonScissor = $('.button-scissor')
var elButtonRock = $('.button-rock')
var elButtonBgc = $('.button-bgc')
var elButtonBottom = $('.btn-bottom')
var elComputerButtons = $('.computer__buttons')
var elPickedsText = $('.pickeds')
var elPlayAgain = $('.play-again')
var elResult = $('.result') 
var elPapper2 = $('.papper-2')
var elScissor2 = $('.scissor-2')
var elRock2 = $('.rock-2')
var elCompScore = $('.comp-score')
var elModalResult = $('.modal-result')
var elModalWin = $('.modal-win')
var elModalLose = $('.modal-lose')
var elRepeatGameWin = $('.repeat-game-win')
var elRepeatGameLose = $('.repeat-game-lose')

elRepeatGameWin.addEventListener('click', function(){
  window.location.reload();
})
elRepeatGameLose.addEventListener('click', function(){
  window.location.reload();
})

function removeAchieve(){
  elButtonPapper.classList.remove('achieve-blue')
  elButtonScissor.classList.remove('achieve-orange')
  elButtonRock.classList.remove('achieve-red')
  elPapper2.classList.remove('achieve-blue')
  elScissor2.classList.remove('achieve-orange')
  elRock2.classList.remove('achieve-red')
}

function PlayAgainDnone(){
  elButtonPapper.classList.remove('d-none')
  elButtonScissor.classList.remove('d-none')
  elButtonRock.classList.remove('d-none')
  elButtonBgc.classList.remove('d-none')
  elComputerButtons.classList.add('d-none')
  elPickedsText.classList.add('d-none')
  elPlayAgain.classList.add('d-none')
  elResult.classList.add('d-none')
}

function removePart(){
  elComputerButtons.classList.remove('d-none')
  elPickedsText.classList.remove('d-none')
  elPlayAgain.classList.remove('d-none')
  elResult.classList.remove('d-none')
};

elButtonPapper.addEventListener('click', function(){
  elButtonRock.classList.add('d-none')
  elButtonScissor.classList.add('d-none')
  elButtonBgc.classList.add('d-none')
  elButtonPapper.classList.add('big')
  removePart()
 
})

elButtonRock.addEventListener('click', function () {
  elButtonPapper.classList.add('d-none')
  elButtonScissor.classList.add('d-none')
  elButtonBottom.classList.add('original')
  elButtonBgc.classList.add('d-none')
  elButtonRock.classList.add('big')
  removePart()
})

elButtonScissor.addEventListener('click', function () {
  elButtonRock.classList.add('d-none')
  elButtonPapper.classList.add('d-none')
  elButtonBgc.classList.add('d-none')
  elButtonScissor.classList.add('big')
  removePart()
})

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function elRandomNumberfunc(){
  return getRandomNumber(1,4);
}

elPlayAgain.addEventListener('click', function () {
  elButtonBottom.classList.remove('original')
  elButtonRock.classList.remove('big')
  elButtonPapper.classList.remove('big')
  elButtonScissor.classList.remove('big')
  PlayAgainDnone()
  removeAchieve()
})

var score = 0
var compScore = 0

elButtonPapper.addEventListener('click', function () {
  var elRandomNumber = elRandomNumberfunc()
  console.log(elRandomNumber)

  if (elRandomNumber === 1) {
    elScissor2.classList.add('d-none')
    elRock2.classList.add('d-none')
    elPapper2.classList.remove('d-none')
    elResult.textContent = 'Draw'
  }

  if (elRandomNumber === 2) {
    elPapper2.classList.add('d-none')
    elRock2.classList.add('d-none')
    elScissor2.classList.remove('d-none')
    elScissor2.classList.add('achieve-orange')
    elResult.textContent = 'You lose'

    compScore++;
  }

  if (elRandomNumber === 3) {
    elPapper2.classList.add('d-none')
    elScissor2.classList.add('d-none')
    elRock2.classList.remove('d-none')
    elButtonPapper.classList.add('achieve-blue')
    elResult.textContent = 'You win'
    score += 1;
  }
  if(score == 3){
    elModalResult.classList.remove('d-none')
    elModalWin.classList.remove('d-none')
  }
  if(compScore == 3){
    elModalResult.classList.remove('d-none')
    elModalLose.classList.remove('d-none')
  }
  elResultScore.textContent = score;
  elCompScore.textContent = compScore;
})

elButtonScissor.addEventListener('click', function () {
  var elRandomNumber = elRandomNumberfunc()
  console.log(elRandomNumber)

  if (elRandomNumber === 1) {
    elScissor2.classList.add('d-none')
    elRock2.classList.add('d-none')
    elPapper2.classList.remove('d-none')
    elResult.textContent = 'You win'
    elButtonScissor.classList.add('achieve-orange')
    score += 1;
  }

  if (elRandomNumber === 2) {
    elResult.textContent = 'Draw'
    elPapper2.classList.add('d-none')
    elRock2.classList.add('d-none')
    elScissor2.classList.remove('d-none')
  }

  if (elRandomNumber === 3) {
    elPapper2.classList.add('d-none')
    elScissor2.classList.add('d-none')
    elRock2.classList.remove('d-none')
    elRock2.classList.add('achieve-red')
    elResult.textContent = 'You lose'
    compScore++;
  }
  if (score == 3) {
    elModalResult.classList.remove('d-none')
    elModalWin.classList.remove('d-none')
  }
  if (compScore == 3) {
    elModalResult.classList.remove('d-none')
    elModalLose.classList.remove('d-none')
  }
  elResultScore.textContent = score;
  elCompScore.textContent = compScore
})



elButtonRock.addEventListener('click', function () {
  var elRandomNumber = elRandomNumberfunc()
  console.log(elRandomNumber)
  if (elRandomNumber === 1) {
  elScissor2.classList.add('d-none')
  elRock2.classList.add('d-none')
  elPapper2.classList.remove('d-none')
  elPapper2.classList.add('achieve-blue')
    elResult.textContent = 'You lose'
    compScore++;
  }

  if (elRandomNumber === 2) {
    elResult.textContent = 'You win'
    elButtonRock.classList.add('achieve-red')
    elPapper2.classList.add('d-none')
    elRock2.classList.add('d-none')
    elScissor2.classList.remove('d-none')
    score += 1;
  }

  if (elRandomNumber === 3) {
    elResult.textContent = 'Draw'
    elPapper2.classList.add('d-none')
    elScissor2.classList.add('d-none')
    elRock2.classList.remove('d-none')
  }

  if (score == 3) {
    elModalResult.classList.remove('d-none')
    elModalWin.classList.remove('d-none')
  }
  if (compScore == 3) {
    elModalResult.classList.remove('d-none')
    elModalLose.classList.remove('d-none')
  }
  
  elResultScore.textContent = score;
  elCompScore.textContent = compScore;
})

// modal 

var elModal = $('.modal')
var elClose = $('.btn-close')
var elRulesBtn = $('.btn-rules')
var elModalDialog = $('.modal-dialog')

elRulesBtn.addEventListener('click', function(){
  elModal.classList.remove('d-none')
  elRulesBtn.classList.add('active')
  elModalDialog.classList.add('animatsiya')
})

elClose.addEventListener('click', function(){
  elModal.classList.add('d-none')
})

//modal-result






