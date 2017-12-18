/**
 * 多张原图合成雪碧图
 * @author zhenn
 */

var _process = require('child_process');
var colors = require('colors');

var sprite = {
    build: function(sourceDir, callback) {
        var self = this;
        console.log(('生成合成图的图片源文件夹: ' + sourceDir).red);
        // 使用gka构建雪碧图
        // gka [图片源目录] -t canvas -m -o [目标目录]
        var pathItems = sourceDir.split('/');
        var lastItem = pathItems[pathItems.length - 1];
        lastItem += '-canvas';
        pathItems.splice(pathItems.length - 1, 1, lastItem);
        var ouputDir = pathItems.join('/');
        console.log(('生成合成图目标文件夹: ' + ouputDir).red);


        var bashlineMinifyPic = 'gka ' + sourceDir + ' -t canvas -m -o ' + ouputDir + ' --count 100';
        var bashline = 'gka ' + sourceDir + ' -t canvas -o ' + ouputDir + ' --count 100';

        var buildChild = _process.exec(bashlineMinifyPic, function() {
            self.changeSpritePicName(ouputDir);
            if (typeof callback == 'function') {
                callback(sourceDir, ouputDir);
            }
        });
        buildChild.stdout.on('data', function(data) {
            console.log(data.gray);
        });
    },

    changeSpritePicName(codeDir, name) {
        // console.log(codeDir);
    }
};

module.exports = sprite;
