let clasicos = 500000;
let running = 800000;
let basketball = 1000000;

let talla;
let cantidad;
let descuento;
let pagototal;
let total_Sin_Descuento;

let seleccionarOpcion = parseInt(prompt("Seleccione modelo de tenis: \n1. Clasicos \n2. Running \n3. Basketball"));

if (seleccionarOpcion == 1) {
    talla = parseInt(prompt("Ingrese su talla: (disponibles desde la 35 a 44)"));
    if (talla >= 35 && talla <= 44) {
    } else
    alert("Talla inválida. Debe estar entre 35 y 44."); {
        cantidad = parseInt(prompt("Ingrese numero de pares: (disponibles desde 1 a 5)"));
        if (cantidad >= 1 && cantidad <= 5) {
            total_Sin_Descuento = cantidad * clasicos;
            if (cantidad >= 3) {
                descuento = total_Sin_Descuento * 0.10;
                pagototal = total_Sin_Descuento - descuento;
            } else {
                pagototal = total_Sin_Descuento;
            }
            alert("El precio de sus tennis es de $" + pagototal);
        } else {
            alert("La cantidad mínima que se puede comprar es de 1 y máximo 5 pares");
        }
    }
} else {
    alert("Modelo inválido. Por favor, seleccione un modelo válido.");
}
