const CarritoCompra = require("./index");

describe("Una prueba de test que pasa siempre", () => {
    it("Este test debe pasar siempre", () => {
        expect(true).toBe(true);
    });
});

describe("La clase CarritoCompra", () => {
    const miCarrito = new CarritoCompra();

    it("Debe inicializar el carrito como un array vacio", () => {
        expect(miCarrito.carrito).toEqual([]);
    });

    it("Debe agregar el producto al carrito", () => {
        const producto1 = { nombre: 'Manzana', precio: 1 };
        miCarrito.agregarProducto(producto1);
        expect(miCarrito.carrito).toEqual([producto1]);
    });

    it("Debe calcular el total de la compra sumando los precios de todos los productos en el carrito", () => {
        const producto1 = { nombre: 'Manzana', precio: 100 };
        const producto2 = { nombre: 'Banana', precio: 2.5 };
        miCarrito.agregarProducto(producto1);
        miCarrito.agregarProducto(producto2);
        expect(miCarrito.calcularTotal()).toBe(103.5);
    });

    it("Debe aplicar un descuento", () => {
        const miCarrito = new CarritoCompra();
        const producto1 = { nombre: 'Manzana', precio: 100 };
        miCarrito.agregarProducto(producto1);
        const nuevoTotal = miCarrito.aplicarDescuento(10);
        expect(nuevoTotal).toBe(90);
    });

    it("Debe tener el metodo eliminarProducto", () => {
        expect(miCarrito.eliminarProducto()).toBeDefined();
    });

});