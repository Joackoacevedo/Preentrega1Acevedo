let catalogo = `Completo:$2000 - Pizza:$4500 - Hamburguesa:$3500 - Sushi:$3000 (Valores sin IVA)`;

let nombre = prompt("Ingrese su nombre");
alert("Bienvenido" + " " + nombre);

let pais = prompt("¿De que país está comprando?");

while (pais.toLocaleLowerCase() != "chile") {
    alert("No vendemos en este pais");
    pais = prompt("¿De que país está comprando?");
}
alert("País correcto");

let eleccion =prompt("¿Que desea Comprar? :" + " " + catalogo);


if ( eleccion.toLocaleLowerCase() === 'pizza' || eleccion.toLocaleLowerCase() === 'hamburguesa' || eleccion.toLocaleLowerCase() === 'completo' || eleccion.toLocaleLowerCase() === 'sushi' ){
    alert('Usted a elegido' + " " + eleccion);
}else{
    alert('No tenemos :(');
}

let catalogoMoneda = `clp - usd - ars - eur`
let moneda  = prompt("¿Con que moneda va a pagar? :" + " " + catalogoMoneda);

switch (moneda) {
    case "clp":
        alert("Usted ha decidido pagar con Moneda Chilena");
        break;

    case "usd":
        alert("Usted ha decidido pagar con Moneda Estadounidense");
        break;

    case "ars":
        alert("Usted ha decidido pagar con Moneda Argentina");
        break;

    case "eur":
        alert("Usted ha decidido pagar con Moneda Europea");
        break;
    default:
        alert("Moneda no reconocida");
        break;
}
let valorProducto = prompt("Ingrese valor");
let precioProducto = valorProducto ;
let precioIva = precioProducto * 1.19 ;
alert("El valor a pagar es:" + " " + "$" + precioIva);