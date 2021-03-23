#!/usr/bin/env python
# coding=utf-8

import glob
import os
import shutil
from settings import PELICAN_CONTENT_FOLDER, PELICAN_TEMP_FOLDER

for f in glob.glob('{}/**/*.md'.format(PELICAN_TEMP_FOLDER)):
    final_folder = '{}/{}'.format(PELICAN_CONTENT_FOLDER, f.split('/')[-2:-1][0])
    final_file = f.split('/')[-1:][0]
    final_location = '{}/{}'.format(final_folder, final_file)
    print(final_location)

    if not os.path.exists(final_folder):
        os.makedirs(final_folder)

    shutil.copyfile(f, final_location)
    os.remove(f)
shutil.rmtree(PELICAN_TEMP_FOLDER)
