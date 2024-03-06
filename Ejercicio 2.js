const pagoCompleto = 7000000
let pagototal

let seleccionarOpcion = parseInt(prompt("Seleccione la opcion de pago: \n1. Pago Completo \n 2. Pago 2 cuotas \n 3. Pago a 3 cuotas"))

if (seleccionarOpcion == 1) {
    pagototal = pagoCompleto - (pagoCompleto * 0.05)
    alert("su pago comppleto es "+ pagototal)
}else if(seleccionarOpcion == 2){
   let cuaota2 = pagoCompleto / 2
   let intereses = cuaota2 * 0.02
   pagototal = cuaota2 + intereses
   alert("la primera cuota es " + pagototal + " de esta cuota los interes son " + intereses )
}

else if (seleccionarOpcion == 3) {
    let cuaota3 = pagoCompleto / 3
   let intereses = cuaota3 * 0.02
   pagototal = cuaota3 + intereses
   alert("la primera cuota es " +  Math.trunc(pagototal) + " de esta cuota los interes son " +  Math.trunc(intereses) )
}

else{
    alert("opcion invalida")
}

