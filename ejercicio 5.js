function gestionarPrestamos() {
    // Definir tarifas de préstamo por día para cada categoría de libro
    var tarifas = {
        "bestsellers": 500,
        "literatura": 100,
        "académicos": 0
    };

    // Pedir al usuario los detalles del préstamo
    var librosSolicitados = [];
    for (var i = 0; i < 5; i++) {
        var tituloLibro = prompt("Ingrese el título del libro #" + (i + 1) + ":");
        var categoriaLibro = prompt("Ingrese la categoría del libro #" + (i + 1) + " (Bestsellers, Literatura, Académicos):").toLowerCase();
        var diasPrestamo = parseInt(prompt("Ingrese la cantidad de días de préstamo del libro #" + (i + 1) + " (1 a 30 días):"));

        // Validar la cantidad de días de préstamo
        if (isNaN(diasPrestamo) || diasPrestamo < 1 || diasPrestamo > 30) {
            alert("La cantidad de días de préstamo ingresada no es válida.");
            return;
        }

        librosSolicitados.push({ titulo: tituloLibro, categoria: categoriaLibro, dias: diasPrestamo });
    }

    // Calcular el costo total del préstamo
    var costoTotal = 0;
    for (var i = 0; i < librosSolicitados.length; i++) {
        var tarifa = tarifas[librosSolicitados[i].categoria];
        var dias = librosSolicitados[i].dias;

        // Aplicar descuento del 10% para préstamos mayores a 10 días
        if (dias > 10) {
            costoTotal += (tarifa * dias) * 0.9;
        } else {
            costoTotal += tarifa * dias;
        }
    }

    // Mostrar el costo total del préstamo
    alert("El costo total del préstamo es: $" + costoTotal.toFixed(2));
}

// Ejecutar la función para gestionar préstamos
gestionarPrestamos();
