#!/usr/bin/env python3
# coding=utf-8

import json
import os
import re
import requests
import shutil
import unicodedata
from random import randint
from time import sleep
from settings import PELICAN_CONTENT_FOLDER, PELICAN_TEMP_FOLDER, DROPBOX_DOWNLOAD_DOC_URL, DROPBOX_FOLDER_INFO_URL, DROPBOX_LIST_URL, DROPBOX_FOLDER_ID, DROPBOX_TOKEN

MAX_RETRIES = 5
SUCCESSFUL_DOWNLOADS = 0;

HEADERS = {
    'Authorization': 'Bearer {}'.format(DROPBOX_TOKEN),
    'Content-Type': 'application/json',
    }
DATA = {
    'filter_by': 'docs_created',
    'sort_by': 'modified',
    'sort_order': 'descending',
    'limit': 100,
}

def get_doc_ids():
    try:
        r = requests.post(DROPBOX_LIST_URL, headers=HEADERS, json=DATA)
        return r.json()['doc_ids']
    except requests.exceptions.RequestException as e:
        print(e)
    except KeyError as e:
        print('doc_ids not found in response')

def filter_docs_by_folder_id(doc_ids):
    if doc_ids is None:
        return

    filtered = []
    for doc_id in doc_ids:
        r = requests.post(DROPBOX_FOLDER_INFO_URL, headers=HEADERS, json={'doc_id': doc_id})
        response = r.json()

        if 'folders' not in response:
            continue

        folder_ids = [folder['id'] for folder in response['folders']]
        folders = [folder['name'] for folder in response['folders'] if folder['id'] != DROPBOX_FOLDER_ID]

        if not folders:
            continue

        folder_name = folders[0]

        if DROPBOX_FOLDER_ID in folder_ids:
            filtered.append({'doc_id': doc_id, 'author': folder_name})

    return filtered

def create_temp_folder():
    if os.path.exists(PELICAN_TEMP_FOLDER):
        shutil.rmtree(PELICAN_TEMP_FOLDER)
    os.mkdir(PELICAN_TEMP_FOLDER)

def sanitize(s):
    s = unicodedata.normalize('NFKD', s.lower()).encode('ASCII', 'ignore').decode('ASCII')
    s = re.sub('[^0-9a-zA-Z]+', '-', s)

    return s

def download_doc(doc):
    global SUCCESSFUL_DOWNLOADS
    headers = HEADERS
    headers['Content-Type'] = 'text/plain'
    headers['Dropbox-API-Arg'] = json.dumps({'doc_id': doc['doc_id'], 'export_format': 'markdown'})
    for i in range(MAX_RETRIES):
        try:
            r = requests.post(DROPBOX_DOWNLOAD_DOC_URL, headers=headers)
            title = json.loads(r.headers['Dropbox-Api-Result'])['title']
            safe_title = sanitize(title)
            print('Downloading {}...'.format(safe_title))
            safe_author = sanitize(doc['author'])
            filepath = '{}/{}/{}.md'.format(PELICAN_TEMP_FOLDER, safe_author, safe_title)

            if not os.path.exists(os.path.dirname(filepath)):
                os.makedirs(os.path.dirname(filepath))

                with open(filepath, encoding='utf-8', mode='w') as f:
                    content = '\n'.join(r.content.decode('utf-8').split('\n')[1:])
                    f.write(content)
        except Exception as e:
            delay = randint(0,20)
            print('Failed to download. Retrying in {} seconds'.format(delay))
            sleep(delay)
        else:
            SUCCESSFUL_DOWNLOADS = SUCCESSFUL_DOWNLOADS + 1
            break
    else:
        raise Exception('Failed to download {}'.format(safe_title))

create_temp_folder()
doc_ids = get_doc_ids()
filtered_docs = filter_docs_by_folder_id(doc_ids)

for doc in filtered_docs:
    download_doc(doc)

if SUCCESSFUL_DOWNLOADS != len(filtered_docs):
    raise Exception('Downloaded {} instead of {}'.format(SUCCESSFUL_DOWNLOADS, len(filtered_docs)))

print('Downloaded: {} Expected to download: {}'.format(SUCCESSFUL_DOWNLOADS, len(filtered_docs)))
