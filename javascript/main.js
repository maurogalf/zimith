class Producto {
    constructor(rubro, codigo, nombre, color, talle, stock, precio, img){
        this.rubro = rubro;
        this.codigo = codigo;
        this.nombre = nombre;
        this.color = color;
        this.talle = talle;
        this.stock = stock;
        this.precio = precio;
        this.img = img;
    }
    comprar(cantidad) {this.stock = this.stock - cantidad}

}
let productos = [];
const producto1 = new Producto("Remeras | Zimith", "ZH215101", "Remera Zimith Fogon", "Blanco", "S", 1, 2999, "./img/producto1.jpg")
const producto2 = new Producto("Remeras | Zimith", "ZH215102", "Remera Zimith Meteoro", "Negro", "M", 3, 2499, "./img/producto2.jpg")
const producto3 = new Producto("Remeras | Zimith", "ZH215103", "Remera Zimith Scrafat", "Negro", "XL", 2, 2899, "./img/producto3.jpg")
const producto4 = new Producto("Remeras | Zimith", "ZH215104", "Remera Zimith Kubras", "Blanco", "L", 1, 2999, "./img/producto4.jpg")
const producto5 = new Producto("Remeras | Zimith", "ZH215105", "Remera Zimith Malone", "Blanco", "M", 3, 2899, "./img/producto7.jpg")
const producto6 = new Producto("Remeras | Zimith", "ZH215106", "Remera Zimith Pinka", "Amarillo", "S", 4, 3199, "./img/producto8.jpg")
const producto7 = new Producto("Musculosas | Zimith", "ZH215107", "Musculosa Zimith Perlo", "Blanco", "M", 4, 3199, "./img/producto5.jpg")
const producto8 = new Producto("Musculosas | Zimith", "ZH215108", "Musculosa Zimith Torno", "Amarillo", "S", 4, 3199, "./img/producto6.jpg")
const producto9 = new Producto("Musculosas | Zimith", "ZH215109", "Musculosa ZImith Krape", "Blanco", "S", 4, 3199, "./img/producto15.jpg")
const producto10 = new Producto("Ninos | Zimith", "ZH215110", "Camisa Zimith Boys Ryghe", "Blanco", "S", 4, 3199, "./img/producto12.jpg")
const producto11 = new Producto("Ninos | Zimith", "ZH215111", "Remera Zimith Sicba Basica", "Azul", "S", 4, 3199, "./img/producto13.jpg")
const producto12 = new Producto("Ninos | Zimith", "ZH215112", "Short De Baño Zimith Demaf Niño", "Rojo", "S", 4, 3199, "./img/producto14.jpg")
const producto13 = new Producto("Accesorios | Zimith", "ZH215113", "Billetera Zimith Furgo Hombre", "Amarillo", "S", 4, 3199, "./img/producto9.jpg")
const producto14 = new Producto("Accesorios | Zimith", "ZH215114", "Mochila Zimith Bourta", "Amarillo", "S", 4, 3199, "./img/producto10.jpg")
const producto15 = new Producto("Accesorios | Zimith", "ZH215115", "Boxer Zimith Yotse", "Amarillo", "S", 4, 3199, "./img/producto11.jpg")
productos.push(producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10, producto11, producto12, producto13, producto14, producto15)

function buscar(){
    var valorBuscado = prompt('Ingrese el color de remera a buscar, opciones "blanco" "negro" "amarillo"');
    for (let i = 0; i <= productos.length; i++){
        if((productos[i].color).toUpperCase() === valorBuscado.toUpperCase()){
            console.log(productos[i]);
        }
    }

}

function comprarRemera(){
    producto1.stock = Number(prompt("Ingrese el stock de la remera Fogon"));
    producto2.stock = Number(prompt("Ingrese el stock de la remera Sigma"));
    producto3.stock = Number(prompt("Ingrese el stock de la remera Nento"));
    producto4.stock = Number(prompt("Ingrese el stock de la remera Mystery"));
    alert("El stock de " + producto1.nombre + " es de " + producto1.stock)
    while  (producto1.stock > 0){
        producto1.comprar(prompt("Ingrese la cantidad de remeras Fogon que desea comprar"))
        alert("El nuevo stock de " + producto1.nombre + "es de " + producto1.stock)
    }alert("Stock agotado")
    const boton = document.getElementById("botonComprar")
    boton.parentNode.removeChild(boton)
}


const catalogo = document.getElementById("catalogo")

const categoria = document.title


function renderProductos(articulos, categoriaProducto, etiqueta){
    etiqueta.innerHTML="";
    for (let i = 0; i <= productos.length; i++){
        if(articulos[i].rubro === categoriaProducto){
            etiqueta.innerHTML+=`
            <article class="tarjetaproducto">
            <a href="producto.html">
            <div>
            <img src="${articulos[i].img}" class="tarjetaproducto__foto"
            alt="${articulos[i].alt}">
            <h3 class="tarjetaproducto__nombre">${articulos[i].nombre}</h3>
            <h4 class="tarjetaproducto__precio">$${articulos[i].precio}</h4>
            </div>
            </a>
            </article>
            `
        }
        if(categoriaProducto === "Hombres | Zimith"){
            if(articulos[i].rubro === "Remeras | Zimith" || articulos[i].rubro === "Musculosas | Zimith" ){
            etiqueta.innerHTML+=`
            <article class="tarjetaproducto">
            <a href="producto.html">
            <div>
            <img src="${articulos[i].img}" class="tarjetaproducto__foto"
            alt="${articulos[i].alt}">
            <h3 class="tarjetaproducto__nombre">${articulos[i].nombre}</h3>
            <h4 class="tarjetaproducto__precio">$${articulos[i].precio}</h4>
            </div>
            </a>
            </article>
            `
            }
        }
    }
}

renderProductos(productos, categoria, catalogo);

// let productosCategoria=productos.filter(e=>productos.rubro === "Accesorios")
// console.log(productosCategoria);
//     let catalogo=document.getElementById("categoriaAccesorios");
// if(categoria === "Accesorios | Zimith"){
//     let catalogo=document.getElementById("categoriaAccesorios");
//     let productosCategoria=productos.find(e=>productos.rubro === "Accesorios")
// }else if(categoria === "Remeras | Zimith"){
//     let catalogo=document.getElementById("categoriaRemeras");
//     let productosCategoria=productos.find(e=>productos.rubro === "Remeras")
// }else if(categoria === "Hombres | Zimith"){
//     let catalogo=document.getElementById("categoriaHombres");
//     let productosCategoria=productos.find(e=>productos.rubro === "Hombres")
// }else if(categoria === "Musculosas | Zimith"){
//     let catalogo=document.getElementById("categoriaMusculosas");
//     let productosCategoria=productos.find(e=>productos.rubro === "Musculosas")
// }else if(categoria === "Ninos | Zimith"){
//     let catalogo=document.getElementById("categoriaNinos");
//     let productosCategoria=productos.find(e=>productos.rubro === "Ninos")
// }




