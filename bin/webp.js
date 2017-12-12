#!/usr/local/bin/node --harmony

var package = require('../package.json');
var program = require('commander');
var sprite = require('../core/sprite');
var source = require('../core/sources');
var compile = require('../core/compile');

program
    .version(package.version)
    // .option('-p, --port [number]', 'select port for node-service', 80) // 声明端口
    // .option('-s, --stage', 'define stage-env for building')
    .option('-i, --inputdir [string]', 'input the source image directory') // 声明生成合成图的图片源目录
    .option('-p, --webppath [string]', 'input the spliting webp path');

// 子命令: 多张原图合成雪碧图，且生成json配置文件（序列帧动画所需）
program
    .command('sprite')
    .description('change the multiple png images to sprite image')
    .action(function() {
        // 比如 webp sprite -i path
        sprite.build(program.inputdir);
    });

// 子命令: webp文件转化成png源文件
program
    .command('source')
    .description('change the webp image to multiple png images')
    .action(function() {
        // 比如 webp source -p path
        source.split(program.webppath);
    });

program
    .command('fix')
    .description('change the webp image to sprite image and json config for the platform browser that does not support webp.')
    .action(function() {
        // 比如 webp fix -p path
        source.split(program.webppath, function(_path) {

            sprite.build(_path, function(sourcepath, outpath){
                compile(sourcepath, outpath);
            });
        });
    });


program.parse(process.argv);

