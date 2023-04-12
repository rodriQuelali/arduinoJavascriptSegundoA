const express = require('express')
const app = express()
const io = require('socket.io')(app.listen(3000));
const {Board, Leds, Led } = require("johnny-five");
const board = new Board();


//codigo para poder utilizar archivos de CSS, JS, IMG, etc.
app.use(express.static('public'));
//------
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
  //res.send('hola segundo A')
})

//i se esta conectando con el puerto localhost:3000
app.listen(() => console.log(`Example app listening on port 3000`))


let arr = [0,1,2,3,4];
let exuLed ;

board.on("ready", ()=>{
  const leds = new Leds([13, 12, 11, 10, 9]);
  
    //led.blink(1000);
    
    io.on('connection',(socket)=>{
      
      
      //prendido
      socket.on('onLed', (data)=> {
        //led.on()
        arr.map(es => {
          if(es == data){
           leds[es].on();
          }else{
            console.log("no ay LED");
          }
        });
      });
      //apagado
      socket.on('offLed', (data)=> {
        //led.off()
        arr.map(es => {
          if(es == data){
           leds[es].off();
          }else{
            console.log("no ay LED");
          }
        });
      });
      //data
      socket.on('envio', (data)=> {
        console.log(data);
        led.blink(data)
      })
    })
})