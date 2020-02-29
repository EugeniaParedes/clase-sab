
function mostrar() 
{
    var nombre;
    var cantidadDePersonas;
    var cantidadDeDias;
    var formaDePagos;
    var respuesta="si";
    
    respuesta = prompt("tiene una reserva?");
    
    while (respuesta == "no")
    {
        nombre = prompt("ingrese nombre del huesped");
        while (isNaN(nombre)==false)
        {
            alert ("no es valido");
            nombre = prompt("ingrese nombre del huesped");     
        }
        cantidadDePersonas = parseInt(prompt("ingrese cantidad de personas"));
        while (isNaN(cantidadDePersonas)|| cantidadDePersonas<0)
        {
            alert ("no es valido");
            cantidadDePersonas = parseInt(prompt("ingrese cantidad de personas"));
         }
        cantidadDeDias = prompt("ingrese cantidad de dias");
        while (isNaN(cantidadDeDias) || cantidadDeDias<0)
        {
            alert("no es valido");
            cantidadDeDias = prompt("ingrese cantidad de dias");
        }
        formaDePago = parseInt(prompt("ingrese forma de pago"))
    } 
    

    

}
