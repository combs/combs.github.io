#!/bin/bash
_data/updater.sh
jekyll build && rsync -var --delete /home/combs/internets/combs.github.io/_site/ ubuntu@chriscombs.net:/mnt/data/Dropbox/internets/combs.github.io/_site/
