#!/bin/bash

cd src || exit
port=3000;
for directory in */ ; do
  if [ "$directory" != "utils/" ]; then
      node "$directory/server -- $port"
      port=$((port + 1))
  fi
done



