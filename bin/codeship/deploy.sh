#!/bin/bash

cd ~/clone
sed -i '/pkg-resources/d' requirements.txt
pip install -r requirements.txt
yarn install
make publish

git fetch origin "+refs/heads/*:refs/remotes/origin/*"
git remote set-branches --add origin ${REMOTE_BRANCH}
git add -f site
git checkout -- .
git commit -m "Deploy"
git checkout ${REMOTE_BRANCH}
git checkout master -- site
rsync -av --progress site/ ./
git reset HEAD site
rm -rf site __pycache__ node_modules plugins

