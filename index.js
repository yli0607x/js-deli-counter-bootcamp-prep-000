function takeANumber(currentLine, name){
  currentLine.push(name)
  return `Welcome, ${name}. You are number ${currentLine.length} in line.`

}

function nowServing(katzDeliLine){
  if (katzDeliLine.length==0) {
    return `There is nobody waiting to be served!`}

  return `Currently serving ${katzDeliLine.shift()}.`


  }

function currentLine(currentLine){
  if (currentLine.length==0) {
    return `The line is currently empty`
  }

    
  }
