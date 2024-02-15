#!/bin/bash

cd src || exit

for directory in */ ; do
  if [ "$directory" != "utils/" ]; then
      node "$directory/server"
  fi
done



