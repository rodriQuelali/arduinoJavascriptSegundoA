//libreria de socket.io por el cliente
let socket = io();

let on = document.getElementById("onLed");
let on12 = document.getElementById("onLed12");
let on11 = document.getElementById("onLed11");
let on10 = document.getElementById("onLed10");
let on9 = document.getElementById("onLed9");

let off = document.getElementById("offLed");
let off12 = document.getElementById("offLed12");
let off11 = document.getElementById("offLed11");
let off10 = document.getElementById("offLed10");
let off9 = document.getElementById("offLed9");

let envi = document.getElementById("enviD");
let tiempoEspera;

on.onclick = ()=> socket.emit('onLed', 0);
on12.onclick = ()=> socket.emit('onLed', 1);
on11.onclick = ()=> socket.emit('onLed', 2);
on10.onclick = ()=> socket.emit('onLed', 3);
on9.onclick = ()=> socket.emit('onLed', 4);


off.onclick = ()=> socket.emit('offLed', 0);
off12.onclick = ()=> socket.emit('offLed', 1);
off11.onclick = ()=> socket.emit('offLed', 2);
off10.onclick = ()=> socket.emit('offLed', 3);
off9.onclick = ()=> socket.emit('offLed', 4);

envi.onclick = ()=> socket.emit('envio', document.getElementById("txtData").value);


let btnE =document.getElementById("enviE");
btnE.onclick = ()=>{
    tiempoEspera = document.getElementById("txtEspera").value;
    console.log(tiempoEspera);
    setTimeout(() => {
        socket.emit('onLed');
        console.log("prender led En espera");
    }, tiempoEspera);
}


console.log("esperando");
