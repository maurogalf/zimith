const catalogo = document.getElementById("catalogo")

const categoria = document.title

$(".filtros").empty()
$(".filtros").append(`
<h2>Filtros</h2>
<div>

    <select id="filtro-color" class="filtro" type="button" aria-expanded="false">
            <option id="color"><a class="dropdown-item" href="#">Todos</a></option>
    </select>
    <select id="filtro-talle" class="filtro" type="button" aria-expanded="false">
            <option id="talle"><a class="dropdown-item" href="#">Todos</a></option>
    </select>
`)
let arregloCategoria = [];
function arregloSeccion() {
if (categoria === "Hombres | Zimith"){
    console.log("pasa por aca")
    let categoriaRemera = productos.filter(producto => producto.rubro === "Remeras | Zimith")
    let categoriaMusculosa = productos.filter(producto => producto.rubro === "Musculosas | Zimith")
    let arregloCategoria = categoriaRemera.concat(categoriaMusculosa);
    return arregloCategoria;
    } else {
    let arregloCategoria = productos.filter(producto => producto.rubro === categoria)
    return arregloCategoria;
    }
}

renderProductos(arregloSeccion(categoria), catalogo);
filtros(arregloSeccion(categoria)); 

function renderProductos(articulos, etiqueta){
        $("#catalogo").empty();
        for(let i = 0; i< articulos.length; i++){
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
                <button class= "tarjetaproducto__boton" id="${articulos[i].codigo}" href="producto.html">Ver producto</button>
                </a>
                </div>
                `;
                etiqueta.appendChild(art)
        }
    }    

function vistaProducto(event){
    localStorage.removeItem('productoSeleccionado');
    const productoElegido = event.target.id;
    const productoenvista = productos.find (producto => producto.codigo === productoElegido);
    localStorage.setItem('productoSeleccionado', JSON.stringify(productoenvista))
}

function filtros(articulos){
    let colores = [];
    for(let i = 0; i< articulos.length; i++){
        colores.push(articulos[i].color)
    }
    let filtroColor = colores.filter((item,index)=>{
        return colores.indexOf(item) === index; })
        for(let i = 0; i< filtroColor.length; i++){
            $("#filtro-color").append(`
        <option id="color"><a class="dropdown-item" href="#">${filtroColor[i]}</a></option>
        `)
    }
    let talles = [];
    for(let i = 0; i< articulos.length; i++){
        talles.push(articulos[i].talle)
    }
    let filtroTalle = talles.filter((item,index)=>{
        return talles.indexOf(item) === index; })
        for(let i = 0; i< filtroTalle.length; i++){
        console.log(filtroTalle[i])
            $("#filtro-talle").append(`
        <option id="color"><a class="dropdown-item" href="#">${filtroTalle[i]}</a></option>
        `)
    }
}

$("#filtro-color").on('change', (e)=>{
    let colorFiltrado= e.target.value;
    if(colorFiltrado === "Todos"){
        renderProductos(arregloSeccion(categoria), catalogo);
    }else{
        let filtroColor = arregloSeccion(categoria);
        let arregloFiltrado = filtroColor.filter(producto => producto.color === colorFiltrado)
        renderProductos(arregloFiltrado, catalogo);
    }
})
$("#filtro-talle").on('change', (e)=>{
    let talleFiltrado= e.target.value;
    if(talleFiltrado === "Todos"){
        renderProductos(arregloSeccion(categoria), catalogo);
    }else{
        let filtroTalle = arregloSeccion(categoria);
        let arregloFiltrado = filtroTalle.filter(producto => producto.talle === talleFiltrado)
        renderProductos(arregloFiltrado, catalogo);
    }
})



