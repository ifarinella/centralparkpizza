//CARRITO DE COMPRAS

const cart = document.getElementById("cart");
const cartModalOverlay = document.querySelector(".cart-modal-overlay");


cart.addEventListener("click", () => {
    cartModalOverlay.classList.add("open");
})



const closeBtn = document.getElementById("close-btn");

closeBtn.addEventListener("click", () => {
    cartModalOverlay.classList.remove("open");
})


const addToCart = document.getElementsByClassName("add-to-cart");
const productRow = document.getElementsByClassName("product-row");

for (let i = 0; i < addToCart.length; i++) {
    button = addToCart[i];
    button.addEventListener('click', agregarCarrito)
}

function agregarCarrito (e) {
    button = e.target;
    let cartItem = button.parentElement;
    let prodID = cartItem.getAttribute("id");
    let producto = cartItem.querySelector("h2").innerText;
    let price = cartItem.querySelector(".product-price").innerText;
    let imageSrc = cartItem.querySelector('.product-image').src;
    agregarProducto (prodID, producto, price, imageSrc);
}
    
function agregarProducto (prodID, producto, price, imageSrc) {
    let productRow = document.createElement('div');
    let productRows = document.getElementsByClassName('product-rows')[0];
    let productArray = document.getElementsByClassName('product-row');
    
    for (let i = 0; i < productArray.length; i++){
        if (productArray[i].getAttribute("id") == prodID){
        alert ('Este producto ya existe en el carrito')
        return;
    }
    }
    let cartRowItems = `
                        <div class="product-row" id="${prodID}">
                            <img class="cart-image" src="${imageSrc}" alt="">
                            <h3>${producto}</h3>
                            <span class ="cart-price">${price}</span>
                            <input class="product-quantity" type="number" value="1">
                            <button class="remove-btn">Remove</button>
                        </div>
                    `
    productRow.innerHTML = cartRowItems;
    productRows.append(productRow);
    productRow.getElementsByClassName('remove-btn')[0].addEventListener('click', removerElemento)
    productRow.getElementsByClassName('product-quantity')[0].addEventListener('change', cambiarCantidad)
    actualizarPrecio();
}

function removerElemento(e) {
    btnClicked = e.target
    btnClicked.parentElement.parentElement.remove()
    actualizarPrecio()
}

function cambiarCantidad(e) {
    let input = e.target
    if (isNaN(input.value) || input.value <= 0){
    input.value = 1
    }
    actualizarPrecio()
}


function actualizarPrecio() {
    let total = 0;
    for (let i = 0; i < productRow.length; i++) {
        cartRow = productRow[i]
        let priceElement = cartRow.querySelector('.cart-price');
        let quantityElement = cartRow.getElementsByClassName('product-quantity')[0]
        let price = parseFloat(priceElement.innerText.replace('$', ''))
        let quantity = quantityElement.value
        console.log(price)
        console.log(quantity)
        total += price * quantity;
    
    }
    document.getElementsByClassName('total-price')[0].innerText =  '$' + total

    document.getElementsByClassName('cart-quantity')[0].textContent = productRow.length
}


const purchaseBtn = document.querySelector('.purchase-btn');
const closeCartModal = document.querySelector('.cart-modal');

purchaseBtn.addEventListener('click', finalizarCompra)

function finalizarCompra () {
    Swal.fire({
        icon: 'success',
        title: 'Gracias!',
        text: 'Tu pedido fue realizado con éxito',
        footer: 'Que disfrutes los productos de Central Park Pizza'
    });
    cartModalOverlay.style.transform= 'translateY(-200%)'
    const cartItems = document.getElementsByClassName('product-rows')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)

    }
    actualizarPrecio()
}



