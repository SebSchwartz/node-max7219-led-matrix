var max7219LedMatrix = require('../index.js');


var max7219 = new max7219LedMatrix.max7219("/dev/spidev0.0");

max7219.letter('A');

for(var i = 0; i<15; i++){
    max7219.setBrightness(i);
   sleep(1000);
}

max7219.setBrightness(7);

max7219.clear();

max7219.letter('A',max7219LedMatrix.TINY_FONT);
sleep(1000);
max7219.letter('A',max7219LedMatrix.LCD_FONT);
sleep(1000);
max7219.letter('A',max7219LedMatrix.SINCLAIR_FONT);



function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}