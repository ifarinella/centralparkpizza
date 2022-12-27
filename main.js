//Preentrega3

//Quiero listar los clientes a medida que se vayan creando con los pedidos

const formulario = document.querySelector("#altaCliente");

class Cliente {
    constructor(nombre, apellido, añoNacimiento, telefono){
        this.nombre = nombre;
        this.apellido = apellido;
        this.añoNacimiento = añoNacimiento;
        this.telefono = telefono;
    }
}

let parrafoCliente = document.querySelector("#parrafoCliente");
const clientesAgregados = JSON.parse(localStorage.getItem("clientes")) || [];


const crearCliente = () => {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let añoNacimiento = parseInt(document.getElementById("añoNacimiento").value);
    let telefono = document.getElementById("telefono").value;

    let clienteNuevo = new Cliente(nombre, apellido, añoNacimiento, telefono)
    
    listaClientes.push(clienteNuevo);
    localStorage.setItem("clientes", JSON.stringify(clientesAgregados));
    
    return clientesAgregados;
}

formulario.onsubmit = (e) => {
    e.preventDefault();
    crearCliente();
    mostrarClientes()
}




//Quiero mostrarle al usuario en el HTML un resumen de su pedido(en el DOM)

class Pedidos {
    constructor(nombre, apellido, producto, cantidad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.producto = producto;
        this.cantidad = cantidad;
    }
}

const pedidosRecibidos = [];

const crearPedido = () => {
    let nombre = document.querySelector("#nombre").value;
    let apellido = document.querySelector("#apellido").value;
    let producto = document.querySelector("#producto").value;
    let cantidad = parseInt(document.querySelector("#cantidad").value);

    let pedidoNuevo = new Pedidos(nombre, apellido, producto, cantidad);
    pedidosRecibidos.push(pedidoNuevo);


    return pedidosRecibidos
}

const mostrarPedido =
pedidosRecibidos.forEach(pedido => {
    let nodo = document.createElement("div");
    nodo. innerHTML = `<h3>El pedido del cliente ${pedido.nombre} ${pedido.apellido} es ${pedido.cantidadProducto} unidades de ${pedido.producto}.</h3>`
    document.getElementById("parrafoPedido").appendChild(nodo);
})

