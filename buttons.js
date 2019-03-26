var rock = 'Rock';
var paper = 'Paper';
var scissors = 'Scissors';
var games = 0;
var cpuWin = 0;
var humanWin = 0;
var tie = 0;
var c;

var cpuscore = document.getElementById("cscore");
cpuscore.innerHTML = `0`;
var humanscore = document.getElementById("hscore");
hscore.innerHTML = `0`;

function cpuChoise(){
  var cpuC = '';
  var cpuN = Math.random();

  if((cpuN > 0 && cpuN < 0.34)){
    cpuC = 'Rock';
  }else if (cpuN > 0.34 && cpuN < 0.66) {
    cpuC = 'Paper';
  }else {
    cpuC = 'Scissors';
  }
  return cpuC;
}

function letsPlay(a, b){

  b = cpuChoise();

  if ((b == 'Rock' && a == 'Scissors') || (b == 'Paper' && a == 'Rock') || (b == 'Scissors' && a == 'Paper')) {
    cpuWin++;
    games++;
    var cpuscore = document.getElementById("cscore");
    cpuscore.innerHTML = `${cpuWin}`;
    var resultc = document.getElementById("result");
    resultc.innerHTML = `CPU's choise: ${b} <br>beats <br>Your choise: ${a}`;

  }else if ((a == 'Rock' && b == 'Scissors') || (a == 'Paper' && b == 'Rock') || (a == 'Scissors' && b == 'Paper')) {
    humanWin++;
    games++;
    var humanscore = document.getElementById("hscore");
    hscore.innerHTML = `${humanWin}`;
    var resulth = document.getElementById("result");
    resulth.innerHTML = `Your choise: ${a} <br>beat <br>CPU's choise: ${b}`;

  }else {
    tie++;
    var ties = document.getElementById('tie');
    ties.innerHTML = `Tie: ${tie}`;
    alert(`Tie!!!!`);
  }

  var game = document.getElementById("games");
  game.innerHTML = `Game: ${games}`;

  reset(humanWin, cpuWin);

}

function reset(c, d){
  if(humanWin == 5) {
    alert('You defeat the computer great job!!!');
    setTimeout(2000);
    location.reload();
  }else if(cpuWin == 5) {
    alert("The computer defeats you!!!");
    setTimeout(2000);
    location.reload();
  }
}



function meRock(){
  letsPlay(rock, c)
}

function mePaper(){
  letsPlay(paper, c)
}

function meScissors(){
  letsPlay(scissors, c)
}

var but = document.getElementById('rockChoise');
but.addEventListener('click', meRock);

var but = document.getElementById('paperChoise');
but.addEventListener('click', mePaper);

var but = document.getElementById('scissorsChoise');
but.addEventListener('click', meScissors);
