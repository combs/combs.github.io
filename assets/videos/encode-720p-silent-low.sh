#!/bin/bash
if [ "$1." = "." ]
then
echo "usage: $0 input output"
fi

if [ "$2." = "." ]
then
echo "usage: $0 input output"
fi

ffmpeg -i "$1" -an -c:v libx264 -crf 33  -movflags +faststart -pix_fmt yuv420p -vf scale=w=1280:h=720 "$2"

