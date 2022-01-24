var maximo =10000;
var billetes = 50;

function pin(){
    var pin = parseInt(prompt("Cual es tu pin?"));
    if(pin==1234){
        retiro()
    }else{
        alert("Tu NIP es invalido");
    }
}


function retiro(){
    var cajero = document.getElementById("retiro").value;
    if(cajero<=maximo && cajero%200==0){
        maximo = maximo-cajero;
        billetes= billetes -(cajero/200);
        var x = document.createElement("LI"); 
        var t = document.createTextNode("Retiro : " + cajero + " Saldo : " + maximo + " Billetes : " + billetes); 
        //<img src="/assets/images/billete200.png" width= 50px;>
        x.appendChild(t); 
        document.querySelector("#container ol").appendChild(x); 

        const image = document.createElement('img');
        image.src  = '/assets/images/billete200.png';
        document.querySelector('#container ol').appendChild(image);

    }
    else{
        alert("La cantidad excede el limite o no es multiplo de 200");
    }
}