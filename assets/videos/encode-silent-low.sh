#!/bin/bash
if [ "$1." = "." ]
then
echo "usage: $0 input output"
fi

if [ "$2." = "." ]
then
echo "usage: $0 input output"
fi

ffmpeg -i "$1" -an -c:v libx264 -crf 33 -pix_fmt yuv420p  -movflags +faststart -vf scale=w=960:h=540 "$2"

