#!/usr/bin/env python
# coding=utf-8

import os

PELICAN_CONTENT_FOLDER = os.environ['PELICAN_CONTENT_FOLDER']
PELICAN_TEMP_FOLDER = os.environ['PELICAN_TEMP_FOLDER']

# Dropbox
DROPBOX_TOKEN = os.environ['DROPBOX_TOKEN']
DROPBOX_FOLDER_ID = os.environ['DROPBOX_FOLDER_ID']
DROPBOX_DOWNLOAD_DOC_URL = 'https://api.dropboxapi.com/2/paper/docs/download'
DROPBOX_FOLDER_INFO_URL = 'https://api.dropboxapi.com/2/paper/docs/get_folder_info'
DROPBOX_LIST_URL = 'https://api.dropboxapi.com/2/paper/docs/list'
