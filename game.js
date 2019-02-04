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
