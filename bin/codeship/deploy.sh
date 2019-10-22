#!/bin/bash

cd ~/clone

git subtree split --prefix site -b ${REMOTE_BRANCH} && \
git checkout gh-pages && \
git push --force ${REMOTE_REPOSITORY} ${REMOTE_BRANCH} && \
git checkout master && \
git branch -D ${REMOTE_BRANCH}
