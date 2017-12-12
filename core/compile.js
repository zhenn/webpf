var filetool = require('../lib/filetool');
var fs = require('fs');

var compile = function(sourcepath, outpath) {
    console.log(sourcepath);
    filetool.rmdirSync(sourcepath);
    outputJson(outpath);
};

var outputJson = function(outpath) {
    var datapath = outpath + '/data.js';
    var jsonpath = datapath.replace('.js', '.json');
    filetool.copyfile(datapath, jsonpath);

    var data = fs.readFileSync(jsonpath, 'utf8');
    data = data.replace('var data = ', '');

    filetool.writefile(jsonpath, data);
};

module.exports = compile;