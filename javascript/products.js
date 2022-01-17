class Producto {
    constructor(rubro, codigo, nombre, color, talle, stock, precio, desc, img, img2, img3){
        this.rubro = rubro;
        this.codigo = codigo;
        this.nombre = nombre;
        this.color = color;
        this.talle = talle;
        this.stock = stock;
        this.precio = precio;
        this.desc = desc;
        this.img = img;
        this.img2 = img2;
        this.img3 = img3;
    }
    comprar(cantidad) {this.stock = this.stock - cantidad}

}
let productos = [];
const producto1 = new Producto("Remeras | Zimith", "ZH215101", "Remera Zimith Fogon", "Blanco", "S", 1, 2999,"Estampa a un color en frente. Tinta con base soft.", "./img/producto1.jpg", "./img/producto1b.jpg", "./img/producto1c.jpg")
const producto2 = new Producto("Remeras | Zimith", "ZH215105", "Remera Zimith Malone", "Blanco", "M", 3, 2899,"Estampa a un color en frente. Tinta con base soft.", "./img/producto7.jpg", "./img/producto7b.jpg", "./img/producto7c.jpg")
const producto3 = new Producto("Niños | Zimith", "ZH215111", "Remera Zimith Sicba Basica", "Azul", "S", 4, 3199,"Estampa a un color en frente. Tinta con base soft.", "./img/producto13.jpg", "./img/producto13b.jpg", "./img/producto13c.jpg")
const producto4 = new Producto("Remeras | Zimith", "ZH215106", "Remera Zimith Pinka", "Amarillo", "S", 4, 3199,"Estampa a un color en frente. Tinta con base soft.", "./img/producto8.jpg", "./img/producto8b.jpg", "./img/producto8c.jpg")
const producto5 = new Producto("Musculosas | Zimith", "ZH215107", "Musculosa Zimith Perlo", "Blanco", "M", 4, 3199,"Estampa a un color en frente. Tinta con base soft.", "./img/producto5.jpg", "./img/producto5b.jpg", "./img/producto5c.jpg")
const producto6 = new Producto("Niños | Zimith", "ZH215112", "Short De Baño Zimith Demaf Niño", "Rojo", "S", 4, 3199,"Short de baño 14'' elastizado.", "./img/producto14.jpg", "./img/producto14b.jpg", "./img/producto14c.jpg")
const producto7 = new Producto("Musculosas | Zimith", "ZH215108", "Musculosa Zimith Torno", "Amarillo", "S", 4, 3199,"Estampa a un color en frente. Tinta con base soft.", "./img/producto6.jpg", "./img/producto6b.jpg", "./img/producto6c.jpg")
const producto8 = new Producto("Accesorios | Zimith", "ZH215115", "Boxer Zimith Yotse", "Amarillo", "S", 4, 3199,"Boxer elastizado de algodón con elastico.", "./img/producto11.jpg", "./img/producto11b.jpg", "./img/producto11c.jpg")
const producto9 = new Producto("Remeras | Zimith", "ZH215104", "Remera Zimith Kubras", "Blanco", "L", 1, 2999,"Estampa a un color en frente. Tinta con base soft.", "./img/producto4.jpg", "./img/producto4b.jpg", "./img/producto4c.jpg")
const producto10 = new Producto("Remeras | Zimith", "ZH215102", "Remera Zimith Meteoro", "Negro", "M", 3, 2499,"Estampa a un color en frente. Tinta con base soft.", "./img/producto2.jpg", "./img/producto2b.jpg", "./img/producto2c.jpg")
const producto11 = new Producto("Accesorios | Zimith", "ZH215114", "Mochila Zimith Bourta", "Amarillo", "S", 4, 3199,"Mochila con 5 bolsillo, compartimento porta notebook de 15''", "./img/producto10.jpg", "./img/producto10b.jpg", "./img/producto10c.jpg")
const producto12 = new Producto("Niños | Zimith", "ZH215110", "Camisa Zimith Boys Ryghe", "Blanco", "S", 4, 3199,"Camisa de poplyn, 80% algodón 20% poliester.", "./img/producto12.jpg", "./img/producto12b.jpg", "./img/producto12c.jpg")
const producto13 = new Producto("Musculosas | Zimith", "ZH215109", "Musculosa ZImith Krape", "Blanco", "S", 4, 3199,"Estampa a un color en frente. Tinta con base soft.", "./img/producto15.jpg", "./img/producto15b.jpg", "./img/producto15c.jpg")
const producto14 = new Producto("Accesorios | Zimith", "ZH215113", "Billetera Zimith Furgo Hombre", "Amarillo", "S", 4, 3199,"Billetera de eco cuero, 5 compartimientos para tarjetas.", "./img/producto9.jpg", "./img/producto9b.jpg", "./img/producto9c.jpg")
const producto15 = new Producto("Remeras | Zimith", "ZH215103", "Remera Zimith Scrafat", "Negro", "XL", 2, 2899,"Estampa a un color en frente. Tinta con base soft.", "./img/producto3.jpg", "./img/producto3b.jpg", "./img/producto3c.jpg")
productos.push(producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10, producto11, producto12, producto13, producto14, producto15)
