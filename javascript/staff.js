const puestos = ["Gerente General","Jefe de Marketing", "Jefe Recursos Humanos", "Logística","Tesorería"];


$('#staff').append(`<div class="centrado">
            <h2 class="titulo">Nuestro Staff</h2>
            <div class="centrado cardsStaff" id="contenedorStaff"></div>
            </div>`);


fetch('https://randomuser.me/api/?results=5')
.then(response => response.json())
.then(data => {
for (i = 0; i < 5; i++) {
let user= data.results[i];
$('#contenedorStaff').append(`
<div class="cardsStaff__employee">
    <div>
        <img class="cardsStaff__employee--foto" src="${user.picture.large}" alt="Card image cap">
        <h4 class="cardsStaff__employee--nombre">${user.name.title}. ${user.name.first} ${user.name.last}</h4>
        <p class="cardsStaff__employee--ciudad">${user.location.city}, ${user.location.country}</p>
        <p class="cardsStaff__employee--puesto">${puestos[i]}</p>
    </div>
</div> `);
}
});


