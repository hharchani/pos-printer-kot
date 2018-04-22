import { NativeModules } from 'react-native';

const { RNPosPrinter } = NativeModules;

export default class Android {
  execute(buffer, cb) {
    const promise = RNPosPrinter.execute([...buffer]);
    if (typeof cb === "function") {
      promise.then(() => {
        cb(null);
      }).catch((e) => {
        cb(e);
      });
    }
  }

  isPrinterConnected(cb) {
    //TODO:
    cb(true);
  };
}
