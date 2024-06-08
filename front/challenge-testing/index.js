class CarritoCompra {

    //constructor(): Inicializa el carrito como un array vacío.

    //agregarProducto(producto): Recibe un objeto representando un producto y lo agrega al carrito.

    //calcularTotal(): Calcula el total de la compra sumando los precios de todos los productos en el carrito.

    //aplicarDescuento(porcentaje): Aplica un descuento al total de la compra según el porcentaje especificado

    constructor() {
        this.carrito = [];
    }

    agregarProducto(producto) {
        this.carrito.push(producto);
    }

    calcularTotal() {
        return this.carrito.reduce((total, producto) => total + producto.precio, 0);
    }

    aplicarDescuento(porcentaje) {
        const descuento = 1 - (porcentaje / 100);
        this.carrito = this.carrito.map(producto => {
            return {
                ...producto,
                precio: producto.precio * descuento
            };
        });
        return this.calcularTotal();
    }

    eliminarProducto(nombre) {
        this.carrito = this.carrito.filter(producto => producto.nombre !== nombre);
        return this.carrito;
    }
    

}

module.exports = CarritoCompra;