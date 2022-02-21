$('#form').append(`
<div class="formulario__campos">
                    <div class="formulario__campos--izq">
                        <label>Nombre: </label><input type="text" name="nombre">
                    </div>
                    <div class="formulario__campos--izq">
                        <label>Apellido: </label><input type="text" name="apellido">
                    </div>
                </div>
                <div class="formulario__campos">
                    <div class="formulario__campos--izq">
                        <label>Empresa: </label><input type="text" name="empresa">
                    </div>
                    <div class="formulario__campos--izq">
                        <label>Email: </label><input type="text" name="email">
                    </div>
                </div>
                <div class="formulario__campos">
                    <div class="formulario__campos--cen">
                        <select name="area">
                            <option value="Compras Minoristas">Compras Minoristas</option>
                            <option value="Compras Mayoristas">Compras Mayoristas</option>
                            <option value="Ventas Minoristas">Ventas Minoristas</option>
                            <option value="Ventas Mayoristas">Ventas Mayoristas</option>
                            <option value="Recursos Humanos">Recursos Humanos</option>
                            <option value="Administracion">Administración</option>
                        </select>
                    </div>
                    <div class="formulario__campos--cen">Recibir Newsletter <input type="checkbox" name="newsletter">
                    </div>
                </div>
                <div class="formulario__texto"><textarea name="mensaje" id="consulta" cols="80" rows="10"
                        placeholder="Ingrese su consulta"></textarea>
                </div>
                <div class="formulario__campos">
                    <div id="send" class="formulario__campos--cen"><input class="formulario__boton" type="button" value="Envio"></div>
                    <div class="formulario__campos--cen"><input class="formulario__boton" type="reset" value="Reset"></div>
                </div>`);

$("#send").click((e)=> {
    controlNombre = $('input[name=nombre]')[0].value
    controlApellido = $('input[name=apellido]')[0].value
    controlEmpresa = $('input[name=empresa]')[0].value
    controlEmail = $('input[name=email]')[0].value
    controlMensaje = $('#consulta')[0].value
    control =   controlNombre.length === 0 ? "Debe completar el campo del Nombre" : 
                controlApellido.length === 0 ? "Debe completar el campo del Apellido" : 
                controlEmpresa.length === 0 ? "Debe completar el campo de la Empresa" : 
                controlEmail.length === 0 ? "Debe completar el campo del Email" : 
                controlMensaje.length === 0 ? "Debe enviar un mensaje" : true;
                            
    console.log(controlNombre)
    if(control===true){
        $('#form').animate({
            height: '-=350px',
            width: '-=200px'
        }).empty(1000);
        $('#form').append(`<div>
        <p>Se ha enviado correctamente el formulario</p>
        </div>`)
    } else {
            var maskHeight = $(document).height();
            var maskWidth = $(window).width();
            $('#mask').css({'width':maskWidth,'height':maskHeight});
            $('#mask, .window').css({'display': 'block'});
            $('#mask').fadeIn(1000);        
            $('#mask').fadeTo("slow",0.8);  
            $('#mensaje').empty();
            $('#dialog').prepend(`<div id="mensaje" >${control}</div>`)
            $(id).fadeIn(2000); 
    }
    
})

//if close button is clicked
$('.window .close').click(function (e) {
    //Cancel the link behavior
    e.preventDefault();
    $('#mask, .window').hide();
});             

//if mask is clicked
$('#mask').click(function () {
        $(this).hide();
        $('.window').hide();
});                     




$("input").on('change', function(e){
    let valor = e.target;
    if ((valor.value) !== ""){
    $(valor).parent().children(".tilde").remove();    
    $(valor).parent().children(".cruz").remove();    
    $(valor).parent().append('<p class="tilde">✓</p>')
}else {
    $(valor).parent().children(".tilde").remove();    
    $(valor).parent().children(".cruz").remove();    
    $(valor).parent().append('<p class="cruz">X</p>')
    }
})






    