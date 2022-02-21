carrito = obtenerCarrito('carrito');

if(carrito && carrito.length !== 0){
    var totalCarrito = 0;
    $("#carrito").append(`<table class="table">
    <thead>
    <tr>
        <th scope="col">Código</th>
        <th scope="col">Nombre</th>
        <th scope="col">Color</th>
        <th class="tb-c" scope="col">Talle</th>
        <th class="tb-r" scope="col">Precio</th>
        <th class="tb-c" scope="col">Cantidad</th>
        <th class="tb-r" scope="col">Total</th>
    </tr>
    </thead>
    <tbody>
        
    </tbody>
    </table>`)
    for (let i = 0; i < carrito.length; i++){
        totalCarrito += carrito[i].cantidad * carrito[i].precio;
        $("tbody").append(`
        <tr class="linea-carrito" id="linea-${carrito[i].codigo}">
            <th scope="row">${carrito[i].codigo}</th>
            <td>${carrito[i].nombre}</td>
            <td>${carrito[i].color}</td>
            <td class="tb-c">${carrito[i].talle}</td>
            <td class="tb-r">$${new Intl.NumberFormat("de-DE").format(carrito[i].precio)}</td>
            <td class="tb-c">${carrito[i].cantidad}</td>
            <td class="tb-r">$${new Intl.NumberFormat("de-DE").format(carrito[i].cantidad * carrito[i].precio)}</td>
            <td class="tb-r"><button id="${carrito[i].codigo}" type="button" class="badge rounded-pill bg-danger">X</button></td>
        </tr>`)
    }
    $("tr").click((e)=>{
        let revisar = (e.currentTarget.id).substr(6,8)
        const productoenvista = productos.find (producto => producto.codigo === revisar);
        localStorage.setItem('productoSeleccionado', JSON.stringify(productoenvista))
        location.replace("producto.html")
    })    
    calculaTotal();
    $('#carrito').append(`
    <div class="vaciarCarrito">
    <button id="btn-vaciarCarrito" class="btn-vaciarCarrito">Vaciar Carrito 🛒</button>
    </div>`)
}else {
    $("#carrito").append(`
    <h1>El carrito se encuentra vacio</h1>
    `)}

$('#btn-vaciarCarrito').click(()=>{
    console.log("pasa por aca")
    localStorage.removeItem('carrito');
    location.reload();
})

$("button").click((e)=>{
    carrito = obtenerCarrito('carrito');
    let borra = e.target.id;
    $(`#linea-${borra}`).remove();
    var carrito = carrito.filter((item) => item.codigo !== borra)
    guardarCarrito('carrito', carrito);
    $(".burbuja-carrito").empty();
    $(".burbuja-carrito").append(`${carrito.length}`);
    calculaTotal();

})

function calculaTotal(){
    totalCarrito = 0;
    carrito = obtenerCarrito('carrito');
    for (let i = 0; i < carrito.length; i++){
        totalCarrito += carrito[i].cantidad * carrito[i].precio;
    }
    $('#totalCarrito').remove();
    $("tbody").append(`
    <tr id="totalCarrito" class="linea-carrito">
        <th scope="row"></th>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td class="tb-r">Total compra:</td>
        <td class="tb-r">$${new Intl.NumberFormat("de-DE").format(totalCarrito)}</td>
        <td></td>
    </tr>`)
}
