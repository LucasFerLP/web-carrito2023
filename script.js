//Defino la clase
class Producto {
    constructor(nombre, precio, color, stock, fechaIngreso){
    this.nombre = nombre;
    this.precio = precio;
    this.color = color;
    this.stock = stock;
    this.fechaIngreso = fechaIngreso;
}
//constructor con los 5 parametros
 

returnDatos(){
    return `
    ${this.nombre}
    ${this.precio}
    ${this.color}
    ${this.stock}
    ${this.fechaIngreso}
    `
}
}

//Creo los objetos con la clase producto
const producto1 = new Producto ("Escritorio", 5000, "blanco", 110, "01/10/2023")
//console.log (producto1.returnDatos())

const producto2 = new Producto ("Silla Ergonómica", 17500,"negra", 50, "28/09/2023")
//console.log (producto2.returnDatos())

const producto3 = new Producto ("Cajonera", 3500, "blanco", 60, "30/09/2023")
//console.log (producto3.returnDatos())

//Creo el array con los productos recien creados
let productos = [producto1,producto2, producto3]

let boton= document.getElementById('boton1')
let divProductos= document.getElementById ("productos")

boton.addEventListener('click', () => {
    //divProductos.innerHTML = ''; 
    productos.forEach((producto, indice) => {
        // Genera el código HTML para la tarjeta del producto
        const productoHTML = `
            <div class="card" id="producto${indice + 1}" style="width: 22rem;">
                <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text">Precio: ${producto.precio}</p>
                    <p class="card-text">Color: ${producto.color}</p>
                    <button class="btn btn-warning" onclick="agregarAlCarrito(${indice})">Agregar al carrito</button>
                </div>
            </div>
        `;

        // Agrega la tarjeta del producto al contenido de 'divProductos'
        divProductos.innerHTML += productoHTML;
    });
});

// Función para agregar un producto al carrito
function agregarAlCarrito(indice) {
    // Aquí puedes implementar la lógica para agregar el producto al carrito.
    // Puedes acceder al producto específico en 'productos[indice]'.
    alert(`El producto "${productos[indice].nombre}" se ha agregado al carrito.`);
}
class Contacto{
    constructor(nombre, mail, consulta){
        this.nombre= nombre;
        this.mail=mail;
        this.consulta=consulta
    }

    returnDatos(){
        return`
        ${this.nombre}
        ${this.mail}
        ${this.consulta}
        `
    }
}
let contactos= []
let formulario= document.getElementById ('formContacto')

formulario.addEventListener('submit', (e)=>{
    e.preventDefault()

   let nombre= document.getElementById('nombre').value
    let mail = document.getElementById('mail').value 
    let consulta = document.getElementById('consulta').value 

    console.log(`nombre: ${nombre}mail: ${mail} consulta: ${consulta}`)
    let datForm = new FormData (e.target)
    let contacto= new Contacto(datForm.get("nombre"), datForm.get("mail"), datForm.get("consulta"))
    contactos.push (contacto)

    localStorage.setItem('contactos', JSON.stringify(contactos))

    formulario.reset()
})




