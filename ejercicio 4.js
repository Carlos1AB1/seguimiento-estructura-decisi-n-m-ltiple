function cotizarEscobas() {
    // Pedir al usuario el tipo de escoba
    var tipoEscoba = prompt("Ingrese el tipo de escoba (Escoba dura, Escoba suave o Cepillo):").toLowerCase();
    
    // Pedir al usuario el tipo de material
    var tipoMaterial = prompt("Ingrese el tipo de material (Cerdas sintéticas o Cerdas naturales):").toLowerCase();
    
    // Pedir al usuario las opciones adicionales
    var mangoLargo = false;
    var ganchoPunta = false;
    var opcionesAdicionales = prompt("¿Desea agregar opciones adicionales? (Mango largo, Gancho en punta o Ninguna)").toLowerCase();
    if (opcionesAdicionales === "mango largo") {
        mangoLargo = true;
    } else if (opcionesAdicionales === "gancho en punta") {
        ganchoPunta = true;
    } else if (opcionesAdicionales !== "ninguna") {
        alert("Opción adicional inválida.");
        return;
    }
    
    // Pedir al usuario la cantidad de escobas a cotizar
    var cantidadEscobas = parseInt(prompt("Ingrese la cantidad de escobas a cotizar (entre 3 y 30):"));
    
    // Validar cantidad de escobas
    if (isNaN(cantidadEscobas) || cantidadEscobas < 3 || cantidadEscobas > 30) {
        alert("La cantidad de escobas ingresada no es válida.");
        return;
    }
    
    // Calcular precio base según tipo de escoba y material
    var precioBase;
    switch(tipoEscoba) {
        case "escoba dura":
            precioBase = tipoMaterial === "cerdas sintéticas" ? 8000 : 10000;
            break;
        case "escoba suave":
            precioBase = tipoMaterial === "cerdas sintéticas" ? 8000 : 10000;
            break;
        case "cepillo":
            precioBase = tipoMaterial === "cerdas sintéticas" ? 12000 : 15000;
            break;
        default:
            alert("Tipo de escoba inválido.");
            return;
    }
    
    // Calcular precio adicional por opciones
    var precioAdicional = 0;
    if (mangoLargo) {
        precioAdicional += 2000;
    }
    if (ganchoPunta) {
        precioAdicional += 500;
    }
    
    // Calcular precio total
    var precioTotal = (precioBase + precioAdicional) * cantidadEscobas;
    
    // Mostrar resultado
    alert("El precio total de la cotización es: $" + precioTotal);
}

// Ejecutar la función para cotizar escobas
cotizarEscobas();
