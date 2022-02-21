var valorBuscado = document.getElementById('buscador');

if(obtenerCarrito('carrito')){
    carrito = obtenerCarrito('carrito');
}else {
    let carroNuevo = [];
    localStorage.setItem('carrito', JSON.stringify(carroNuevo));
    carrito = obtenerCarrito('carrito');
}

valorBuscado.onsubmit = function(event) {
    event.preventDefault();
    const input = event.target.children;
    if(input[0].value != ""){
    localStorage.removeItem('productoBuscado')
    localStorage.setItem('productoBuscado', input[0].value) 
    location.replace("resultado-busqueda.html")
}
}

function obtenerCarrito(clave) {
    const valor = JSON.parse(localStorage.getItem(clave));
    return valor;
}
function guardarCarrito(clave, valor) {
    localStorage.setItem(clave, JSON.stringify(valor));
}


$("#buscador").append(`<button id="btn-carrito" type="button" class="btn-carrito">
🛒
<span class="burbuja-carrito">
    ${carrito.length}
</span>
</button>`)

$("#btn-carrito").click((e)=>{location.replace("carrito.html")})
