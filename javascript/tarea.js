var total = 0
function totalGeneral(a,b) {
    var total= (a * b)
    return total
}

function comprarRemera() {
    var test1 = "seguir"
    var test2 = "seguir"
    var test3 = "seguir"
    const precio = 1990
    while (test1 == "seguir"){
        var talle = prompt("Ingrese el talle de la remera, las opciones son : S, M, L y XL")
        var talle = talle.toUpperCase()
        if ((talle === "S") || (talle === "M") || (talle === "L") || (talle == "XL")){
            var test1 = "salir"
            while (test2 == "seguir"){
                var cantidad = Number(prompt("Ingrese la cantidad de remeras. Hasta 10 unidades disponibles"))
                if ((cantidad > 0) && (cantidad <=10)){
                    var test2 = "salir"
                    totalGeneral(precio, cantidad)
                }else alert("Valor incorrecto.")
            }
        }else alert("Valor incorrecto.")
    }alert("Usted ingreso " + cantidad + " unidades en talle "+ talle)
    while (test3 == "seguir"){
        var cuotas = parseInt(prompt("El total a abonar es de $" + totalGeneral(precio, cantidad) + ". Ingrese la cantidad de cuotas(hasta 3 cuotas disponibles)"))
        if ((cuotas > 0) && (cuotas <=3)){
            var test3 = "salir"
            var valorCuota = ( totalGeneral(precio, cantidad) / cuotas)
            alert("Deberá pagar "+ cuotas + " de $" + valorCuota)
        }else alert("Valor incorrecto.")
    }
}
