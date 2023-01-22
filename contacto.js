//Código para Page: CONTACTO

const formulario = document.querySelector("#altaCliente");

class Cliente {
    constructor(nombre, apellido, email, telefono){
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.telefono = telefono;
    }
}

let parrafoCliente = document.querySelector("#parrafoCliente");
const clientesAgregados = JSON.parse(localStorage.getItem("clientes")) || [];


const crearCliente = () => {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let email = document.getElementById("email").value;
    let telefono = document.getElementById("telefono").value;

    let clienteNuevo = new Cliente(nombre, apellido, email, telefono)
    
    clientesAgregados.push(clienteNuevo);
    localStorage.setItem("clientes", JSON.stringify(clientesAgregados));
    
    return clientesAgregados;
}

const registroCliente = document.getElementById("registro");

registroCliente.addEventListener("click", registrarCliente);

function registrarCliente (nombre, apellido, email, telefono) {
    crearCliente();
    let clienteNuevo = `
                        <div>
                            <h3>Resumen de sus datos</h3>
                            <h4>Nombre y Apellido: ${nombre} ${apellido}</h4>
                            <h4>Email: ${email}</h4>
                            <h4>Telefono: ${telefono}</h4>
                        </div>
                    `
                    
    parrafoCliente.innerHTML = clienteNuevo;
    
    Swal.fire({
        icon: 'success',
        title: 'Bienvenido!',
        text: 'Ya sos parte de la comunidad de Central Park Pizza',
        footer: 'Pronto comenzaras a recibir novedades de tu pizza favorita.'
    })
}