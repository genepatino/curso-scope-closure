/* Global Scope: son variables que hayan sido declaradas en nuestro documento de forma global, podemos acceder a ellas en cualquier parte de nuestro codigo */

const fruit = 'Apple'

function fruits (){
    console.log(fruit)
}

fruits()

function countris(){
    country = "Venezuela" //declaras e inicializas de forma global aunque este en un bloque de codigo (funcion). SI no quieres que tu variable sea global, agrera las palabra reservada const o let
    console.log(country)
}

countris() //Venezuela
console.log(country) //Venezuela
