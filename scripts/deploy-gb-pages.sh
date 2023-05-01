#!/usr/bin/env sh

rm -rf dist
pnpm build

git add dist -f
git commit -m "deploy"

git subtree push --prefix dist origin gh-pages
