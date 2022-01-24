var carreritas = ["Lucia","Roberto","Maria","Jesus","Andrea","Jose"];
//Andrea adelanta a Maria

carreritas.forEach(element => {
    console.log(element)
});

carreritas.splice(2,5);

console.log("Andrea adelanta a Maria");

carreritas.push("Andrea","Maria","Jesus","Jose");

carreritas.forEach(element => {
    
    console.log(element)
});

//Jose es descalificado de la carrera
console.log("Jose es descalificado de la carrera");
carreritas.pop();
carreritas.forEach(element => {
    
    console.log(element)
});
carreritas.splice(1);
console.log("Nuevos corredores");

carreritas.push("Cristobal","Fernanda","Armando");
carreritas.push("Roberto","Andrea","Maria","Jesus");
carreritas.forEach(element => {
    
    console.log(element)
});
//Federico entra en primer lugar
console.log("Federico entra en primer puesto");
carreritas.unshift("Federico");

carreritas.forEach(function imprimir(value,index){
    index++;
    console.log(value,index);
})