#!/bin/bash
cd `dirname "$0"`
wget 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSxrblHZXFIVK-HWzdQPkf81nAqcf1aeU8ny2WY0EFgB7L69BI4OJgEYS2BYoM5z6-n60IGSZrTVRlY/pub?gid=0&single=true&output=csv' -O - > tag-categories.csv 

