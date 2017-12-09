/* a buffer helper */
module.exports = function Bupper() {
  var chunks = [];
  var size = 0;

  var bupper = function () {
    return this;
  }.call({});

  bupper.add = function(chunk) {
    chunks.push(chunk);
    size += chunk.length;
  }

  bupper.combine = function() {
    var buff;

    switch (chunks.length) {
      case 0:
        buff = new Buffer(0);
      break;

      case 1:
        buff = chunks[0];
      break;

      default:
        buff = new Buffer(size);

        for (var i = 0, pos = 0, l = chunks.length; i < l; i++) {
          var chunk = chunks[i];

          chunk.copy(buff, pos);
          pos += chunk.length;
        }

      break;
    }

    this.clean();
    return buff;
  }

  bupper.clean = function () {
    chunks = [];
    size = 0;
  }

  return bupper;
}
