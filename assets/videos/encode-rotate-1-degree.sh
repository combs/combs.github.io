#!/bin/bash
if [ "$1." = "." ]
then
echo "usage: $0 input output"
fi

if [ "$2." = "." ]
then
echo "usage: $0 input output"
fi

ffmpeg -i "$1" -an -c:v libx264 -crf 24 -vf 'scale=w=1382:h=778,rotate=1*PI/180:c=none,crop=1280:720:51:29,smartblur=lr=1.5:ls=-0.25:lt=-3.5:cr=0.75:cs=0.250:ct=0.5' "$2"

