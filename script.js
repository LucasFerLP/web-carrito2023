
class Producto {
    constructor(nombre, precio, color, stock, fechaIngreso) {
        this.nombre = nombre;
        this.precio = precio;
        this.color = color;
        this.stock = stock;
        this.fechaIngreso = fechaIngreso;
    }

    returnDatos() {
        return `
        ${this.nombre}
        ${this.precio}
        ${this.color}
        ${this.stock}
        ${this.fechaIngreso}
        `;
    }
}

const producto1 = new Producto("Escritorio", 5000, "blanco", 110, "01/10/2023");
const producto2 = new Producto("Silla Ergonómica", 17500, "negra", 50, "28/09/2023");
const producto3 = new Producto("Cajonera", 3500, "blanco", 60, "30/09/2023");

const productos = [producto1, producto2, producto3];

alert("Haz clic en Aceptar para ver los productos disponibles:");

productos.forEach((producto, indice) => {
    alert(`
    Nombre: ${producto.nombre}
    Precio: ${producto.precio}
    Color: ${producto.color}
    Stock: ${producto.stock}
    Fecha de Ingreso: ${producto.fechaIngreso}
    `);
});

const contactos = [];

alert("Completa el siguiente formulario para contactarnos:");

const nombre = prompt("Ingresa tu nombre:");
const mail = prompt("Ingresa tu correo electrónico:");
const consulta = prompt("Ingresa tu consulta:");

const contacto = new Contacto(nombre, mail, consulta);


alert("Gracias por contactarnos. Tu consulta ha sido registrada.");

