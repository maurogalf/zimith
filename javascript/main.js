var valorBuscado = document.getElementById('buscador')
valorBuscado.onsubmit = function(event) {
    event.preventDefault();
    const input = event.target.children;
    localStorage.removeItem('productoBuscado')
    localStorage.setItem('productoBuscado', input[0].value) 
    location.replace("resultado-busqueda.html")
}
