/**
 * @fileoverview file系统的一些方法封装
 * @author zhenn
 */

var fs = require('fs');
var cpfile = require('cp-file');
var cpdir = require('copy-dir');
var rmdirSync = require('rmdir-sync');
var mkdir = require('mkdir-p');
var writefile = require('writefile');

module.exports = {
    /**
     * 判断当前路径是否为文件夹
     * @param path {string} 本地路径
     * @return boolean
     */
    isDir : function  (path) {
        if (typeof path != 'string' || !fs.existsSync(path)) {
            return;
        }
        return fs.statSync(path).isDirectory();
    },

    /**
     * 判断当前路径是否为文件
     * @param path {string} 本地路径
     * @return boolean
     */
    isFile : function (path) {
        if (typeof path != 'string' || !fs.existsSync(path)) {
            return;
        }
        return fs.statSync(path).isFile();
    },

    writefile : function (path , text) {
        writefile(path, text);
    },

    mkdir : function (path) {
        mkdir.sync(path);
    },

    /**
     * 获得当前文件下的目录结构信息
     * @param path {string} 本地路径
     * @return object
     */
    getContains : function (path) {
        var arr = fs.readdirSync(path),
            newArr = [];

        for (var i = 0 , len = arr.length; i < len; i++) {

            // 若隐藏文件则跳过
            if (arr[i][0] == '.') {
                continue;
            }

            // 新数组元素为对象
            // 为每个元素增加type类型便于输出成不同格式
            newArr.push({
                name : arr[i],
                type : this.isDir(path + '/' + arr[i]) ? 'dir' : 'file'
            });
        }

        return {
            list : newArr
        };
    },

    /**
     * 拷贝文件
     * @return function
     */
    copyfile : function (path , targetPath) {
        cpfile.sync.apply(this , arguments);
    },

    /**
     * 拷贝文件夹
     * @return function
     */
    copydir : function (path , targetPath) {
        cpdir.sync.apply(this , arguments);
    },

    /**
     * 删除文件夹
     * @return void
     */
    rmdirSync : function (path) {
        rmdirSync(path);
    },

    /**
     * 获得某路径下所有文件的集合
     * @param path {string}
     * @return array 路径列表
     */
    walker : function (path) {
        var self = this,
            fileList = [];

        if (!fs.existsSync(path)) return fileList;

        function walk (_path) {  
            var dirList = fs.readdirSync(_path);
            dirList.forEach(function(item){
                if(self.isDir(_path + '/' + item)){
                    walk(_path + '/' + item);
                }else{
                    fileList.push(_path + '/' + item);
                }
            });
        }
        walk(path);
        return fileList;
    }
};

