const catalogo = document.getElementById("catalogo")

const categoria = document.title


function renderProductos(articulos, categoriaProducto, etiqueta){
    etiqueta.innerHTML="";
    for (let i = 0; i < productos.length; i++){
        if(articulos[i].rubro === categoriaProducto){
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
                etiqueta.appendChild(art)
        }
        if(categoriaProducto === "Hombres | Zimith"){
            if(articulos[i].rubro === "Remeras | Zimith" || articulos[i].rubro === "Musculosas | Zimith" ){
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
                etiqueta.appendChild(art)
            }
        }
    }
}
function vistaProducto(event){
    localStorage.removeItem('productoSeleccionado');
    console.log(event.target)
    const productoElegido = event.target.id;
    localStorage.setItem('productoSeleccionado', productoElegido)
}
renderProductos(productos, categoria, catalogo);

