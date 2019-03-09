function cpuChoise(choise){
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

while(round < 5){
  round++
  var c = cpuChoise(c);
  var o = humanchoos(o);

  if ((c == 'Rock' && o == 'Scissors') || (c == 'Paper' && o == 'Rock') || (c == 'Scissors' && o == 'Paper')) {
    alert(`Round: ${round} \nCPU's choise: ${c} beat Your choise: ${o} \nYou lose!!!`);
    cpuWin++;
  }else if ((o == 'Rock' && c == 'Scissors') || (o == 'Paper' && c == 'Rock') || (o == 'Scissors' && c == 'Paper')) {
    alert(`Round: ${round} \nYour choise: ${o} beat CPU's choise: ${c} \nYou win!!!`);
    humanWin++;
  }else {
    alert(`Round: ${round} \n Tie!!!!`);
    tie++;
  }
}

hres = humanWin;
cres = cpuWin;
