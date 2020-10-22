#!/bin/bash
if [ "$1." = "." ]
then
echo "usage: $0 input output"
fi

if [ "$2." = "." ]
then
echo "usage: $0 input output"
fi

ffmpeg -i "$1" -an -c:v libx264 -crf 25  -movflags +faststart -pix_fmt yuv420p -vf scale=w=960:h=540,smartblur=lr=1.5:ls=-0.25:lt=-3.5:cr=0.75:cs=0.250:ct=0.5 "$2"

