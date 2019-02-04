function cpuChoise(choise){
  var cpuC = ''
  var cpuN = Math.random()

  if((cpuN > 0 && cpuN < 0.34)){
    cpuC = 'Rock'
  }else if (cpuN > 0.34 && cpuN < 0.66) {
    cpuC = 'Paper'
  }else {
    cpuC = 'Scissors'
  }
  return cpuC
}

function humanchoos(t){
  var h = 0
  do{
    var t = window.prompt('Tipe your choise').toLowerCase()

    switch (t) {
      case 'rock':{
        t = 'Rock'
        h = 1
      }break;
      case 'paper':{
        t = 'Paper'
        h = 1
      }break;
      case 'scissors':{
        t = 'Scissors'
        h = 1
      }break;
      case '':{
        h = 0
      }break;
      default :{
        h = 0
      }break;
    }
  }while(h != 1);
  return t
}

function letsPlay(funcion1, funcion2){
  var round = 0
  var cpuWin = 0
  var humanWin = 0
  var tie = 0
  var hres = 0
  var cres = 0

  while(round < 4){
    round++
    var c = cpuChoise(c)
    var o = humanchoos(o)

    if ((c == 'Rock' && o == 'Scissors') || (c == 'Paper' && o == 'Rock') || (c == 'Scissors' && o == 'Paper')) {
      alert(`Round: ${round} \nCPU's choise: ${c} beat Your choise: ${o} \nYou lose!!!`);
      cpuWin++
    }else if ((o == 'Rock' && c == 'Scissors') || (o == 'Paper' && c == 'Rock') || (o == 'Scissors' && c == 'Paper')) {
      alert(`Round: ${round} \nYour choise: ${o} beat CPU's choise: ${c} \nYou win!!!`);
      humanWin++
    }else {
      alert(`Round: ${round} \n Tie!!!!`)
      tie++
    }
  }

  hres = humanWin
  cres = cpuWin

  var humanRes = document.getElementById("humanRes");
  humanRes.innerHTML = `You win ${humanWin} times`;

  var cpuRes = document.getElementById("cpuRes");
  cpuRes.innerHTML = `CPU win ${cpuWin} times`;

  var ties = document.getElementById("tie");
  ties.innerHTML = `TIE: ${tie}`;

  if ((hres > cres)) {
    var total = document.getElementById("total")
    total.innerHTML = `You are the CHAMPION!!!`
  }else if((hres < cres)) {
    var total = document.getElementById("total")
    total.innerHTML = `Sorry CPU is the CHAMPION!!!`
  }else{
    var total = document.getElementById("total")
    total.innerHTML = `It's a TIE!!! Try again.`
  }
}

function go(){
  var cpuC2, human2
  letsPlay(cpuChoise(cpuC2), humanchoos(human2))
}

var but = document.getElementById('play')
but.addEventListener('click', go);
