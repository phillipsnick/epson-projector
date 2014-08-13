var SerialPort = require("serialport").SerialPort

/**
 * Create the connection to the projector
 *
 * @param  object  options
 */
function projector(options) {
  this.options = options;

  if (typeof options.portt === "undefined") {
    throw "Please define a port such as /dev/ttyS0";
  }

  this.session = new SerialPort(options.port, {
    baudrate: 9600
  });
}
