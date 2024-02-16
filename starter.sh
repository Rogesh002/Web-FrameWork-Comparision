#!/bin/bash

cd src || exit

port=3000;

for directory in */ ; do
  echo $directory
  if [ "$directory" != "utils/" ]; then
      
      node "$directory/server" -- "$port"
      port=$((port + 1))
  fi
done



