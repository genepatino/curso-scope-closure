/* Ámbito Lexico: la accesibilidad de las variables está determinada por la posición de las mismas dentro de los ámbitos anidados (bloques de código dentro de otros). */

const number = 0

function numbers(){
    console.log(number) // 0
    function parent(){
        const parentNumber = 1
        console.log({number, parentNumber}) //0, 1

        function child(){
            const childNumber = 2
            console.log({parentNumber, number, childNumber}) // 1, 0 , 2
        }
        return child()
    }
    return parent()
}

numbers()
