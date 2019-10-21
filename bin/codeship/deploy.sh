#!/bin/bash

cd ~/clone

git subtree split --prefix site -b ${REMOTE_BRANCH} && \
git checkout gh-pages && \
git checkout master -- CNAME && \
git commit --amend --no-edit && \
git push ${REMOTE_REPOSITORY} :${REMOTE_BRANCH} && \
git push --force ${REMOTE_REPOSITORY} ${REMOTE_BRANCH} && \
git checkout master && \
git branch -D ${REMOTE_BRANCH}

