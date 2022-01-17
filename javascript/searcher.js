const catalogo = document.getElementById("catalogo")
const productoBuscado = localStorage.getItem('productoBuscado')


function renderProductos(articulos, coincidencia, etiqueta){
    etiqueta.innerHTML="";
    var verificador = false
    for (let i = 0; i < productos.length; i++){
        if((articulos[i].codigo) === coincidencia.toUpperCase()){
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
                var verificador = true
        }
    }
    if(verificador === false){
    const body = document.getElementById("main")
    body.innerHTML="";
    body.innerHTML+=`<h1 class="titulo">No se encontraron coincidencias para "${productoBuscado}"</h1>`;
    }
}

function vistaProducto(event){
    localStorage.removeItem('productoSeleccionado');
    console.log(event.target)
    const productoElegido = event.target.id;
    localStorage.setItem('productoSeleccionado', productoElegido)
}
renderProductos(productos, productoBuscado, catalogo)