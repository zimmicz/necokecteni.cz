#!/bin/bash

cd ~/clone

git subtree split --prefix site -b gh-pages && \
git checkout gh-pages && \
git checkout master -- CNAME && \
git commit --amend --no-edit && \
git push origin :gh-pages && \
git push origin && \
git checkout master && \
git branch -D gh-pages

