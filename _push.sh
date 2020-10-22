#!/bin/bash
cd ~/Dropbox/internets/combs.github.io/; jekyll build && rsync -varz /home/combs/Dropbox/internets/combs.github.io/ ubuntu@chriscombs.net:/mnt/data/Dropbox/internets/combs.github.io/

