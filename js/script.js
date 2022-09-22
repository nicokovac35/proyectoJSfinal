const contenidoProductos = document.getElementById('divProductos')
const inputProducto = document.getElementById('inputProducto')


const cargarProductos = async () =>{ //funcion asincronica con retorno al contenido fetch 
    const response = await fetch('./json/productos.json')
    const productos = await response.json()
    return productos
}
const traerProductos = async () =>{ //funcion asincronica con retorno al contenido fetch 
    const response = await fetch('./json/productos.json')
    const productos = await response.json()
    return productos
}





// fetch local a api interna conectada a productos.json 
fetch ('./json/productos.json')
.then (response => response.json())
.then(productos => {
    productos.forEach((producto,id) => {
        divProductos.innerHTML +=`
        <div class="card" id="producto${id}" style="width: 18rem;">
        <img src="./img/${producto.img}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5  class="card-title"> ${producto.nombre}</h5>
        <p class="card-text">Precio: ${producto.precio}</p>
        <button class="btn btn-dark">Ver mas</button>
        <button class="btn btn-dark">Agregar al Carrito</button>
        </div>
        </div> `
})
});

inputProducto.addEventListener('change',()=>{
    let res = inputProducto.value

    traerProductos().then(productos =>{
        const productosFiltrados = productos.filter(producto => producto,nombre.toLowerCase().includes(res.toLowerCase()))
        divProductos.innerHTML = ""    
        productosFiltrados.forEach((producto, id) => {

        })   
    })    
})

function guardarLocalstorage(){

}



