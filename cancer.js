var grados = parseInt(prompt("Ingresa los grados: "));

alert("Grados Celsius: " + grados);
farenheit(grados);
kelvin(grados);

function farenheit(g){
    alert("Grados Farenheit: " + (g * 1.8) + 32);
}

function kelvin(g){
    alert("Grados Kelvin: " + (g + 273.15))
}

celsius(grados);
farenheit(grados);
kelvin(grados);