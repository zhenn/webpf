#!/bin/bash
#遇到任何错误则终止脚本
set -e
set -o pipefail

bin_dwebp=$(pwd)/bin/dwebp
bin_webpmux=$(pwd)/bin/webpmux

# 遍历所有webp文件
res_files=$(find *.webp -type f \( ! -regex ".*/\..*" \))
for resFileName in ${res_files}
do
	res_ext=${resFileName##*.}
	res_name=${resFileName%.*}
	echo "processing file: $res_name.$res_ext"

	if [ -d "./$res_name" ];then
		rm -rf "./$res_name"
	fi
	mkdir -p "./$res_name/webp"
	mkdir -p "./$res_name/png"

	num_frames="$($bin_webpmux -info $resFileName | grep 'Number of frames' | awk -F'Number of frames: ' '{print $2}')"
	echo "Number of frames: $num_frames"

	for frameNum in `seq 1 ${num_frames}`
	do
		frameStr="$(echo "$frameNum" | awk '{printf("%03d",$0)}')"
		# extract frame to webp
		${bin_webpmux} -get frame ${frameNum} ${resFileName} -o "./$res_name/webp/frame_$frameStr.webp"
		# webp -> png
		${bin_dwebp} "./$res_name/webp/frame_$frameStr.webp" -o "./$res_name/png/frame_$frameStr.png"
	done
done