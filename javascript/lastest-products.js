function lastestSection(articulos){
const lastestProducts = document.getElementById("lastest");
lastestProducts.innerHTML="";
const tituloLastest = document.createElement("h2");
tituloLastest.className = "destacados__titulo";
tituloLastest.innerText = "Nuevos Ingresos";
lastestProducts.appendChild(tituloLastest);
for (i = (articulos.length - 4) ; i < articulos.length; i++){
        const art = document.createElement("article");
        art.setAttribute('class', 'tarjetaproducto');
        const boton = document.createElement('button');
        art.addEventListener('click', vistaProducto);
        art.innerHTML+=`
        <div>
        <img src="${articulos[i].img}" class="tarjetaproducto__foto"
        alt="${articulos[i].alt}">
        <h3 class="tarjetaproducto__nombre">${articulos[i].nombre}</h3>
        <h4 class="tarjetaproducto__precio">$${articulos[i].precio}</h4>
        <a href="producto.html">
        <button class= "tarjetaproducto__boton" id="${articulos[i].codigo}" href="product.html">Ver producto</button>
        </a>
        </div>
        `;
        lastestProducts.appendChild(art)
    }
}
function vistaProducto(event){
    localStorage.removeItem('productoSeleccionado');
    const productoElegido = event.target.id;
    const productos = fetch('./data/products.json')
    .then(response => response.json())
    .then(data => {
        const productos = data.map(producto =>new Producto(producto.rubro, producto.codigo, producto.nombre, producto.color, producto.talle, producto.stock, producto.precio, producto.desc, producto.img, producto.img2, producto.img3));
        const productoenvista = productos.find (producto => producto.codigo === productoElegido);
        localStorage.setItem('productoSeleccionado', JSON.stringify(productoenvista))
    });
}
lastestSection(productos)  


