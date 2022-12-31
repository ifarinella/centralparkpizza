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
    
    clientesAgregados.push(clienteNuevo);
    localStorage.setItem("clientes", JSON.stringify(clientesAgregados));
    
    return clientesAgregados;
}

formulario.onsubmit = (e) => {
    e.preventDefault();
    crearCliente();
    mostrarClientes()
}

const mostrarClientes = ()=> {
    const clientesGuardados = JSON.parse(localStorage.getItem("clientes"));

    clientesGuardados.forEach(cliente => {
        parrafoCliente.innerHTML += `
                        <div>
                            <h3>Nombre del cliente: ${cliente.nombre} ${cliente.apellido}</h3>
                            <h4>Año de nacimiento: ${cliente.añoNacimiento}</h4>
                            <p>Teléfono: ${cliente.telefono}</p>
                        </div>
                        `
    })
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

