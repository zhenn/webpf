# webpf

## 简介

把webp一键转化可用的序列帧动画，产出物包括canvas代码/png雪碧图/json配置文件。

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