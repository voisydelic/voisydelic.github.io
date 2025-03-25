const program = []
const programDisplay = document.querySelector('#prog')
const runButton = document.querySelector('#run_button')
const output = document.querySelector('#output')
const hadamardButton = document.querySelector('#H')
const paulixButton = document.querySelector('#X')
const pauliyButton = document.querySelector('#Y')
let qubit = {
  val: 0
}
function runGate(type, qubit) {
  val = qubit.val
  if (type == 'x' || type == 'y') {
    qubit.val = Math.abs(val - 1)  }

  if (type == 'h') {
    if (Math.random()>.5) {
      qubit.val = 1
    } else {
      qubit.val = 0
    }
  }

}

function runScript() {
  
  for (const gate in program) {
    runGate(program[gate],qubit)
  }
  output.textContent = qubit.val
}

function appendInput(val) {
  program.push(val)
  programDisplay.textContent = program.toString()
}
hadamardButton.addEventListener('click', function(){ appendInput('h') })
paulixButton.addEventListener('click', function(){ appendInput('x') })
pauliyButton.addEventListener('click', function(){ appendInput('y') })


runButton.addEventListener('click', runScript)

// qubit.val = runGate('x', qubit)


