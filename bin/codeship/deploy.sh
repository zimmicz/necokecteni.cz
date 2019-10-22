#!/bin/bash

cd ~/clone
sed -i '/pkg-resources/d' requirements.txt
pip install -r requirements.txt
yarn install
make publish

git fetch origin "+refs/heads/*:refs/remotes/origin/*"

git add -f site && \
git commit -m "Deploy" && \
git subtree split --prefix site -b ${REMOTE_BRANCH} && \
git checkout -- . && \
git checkout ${REMOTE_BRANCH} && \
git branch --set-upstream-to=origin/${REMOTE_BRANCH} ${REMOTE_BRANCH}
git pull --ff-only origin && \
git push ${REMOTE_REPOSITORY} ${REMOTE_BRANCH} && \
git checkout master && \
git branch -D ${REMOTE_BRANCH} && \
