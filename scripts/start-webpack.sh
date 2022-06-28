#!/bin/bash

yarn install --frozen-lockfile && rm -rf /app/packs && bin/webpack-dev-server

# yarn install --frozen-lockfile --prefer-offline && rm -rf /app/packs && bin/webpack-dev-server
