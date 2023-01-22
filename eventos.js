//Código para page EVENTOS

const boton = document.getElementById("empresas");
const caja = document.querySelector("#fetch");


boton.onclick = () => {
    obtenerEmpresas();
}

const obtenerEmpresas = async () => {
    try {
        let respuesta = await fetch("https://api.generadordni.es/v2/profiles/company");
        let resultado = await respuesta.json();
        resultado.forEach(empresa =>{
            caja.innerHTML += `
                <div class="empresa-nueva">
                    <h3>${empresa.name}</h3>
                    <p>Teléfono: ${empresa.phonenumber}</p>
                    <span>Email: ${empresa.email}</span>
                </div>
            `
    })
    } catch (error){
        Swal.fire({
            icon: 'error',
            title: 'Lo sentimos..',
            text: 'Algo no está funcionando correctamente',
            footer: 'Ya mismo nos ponemos a trabajar para solucionarlo'
        })
    }
}