#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals
from functools import cmp_to_key
import locale

AUTHOR = 'Michal Zimmermann'
SITENAME = 'Něco ke čtení'
SITEURL = ''

PATH = 'content'

TIMEZONE = 'Europe/Prague'

DEFAULT_LANG = 'cz'

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

DEFAULT_PAGINATION = 10

# Uncomment following line if you want document-relative URLs when developing
# RELATIVE_URLS = True

# Custom settings
USE_FOLDER_AS_CATEGORY = True
ARTICLE_URL = '{category}/{slug}'
ARTICLE_SAVE_AS = '{category}/{slug}.html'
CATEGORY_URL = 'authors/{slug}'
CATEGORY_SAVE_AS = 'authors/{slug}.html'
TAG_URL = 'tags/{slug}'
TAG_SAVE_AS = 'tags/{slug}.html'
AUTHOR_SAVE_AS = False
AUTHORS_SAVE_AS = None

THEME = './themes/default'
PLUGIN_PATHS = ['./plugins']
PLUGINS = ['assets']

ASSET_SOURCE_PATHS = [
    'static/sass',
    '../../node_modules/normalize.css',
    '../../node_modules/bulma',
]
LOAD_CONTENT_CACHE = False

def intersect(a, b):
    return set(a).intersection(b)

def same_as(a, b):
    return set(a) == set(b)

def sort_by_surname(values):
    get_surname = lambda name: name.split(' ')[-1]
    locale.setlocale(locale.LC_ALL, 'cs_CZ.UTF-8')
    return sorted(
        values,
        key=cmp_to_key(lambda author, author2: locale.strcoll(get_surname(author[0].name), get_surname(author2[0].name)))
    )

JINJA_FILTERS = {
    'intersect': intersect,
    'same_as': same_as,
    'sort_by_surname': sort_by_surname
}
