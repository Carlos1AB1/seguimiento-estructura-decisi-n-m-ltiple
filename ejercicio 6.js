function realizarPedido() {
    // Definir los restaurantes y sus menús
    var restaurantes = {
        "hamburguesas": {
            "Hamburguesa simple": 25000,
            "Hamburguesa con queso": 28000,
            "Hamburguesa doble": 32000
        },
        "pizzeria": {
            "Pizza personal": 20000,
            "Pizza mediana": 45000,
            "Pizza familiar": 85000
        },
        "comida china": {
            "Fideos con pollo": 18000,
            "Arroz tres delicias": 21000,
            "Rollitos primavera": 15000
        }
    };
    
    // Pedir al usuario que seleccione un restaurante
    var restaurante = prompt("Seleccione un restaurante (Hamburguesas, Pizzería, Comida China):").toLowerCase();
    
    // Validar restaurante
    if (!(restaurante in restaurantes)) {
        alert("Restaurante inválido.");
        return;
    }
    
    // Mostrar menú del restaurante seleccionado
    var menu = restaurantes[restaurante];
    var mensajeMenu = "Menú disponible:\n";
    for (var item in menu) {
        mensajeMenu += "- " + item + ": $" + menu[item] + "\n";
    }
    alert(mensajeMenu);
    
    // Pedir al usuario las opciones de su pedido
    var pedido = {};
    var totalPedido = 0;
    for (var item in menu) {
        var cantidad = parseInt(prompt("Ingrese la cantidad de '" + item + "' que desea:"));
        if (!isNaN(cantidad) && cantidad > 0) {
            pedido[item] = cantidad;
            totalPedido += menu[item] * cantidad;
        }
    }
    
    // Validar el monto mínimo de compra
    if (totalPedido < 23000) {
        alert("El monto mínimo de compra no se ha alcanzado.");
        return;
    }
    
    // Calcular el costo total del pedido incluyendo el costo de envío
    var costoEnvio = 5000;
    totalPedido += costoEnvio;
    
    // Mostrar resumen del pedido
    var mensajeResumen = "Resumen del pedido:\n";
    for (var item in pedido) {
        mensajeResumen += "- " + item + ": $" + menu[item] * pedido[item] + "\n";
    }
    mensajeResumen += "Costo de envío: $" + costoEnvio + "\n";
    mensajeResumen += "Total a pagar: $" + totalPedido;
    alert(mensajeResumen);
}

// Ejecutar la función para realizar el pedido
realizarPedido();
