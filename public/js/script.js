//libreria de socket.io por el cliente
let socket = io();

let on = document.getElementById("onLed");
let off = document.getElementById("offLed");
let envi = document.getElementById("enviD");
on.onclick = ()=>{
    
    console.log("hola Led Prendido");
    socket.emit('onLed');
}

off.onclick = ()=> socket.emit('offLed');
envi.onclick = ()=> socket.emit('envio', document.getElementById("txtData").value);



