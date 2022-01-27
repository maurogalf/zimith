const lastestProducts = document.getElementById("lastest");
lastestProducts.innerHTML="";
const tituloLastest = document.createElement("h2");
tituloLastest.className = "destacados__titulo";
tituloLastest.innerText = "Nuevos Ingresos";
lastestProducts.appendChild(tituloLastest);
for (i = (productos.length - 4) ; i < productos.length; i++){
        const art = document.createElement("article");
        art.setAttribute('class', 'tarjetaproducto');
        const boton = document.createElement('button');
        art.addEventListener('click', vistaProducto);
        art.innerHTML+=`
        <div>
        <img src="${productos[i].img}" class="tarjetaproducto__foto"
        alt="${productos[i].alt}">
        <h3 class="tarjetaproducto__nombre">${productos[i].nombre}</h3>
        <h4 class="tarjetaproducto__precio">$${productos[i].precio}</h4>
        <a href="producto.html">
        <button class= "tarjetaproducto__boton" id="${productos[i].codigo}" href="product.html">Ver producto</button>
        </a>
        </div>
        `;
        lastestProducts.appendChild(art)
    }
function vistaProducto(event){
    localStorage.removeItem('productoSeleccionado');
    const productoElegido = event.target.id;
    const productoenvista = productos.find (producto => producto.codigo === productoElegido);
    localStorage.setItem('productoSeleccionado', JSON.stringify(productoenvista))
}

