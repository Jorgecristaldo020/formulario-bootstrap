$(function(){

    $('#btnMostrar').on('click', function(){
        //recura los datos ingresado por el usuario en los campos de texto con los id
        const nombre = $('#txtNombre').val();
        const apellido = $('#txtApellido').val();
        const cedula = $('#txtCedula').val();
        const direccion =$('#txtDireccion').val();
        console.log(' nombres '+nombre+' apellidos '+apellido+' cedulas '+cedula+' direccion '+direccion);
        alert(' nombres '+nombre+' apellidos '+apellido+' cedulas '+cedula+' direccion '+direccion);
    });

    $('#btnLimpiar').on('click', function(){
        alert('Se limpiaran el formulario');
        // Limpiar los campos del formulario
        $('#txtNombre').val('');
        $('#txtApellido').val('');
        $('#txtCedula').val('');
        $('#txtDireccion').val('');
    });
});
