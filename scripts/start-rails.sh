#! /bin/bash

# Remove a potentially pre-existing server.pid for Rails.
if [ -f tmp/pids/server.pid ]; then
  rm tmp/pids/server.pid
fi

bin/rails s -p 5000 -b 0.0.0.0
