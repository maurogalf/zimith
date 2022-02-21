const productoSeleccionado = JSON.parse(localStorage.getItem('productoSeleccionado'))

sessionStorage.setItem('cantidadSeleccionada', 0)


class Carrito {
    constructor(codigo, nombre, color, talle, precio, cantidad){
        this.codigo = codigo;
        this.nombre = nombre;
        this.color = color;
        this.talle = talle;
        this.precio = precio;
        this.cantidad = cantidad;
    }
}

let carrito = [];
$('#productView').empty();
$('#productView').append(`
<div class="row">
<div class="col-12 col-md-7">
    <div id="carouselExampleIndicators" class="carousel slide carousel-dark" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                aria-label="Slide 2"></button>
            <button id="3er-boton" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="${productoSeleccionado.img}" class="d-block w-100" alt="${productoSeleccionado.nombre}">
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Anterior</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Siguiente</span>
        </button>
    </div>
</div>
<div id="selectoresCompra" class="col-12 col-md-4">
    <h1 class="pt-md-5 text-center titulo">${productoSeleccionado.nombre}</h1>
    <h5 class="p-2 text-center">${productoSeleccionado.desc}</h5>
    <h2 class="p-1 text-center">$${productoSeleccionado.precio}</h2>
    <h5 class="p-1 text-center"> Color: ${productoSeleccionado.color} Talle: ${productoSeleccionado.talle}</h5>
    <div id="contenedorCompra" class="p-3 d-flex justify-content-between">
        <select id="stock-lista" class="btn btn-secondary dropdown-toggle btn-md-lg m-md-3 " type="button"
            aria-expanded="false">
            <option id="cantidad"><a class="dropdown-item" href="#">Cantidad</a></option>
        </select>
        <div class="p-3 d-flex justify-content-center">
        <a class="btn btn-md-lg btn-info align-content-center" id="botonComprar" role="button">
            Comprar </a>
    </div>
    </div>
    </div>
</div>`);

if(productoSeleccionado.img2 != undefined) {
    $('.carousel-inner').append(`<div class="carousel-item">
    <img src="${productoSeleccionado.img2}" class="d-block w-100" alt="${productoSeleccionado.nombre}">
</div>`)
    if(productoSeleccionado.img3 != undefined){
        $('.carousel-inner').append(`<div class="carousel-item">
        <img src="${productoSeleccionado.img3}" class="d-block w-100" alt="${productoSeleccionado.nombre}">
        </div>`)
    } else {
        $('#3er-boton').remove();
    }
} else {
    $('.carousel-indicators').remove();
    $('.carousel-control-prev').remove();
    $('.carousel-control-next').remove();
    
}
const stock = document.getElementById("stock-lista");

if(obtenerCarrito('carrito')){
    carrito = obtenerCarrito('carrito');
    if (carrito.some(producto => producto.codigo === productoSeleccionado.codigo)){
        for (let i = 0; i < carrito.length; i++){
            if ((carrito[i].codigo) === productoSeleccionado.codigo){
                if(productoSeleccionado.stock - carrito[i].cantidad === 0){
                    productoAgotado();
                }else{
                    console.log(productoSeleccionado.stock- carrito[i].cantidad)
                    listaStock(productoSeleccionado.stock - carrito[i].cantidad);
                }
            }
        }
    }else {
        listaStock(productoSeleccionado.stock)
    }
}else {
    console.log("pasa por aca tambien")
    listaStock(productoSeleccionado.stock)
}

function productoAgotado(){
    $("#botonComprar").remove();
    $("#stock-lista").remove();
    $("#contenedorCompra").append(`<h2 class="rounded bg-danger p-1 text-center">Producto Agotado</h2>`);
}

function listaStock(stock){
    for (let i = 1; i <= stock; i++){
        $("#stock-lista").append(`
        <option><a class="dropdown-item" href="#">${i}</a></option>
        `)
    }

}


$("#stock-lista").on('change', function(e){
    $('#cantidad').remove();
    sessionStorage.setItem('cantidadSeleccionada', e.target.value)
})



$("#botonComprar").click(function(){
    if(sessionStorage.getItem('cantidadSeleccionada')!== "0"){
        if(obtenerCarrito('carrito')){
            carrito = obtenerCarrito('carrito');
            if (carrito.some(producto => producto.codigo === productoSeleccionado.codigo)){
                console.log("existe codigo en carrito")
                const productoElegido = carrito.find(producto => producto.codigo === productoSeleccionado.codigo);
                productoElegido.cantidad = productoElegido.cantidad + Number(sessionStorage.getItem('cantidadSeleccionada'));
                guardarCarrito('carrito', carrito);
            }else {
                    console.log("no existe codigo en carrito")
                    const agregaProducto = new Carrito(productoSeleccionado.codigo, productoSeleccionado.nombre, productoSeleccionado.color, productoSeleccionado.talle, productoSeleccionado.precio, Number(sessionStorage.getItem('cantidadSeleccionada')))
                    carrito.push(agregaProducto);
                    guardarCarrito('carrito', carrito);
                    console.log(carrito)
            }
        }else {
            console.log("este producto no estaba")
            const agregaProducto = new Carrito(productoSeleccionado.codigo, productoSeleccionado.nombre, productoSeleccionado.color, productoSeleccionado.talle, productoSeleccionado.precio, Number(sessionStorage.getItem('cantidadSeleccionada')))
            carrito.push(agregaProducto);
            guardarCarrito('carrito', carrito);
        }
    location.replace("carrito.html")
    }else{
        $("#selectoresCompra").append(`
        <div id="alerta" class="alert alert-danger" role="alert">
        Debe seleccionar una cantidad.
        </div>`).fadeIn(1000)
        setTimeout(function(){ $("#alerta").remove(); }, 2000);
    }


})

function guardarCarrito(clave, valor) {
    localStorage.setItem(clave, JSON.stringify(valor));
}

function obtenerCarrito(clave) {
    const valor = JSON.parse(localStorage.getItem(clave));
    return valor;
}
