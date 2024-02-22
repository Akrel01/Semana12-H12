
/*Ocultar el carrito de compras*/
const btnCart = document.querySelector('.carrito-container');
const containerProducts = document.querySelector('.container-ShoppingBasket')
const btnClose = document.querySelector('.icon-close')

btnCart.addEventListener('click', ()=>{
    containerProducts.classList.toggle('hiddenBasket')
});


//Muestra los cursos del carrito


//=========================


const rowProduct = document.querySelector('#shopBasket');


//===lISTA DE LOS CONTENEDORES DE PRODUCTO===
const productList = document.querySelector('#shop');

//=VARIABLES===

let allproducts = [] 

const valorTotal = document.querySelector('.total');

const conteoProductos = document.querySelector('#contadorDeProductors');




productList.addEventListener('click', e =>{
    
        if (e.target.classList.contains('btn-item-add')) {


               const product = e.target.parentElement

               
                const infoProduct = {
                    quantity:1,
                    title:product.querySelector('.title-item').textContent,
                    price:product.querySelector('.price-item').textContent,
                }
                
                

                const exist = allproducts.some(product => product.title === infoProduct.title)

                if (exist) {
                    const products = allproducts.map(product =>{
                        if (product.title === infoProduct.title) {
                            product.quantity++;
                            return product
                        }else{
                            return product
                        }
                    })
                    allproducts = [...products]
                } else{
                    allproducts = [...allproducts,infoProduct];
                }
                
                
                //savelocal
                
                

                showHtml()
        }
        
});



rowProduct.addEventListener('click', (e) => {

    if(e.target.classList.contains('icon-close')){
        const product = e.target.parentElement;
        const title = product.querySelector('#tituloCarrito').textContent;

        allproducts = allproducts.filter(
            product => product.title !== title
        );
            showHtml();
            
    }
});




//Mostrar HTML

const showHtml = () => {

    if(!allproducts.length){
        containerProducts.innerHTML = `
        <p>El carrito esta vacio</p>
        `
    }


    //limpiar

    rowProduct.innerHTML = '';

    let total = 0;
    let totalDeProductos = 0;
    
    allproducts.forEach(product => {
        
        const containerProducts = document.createElement('div')
    containerProducts.classList.add('basketInfo')


    containerProducts.innerHTML = `
    
                    <p>${product.quantity}</p>
					<p id="tituloCarrito">${product.title}</p>
					<label class="price">${product.price}</label>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="icon-close"
					>
					<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
					</svg>
    
    `

        rowProduct.appendChild(containerProducts);

        

        total = total + parseInt(product.quantity * product.price.slice(1));
        totalDeProductos = totalDeProductos + product.quantity;
        
    });

    valorTotal.innerText = `EL total es: $${total}`;
    conteoProductos.innerText = totalDeProductos;

}


//Set item
    let saveLocal = () => {
        localStorage.setItem("carrito", JSON.stringify(allproducts))
    }
   

//Get item

