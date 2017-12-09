/**
 * webp图片分解成多张png图片
 * @author zhenn
 */

var path = require('path');
var filetool = require('../lib/filetool');
var process = require('child_process');
var colors = require('colors');
var fs = require('fs');

var source = {
    split: function(_path, callback) {
        var splitwebPath = this.copyTarget(_path);
        var sourceBaseNameExt = path.basename(_path);
        var sourceBaseName = path.basename(_path, '.webp');
        
        var childProcess = process.exec('cd ' + splitwebPath + ' && sh extract.sh', function() {
            fs.unlinkSync(splitwebPath + '/' + sourceBaseNameExt);  // 删除临时webp文件
            filetool.copydir(splitwebPath + '/' + sourceBaseName, _path.replace(path.extname(_path), ''));
            filetool.rmdirSync(splitwebPath + '/' + sourceBaseName);
            var tempPath = _path.replace(path.extname(_path), '');
            filetool.copydir(tempPath + '/png', tempPath);
            filetool.rmdirSync(tempPath + '/png');
            filetool.rmdirSync(tempPath + '/webp');

            if (typeof callback == 'function') {
                callback(tempPath);
            }
        });
        childProcess.stdout.on('data', function(data) {
            console.log(data.gray);
        });
        childProcess.stderr.on('data', function(data) {
            console.log('stdout: ' + data.gray);
        });
    },

    copyTarget: function(_path) {
        var splitwebPath = this.getMapPath(_path);
        filetool.copyfile(_path, splitwebPath + '/' + path.basename(_path));
        return splitwebPath;
    },

    getMapPath(_path) {
        var items = __dirname.split('/');
        items.splice(items.length - 1, 1, 'splitweb');
        var splitwebPath = items.join('/');

        return splitwebPath;
    }

};

module.exports = source;