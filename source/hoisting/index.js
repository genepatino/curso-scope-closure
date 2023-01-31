/* Hoisting, elevamiento de variables y funciones */

//El hosting solo aplica a variables declaradas con var, si intentamos hacer un ejemplo similar con let o const tendremos errores:

console.log(x); //❌ ReferenceError: Cannot access 'x' before initialization

let x = 5; 

//El hosting para funciones solo aplica para funciones declaradas usando la palabra reservada function, si intentamos aplicarlo a arrow functions tendremos errores también:

console.log(saludo()) //✅ "Hola"

function saludo(){
  return "Hola"
}

console.log(despedida()) //❌ ReferenceError: Cannot access 'despedida' before initialization

const despedida = () => {
  return "Bye"
}