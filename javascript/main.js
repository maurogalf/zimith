var valorBuscado = document.getElementById('buscador');

valorBuscado.onsubmit = function(event) {
    event.preventDefault();
    const input = event.target.children;
    localStorage.removeItem('productoBuscado')
    localStorage.setItem('productoBuscado', input[0].value) 
    location.replace("resultado-busqueda.html")
}

function obtenerCarrito(clave) {
    const valor = JSON.parse(localStorage.getItem(clave));
    return valor;
}
function guardarCarrito(clave, valor) {
    localStorage.setItem(clave, JSON.stringify(valor));
}

carrito = obtenerCarrito('carrito');

$("#buscador").append(`<button id="btn-carrito" type="button" class="btn-carrito">
🛒
<span class="burbuja-carrito">
    ${carrito.length}
</span>
</button>`)

$("#btn-carrito").click((e)=>{location.replace("carrito.html")})
