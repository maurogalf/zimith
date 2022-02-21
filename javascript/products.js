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
}
let productos = [];
const producto1 = new Producto("Remeras | Zimith", "ZH215101", "Remera Zimith Fogon", "Blanco", "S", 1, 2999,"Estampa a un color en frente. Tinta con base soft.", "./img/producto1.jpg", "./img/producto1b.jpg", "./img/producto1c.jpg")
const producto2 = new Producto("Remeras | Zimith", "ZH215105", "Remera Zimith Malone", "Naranja", "M", 3, 2899,"Estampa a un color en frente. Tinta con base soft.", "./img/producto7.jpg", "./img/producto7b.jpg", "./img/producto7c.jpg")
const producto3 = new Producto("Niños | Zimith", "ZH215111", "Remera Zimith Sicba Basica", "Azul", "L", 4, 3199,"Estampa a un color en frente. Tinta con base soft.", "./img/producto13.jpg")
const producto4 = new Producto("Remeras | Zimith", "ZH215106", "Remera Zimith Pinka", "Celeste", "XL", 4, 2499,"Estampa a un color en frente. Tinta con base soft.", "./img/producto8.jpg", "./img/producto8b.jpg", "./img/producto8c.jpg")
const producto5 = new Producto("Musculosas | Zimith", "ZH215107", "Musculosa Zimith Perlo", "Blanco", "M", 4, 2799,"Estampa a un color en frente. Tinta con base soft.", "./img/producto5.jpg")
const producto6 = new Producto("Niños | Zimith", "ZH215112", "Short De Baño Zimith Demaf Niño", "Rojo", "L", 4, 2599,"Short de baño 14'' elastizado.", "./img/producto14.jpg", "./img/producto14b.jpg")
const producto7 = new Producto("Musculosas | Zimith", "ZH215108", "Musculosa Zimith Torno", "Verde", "XL", 4, 3699,"Estampa a un color en frente. Tinta con base soft.", "./img/producto6.jpg")
const producto8 = new Producto("Accesorios | Zimith", "ZH215115", "Boxer Zimith Yotse", "Negro", "S", 4, 3099,"Boxer elastizado de algodón con elastico.", "./img/producto11.jpg", "./img/producto11b.jpg", "./img/producto11c.jpg")
const producto9 = new Producto("Remeras | Zimith", "ZH215104", "Remera Zimith Kubras", "Blanco", "L", 1, 2999,"Estampa a un color en frente. Tinta con base soft.", "./img/producto4.jpg", "./img/producto4b.jpg", "./img/producto4c.jpg")
const producto10 = new Producto("Remeras | Zimith", "ZH215102", "Remera Zimith Meteoro", "Verde", "M", 3, 2499,"Estampa a un color en frente. Tinta con base soft.", "./img/producto2.jpg", "./img/producto2b.jpg", "./img/producto2c.jpg")
const producto11 = new Producto("Accesorios | Zimith", "ZH215114", "Mochila Zimith Bourta", "Azul", "U", 4, 3199,"Mochila con 5 bolsillo, compartimento porta notebook de 15''", "./img/producto10.jpg", "./img/producto10b.jpg", "./img/producto10c.jpg")
const producto12 = new Producto("Niños | Zimith", "ZH215110", "Camisa Zimith Boys Ryghe", "Blanco", "14", 4, 3299,"Camisa de poplyn, 80% algodón 20% poliester.", "./img/producto12.jpg", "./img/producto12b.jpg", "./img/producto12c.jpg")
const producto13 = new Producto("Musculosas | Zimith", "ZH215109", "Musculosa ZImith Krape", "Negro", "S", 4, 2799,"Estampa a un color en frente. Tinta con base soft.", "./img/producto15.jpg")
const producto14 = new Producto("Accesorios | Zimith", "ZH215113", "Billetera Zimith Furgo Hombre", "Negro", "U", 4, 2199,"Billetera de eco cuero, 5 compartimientos para tarjetas.", "./img/producto9.jpg", "./img/producto9b.jpg")
const producto15 = new Producto("Remeras | Zimith", "ZH215103", "Remera Zimith Scrafat", "Negro", "XL", 2, 2899,"Estampa a un color en frente. Tinta con base soft.", "./img/producto3.jpg", "./img/producto3b.jpg", "./img/producto3c.jpg")
const producto16 = new Producto("Accesorios | Zimith", "ZH000200", "Boxer Zimith Lastic", "Blanco", "M", 5, 1399,"Logo en elástico. Jersey con lycra", "./img/producto16.jpg", "./img/producto16b.jpg", "./img/producto16c.jpg")
const producto17 = new Producto("Remeras | Zimith", "ZH215121", "Remera Zimith Village", "Negro", "S", 1, 2999,"Estampa a un color en frente. Tinta con base soft.", "./img/producto17.jpg", "./img/producto17b.jpg", "./img/producto17c.jpg")
const producto18 = new Producto("Accesorios | Zimith", "ZH080103", "Cinto Zimith Triop", "Negro", "U", 4, 1590,"Cinto eco-cuiero con 5 orificios regulables.", "./img/producto18.jpg", "./img/producto18b.jpg")
const producto19 = new Producto("Remeras | Zimith", "ZH105122", "Remera Zimith Monroe", "Naranja", "S", 6, 1690,"Estampa a un color en frente. Tinta con base soft.", "./img/producto19.jpg", "./img/producto19b.jpg", "./img/producto19c.jpg")
const producto20 = new Producto("Accesorios | Zimith", "ZH010001", "Gorra Zimith Skullrid", "Naranja", "U", 2, 2899,"Gorra con cierre strap regulable.", "./img/producto20.jpg", "./img/producto20b.jpg", "./img/producto20c.jpg")
const producto21 = new Producto("Niños | Zimith", "ZN297103", "Camisa Zimith Curiet Kid", "Amarillo", "12", 2, 3590,"Camisa full-print para niños mangas cortas.", "./img/producto21.jpg", "./img/producto21b.jpg", "./img/producto21c.jpg")
const producto22 = new Producto("Accesorios | Zimith","ZH010002", "Gorra Zimith Malik", "Verde", "U", 4, 2490,"Gorra con cierre strap regulable.", "./img/producto22.jpg", "./img/producto22b.jpg", "./img/producto22c.jpg")
const producto23 = new Producto("Remeras | Zimith", "ZH215130", "Remera Zimith Carne", "Negro", "L", 3, 2100,"Estampa a un color en frente. Tinta con base soft.", "./img/producto23.jpg", "./img/producto23b.jpg", "./img/producto23c.jpg")
const producto24 = new Producto("Niños | Zimith", "ZN106101", "Buzo Zimith Maluzo Kid", "Gris", "16", 2, 4900,"Buzo cuello base de niños liso. ", "./img/producto24.jpg", "./img/producto24b.jpg", "./img/producto24c.jpg")
const producto25 = new Producto("Remeras | Zimith", "ZH115148", "Remera Zimith Anchoas", "Verde", "M", 5, 2500,"Estampa a un color en frente. Tinta con base soft.", "./img/producto25.jpg", "./img/producto25b.jpg", "./img/producto25c.jpg")
const producto26 = new Producto("Niños | Zimith", "ZN116206", "Buzo Canguro Zimith Bonju Kids", "Negro", "10", 3, 5200,"Buzo Canguro estampado de niños. Tinta con base soft.", "./img/producto26.jpg", "./img/producto26b.jpg", "./img/producto26c.jpg")
const producto27 = new Producto("Musculosas | Zimith", "ZH205603", "Musculosa Zimith Syad", "Gris", "S", 4, 1250,"Musculosa con estampa a un color en frente. Tinta con base soft.", "./img/producto27.jpg")
const producto28 = new Producto("Accesorios | Zimith", "ZH000403", "Billetera Zimith Legur Hombre", "Marron", "U", 1, 2990,"Interior al tono con forro estampado. Monedero con cierre. Zamak metálico 100% cuero vegano.", "./img/producto28.jpg", "./img/producto28b.jpg")
const producto29 = new Producto("Accesorios | Zimith", "ZH205603", "Mochila Zimith Maxic", "Gris", "U", 4, 5990,"46x30x16 cm - 21 litros. 100% poliéster. Porta notebook: hasta 15”", "./img/producto29.jpg", "./img/producto29b.jpg", "./img/producto29c.jpg")
const producto30 = new Producto("Remeras | Zimith", "ZH215164", "REMERA ZIMITH MONOXIDO", "Celeste", "XL", 5, 1990,"Estampa a un color en frente. Tinta con base soft.", "./img/producto30.jpg", "./img/producto30b.jpg", "./img/producto30c.jpg")
productos.push(producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10, producto11, producto12, producto13, producto14, producto15, producto16, producto17, producto18, producto19, producto20, producto21, producto22, producto23, producto24, producto25, producto26, producto27, producto28, producto29, producto30)
