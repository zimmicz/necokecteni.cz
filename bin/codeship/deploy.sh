#!/bin/bash

cd ~/clone && \
sed -i '/pkg-resources/d' requirements.txt && \
pip install -r requirements.txt && \
yarn install && \
cd ~/clone/bin/dropbox && \
cp settings.py.sample settings.py && \
./extract.py && \
./load.py && \
cd - && \
make publish && \

git fetch origin "+refs/heads/*:refs/remotes/origin/*" && \
git remote set-branches --add origin ${REMOTE_BRANCH} && \
git checkout master && \
git add -f site && \
git commit -m "deployed at $(date)" && \
git checkout -- . && \
rm -rf content && \
git checkout ${REMOTE_BRANCH} && \
git checkout master -- site && \
rsync -av --progress site/ ./ && \
git reset HEAD site && \
rm -rf site __pycache__ node_modules plugins bin/dropbox/settings.py bin/dropbox/__pycache__ && \
git add . && \
git commit --allow-empty -m "deployed at $(date)" && \
git push
