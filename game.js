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
