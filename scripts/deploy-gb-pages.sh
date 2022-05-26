#!/usr/bin/env sh

rm -recurse -force dist
yarn build

git add dist -f
git commit -m "deploy"
git push heroku master

git subtree push --prefix dist origin gh-pages
