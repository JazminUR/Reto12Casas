let payasos = 112.0;
let muñeca = 75.0;

let venta1 = parseFloat(prompt("Cuantos payasos compraras?"));
let venta2 = parseFloat(prompt("Cuantas muñecas compraras?"));



let total = (venta1*payasos) + (venta2*muñeca);

let paquetes = (total/1000);
console.log(paquetes);
let res = Math.ceil(paquetes);

alert("El peso total de los payasos es de " + (venta1*payasos) + " gr.");
alert("El peso total de las muñecas es de " + (venta2*muñeca) + " gr.");
alert("Se necesitaran " + res + " paquete(s).");