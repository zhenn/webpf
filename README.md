# webpf

## 简介

把webp一键转化可用的序列帧动画，产出物包括canvas代码/png雪碧图/json配置文件。此工具依赖于gka，详情请移步[这里](https://github.com/gkajs/gka)。

运行本程序前，请确保本地已安装gka及模板gka-tpl-canvas。

执行如下命令安装：
	
	npm install gka -g
	npm install gka-tpl-canvas -g

## 安装方法

	npm install webpf -g

## 命令介绍

### webp转换成png源图

`webpf source -p path`

- path：webp路径
- 产出物：webp文件同级目录文件夹，包括所有webp文件中png图片
- 文件夹名称和webp文件相同

`webpf sprite -i path`

- path：png源图文件夹
- 产出物：webp-canvas文件夹，含序列帧播放demo、json配置文件、png雪碧图

`webpf fix -p path`

- source/sprite两个子命令的集成体，可直接从webp转化到canvas播放demo
- path：webp路径

### 例子

下载项目根目录下`lan.webp`文件到本地，执行命令`wepf fix -p path`。