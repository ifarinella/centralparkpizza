//variables


function validacionDatos (variable) {
    while ( variable === null || variable === `` ) {
        variable = prompt ("No se completó el campo. Ingrese el dato solicitado");
        }
}

let nombre = prompt("Por favor indique su nombre");

validacionDatos (nombre);

let apellido = prompt("Por favor indique su apellido");

validacionDatos (apellido);

let añoNacimiento = parseInt(prompt("Por favor indique su año de nacimiento"));

validacionDatos (añoNacimiento);

let producto = prompt("¿Qué producto desea ordenar?");

validacionDatos (producto);

let cantidadProducto = parseInt(prompt("¿Cuántas unidades desea?"));

validacionDatos (cantidadProducto);

let precioProducto = parseFloat(prompt("¿Cuál es el precio del producto?"));

validacionDatos (precioProducto);

let contraseña = parseInt(prompt("Ingrese una contraseña para su pedido, deben ser caracteres númericos"));

validacionDatos (contraseña);

let edad = parseInt(2022 - añoNacimiento);
let nombreCompleto;
let descuento;
let pedidoCompleto;
let precioPedido;
let productosVendidos;


//Ciclo-quiero solicitarle al cliente su contraseña para confirmarle el pedido

let confirmacionPedido = parseInt(prompt("Por favor confirme su contraseña"));
let intentos = 3;

while ( confirmacionPedido !== contraseña && intentos > 0) {
    intentos = intentos - 1;
    alert("Su contraseña es incorrecta. Por favor intente de nuevo.");
    if (intentos != 0){
        confirmacionPedido = parseInt(prompt("Por favor confirme su contraseña"));
        } else {
        alert("No hemos podido confirmar su pedido. Contáctenos por teléfono al 4555-5555");
        console.log("La contraseña ingresada fue incorrecta. Este pedido no está confirmado");
    }
}


//Condicional para determinar el descuento a aplicar

if (cantidadProducto >= 3, cantidadProducto < 6) {
    descuento = 0.9;
} else if (cantidadProducto >= 6) {
    descuento = 0.8;
} else {
    descuento = 1;
}

//Mensajes que quiero que arroje la consola

nombreCompleto = `El nombre completo del cliente es ${nombre} ${apellido}. Tiene ${edad} años.`;

console.log(nombreCompleto);


pedidoCompleto = `El producto pedido es ${producto}, y la cantidad elegida es ${cantidadProducto}. El precio unitario es de $ ${precioProducto}.`

console.log(pedidoCompleto);


function precioFinal( cantidad, precio, desc ) {
    precioPedido = cantidad * precio * desc
}
function mostrarMonto (mensaje) {
    console.log(mensaje)
}

precioFinal ( cantidadProducto, precioProducto, descuento );
mostrarMonto ( precioPedido );

//Voy a iniciar un listado de los clientes, creándolos como objetos

function Cliente(nombre, apellido, edad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
}

function crearCliente(){
    let nombre = prompt("¿Cuál es su nombre");
    let apellido = prompt("¿Cuál es su apellido?");
    let edad = parseInt(prompt("¿Cuántos años tiene?"));

    const clienteNuevo = new Cliente(nombre, apellido, edad)

    console.log(clienteNuevo)
    return clienteNuevo;
}


let listaClientes = [{nombre: "Juan", apellido: "Pérez"}, {nombre: "Marta", apellido: "Gómez"}, {nombre: "María", apellido: "González"}, {nombre: "Pedro", apellido: "García"}, {nombre: "Lucas", apellido: "Gallo"}];

console.log(listaClientes);
console.log(listaClientes[4]);
console.log(listaClientes[1].apellido);

for (let i = 0; i < 5; i++){
    console.log(listaClientes[i])
}

let listaExclientes = [{nombre: "Nicolás", apellido: "Alberdi"}, {nombre: "Teresa", apellido: "Urroz"}];
let listaFinal = listaClientes.concat(listaExclientes);
console.log(listaFinal);

console.log(listaFinal.join(" / "));
console.log(listaFinal.indexOf({nombre: "Federico", apellido: "López"}));







