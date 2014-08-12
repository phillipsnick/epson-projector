# Epson Projector

Module for controlling Epson projectors via RS232


## Installation

```
npm install epson-projector --save
```


## Usage

```javascript
var epson = require('epson-projector');

var projector = new epson.projector({
  port: '/dev/ttyUSB0'
});
```


## Notes

All RS232 commands used in this module can be found in the [Epson User Guide](https://files.support.epson.com/Epson_Handbook/assets/content/proddetails/download/pdf/ESCVP21_e_P.pdf)


## Licence

[The MIT License (MIT)](https://github.com/phillipsnick/epson-projector/blob/master/LICENCE)
