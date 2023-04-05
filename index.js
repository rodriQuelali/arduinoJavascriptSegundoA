const express = require('express')
const app = express()
const io = require('socket.io')(app.listen(3000));
const five = require("johnny-five");
const board = new five.Board();


//codigo para poder utilizar archivos de CSS, JS, IMG, etc.
app.use(express.static('public'));
//------
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
  //res.send('hola segundo A')
})

//i se esta conectando con el puerto localhost:3000
app.listen(() => console.log(`Example app listening on port 3000`))




board.on("ready", ()=>{
    let led = new five.Led(13);
    let led12 = new five.Led(12);
    //led.blink(1000);

    io.on('connection',(socket)=>{
      //prendido
      socket.on('onLed', ()=> led.on());
      //apagado
      socket.on('offLed', ()=> led.off());
      //data
      socket.on('envio', (data)=> {
        console.log(data);
        led.blink(data)
      })
    })
})