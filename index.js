function takeANumber(currentLine, name){
  currentLine.push(name)
  return `Welcome, ${name}. You are number ${currentLine.length} in line.`

}

function nowServing(katzDeliLine){
  if (katzDeliLine.length==0) {
    return `There is nobody waiting to be served!`}

  console.log (`Currently serving ${katzDeliLine[0]}.`)
  
  katzDeliLine.shift()


  }
