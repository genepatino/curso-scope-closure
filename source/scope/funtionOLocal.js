/* Function scope, las variables que son creadas en funciones o bloques de codigo solo tienen accesibilidad dentro de la misma funcion y bloques de codigo anidados */

function names (){
    const name = 'Ana'
    console.log(name) // Ana

    if(name){
        console.log(`Hello ${name}!`) //Hello Ana!
    }
}

names()
console.log(name); // name is not defined