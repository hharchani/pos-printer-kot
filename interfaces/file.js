
function File(path) {
  this.path = path;
}


File.prototype.execute = function(buffer, cb) {
  writeFile(this.path, buffer, function (err) {
    if (err) {
      if ("function" === typeof cb) {
        cb("Print failed: " + err);
      } else {
        console.error("Print failed", err);
      }
    } else {
      if ("function" === typeof cb) {
        cb( null );
      } else {
        console.log("Print done");
      }
    }
  });
};


File.prototype.isPrinterConnected = function(exists){
  if (this.path){
    fs.exists(this.path, function(ex){
      exists(ex);
    });
  }
};

module.exports = File;
