const program = document.querySelector('#prog')
const run_button = document.querySelector('#run_button')
let Qubit = {
  val: 0
}
let qubit = Qubit.new()
function run_gate(type, qubit) {
  val = qubit.val
  if (type == 'x' || type == 'y') {
    if (typeof val == Number) {
      return Math.abs(val - 1)
    } 
  }
}

qubit.val = run_gate('x', qubit)

console.log(qubit.val)


