const productoSeleccionado = localStorage.getItem('productoSeleccionado')
console.log(productoSeleccionado)

const productView = document.getElementById("productView")
for (let i = 0; i < productos.length; i++){
    if(productos[i].codigo === productoSeleccionado){
        productView.innerHTML=`<div class="row">
        <div class="col-12 col-md-7">
            <div id="carouselExampleIndicators" class="carousel slide carousel-dark" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                        class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="${productos[i].img}" class="d-block w-100" alt="${productos[i].nombre}">
                    </div>
                    <div class="carousel-item">
                        <img src="${productos[i].img2}" class="d-block w-100" alt="${productos[i].nombre}">
                    </div>
                    <div class="carousel-item">
                        <img src="${productos[i].img3}" class="d-block w-100" alt="${productos[i].nombre}">
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
        <div class="col-12 col-md-4">
            <h1 class="pt-md-5 text-center titulo">${productos[i].nombre}</h1>
            <h5 class="p-2 text-center">${productos[i].desc}</h5>
            <h2 class="p-1 text-center">$${productos[i].precio}</h2>
            <div class="dropdown p-3 d-flex justify-content-between">
                <button class="btn btn-secondary dropdown-toggle btn-md-lg m-md-3 " type="button"
                    id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Talle
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a class="dropdown-item" href="#">S - Small</a></li>
                    <li><a class="dropdown-item disabled" href="#">M - Medium</a></li>
                    <li><a class="dropdown-item" href="#">L - Large</a></li>
                    <li><a class="dropdown-item disabled" href="#">XL - Exxtra Large</a></li>
                </ul>
                <button class="btn btn-secondary dropdown-toggle btn-md-lg m-md-3" type="button"
                    id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Color
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a class="dropdown-item" href="#">Blanco</a></li>
                </ul>
            </div>
            <div class="p-3 d-flex justify-content-center">
                <a class="btn btn-md-lg btn-info align-content-center" id="botonComprar" href='javascript:;' onclick="comprarRemera();" role="button">
                    Comprar </a>
            </div>
            </div>
        </div>`
    }
}