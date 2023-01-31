/* Closure: existe un closure cuando tenemos una función que utiliza un valor que fue declarado fuera de su contexto.*/

function shoppingCart(){
    let cart = [];
    function addItems(item){
        cart.push(item);
        console.log(cart); ['Mouse', 'Keyboard', 'Display 24']
    }
    return addItems;
}

const amazon = shoppingCart();
amazon("Mouse");
amazon("Keyboard");
amazon(`Display 24"`);


function miAlcancia(){
    let ahorros = 0
    function contarAhorros(monedas){
        ahorros+= monedas
        console.log(`usted tiene ahorrado $${ahorros}`) //usted tiene ahorrado 100 \ usted tiene ahorrado 200..
    }
    return contarAhorros
}

const misAhorros = miAlcancia()
misAhorros(100)
misAhorros(100)
misAhorros(150)