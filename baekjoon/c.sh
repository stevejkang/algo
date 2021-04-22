#!/bin/bash

# make temp file to prevent empty directory error
touch build/temp

# clear build directory
rm build/*

# copy target file to build directory
cp $1.java build/Main.java

# move to build directory
cd build/

# compile
javac -J-Xms1024m -J-Xmx1920m -J-Xss512m -encoding UTF-8 Main.java

# run
java -Xms1024m -Xmx1920m -Xss512m -Dfile.encoding=UTF-8 -XX:+UseSerialGC Main
