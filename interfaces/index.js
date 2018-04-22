import Android from './android';
const parseNet = /^tcp:\/\/([^\/:]+)(?::(\d+))?\/?$/i;
const parsePrinter = /^printer:([^\/]+)(?:\/([\w-]*))?$/i;
const parseAndroid = /^usb:(.*)$/i;

function getInterface(uri, netModule) {
  if (typeof uri === "object") {
    return uri;
  }
  
  const android = parseAndroid.exec(uri);
  if (android) {
    return new Android(android[1]);
  }

  const net = parseNet.exec(uri);
  if (net) {
    const Mod = require('./net');
    return new Mod(net[1], net[2], netModule);
  }

  const printer = parsePrinter.exec(uri);
  if (printer) {
    const Mod = require('./printer');
    return new Mod(printer[1], printer[2]);
  }

  const Mod = require('./file');
  return new Mod(uri);
}

module.exports = getInterface;
