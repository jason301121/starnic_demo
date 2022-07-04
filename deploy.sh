#!/usr/bin/env sh

set -e

npm run build

cd dist
git init 
git add -A
git commit -m 'deploy'

git push -f https://github.com/jason301121/starnic_demo.git main:gh-pages


cd -