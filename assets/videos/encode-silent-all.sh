#!/bin/bash

cd "`dirname $0`"
BASE=`basename $1 | sed -e 's:\..*::'`

./encode-silent.sh "$1" "$BASE-sd.mp4"
./encode-720p-silent.sh "$1" "$BASE-720p.mp4"
./encode-silent-low.sh "$1" "$BASE-sd-low.mp4"
./encode-720p-silent-low.sh "$1" "$BASE-720p-low.mp4"
./encode-silent-sharp.sh "$1" "$BASE-sd-sharp.mp4"
./encode-720p-silent-sharp.sh "$1" "$BASE-720p-sharp.mp4"
./encode-silent-sharp-low.sh "$1" "$BASE-sd-sharp-low.mp4"
./encode-720p-silent-sharp-low.sh "$1" "$BASE-720p-sharp-low.mp4"

