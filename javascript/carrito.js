carrito = obtenerCarrito('carrito');

if(carrito && carrito.length !== 0){
    $("#carrito").append(`<table class="table">
    <thead>
    <tr>
        <th scope="col">Código</th>
        <th scope="col">Nombre</th>
        <th scope="col">Color</th>
        <th scope="col">Talle</th>
        <th scope="col">Precio</th>
        <th scope="col">Cantidad</th>
        <th scope="col">Total</th>
    </tr>
    </thead>
    <tbody>
        
    </tbody>
    </table>`)
    for (let i = 0; i < carrito.length; i++){
        $("tbody").append(`
        <tr class="linea-carrito" id="linea-${carrito[i].codigo}">
            <th scope="row">${carrito[i].codigo}</th>
            <td>${carrito[i].nombre}</td>
            <td>${carrito[i].color}</td>
            <td>${carrito[i].talle}</td>
            <td>$${new Intl.NumberFormat("de-DE").format(carrito[i].precio)}</td>
            <td>${carrito[i].cantidad}</td>
            <td>$${new Intl.NumberFormat("de-DE").format(carrito[i].cantidad * carrito[i].precio)}</td>
            <td><button id="${carrito[i].codigo}" type="button" class="badge rounded-pill bg-danger">X</button></td>
        </tr>`)
    }
}else {
    $("#carrito").append(`
    <h1>El carrito se encuentra vacio</h1>
    
    `)}
$("tr").click((e)=>{
    let revisar = (e.currentTarget.id).substr(6,8)
    const productoenvista = productos.find (producto => producto.codigo === revisar);
    localStorage.setItem('productoSeleccionado', JSON.stringify(productoenvista))
    location.replace("producto.html")
})    

$("button").click((e)=>{
    carrito = obtenerCarrito('carrito');
    let borra = e.target.id;
    $(`#linea-${borra}`).remove();
    var carrito = carrito.filter((item) => item.codigo !== borra)
    console.log(carrito)
    guardarCarrito('carrito', carrito);
    $(".burbuja-carrito").empty();
    $(".burbuja-carrito").append(`${carrito.length}`);
})

