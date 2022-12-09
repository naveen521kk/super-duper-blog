#!/bin/bash
# need imagemagick and librsvg

STATIC_DIR=$PWD/../static

cp $STATIC_DIR/logo-favicon.svg temp-logo.svg 
rsvg-convert temp-logo.svg  -w 16 -h 16 --output temp-16.png
rsvg-convert temp-logo.svg -w 32 -h 32 --output temp-32.png
rsvg-convert temp-logo.svg -w 48 -h 48 --output temp-48.png
convert temp-16.png temp-32.png temp-48.png +dither "favicon.ico"
rm temp-*.png temp-*.svg
mv favicon.ico $STATIC_DIR/favicon.ico
