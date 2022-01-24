var numMagico = parseInt(Math.random()*20);
alert (numMagico)
var continuar = true
while (continuar == true){
    var respueta = parseInt(prompt("Adivina el número entre el 0 y el 20"))
    if(numMagico == respueta){
        alert("Adivinaste, el número mágico es "+numMagico);
        continuar = false
    }
    else if(respueta > numMagico && respueta >= 0){
        continuar = confirm("El número que ingresaste es mayor al número mágico, intenta de nuevo ¿Quieres seguir adivinando? Presiona Ok o presiona cancelar para detenerte");
    }
    else if(respueta < numMagico && respueta <= 20){
        continuar = confirm("El número que ingresaste es menor al número mágico, intenta de nuevo ¿Quieres seguir adivinando? Presiona Ok o presiona cancelar para detenerte");
    }
    else {
        alert ("No estoy seguro de que quieres decir")
        continuar = false
    }

}