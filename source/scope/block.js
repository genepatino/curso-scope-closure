/* Block scope: las variables tienen un alcance de accesibilidad unicamente dentro del bloque de codigo en que son declaradas */

function fruits(){
    if(true){
        const fruit1 = 'Banana'
        let fruit2 = 'Kiwi'
        console.log({fruit1, fruit2}); //Banana. Kiwi
    }
    console.log({fruit1, fruit2}); //fruit1 is not define, se detiene el codigo. Las variables no existen
}

fruits() //fruit1 is not define, se detiene el codigo. Las variables no existen.