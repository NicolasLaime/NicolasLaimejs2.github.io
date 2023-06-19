



class Item{
    //parametros para instanciar (crear) el item del juego
    constructor(nombre,precio, imagen){
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
    }
}


//variable global 

const mochila = [];

//items del juego

const cuchillo = new Item("cuchillo", 80,"cuchillo2.jpg");
const encendedor = new Item("encendedor", 100,"encendedor.png.png");
const venda = new Item("venda", 20,"venda.png.jpg");

//Dinero

let Dinero = 500;

//Elementos

const elementoDinero = document.querySelector("#Dinero");
const elementoMochila = document.querySelector("#mochila")
elementoDinero.innerText = Dinero;

// Funciones regulares

function comprar(Item){
    mochila.push(Item);
    if (Dinero - Item.precio <=0){
        alert("No tenes suficiente dinero para comprar" + Item.nombre );
        return; 
    }
    Dinero = Dinero - Item.precio;
    actualizarHTML();
}


/// FUNCION VENDER ITEMS

function vender(indice){
    const Item = mochila[indice];
    Dinero = Dinero + Item.precio;
    mochila.splice(indice, 1);
    actualizarHTML(); 
}














//se encarga de renderizar todos los items de la mochila
function actualizarHTML(){
    elementoMochila.innerHTML = "";
    for (const Item of mochila){
        let indiceItem = mochila.indexOf(Item);
        let elementoItem = `
        <li class="Item" onclick="vender(${indiceItem})">
            <img src="img/${Item.imagen}" />
        
        </li>`;
         
         elementoMochila.innerHTML += elementoItem;

    }
   elementoDinero.innerText = Dinero;
}


 