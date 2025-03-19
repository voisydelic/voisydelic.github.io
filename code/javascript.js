const program = document.querySelector('#prog')
const runButton = document.querySelector('#run_button')
let qubit = {
  val: 0
}
function runGate(type, qubit) {
  val = qubit.val
  if (type == 'x' || type == 'y') {
    if (typeof val == Number) {
      console.log(Math.abs(val - 1))
    } 
  }
}

function runScript() {
  progString = program.value.split(',')
  for (const gate in progString) {
    runGate(gate,qubit)
  }
}
runButton.addEventListener('click', runScript)
// qubit.val = runGgate('x', qubit)


