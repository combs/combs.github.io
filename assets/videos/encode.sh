#!/bin/bash
if [ "$1." = "." ]
then
echo "usage: $0 input output"
fi

if [ "$2." = "." ]
then
echo "usage: $0 input output"
fi

ffmpeg -i "$1" -c:a aac -b:a 128k -c:v libx264 -crf 25 -vf scale=w=960:h=540 "$2"

