# node-max7219-led-matrix
Node max7216 led matrix interfacing for raspberry pi

## Install

``npm install node-max7219-led-matrix``

## Prerequisites
You'll need the SPI device to be enabled. [Check this guide if it's not](https://learn.sparkfun.com/tutorials/raspberry-pi-spi-and-i2c-tutorial#spi-on-pi)  

The devices are successfully installed in /dev:
```shell
$ ls -l /dev/spi*
crw-rw---- 1 root spi 153, 0 Sep 20 01:17 /dev/spidev0.0
crw-rw---- 1 root spi 153, 1 Sep 20 01:17 /dev/spidev0.1
```


## Usage

```javascript
var max7219LedMatrix = require('node-max7219-led-matrix');

var max7219 = new max7219LedMatrix.max7219("/dev/spidev0.0");
max7219.letter('A');
```


* Constructor __**`max7219LedMatrix.max7219(device)`**__

Initializes the instance. The `device` argument is a string specifying the SPI device on which the controller is wired. For example, `"/dev/spidev0.0"`.

* __**`setBrightness(intensity)`**__

Set the brightness of the led. `intensity` is from 0 to 15.

* __**`clear()`**__

Clear the device display.

* __**`letter(letter, font)`**__

Display a `letter` on the display with the specific `font` (optional).
Fonts are: `CP437_FONT` (default), `SINCLAIR_FONT`, `LCD_FONT`, `UKR_FONT` and `TINY_FONT`.

* __**`showMessage(text, font)`**__

Display the `text` on the device. One letter at a time.

## Example

See in example folder.

## Thanks

Thanks to [rm-hull](https://max7219.readthedocs.io) python project.