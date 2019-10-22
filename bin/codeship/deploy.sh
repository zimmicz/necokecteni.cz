#!/bin/bash

cd ~/clone
sed -i '/pkg-resources/d' requirements.txt
pip install -r requirements.txt
yarn install
make publish

git addd . && \
git commit -m "Deploy" && \
git subtree split --prefix site -b ${REMOTE_BRANCH} && \
git checkout ${REMOTE_BRANCH} && \
git push --force ${REMOTE_REPOSITORY} ${REMOTE_BRANCH} && \
git checkout master && \
git branch -D ${REMOTE_BRANCH}
